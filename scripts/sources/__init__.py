"""Common helpers for modular bibliometric & GitHub source fetchers."""
import json
import os
import re
import ssl
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
DATA_DIR = ROOT / "data"
METRICS_DIR = DATA_DIR / "metrics"
MANUAL_CONFIG_PATH = DATA_DIR / "manual_metrics.json"
DATA_JS_PATH = ROOT / "js" / "data.js"


def get_ssl_context():
    try:
        import certifi
        return ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        return ssl.create_default_context()


def utc_now_iso():
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def load_dotenv_key(name):
    val = os.environ.get(name)
    if val:
        return val
    dotenv = Path.home() / ".env"
    if dotenv.exists():
        for line in dotenv.read_text(encoding="utf-8", errors="ignore").splitlines():
            m = re.match(rf"^\s*{re.escape(name)}\s*=\s*['\"]?([^'\"\s#]+)['\"]?", line)
            if m:
                return m.group(1)
    return None


def load_manual_config():
    return json.loads(MANUAL_CONFIG_PATH.read_text(encoding="utf-8"))


def load_site_data():
    txt = DATA_JS_PATH.read_text(encoding="utf-8")
    m_pub = re.search(r"const publicationsData\s*=\s*(\[.*?\]);\s*//", txt, re.S)
    m_tool = re.search(r"const toolsData\s*=\s*(\[.*\]);", txt, re.S)
    pubs = json.loads(m_pub.group(1)) if m_pub else []
    tools = json.loads(m_tool.group(1)) if m_tool else []
    return pubs, tools


def http_get_text(url, headers=None, timeout=20):
    hdrs = {
        "User-Agent": "karelberka-github-io-sync/1.0 (mailto:karel.berka@upol.cz)",
    }
    if headers:
        hdrs.update(headers)
    req = urllib.request.Request(url, headers=hdrs)
    with urllib.request.urlopen(req, timeout=timeout, context=get_ssl_context()) as resp:
        return resp.read().decode("utf-8", errors="replace")


def http_get_json(url, headers=None, timeout=20):
    hdrs = {"Accept": "application/json"}
    if headers:
        hdrs.update(headers)
    return json.loads(http_get_text(url, headers=hdrs, timeout=timeout))


def save_source_json(filename, payload):
    METRICS_DIR.mkdir(parents=True, exist_ok=True)
    path = METRICS_DIR / filename
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return path


def load_cached_source_json(filename):
    path = METRICS_DIR / filename
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return None
