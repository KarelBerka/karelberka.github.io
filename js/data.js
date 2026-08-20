const publicationsData = [
  {
    "title": "Foldify: Web Application for Protein Structure Prediction",
    "year": "2026",
    "journal": "Journal of Chemical Information and Modeling",
    "doi": "10.1021/acs.jcim.6c01154",
    "authors": "Romana Ďuráčiová, Michaela Capandová, Karel Berka, Radka Svobodová Vařeková, Terézia Slanináková, Kristian Kovac, Matej Antol, Lukáš Hejtmánek",
    "category": [
      "Tools",
      "Visualization",
      "Selected"
    ],
    "volume": "66",
    "issue": "13",
    "pages": "7762-7771",
    "abstract": "Protein structure prediction models released in recent years have presented tectonic changes in the field of structural biology. However, their potential has not yet been harnessed to its fullest due to their demands on hardware and technical expertise required for their usage. In this paper, we present Foldify, which makes prediction models accessible, integrating AlphaFold 3, AlphaFold 2, ColabFold, OmegaFold, and ESMFold into a single user-friendly, easy-to-use graphical interface, and ensures their stable operation within a scalable high-performance computing environment. Foldify accepts protein sequences, submitted through a web-based graphical interface as input, and allows executing multiple prediction models on the same protein sequence. The predicted protein structures can be directly visualized online through Mol* Viewer or can be downloaded from the website. Furthermore, the multiresult comparison mode allows visualization of multiple predicted structures in a single Mol* window, accompanied by qualitative metrics of the models' prediction similarity. The Foldify application is freely available at https://foldify-open.cloud.e-infra.cz/ with no login required.",
    "image": "img/publications/pub_2026_jcim_foldify.png",
    "id": "10.1021/acs.jcim.6c01154",
    "oa_url": "https://pubs.acs.org/doi/pdf/10.1021/acs.jcim.6c01154?ref=article_openPDF",
    "oa_is_preprint": false,
    "web": "https://foldify-open.cloud.e-infra.cz/"
  },
  {
    "title": "Mapping pathogenic patterns in membrane transporters from the GLUT transporter family",
    "year": "2026",
    "journal": "bioRxiv (Cold Spring Harbor Laboratory)",
    "doi": "10.64898/2026.06.28.735151",
    "authors": "Nina Kadášová, Dominik Martinát, Anna Špačková, Ivana Hutařová Vařeková, Karel Berka",
    "category": [
      "Channels",
      "Preprint"
    ],
    "volume": null,
    "issue": null,
    "pages": "",
    "abstract": "Abstract Non-synonymous amino acid substitutions (missense mutations) are common in the general population; some are causative of serious disease. Depending on their structural context, they can disrupt protein function, folding, or dynamics. Computational predictive methods developed in recent years, such as AlphaMissense, provide new insights into how missense mutations affect protein structure by predicting and mapping their pathogenicity across each amino acid in the human proteome. In this study, we identify recurring patterns of pathogenicity prediction across the GLUT family membrane transporters encoded by genes slc2a1-14 . Within the GLUT transporter family, we observe higher pathogenicity profiles in the transmembrane domains, particularly in pore-lining and binding-site residues. Predicted missense pathogenicity is elevated throughout residues assigned to the central cavity, suggesting sensitivity of the transport pathway. Another finding shows higher pathogenicity in specific transmembrane helices of the protein, with the same pattern across all proteins. On the other hand, we observed lower pathogenicity values in some representatives of the GLUT family. These findings show that the pathogenicity of glucose transport within the GLUT family may be shaped by functional redundancy and physiological essentiality across GLUT groups. Significance Missense mutations can lead to pathological effects in human cells. Predictive methods that account for structural context, such as AlphaMissense, can provide pathogenicity scores. The accumulation of pathogenicity hotspots can reveal important structural features within individual proteins of protein families, such as GLUT transporters. Mapping pathogenicity scores onto the structure can thus provide a mechanistic explanation of the protein function necessary for its role in the cell.",
    "image": "img/publications/pub_2026_glut_pathogenicity.png",
    "id": "10.64898/2026.06.28.735151",
    "oa_url": "https://doi.org/10.64898/2026.06.28.735151",
    "oa_is_preprint": true
  },
  {
    "title": "PROPTIMUS LIVE: local constrained α-carbon optimization of proteins",
    "year": "2026",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkag511",
    "authors": "Tomáš Svoboda, Michal Mikuš, Lukáš Bohuš, Tomáš Raček, Gabriela Bučeková, Dominik Tichý, Karel Berka, Radka Svobodová, Ondřej Schindler",
    "category": [
      "Alphafoldology",
      "Visualization"
    ],
    "volume": "",
    "issue": "",
    "pages": "",
    "abstract": "Abstract\n                  High-quality protein structures are essential for a wide range of computational chemistry applications. While experimental methods and predictive algorithms provide high-accuracy positions of protein residues relative to one another, the local quality of these structures, including bond lengths, angles, and individual atom positions, often lacks the same level of precision. To address this, we developed PROPTIMUS LIVE, a web application offering local constrained α-carbon optimization of protein structures. PROPTIMUS LIVE is powered by the QM-accurate, physics-based GFN-Force-Field and accelerated using a divide-and-conquer approach, allowing typical optimizations to finish within minutes. Optimized structures can be visualized and investigated directly via the integrated Mol* Viewer. The service is freely available at https://proptimus.ceitec.cz/live with no login required, including for commercial use.",
    "image": "img/publications/pub_2026_NucleicAcidsResearch_UnknownAuthor.png",
    "id": "10.1093/nar/gkag511",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://proptimus.ceitec.cz/live"
  },
  {
    "title": "Atomic Charge Calculator III: a modern platform for calculating partial atomic charges",
    "year": "2026",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkag379",
    "authors": "Tomáš Raček, Martin Pilát, Ondřej Schindler, Gabriela Bučeková, Dominik Tichý, Karel Berka, Radka Svobodová",
    "category": [
      "Tools",
      "Visualization",
      "Channels"
    ],
    "volume": "",
    "issue": "",
    "pages": "",
    "abstract": "Abstract\n                  Partial atomic charges provide a simplified description of the molecular electrostatic distribution that governs interactions with the surrounding environment. Owing to their widespread use in computational chemistry, chemoinformatics, and bioinformatics, fast and reasonably accurate empirical approaches remain highly relevant. Here, we introduce Atomic Charge Calculator III (ACC III), a web application for computing partial atomic charges for diverse molecular systems, including small organic molecules and proteins. ACC III builds on previous releases and implements 20 widely used empirical charge calculation methods, including the state-of-the-art SQE+qp approach with updated parameters. The platform integrates the modern Mol* viewer for interactive visualization and supports embedding computed charges directly into mmCIF files using a formally defined extension, enabling distribution of results in a community-standard, FAIR structural format. In addition to the web interface, ACC III provides a programmatic API for automated workflows and an enhanced command-line version for local deployment. The service is freely available at https://acc.biodata.ceitec.cz, with no login required, including for commercial use.",
    "image": "img/publications/pub_2026_NucleicAcidsResearch_UnknownAuthor_2.png",
    "id": "10.1093/nar/gkag379",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://acc.biodata.ceitec.cz"
  },
  {
    "title": "The impact of FDM infill parameters on tensile mechanical properties",
    "year": "2026",
    "journal": "",
    "doi": "10.26434/chemrxiv.15001700/v1",
    "authors": "Jan Urbánek, Karel Berka",
    "category": [
      "Other / General"
    ],
    "volume": "",
    "issue": "",
    "pages": "",
    "abstract": "The mechanical properties of printed parts from additive manufacturing depend on the 3D printing method, the material used, and the specific parameters of the 3D printing process. While the method and material may not be easily switched, the printing parameters are relatively easy to adjust during the printing preparation process, known as slicing. This study investigates the influence of infill patterns and density on 3D printed parts using a Fused Deposition Modelling (FDM) printer with common white polylactic acid (PLA) filament, the most widely accessible 3D printing material today. Specimens with all 16 patterns offered by the software PrusaSlicer were tested, each with 15 or 16 infill densities ranging from 5% to 95% or 100%, as well as specimens without infill (0% density). This study aimed to measure and compare the tensile mechanical properties of FDM-printed parts with varying infill parameters. It was found that infill patterns and increasing infill density significantly affected the tensile strength of printed parts, and that the effect of increasing infill density varied across patterns.",
    "image": "img/publications/pub_2026_NoJournal_UnknownAuthor.png",
    "id": "10.26434/chemrxiv.15001700/v1",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Dense yet flexible: how ladderanes found in anammox bacteria impact phospholipid membrane structure and properties",
    "year": "2026",
    "journal": "Physical Chemistry Chemical Physics",
    "doi": "10.1039/D6CP00146G",
    "authors": "Terezie Císařová, Martin Balouch, Jaroslav Hanuš, Karel Berka, Vojtěch Kouba, František Štěpánek",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "",
    "issue": "",
    "pages": "",
    "abstract": "Membranes containing ladderane lipids and alcohols, found in anammox bacteria, have been studied by molecular dynamics simulations and found to maintain high fluidity at low temperatures without compromising structural integrity or molecular order.",
    "image": "img/publications/pub_2026_PhysicalChemistryChemicalPhysics_UnknownAuthor.png",
    "id": "10.1039/D6CP00146G",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "MOLEonline: a web-based tool for analysing channels, tunnels, and pores (2025 update)",
    "year": "2025",
    "journal": "Bioinformatics",
    "doi": "10.1093/bioinformatics/btaf486",
    "authors": "Tomáš Raček, Dušan Vel’ký, Gabriela Bučeková, Ondřej Schindler, Ivana Hutařová Vařeková, Anna Špačková, Václav Bazgier, Karel Berka, Radka Svobodová",
    "category": [
      "Channels",
      "Databases",
      "Selected",
      "Tools",
      "Visualization"
    ],
    "volume": "41",
    "issue": "9",
    "pages": "",
    "abstract": "Abstract\n               \n                  Summary\n                  MOLEonline is an interactive, web-based tool designed to detect and analyse channels (pores and tunnels) within protein structures. The latest version of MOLEonline addresses the limitations of its predecessor by integrating the Mol* viewer for visualization and offering a streamlined, fully interactive user experience. The new features include colouring tunnels in the 3D viewer based on their physicochemical properties. A 2D representation of the protein structure and calculated tunnels is generated using 2DProts. Users can now store tunnels directly in the mmCIF file format, facilitating sharing via the community-standard FAIR format for structural data. In addition, the ability to store and load computation settings ensures the reproducibility of tunnel computation results. Integration with the ChannelsDB 2.0 database allows users to access precomputed tunnels.\n               \n               \n                  Availability and implementation\n                  The MOLEonline application is freely available at https://moleonline.cz with no login requirement, its source code is stored at GitHub under the MIT licence at https://github.com/sb-ncbr/moleonline-web, and archived at Figshare at https://doi.org/10.6084/m9.figshare.29816174.\n               ",
    "github": "https://github.com/sb-ncbr/MOLE",
    "image": "img/publications/pub_2025_Bioinformatics_UnknownAuthor.png",
    "id": "10.1093/bioinformatics/btaf486",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://moleonline.cz"
  },
  {
    "title": "PDBCharges: Quantum-Mechanical Partial Atomic Charges for PDB Structures",
    "year": "2025",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkaf401",
    "authors": "Ondřej Schindler, Tomáš Svoboda, Adrián Rošinec, Tomáš Raček, Gabriela Bučeková, Dominik Tichý, Karel Berka, Radka Svobodová",
    "category": [
      "Databases",
      "Tools",
      "Visualization"
    ],
    "volume": "53",
    "issue": "W1",
    "pages": "W457-W462",
    "abstract": "Abstract\n               The Protein Data Bank (PDB) is the largest database of experimentally determined protein structures, containing more than 230 000 experimentally determined structures. The chemical reactivity of proteins is based on the electron density distribution, which is usually approximated by partial atomic charges. However, because of the size and high variability, there is not yet a universal and accurate tool for calculating the partial atomic charges of these structures. For this reason, we introduce the web application PDBCharges: a tool for quick calculation of partial atomic charges for protein structures from PDB. The charges are calculated using the recent semi-empirical quantum-mechanical method GFN1-xTB, which reproduces PBE0/TZVP/CM5 charges. The computed partial atomic charges can be downloaded in common data formats or visualized online via the powerful Mol* Viewer. The PDBCharges application is freely available at https://pdbcharges.biodata.ceitec.cz and has no login requirement.",
    "image": "img/publications/pub_2025_NucleicAcidsResearch_UnknownAuthor.png",
    "id": "10.1093/nar/gkaf401",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://charges.chemi.muni.cz/"
  },
  {
    "title": "Developing molecular surveillance of SARS-CoV-2 in the Czech Republic (2021-2022)",
    "year": "2025",
    "journal": "Scientific Reports",
    "doi": "10.1038/s41598-025-01074-3",
    "authors": "Timotej Šúri, Lucie Pfeiferová, Matěj Bezdíček, Jan Svatoň, Vladimír Hampl, Karel Berka, Helena Jiřincová, Martina Lengerová, Martin Kolísko, Alexander Nagy, Ruth Tachezy, Jan Bartoš, Petr Brož, Vojtěch Bystrý, Martin Čech, Monika Čechová, Jiří Černý, Kateřina Chudějová, Iva Dolinová, Pavel Dřevínek, Edvard Ehler, Alena Fialová, Filip Franko, Viktor Furman, Zoltán Füssy, Markéta Gančarčíková, Alejandro Jiménez González, Marián Hajdúch, Blanka Hamplová, Václav Hejret, Petr Holub, Patrik Horna, Miluše Hradilová, Štěpánka Hrdá, Magdalena Jančářová, Michaela Jaroměřská, Eduard Ježo, Daniel Klimeš, Šárka Kocourková, Jana Kozáková, Martin Kracík, Jan Kubovčiak, Jana Fialová Kučerová, Jan Kynčl, Matej Lexa, Monika Liptáková, Jan Macháň, Barbora Macková, Marek Malý, Kateřina Matějová, Luděk Matyska, Hana Medová, Ondřej Moravčík, Jakub Mrázek, Serafim Nenarokov, Eva Niklova, Marian Novotný, Jaroslav Nunvář, Adam Obr, Hana Orlíková, Josef Pasulka, Helena Paszeková, Ingrid Poláková, Martin Pospíšek, Miroslav Ruda, Jana Šáchová, Eric Salomaki, Jeffrey Silberman, Radek Šíma, Branislav Šiška, Rastislav Slavkovský, Klára Sobotíková, Kateřina Štillerová, Viktor Stránecký, Alexander Tice, Boris Tichý, Markéta Tomková, Karolína Trachtová, Sebastian Cristian Treitli, Jaromíra Večeřová, David Vostřák, Jan Vrbský, Monika Wisniewska, Artsemi Yushkevich, Tomáš Zajíc, Martin Zmuda, Michal Kolář, Jan Pačes",
    "category": [
      "Channels"
    ],
    "volume": "15",
    "issue": "1",
    "pages": "",
    "abstract": "Abstract\n                  Molecular surveillance was widely used during the COVID-19 pandemic to detect rapidly emerging variants and monitor the transmission of SARS-CoV-2 within communities. In 2021, the Czech COVID-19 Genomics Consortium (COG-CZ) was set up to coordinate a new SARS-CoV-2 molecular surveillance network. In the Czech Republic, molecular surveillance employed whole genome sequencing (WGS) and variant discrimination polymerase chain reaction (VD-PCR) on samples collected through passive, active and sentinel surveillance. All WGS data was uploaded to GISAID and the PANGO lineages used by GISAID were compared to the main variants determined by VD-PCR. To assess the effectiveness and reliability of the gathered data in adapting pandemic responses, the capabilities and turnaround times of the molecular surveillance methods are evaluated. VD-PCR results were available within 48 h of sample collection for 81.5% of cases during the Delta/Omicron transition. WGS enabled the detection of low-frequency novel variants in infection clusters. WGS surveillance showed there was community spread of AY.20.1, a variant that gained novel mutations within the Czech Republic. Molecular surveillance informed the implementation of public health measures; temporal comparisons of restrictions and outcomes are described. Further areas for improvement have been identified for monitoring and managing future pandemics.",
    "image": "img/publications/pub_2025_ScientificReports_UnknownAuthor.png",
    "id": "10.1038/s41598-025-01074-3",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Gromacs MetaDump: a tool for extracting GROMACS simulation metadata",
    "year": "2025",
    "journal": "Journal of Cheminformatics",
    "doi": "10.1186/s13321-025-01082-5",
    "authors": "Adrián Rošinec, Terézia Slanináková, Tomáš Pavlík, Róbert Randiak, Tomáš Svoboda, Tomáš Raček, Gabriela Bučeková, Ondřej Schindler, Matej Antol, Aleš Křenek, Karel Berka, Radka Svobodová",
    "category": [
      "Tools",
      "Channels"
    ],
    "volume": "17",
    "issue": "1",
    "pages": "",
    "abstract": "\n                    Abstract\n                    \n                      The volume of molecular dynamics (MD) simulation data shared via public repositories is rapidly increasing; however, fragmentation across multiple independent repositories, each employing distinct dataset identifiers and metadata schemas, hinders the efficient exploration and reuse of these data. In this study, we present GROMACS MetaDump, a tool for automatic annotation of output files from GROMACS MD simulations producing human- and machine-readable metadata leveraging the native GROMACS metadata () output. The tool takes the run input simulation file () as the basis for the metadata output, optionally extending it with annotations from topology and structure files (, ). The tool is available as a web application (\n                      https://gmd.ceitec.cz/\n                      ), API service, and a command-line utility. By automating the metadata extraction process, GROMACS MetaDump aims to simplify and standardise the extraction of rich, structured metadata from GROMACS MD simulations, making it easier to share, discover, and reuse simulation data within the research community.\n                    \n                  \n                  \n                    Scientific contribution\n                    This work introduces GROMACS MetaDump, a software tool for the automatic extraction of metadata from molecular dynamics (MD) simulations performed with GROMACS. GROMACS MetaDump captures all extractable simulation parameters, such as software version, force field, water model, box geometry, temperature, etc., and returns them in a structured JSON or YAML file. As a result, GROMACS MetaDump supports the creation of unified metadata annotations of MD simulations, making datasets indexable and findable in line with the FAIR principles.\n                  ",
    "image": "img/publications/pub_2025_JournalofCheminformatics_UnknownAuthor.png",
    "id": "10.1186/s13321-025-01082-5",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://gmd.ceitec.cz/"
  },
  {
    "title": "Pathogenicity patterns in cytochrome P450 family",
    "year": "2025",
    "journal": "Bioinformatics Advances",
    "doi": "10.1093/bioadv/vbaf231",
    "authors": "Anna Špačková, Nina Kadášová, Ivana Hutařová Vařeková, Karel Berka",
    "category": [
      "Tools",
      "Drug Design",
      "Channels"
    ],
    "volume": "5",
    "issue": "1",
    "pages": "",
    "abstract": "Abstract\n               \n                  Motivation\n                  Cytochrome P450 proteins play a crucial role in human metabolism, ranging from hormone production to drug metabolism. While multiple commonly known variants have known effects on the individual cytochrome P450 protein performance, the pathogenicity information is usually experimentally limited to only a few mutations. Current pathogenicity prediction software enables the extension of the scope to virtually mutate all amino acids with all possible substitutional mutations. In this work, we do a comprehensive exploration that unveils pathogenicity patterns in the human cytochrome P450 family. Pathogenicity analysis was conducted across proteins using SIFT, AlphaMissense, and PrimateAI-3D algorithms.\n               \n               \n                  Results\n                  Our findings indicate a progressive increase in pathogenicity along protein tunnels—identified via MOLE—toward the cofactor binding site, underscoring the essential role of cofactor interactions in enzymatic function. Notably, the integrity of tunnels and cofactor environment emerges as a critical factor, with even single amino acid alterations potentially disrupting molecular guidance to active sites. These insights highlight the fundamental role of structural pathways in preserving cytochrome P450 functionality, with implications for understanding disease-associated variants and drug metabolism.\n               \n               \n                  Availability and implementation\n                  Data and source code can be found at https://github.com/annaspac/P450_pathogenicity_codes.\n               ",
    "image": "img/publications/pub_2025_BIOINFORMATICSADVANCES_UnknownAuthor.png",
    "id": "10.1093/bioadv/vbaf231",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "2025 Ownership and Maintenance of FAIRsharing record: MolMeDB",
    "year": "2025",
    "journal": "University of Oxford, UK – FAIRsharing",
    "doi": "",
    "authors": "",
    "abstract": "",
    "category": [
      "Databases",
      "Lipid Membranes",
      "Selected"
    ],
    "image": "img/publications/pub_2025_UniversityofOxfordUKFAIRsharing_UnknownAuthor.png",
    "id": "pub_2025_UniversityofOxfordUKFAIRsharing_UnknownAuthor",
    "oa_url": null,
    "oa_is_preprint": false,
    "github": "https://github.com/MolMeDB/MolMeDB",
    "web": "https://molmedb.chem.upol.cz"
  },
  {
    "title": "Meta-analysis of permeability literature data shows possibilities and limitations of popular methods",
    "year": "2024",
    "journal": "",
    "doi": "10.26434/chemrxiv-2024-ndc8k-v2",
    "authors": "Kateřina Storchmannová, Martin Balouch, Jakub Juračka, František Štěpánek, Karel Berka",
    "category": [
      "Drug Design",
      "Channels",
      "Databases",
      "Lipid Membranes",
      "Selected"
    ],
    "volume": "",
    "issue": "",
    "pages": "",
    "abstract": "Permeability is an important molecular property in drug discovery, as it co-determines pharmacokinetics whenever a drug crosses the phospholipid bilayer, e.g., into the cell, in the gastrointestinal tract or across the blood-brain barrier. Many methods for the determination of permeability have been developed, including cell line assays, cell-free model systems like PAMPA mimicking, e.g., gastrointestinal epithelia or the skin, as well as the Black lipid membrane (BLM) and sub-micrometer liposomes. Furthermore, many in silico approaches have been developed for permeability prediction.  Meta-analysis of publicly available databases for permeability data (MolMeDB and ChEMBL) was performed to establish their usability. Firstly, experimental data can only be measured between thresholds for the lowest and highest permeation rate obtainable within physical boundaries. These thresholds vary strongly between methods. Secondly, computed data do not obey these thresholds but, on the other hand, can produce incorrect results. Thirdly, even for the same method and molecule, there is often a strong discrepancy between individual measured values. These differences are based not only on the statistics but also on the varying approaches and evaluation of the measured data. Thus, when working with in-house measured or published permeability data, we recommend to be cautious with their interpretation.",
    "image": "img/publications/pub_2024_NoJournal_UnknownAuthor.png",
    "id": "10.26434/chemrxiv-2024-ndc8k-v2",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Liposomal Copermeation Assay Reveals Unexpected Membrane Interactions of Commonly Prescribed Drugs",
    "year": "2024",
    "journal": "Molecular Pharmaceutics",
    "doi": "10.1021/acs.molpharmaceut.3c00766",
    "authors": "Klára Odehnalová, Martin Balouch, Kateřina Storchmannová, Eliška Petrová, Magdalena Konefał, Aleš Zadražil, Karel Berka, Jiří Brus, František Štěpánek",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "21",
    "issue": "6",
    "pages": "2673-2683",
    "image": "img/publications/pub_2024_MolecularPharmaceutics_UnknownAuthor.png",
    "id": "10.1021/acs.molpharmaceut.3c00766",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "ChannelsDB 2.0: a comprehensive database of protein tunnels and pores in AlphaFold era",
    "year": "2024",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkad1012",
    "authors": "Anna Špačková, Ondřej Vávra, Tomáš Raček, Václav Bazgier, David Sehnal, Jiří Damborský, Radka Svobodová, David Bednář, Karel Berka",
    "category": [
      "Channels",
      "Databases",
      "Selected",
      "Tools",
      "Alphafoldology"
    ],
    "volume": "52",
    "issue": "D1",
    "pages": "D413-D418",
    "abstract": "Abstract\n                  ChannelsDB 2.0 is an updated database providing structural information about the position, geometry and physicochemical properties of protein channels—tunnels and pores—within deposited biomacromolecular structures from PDB and AlphaFoldDB databases. The newly deposited information originated from several sources. Firstly, we included data calculated using a popular CAVER tool to complement the data obtained using original MOLE tool for detection and analysis of protein tunnels and pores. Secondly, we added tunnels starting from cofactors within the AlphaFill database to enlarge the scope of the database to protein models based on Uniprot. This has enlarged available channel annotations ∼4.6 times as of 1 September 2023. The database stores information about geometrical features, e.g. length and radius, and physico-chemical properties based on channel-lining amino acids. The stored data are interlinked with the available UniProt mutation annotation data. ChannelsDB 2.0 provides an excellent resource for deep analysis of the role of biomacromolecular tunnels and pores. The database is available free of charge: https://channelsdb2.biodata.ceitec.cz.",
    "image": "img/publications/pub_2024_NucleicAcidsResearch_UnknownAuthor.png",
    "id": "10.1093/nar/gkad1012",
    "oa_url": null,
    "oa_is_preprint": false,
    "github": "https://github.com/sb-ncbr/channelsdb",
    "preprint_id": "pub_2023_NoJournal_UnknownAuthor",
    "web": "https://channelsdb.biodata.ceitec.cz"
  },
  {
    "title": "Analysis and Visualization of Protein Channels, Tunnels, and Pores with MOLEonline and ChannelsDB 2.0",
    "year": "2024",
    "journal": "Methods in Molecular Biology",
    "doi": "10.1007/978-1-0716-4007-4_12",
    "authors": "Anna Špačková, Václav Bazgier, Tomáš Raček, David Sehnal, Radka Svobodová, Karel Berka",
    "category": [
      "Databases",
      "Channels",
      "Visualization",
      "Selected"
    ],
    "volume": "",
    "issue": "",
    "pages": "219-233",
    "image": "img/publications/pub_2024_ProteinBioinformatics_UnknownAuthor.png",
    "id": "10.1007/978-1-0716-4007-4_12",
    "oa_url": null,
    "oa_is_preprint": false,
    "github": "https://github.com/sb-ncbr/channelsdb",
    "web": "https://moleonline.cz"
  },
  {
    "title": "2024 Ownership and Maintenance of FAIRsharing record: ValidatorDB",
    "year": "2024",
    "journal": "University of Oxford, UK – FAIRsharing",
    "doi": "",
    "authors": "",
    "abstract": "",
    "category": [
      "Databases"
    ],
    "image": "img/publications/pub_2024_UniversityofOxfordUKFAIRsharing_UnknownAuthor.png",
    "id": "pub_2024_UniversityofOxfordUKFAIRsharing_UnknownAuthor",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://validatordb.ceitec.cz"
  },
  {
    "title": "ChannelsDB 2.0",
    "year": "2023",
    "journal": "",
    "doi": "",
    "authors": "",
    "category": [
      "Databases",
      "Channels",
      "Selected"
    ],
    "image": "img/publications/pub_2023_NoJournal_UnknownAuthor.png",
    "id": "pub_2023_NoJournal_UnknownAuthor",
    "oa_url": null,
    "oa_is_preprint": false,
    "github": "https://github.com/sb-ncbr/channelsdb",
    "web": "https://channelsdb.biodata.ceitec.cz"
  },
  {
    "title": "Computational Prodrug Design Methodology for Liposome Formulability Enhancement of Small-Molecule APIs",
    "year": "2023",
    "journal": "Molecular Pharmaceutics",
    "doi": "10.1021/acs.molpharmaceut.2c01078",
    "authors": "Martin Balouch, Kateřina Storchmannová, František Štěpánek, Karel Berka",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "20",
    "issue": "4",
    "pages": "2119-2127",
    "image": "img/publications/pub_2023_MOLECULARPHARMACEUTICS_UnknownAuthor.png",
    "id": "10.1021/acs.molpharmaceut.2c01078",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Expanding the squaramide library as mycobacterial ATP synthase inhibitors: innovative synthetic pathway and biological evaluation",
    "year": "2023",
    "journal": "Bioorganic &amp; Medicinal Chemistry",
    "doi": "10.1016/j.bmc.2023.117504",
    "authors": "Jan Chasák, Lauren Oorts, Milan Dak, Veronika Šlachtová, Václav Bazgier, Karel Berka, Linda De Vooght, Natalia Smiejkowska, Kevin Van Calster, Laurence Van Moll, Davie Cappoen, Paul Cos, Lucie Brulíková",
    "category": [
      "Drug Design"
    ],
    "volume": "95",
    "issue": "",
    "pages": "117504",
    "image": "img/publications/pub_2023_BioorganicandMedicinalChemistry_UnknownAuthor.png",
    "id": "10.1016/j.bmc.2023.117504",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Mol* Volumes and Segmentations: visualization and interpretation of cell imaging data alongside macromolecular structure data and biological annotations",
    "year": "2023",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkad411",
    "authors": "Aliaksei Chareshneu, Adam Midlik, Crina-Maria Ionescu, Alexander Rose, Vladimír Horský, Alessio Cantara, Radka Svobodová, Karel Berka, David Sehnal",
    "category": [
      "Tools",
      "Visualization",
      "Channels"
    ],
    "volume": "51",
    "issue": "W1",
    "pages": "W326-W330",
    "abstract": "Abstract\n               Segmentation helps interpret imaging data in a biological context. With the development of powerful tools for automated segmentation, public repositories for imaging data have added support for sharing and visualizing segmentations, creating the need for interactive web-based visualization of 3D volume segmentations. To address the ongoing challenge of integrating and visualizing multimodal data, we developed Mol* Volumes and Segmentations (Mol*VS), which enables the interactive, web-based visualization of cellular imaging data supported by macromolecular data and biological annotations. Mol*VS is fully integrated into Mol* Viewer, which is already used for visualization by several public repositories. All EMDB and EMPIAR entries with segmentation datasets are accessible via Mol*VS, which supports the visualization of data from a wide range of electron and light microscopy experiments. Additionally, users can run a local instance of Mol*VS to visualize and share custom datasets in generic or application-specific formats including volumes in .ccp4, .mrc, and .map, and segmentations in EMDB-SFF .hff, Amira .am, iMod .mod, and Segger .seg. Mol*VS is open source and freely available at https://molstarvolseg.ncbr.muni.cz/.",
    "image": "img/publications/pub_2023_NUCLEICACIDSRESEARCH_UnknownAuthor.png",
    "id": "10.1093/nar/gkad411",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://molstarvolseg.ncbr.muni.cz/"
  },
  {
    "title": "Small change – big consequence: The impact of C15-C16 double bond in a D‑ring of estrone on estrogen receptor activity",
    "year": "2023",
    "journal": "The Journal of Steroid Biochemistry and Molecular Biology",
    "doi": "10.1016/j.jsbmb.2023.106365",
    "authors": "Petr Vonka, Lucie Rarova, Vaclav Bazgier, Vlastimil Tichy, Tamara Kolarova, Jitka Holcakova, Karel Berka, Miroslav Kvasnica, Jana Oklestkova, Eva Kudova, Miroslav Strnad, Roman Hrstka",
    "category": [
      "Channels"
    ],
    "volume": "233",
    "issue": "",
    "pages": "106365",
    "image": "img/publications/pub_2023_JOURNALOFSTEROIDBIOCHEMISTRYANDMOLECULARBIOLOGY_UnknownAuthor.png",
    "id": "10.1016/j.jsbmb.2023.106365",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "αCharges: partial atomic charges for AlphaFold structures in high quality",
    "year": "2023",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkad349",
    "authors": "Ondřej Schindler, Karel Berka, Alessio Cantara, Aleš Křenek, Dominik Tichý, Tomáš Raček, Radka Svobodová",
    "category": [
      "Tools",
      "Alphafoldology",
      "Visualization",
      "Channels"
    ],
    "volume": "51",
    "issue": "W1",
    "pages": "W11-W16",
    "abstract": "Abstract\n               The AlphaFold2 prediction algorithm opened up the possibility of exploring proteins’ structural space at an unprecedented scale. Currently, &amp;gt;200 million protein structures predicted by this approach are deposited in AlphaFoldDB, covering entire proteomes of multiple organisms, including humans. Predicted structures are, however, stored without detailed functional annotations describing their chemical behaviour. Partial atomic charges, which map electron distribution over a molecule and provide a clue to its chemical reactivity, are an important example of such data. We introduce the web application αCharges: a tool for the quick calculation of partial atomic charges for protein structures from AlphaFoldDB. The charges are calculated by the recent empirical method SQE+qp, parameterised for this class of molecules using robust quantum mechanics charges (B3LYP/6-31G*/NPA) on PROPKA3 protonated structures. The computed partial atomic charges can be downloaded in common data formats or visualised via the powerful Mol* viewer. The αCharges application is freely available at https://alphacharges.ncbr.muni.cz with no login requirement.",
    "image": "img/publications/pub_2023_NUCLEICACIDSRESEARCH_UnknownAuthor_2.png",
    "id": "10.1093/nar/gkad349",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://alphacharges.ncbr.muni.cz"
  },
  {
    "title": "Antitumour drugs targeting tau R3 VQIVYK and Cys322 prevent seeding of endogenous tau aggregates by exogenous seeds",
    "year": "2022",
    "journal": "The FEBS Journal",
    "doi": "10.1111/febs.16270",
    "authors": "Narendran Annadurai, Lukáš Malina, Mario Salmona, Luisa Diomede, Antonio Bastone, Alfredo Cagnotto, Margherita Romeo, Martin Šrejber, Karel Berka, Michal Otyepka, Marián Hajdúch, Viswanath Das",
    "category": [
      "Drug Design"
    ],
    "volume": "289",
    "issue": "7",
    "pages": "1929-1949",
    "abstract": "\n                    Emerging experimental evidence suggests tau pathology spreads between neuroanatomically connected brain regions in a prion‐like manner in Alzheimer's disease (AD). Tau seeding, the ability of prion‐like tau to recruit and misfold naïve tau to generate new seeds, is detected early in human AD brains before the development of major tau pathology. Many antitumour drugs have been reported to confer protection against neurodegeneration, supporting the repurposing of approved and experimental or investigational oncology drugs for AD therapy. In this study, we evaluated whether antitumour drugs that abrogate the generation of seed‐competent aggregates of tau Repeat 3 (R3) domain peptides can prevent tau seeding and toxicity in Tau‐RD P301S FRET Biosensor cells and\n                    Caenorhabditis elegans\n                    . We demonstrate that drugs that interact with the N‐terminal VQIVYK or the C‐terminal region housing the Cys322 prevent R3 dimerisation, abolishing the generation of prion‐like R3 seeds. Preformed R3 seeds (fibrils) capped with, or R3 seeds formed in the presence of VQIVYK‐ or Cys322‐targeting drugs have a reduced potency to cause aggregation of naïve tau in biosensor cells and protect worms from aggregate toxicity. These findings indicate that VQIVYK‐ or Cys322‐targeting drugs may act as prophylactic agents against tau seeding.\n                  ",
    "image": "img/publications/pub_2022_FEBSJournal_UnknownAuthor.png",
    "id": "10.1111/febs.16270",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Novel heterocyclic hydroxamates as inhibitors of the mycobacterial zinc metalloprotease Zmp1 to probe its mechanism of function",
    "year": "2022",
    "journal": "European Journal of Medicinal Chemistry",
    "doi": "10.1016/j.ejmech.2022.114831",
    "authors": "Milan Dak, Veronika Šlachtová, Marek Šebela, Václav Bazgier, Karel Berka, Natalia Smiejkowska, Lauren Oorts, Davie Cappoen, Lucie Brulíková",
    "category": [
      "Drug Design"
    ],
    "volume": "244",
    "issue": "",
    "pages": "114831",
    "image": "img/publications/pub_2022_EUROPEANJOURNALOFMEDICINALCHEMISTRY_UnknownAuthor.png",
    "id": "10.1016/j.ejmech.2022.114831",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "OverProt: secondary structure consensus for protein families",
    "year": "2022",
    "journal": "Bioinformatics",
    "doi": "10.1093/bioinformatics/btac384",
    "authors": "Adam Midlik, Ivana Hutařová Vařeková, Jan Hutař, Aliaksei Chareshneu, Karel Berka, Radka Svobodová",
    "category": [
      "Visualization"
    ],
    "volume": "38",
    "issue": "14",
    "pages": "3648-3650",
    "abstract": "AbstractSummaryEvery protein family has a set of characteristic secondary structures. However, due to individual variations, a single structure is not enough to represent the whole family. OverProt can create a secondary structure consensus, showing the general fold of the family as well as its variation. Our server provides precomputed results for all CATH superfamilies and user-defined computations, visualized by an interactive viewer, which shows the secondary structure element type, length, frequency of occurrence, spatial variability and β-connectivity.Availability and implementationOverProt Server is freely available at https://overprot.ncbr.muni.cz.Supplementary informationSupplementary data are available at Bioinformatics online.",
    "image": "img/publications/pub_2022_BIOINFORMATICS_UnknownAuthor.png",
    "id": "10.1093/bioinformatics/btac384",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://overprot.ncbr.muni.cz.Supplementary"
  },
  {
    "title": "PDBe-KB: collaboratively defining the biological context of structural data",
    "year": "2022",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkab988",
    "authors": "Mihaly Varadi, Stephen Anyango, David Armstrong, John Berrisford, Preeti Choudhary, Mandar Deshpande, Nurul Nadzirin, Sreenath S Nair, Lukas Pravda, Ahsan Tanweer, Bissan Al-Lazikani, Claudia Andreini, Geoffrey J Barton, David Bednar, Karel Berka, Tom Blundell, Kelly P Brock, Jose Maria Carazo, Jiri Damborsky, Alessia David, Sucharita Dey, Roland Dunbrack, Juan Fernandez Recio, Franca Fraternali, Toby Gibson, Manuela Helmer-Citterich, David Hoksza, Thomas Hopf, David Jakubec, Natarajan Kannan, Radoslav Krivak, Manjeet Kumar, Emmanuel D Levy, Nir London, Jose Ramon Macias, Madhusudhan M Srivatsan, Debora S Marks, Lennart Martens, Stuart A McGowan, Jake E McGreig, Vivek Modi, R Gonzalo Parra, Gerardo Pepe, Damiano Piovesan, Jaime Prilusky, Valeria Putignano, Leandro G Radusky, Pathmanaban Ramasamy, Atilio O Rausch, Nathalie Reuter, Luis A Rodriguez, Nathan J Rollins, Antonio Rosato, Paweł Rubach, Luis Serrano, Gulzar Singh, Petr Skoda, Carlos Oscar S Sorzano, Jan Stourac, Joanna I Sulkowska, Radka Svobodova, Natalia Tichshenko, Silvio C E Tosatto, Wim Vranken, Mark N Wass, Dandan Xue, Daniel Zaidman, Janet Thornton, Michael Sternberg, Christine Orengo, Sameer Velankar",
    "category": [
      "Databases",
      "Tools",
      "Channels"
    ],
    "volume": "50",
    "issue": "D1",
    "pages": "D534-D542",
    "abstract": "Abstract\n               The Protein Data Bank in Europe – Knowledge Base (PDBe-KB, https://pdbe-kb.org) is an open collaboration between world-leading specialist data resources contributing functional and biophysical annotations derived from or relevant to the Protein Data Bank (PDB). The goal of PDBe-KB is to place macromolecular structure data in their biological context by developing standardised data exchange formats and integrating functional annotations from the contributing partner resources into a knowledge graph that can provide valuable biological insights. Since we described PDBe-KB in 2019, there have been significant improvements in the variety of available annotation data sets and user functionality. Here, we provide an overview of the consortium, highlighting the addition of annotations such as predicted covalent binders, phosphorylation sites, effects of mutations on the protein structure and energetic local frustration. In addition, we describe a library of reusable web-based visualisation components and introduce new features such as a bulk download data service and a novel superposition service that generates clusters of superposed protein chains weekly for the whole PDB archive.",
    "image": "img/publications/pub_2022_NUCLEICACIDSRESEARCH_UnknownAuthor.png",
    "id": "10.1093/nar/gkab988",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://pdbe-kb.org"
  },
  {
    "title": "ELIXIR and Toxicology: a community in development",
    "year": "2021",
    "journal": "F1000Research",
    "doi": "10.12688/f1000research.74502.1",
    "authors": "Marvin Martens, Rob Stierum, Emma L. Schymanski, Chris T. Evelo, Reza Aalizadeh, Hristo Aladjov, Kasia Arturi, Karine Audouze, Pavel Babica, Karel Berka, Jos Bessems, Ludek Blaha, Evan E. Bolton, Montserrat Cases, Dimitrios Ε. Damalas, Kirtan Dave, Marco Dilger, Thomas Exner, Daan P. Geerke, Roland Grafström, Alasdair Gray, John M. Hancock, Henner Hollert, Nina Jeliazkova, Danyel Jennen, Fabien Jourdan, Pascal Kahlem, Jana Klanova, Jos Kleinjans, Todor Kondic, Boï Kone, Iseult Lynch, Uko Maran, Sergio Martinez Cuesta, Hervé Ménager, Steffen Neumann, Penny Nymark, Herbert Oberacher, Noelia Ramirez, Sylvie Remy, Philippe Rocca-Serra, Reza M. Salek, Brett Sallach, Susanna-Assunta Sansone, Ferran Sanz, Haralambos Sarimveis, Sirarat Sarntivijai, Tobias Schulze, Jaroslav Slobodnik, Ola Spjuth, Jonathan Tedds, Nikolaos Thomaidis, Ralf J.M. Weber, Gerard J.P. van Westen, Craig E. Wheelock, Antony J. Williams, Hilda Witters, Barbara Zdrazil, Anže Županič, Egon L. Willighagen",
    "category": [
      "Drug Design"
    ],
    "volume": "10",
    "issue": "",
    "pages": "1129",
    "abstract": "Toxicology has been an active research field for many decades, with academic, industrial and government involvement. Modern omics and computational approaches are changing the field, from merely disease-specific observational models into target-specific predictive models. Traditionally, toxicology has strong links with other fields such as biology, chemistry, pharmacology and medicine. With the rise of synthetic and new engineered materials, alongside ongoing prioritisation needs in chemical risk assessment for existing chemicals, early predictive evaluations are becoming of utmost importance to both scientific and regulatory purposes. ELIXIR is an intergovernmental organisation that brings together life science resources from across Europe. To coordinate the linkage of various life science efforts around modern predictive toxicology, the establishment of a new ELIXIR Community is seen as instrumental. In the past few years, joint efforts, building on incidental overlap, have been piloted in the context of ELIXIR. For example, the EU-ToxRisk, diXa, HeCaToS, transQST, and the nanotoxicology community have worked with the ELIXIR TeSS, Bioschemas, and Compute Platforms and activities. In 2018, a core group of interested parties wrote a proposal, outlining a sketch of what this new ELIXIR Toxicology Community would look like. A recent workshop (held September 30th to October 1st, 2020) extended this into an ELIXIR Toxicology roadmap and a shortlist of limited investment-high gain collaborations to give body to this new community. This Whitepaper outlines the results of these efforts and defines our vision of the ELIXIR Toxicology Community and how it complements other ELIXIR activities.",
    "image": "img/publications/pub_2021_NoJournal_UnknownAuthor.png",
    "id": "10.12688/f1000research.74502.1",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "2DProts: database of family-wide protein secondary structure diagrams",
    "year": "2021",
    "journal": "Bioinformatics",
    "doi": "10.1093/bioinformatics/btab505",
    "authors": "Ivana Hutařová Vařeková, Jan Hutař, Adam Midlik, Vladimír Horský, Eva Hladká, Radka Svobodová, Karel Berka",
    "category": [
      "Databases",
      "Tools",
      "Visualization"
    ],
    "volume": "37",
    "issue": "23",
    "pages": "4599-4601",
    "abstract": "Abstract\n               \n                  Summary\n                  Secondary structures provide a deep insight into the protein architecture. They can serve for comparison between individual protein family members. The most straightforward way how to deal with protein secondary structure is its visualization using 2D diagrams. Several software tools for the generation of 2D diagrams were developed. Unfortunately, they create 2D diagrams based on only a single protein. Therefore, 2D diagrams of two proteins from one family markedly differ. For this reason, we developed the 2DProts database, which contains secondary structure 2D diagrams for all domains from the CATH and all proteins from PDB databases. These 2D diagrams are generated based on a whole protein family, and they also consider information about the 3D arrangement of secondary structure elements. Moreover, 2DProts database contains multiple 2D diagrams, which provide an overview of a whole protein family's secondary structures. 2DProts is updated weekly and is integrated into CATH.\n               \n               \n                  Availability and Implementation\n                  Freely accessible at https://2dprots.ncbr.muni.cz. The web interface was implemented in JavaScript. The database was implemented in Python.\n               \n               \n                  Supplementary information\n                  Supplementary data are available at Bioinformatics online.\n               ",
    "image": "img/publications/pub_2021_BIOINFORMATICS_UnknownAuthor.png",
    "id": "10.1093/bioinformatics/btab505",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://2dprots.icm.edu.pl/"
  },
  {
    "title": "CATH: increased structural coverage of functional space",
    "year": "2021",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkaa1079",
    "authors": "Ian Sillitoe, Nicola Bordin, Natalie Dawson, Vaishali P Waman, Paul Ashford, Harry M Scholes, Camilla S M Pang, Laurel Woodridge, Clemens Rauer, Neeladri Sen, Mahnaz Abbasian, Sean Le Cornu, Su Datt Lam, Karel Berka, Ivana Hutařová Varekova, Radka Svobodova, Jon Lees, Christine A Orengo",
    "category": [
      "Tools",
      "Drug Design"
    ],
    "volume": "49",
    "issue": "D1",
    "pages": "D266-D273",
    "abstract": "Abstract\n               CATH (https://www.cathdb.info) identifies domains in protein structures from wwPDB and classifies these into evolutionary superfamilies, thereby providing structural and functional annotations. There are two levels: CATH-B, a daily snapshot of the latest domain structures and superfamily assignments, and CATH+, with additional derived data, such as predicted sequence domains, and functionally coherent sequence subsets (Functional Families or FunFams). The latest CATH+ release, version 4.3, significantly increases coverage of structural and sequence data, with an addition of 65,351 fully-classified domains structures (+15%), providing 500 238 structural domains, and 151 million predicted sequence domains (+59%) assigned to 5481 superfamilies. The FunFam generation pipeline has been re-engineered to cope with the increased influx of data. Three times more sequences are captured in FunFams, with a concomitant increase in functional purity, information content and structural coverage. FunFam expansion increases the structural annotations provided for experimental GO terms (+59%). We also present CATH-FunVar web-pages displaying variations in protein sequences and their proximity to known or predicted functional sites. We present two case studies (1) putative cancer drivers and (2) SARS-CoV-2 proteins. Finally, we have improved links to and from CATH including SCOP, InterPro, Aquaria and 2DProt.",
    "image": "img/publications/pub_2021_NUCLEICACIDSRESEARCH_UnknownAuthor.png",
    "id": "10.1093/nar/gkaa1079",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://www.cathdb.info"
  },
  {
    "title": "In silico screening of drug candidates for thermoresponsive liposome formulations",
    "year": "2021",
    "journal": "Molecular Systems Design &amp; Engineering",
    "doi": "10.1039/D0ME00160K",
    "authors": "Martin Balouch, Martin Šrejber, Marek Šoltys, Petra Janská, František Štěpánek, Karel Berka",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "6",
    "issue": "5",
    "pages": "368-380",
    "abstract": "\n                    In silico\n                    methodology for compound suitability for liposomal formulation has been developed. Water–lipid partitioning and permeation of candidate compounds from the DrugBank were calculated, and the most appropriate targets validated experimentally.\n                  ",
    "image": "img/publications/pub_2021_MolecularSystemsDesignEngineering_UnknownAuthor.png",
    "id": "10.1039/D0ME00160K",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Mol* Viewer: modern web app for 3D visualization and analysis of large biomolecular structures",
    "year": "2021",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkab314",
    "authors": "David Sehnal, Sebastian Bittrich, Mandar Deshpande, Radka Svobodová, Karel Berka, Václav Bazgier, Sameer Velankar, Stephen K Burley, Jaroslav Koča, Alexander S Rose",
    "category": [
      "Databases",
      "Tools",
      "Visualization",
      "Channels"
    ],
    "volume": "49",
    "issue": "W1",
    "pages": "W431-W437",
    "abstract": "AbstractLarge biomolecular structures are being determined experimentally on a daily basis using established techniques such as crystallography and electron microscopy. In addition, emerging integrative or hybrid methods (I/HM) are producing structural models of huge macromolecular machines and assemblies, sometimes containing 100s of millions of non-hydrogen atoms. The performance requirements for visualization and analysis tools delivering these data are increasing rapidly. Significant progress in developing online, web-native three-dimensional (3D) visualization tools was previously accomplished with the introduction of the LiteMol suite and NGL Viewers. Thereafter, Mol* development was jointly initiated by PDBe and RCSB PDB to combine and build on the strengths of LiteMol (developed by PDBe) and NGL (developed by RCSB PDB). The web-native Mol* Viewer enables 3D visualization and streaming of macromolecular coordinate and experimental data, together with capabilities for displaying structure quality, functional, or biological context annotations. High-performance graphics and data management allows users to simultaneously visualise up to hundreds of (superimposed) protein structures, stream molecular dynamics simulation trajectories, render cell-level models, or display huge I/HM structures. It is the primary 3D structure viewer used by PDBe and RCSB PDB. It can be easily integrated into third-party services. Mol* Viewer is open source and freely available at https://molstar.org/.",
    "image": "img/publications/pub_2021_NUCLEICACIDSRESEARCH_UnknownAuthor_2.png",
    "id": "10.1093/nar/gkab314",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://molstar.org/"
  },
  {
    "title": "Optimized SQE atomic charges for peptides accessible via a web application",
    "year": "2021",
    "journal": "Journal of Cheminformatics",
    "doi": "10.1186/s13321-021-00528-w",
    "authors": "Ondřej Schindler, Tomáš Raček, Aleksandra Maršavelski, Jaroslav Koča, Karel Berka, Radka Svobodová",
    "category": [
      "Tools",
      "Channels"
    ],
    "volume": "13",
    "issue": "1",
    "pages": "",
    "abstract": "Abstract\n                Background\n                Partial atomic charges find many applications in computational chemistry, chemoinformatics, bioinformatics, and nanoscience. Currently, frequently used methods for charge calculation are the Electronegativity Equalization Method (EEM), Charge Equilibration method (QEq), and Extended QEq (EQeq). They all are fast, even for large molecules, but require empirical parameters. However, even these advanced methods have limitations—e.g., their application for peptides, proteins, and other macromolecules is problematic. An empirical charge calculation method that is promising for peptides and other macromolecular systems is the Split-charge Equilibration method (SQE) and its extension SQE+q0. Unfortunately, only one parameter set is available for these methods, and their implementation is not easily accessible.\n              \n                Results\n                In this article, we present for the first time an optimized guided minimization method (optGM) for the fast parameterization of empirical charge calculation methods and compare it with the currently available guided minimization (GDMIN) method. Then, we introduce a further extension to SQE, SQE+qp, adapted for peptide datasets, and compare it with the common approaches EEM, QEq EQeq, SQE, and SQE+q0. Finally, we integrate SQE and SQE+qp into the web application Atomic Charge Calculator II (ACC II), including several parameter sets.\n              \n                Conclusion\n                The main contribution of the article is that it makes SQE methods with their parameters accessible to the users via the ACC II web application (https://acc2.ncbr.muni.cz) and also via a command-line application. Furthermore, our improvement, SQE+qp, provides an excellent solution for peptide datasets. Additionally, optGM provides comparable parameters to GDMIN in a markedly shorter time. Therefore, optGM allows us to perform parameterizations for charge calculation methods with more parameters (e.g., SQE and its extensions) using large datasets.\n              \n                Graphic Abstract\n                \n              ",
    "image": "img/publications/pub_2021_JournalofCheminformatics_UnknownAuthor.png",
    "id": "10.1186/s13321-021-00528-w",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://acc2.ncbr.muni.cz"
  },
  {
    "title": "Uncovering of cytochrome P450 anatomy by SecStrAnnotator",
    "year": "2021",
    "journal": "Scientific Reports",
    "doi": "10.1038/S41598-021-91494-8",
    "authors": "Adam Midlik, Veronika Navrátilová, Taraka Ramji Moturu, Jaroslav Koča, Radka Svobodová, Karel Berka",
    "category": [
      "Tools",
      "Drug Design"
    ],
    "volume": "11",
    "issue": "1",
    "pages": "",
    "abstract": "Abstract\n                  \n                    Protein structural families are groups of homologous proteins defined by the organization of secondary structure elements (SSEs). Nowadays, many families contain vast numbers of structures, and the SSEs can help to orient within them. Communities around specific protein families have even developed specialized SSE annotations, always assigning the same name to the equivalent SSEs in homologous proteins. A detailed analysis of the groups of equivalent SSEs provides an overview of the studied family and enriches the analysis of any particular protein at hand. We developed a workflow for the analysis of the secondary structure anatomy of a protein family. We applied this analysis to the model family of cytochromes P450 (CYPs)—a family of important biotransformation enzymes with a community-wide used SSE annotation. We report the occurrence, typical length and amino acid sequence for the equivalent SSE groups, the conservation/variability of these properties and relationship to the substrate recognition sites. We also suggest a generic residue numbering scheme for the CYP family. Comparing the bacterial and eukaryotic part of the family highlights the significant differences and reveals a well-known anomalous group of bacterial CYPs with some typically eukaryotic features. Our workflow for SSE annotation for CYP and other families can be freely used at address\n                    https://sestra.ncbr.muni.cz\n                    .\n                  ",
    "image": "img/publications/pub_2021_ScientificReports_UnknownAuthor.png",
    "id": "10.1038/S41598-021-91494-8",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://secstrannotator.ceitec.cz/"
  },
  {
    "title": "Cytokinin fluoroprobe and receptor CRE1/AHK4 localize to both plasma membrane and endoplasmic reticulum",
    "year": "2020",
    "journal": "Nature Communications",
    "doi": "10.1101/744177",
    "authors": "Karolina Kubiasová, Juan Carlos Montesinos, Olga Šamajová, Jaroslav Nisler, Václav Mik, Lucie Plíhalová, Ondřej Novák, Peter Marhavý, David Zalabák, Karel Berka, Karel Doležal, Petr Galuszka, Jozef Šamaj, Miroslav Strnad, Eva Benková, Ondřej Plíhal, Lukáš Spíchal",
    "category": [
      "Drug Design",
      "Lipid Membranes"
    ],
    "volume": "",
    "issue": "",
    "pages": "",
    "abstract": "\n                  The plant hormone cytokinin regulates various cell and developmental processes, including cell division and differentiation, embryogenesis, activity of shoot and root apical meristems, formation of shoot and root lateral organs and others\n                  1\n                  . Cytokinins are perceived by a subfamily of sensor histidine kinases (HKs), which via a two-component phosphorelay cascade activate transcriptional responses in the nucleus. Based on the subcellular localization of cytokinin receptors in various transient expression systems, such as tobacco leaf epidermal cells, and membrane fractionation experiments of Arabidopsis and maize, the endoplasmic reticulum (ER) membrane has been proposed as a principal hormone perception site\n                  2–4\n                  . Intriguingly, recent study of the cytokinin transporter PUP14 has pointed out that the plasma membrane (PM)-mediated signalling might play an important role in establishment of cytokinin response gradients in various plant organs\n                  5\n                  . However, localization of cytokinin HK receptors to the PM, although initially suggested\n                  6\n                  , remains ambiguous. Here, by monitoring subcellular localizations of the fluorescently labelled natural cytokinin probe iP-NBD\n                  7\n                  and the cytokinin receptor ARABIDOPSIS HISTIDINE KINASE 4 (CRE1/AHK4) fused to GFP reporter, we show that pools of the ER-located cytokinin fluoroprobes and receptors can enter the secretory pathway and reach the PM. We demonstrate that in cells of the root apical meristem, CRE1/AHK4 localizes to the PM and the cell plate of dividing meristematic cells. Brefeldin A (BFA) experiments revealed vesicular recycling of the receptor and its accumulation in BFA compartments. Our results provide a new perspective on cytokinin signalling and the possibility of multiple sites of perception at PM and ER, which may determine specific outputs of cytokinin signalling.\n                ",
    "image": "img/publications/pub_2020_NatureCommunications_UnknownAuthor.png",
    "id": "10.1101/744177",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Atomic Charge Calculator II: web-based tool for the calculation of partial atomic charges",
    "year": "2020",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkaa367",
    "authors": "Tomáš Raček, Ondřej Schindler, Dominik Toušek, Vladimír Horský, Karel Berka, Jaroslav Koča, Radka Svobodová",
    "category": [
      "Tools",
      "Visualization",
      "Channels"
    ],
    "volume": "48",
    "issue": "W1",
    "pages": "W591-W596",
    "abstract": "Abstract\n               Partial atomic charges serve as a simple model for the electrostatic distribution of a molecule that drives its interactions with its surroundings. Since partial atomic charges are frequently used in computational chemistry, chemoinformatics and bioinformatics, many computational approaches for calculating them have been introduced. The most applicable are fast and reasonably accurate empirical charge calculation approaches. Here, we introduce Atomic Charge Calculator II (ACC II), a web application that enables the calculation of partial atomic charges via all the main empirical approaches and for all types of molecules. ACC II implements 17 empirical charge calculation methods, including the highly cited (QEq, EEM), the recently published (EQeq, EQeq+C), and the old but still often used (PEOE). ACC II enables the fast calculation of charges even for large macromolecular structures. The web server also offers charge visualization, courtesy of the powerful LiteMol viewer. The calculation setup of ACC II is very straightforward and enables the quick calculation of high-quality partial charges. The application is available at https://acc2.ncbr.muni.cz.",
    "image": "img/publications/pub_2020_NucleicAcidsResearch_UnknownAuthor.png",
    "id": "10.1093/nar/gkaa367",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://acc2.ncbr.muni.cz"
  },
  {
    "title": "Dextrans as Permeation Markers and Carriers for Oral Transmucosal Drug Delivery",
    "year": "2020",
    "journal": "CHEMICKE LISTY",
    "doi": "",
    "authors": "",
    "category": [
      "Drug Design",
      "Lipid Membranes"
    ],
    "image": "img/publications/pub_2020_CHEMICKELISTY_UnknownAuthor.png",
    "id": "pub_2020_CHEMICKELISTY_UnknownAuthor",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "High-performance macromolecular data delivery and visualization for the web",
    "year": "2020",
    "journal": "Acta Crystallographica Section D Structural Biology",
    "doi": "10.1107/S2059798320014515",
    "authors": "David Sehnal, Radka Svobodová, Karel Berka, Alexander S. Rose, Stephen K. Burley, Sameer Velankar, Jaroslav Koča",
    "category": [
      "Tools",
      "Visualization",
      "Channels"
    ],
    "volume": "76",
    "issue": "12",
    "pages": "1167-1173",
    "abstract": "Biomacromolecular structural data make up a vital and crucial scientific resource that has grown not only in terms of its amount but also in its size and complexity. Furthermore, these data are accompanied by large and increasing amounts of experimental data. Additionally, the macromolecular data are enriched with value-added annotations describing their biological, physicochemical and structural properties. Today, the scientific community requires fast and fully interactive web visualization to exploit this complex structural information. This article provides a survey of the available cutting-edge web services that address this challenge. Specifically, it focuses on data-delivery problems, discusses the visualization of a single structure, including experimental data and annotations, and concludes with a focus on the results of molecular-dynamics simulations and the visualization of structural ensembles.",
    "image": "img/publications/pub_2020_ActaCrystallographicaSectionDStructuralBiology_UnknownAuthor.png",
    "id": "10.1107/S2059798320014515",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Molmedb - database about interactions of molecules with membranes",
    "year": "2020",
    "journal": "",
    "doi": "",
    "authors": "",
    "category": [
      "Lipid Membranes",
      "Databases",
      "Channels",
      "Selected"
    ],
    "image": "img/publications/pub_2020_NoJournal_UnknownAuthor.png",
    "id": "pub_2020_NoJournal_UnknownAuthor",
    "oa_url": null,
    "oa_is_preprint": false,
    "github": "https://github.com/MolMeDB/MolMeDB",
    "web": "https://molmedb.chem.upol.cz"
  },
  {
    "title": "Novel thiazolidinedione-hydroxamates as inhibitors of Mycobacterium tuberculosis virulence factor Zmp1",
    "year": "2020",
    "journal": "European Journal of Medicinal Chemistry",
    "doi": "10.1016/j.ejmech.2019.111812",
    "authors": "Veronika Šlachtová, Marek Šebela, Eveline Torfs, Lauren Oorts, Davie Cappoen, Karel Berka, Václav Bazgier, Lucie Brulíková",
    "category": [
      "Drug Design"
    ],
    "volume": "185",
    "issue": "",
    "pages": "111812",
    "image": "img/publications/pub_2020_EUROPEANJOURNALOFMEDICINALCHEMISTRY_UnknownAuthor.png",
    "id": "10.1016/j.ejmech.2019.111812",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "PDBe-KB: a community-driven resource for structural and functional annotations",
    "year": "2020",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkz853",
    "authors": "Mihaly Varadi, John Berrisford, Mandar Deshpande, Sreenath S Nair, Aleksandras Gutmanas, David Armstrong, Lukas Pravda, Bissan Al-Lazikani, Stephen Anyango, Geoffrey J Barton, Karel Berka, Tom Blundell, Neera Borkakoti, Jose Dana, Sayoni Das, Sucharita Dey, Patrizio Di Micco, Franca Fraternali, Toby Gibson, Manuela Helmer-Citterich, David Hoksza, Liang-Chin Huang, Rishabh Jain, Harry Jubb, Christos Kannas, Natarajan Kannan, Jaroslav Koca, Radoslav Krivak, Manjeet Kumar, Emmanuel D Levy, F Madeira, M S Madhusudhan, Henry J Martell, Stuart MacGowan, Jake E McGreig, Saqib Mir, Abhik Mukhopadhyay, Luca Parca, Typhaine Paysan-Lafosse, Leandro Radusky, Antonio Ribeiro, Luis Serrano, Ian Sillitoe, Gulzar Singh, Petr Skoda, Radka Svobodova, Jonathan Tyzack, Alfonso Valencia, Eloy Villasclaras Fernandez, Wim Vranken, Mark Wass, Janet Thornton, Michael Sternberg, Christine Orengo, Sameer Velankar",
    "category": [
      "Databases",
      "Tools",
      "Channels"
    ],
    "volume": "48",
    "issue": "D1",
    "pages": "D344-D353",
    "abstract": "Abstract\n               The Protein Data Bank in Europe-Knowledge Base (PDBe-KB, https://pdbe-kb.org) is a community-driven, collaborative resource for literature-derived, manually curated and computationally predicted structural and functional annotations of macromolecular structure data, contained in the Protein Data Bank (PDB). The goal of PDBe-KB is two-fold: (i) to increase the visibility and reduce the fragmentation of annotations contributed by specialist data resources, and to make these data more findable, accessible, interoperable and reusable (FAIR) and (ii) to place macromolecular structure data in their biological context, thus facilitating their use by the broader scientific community in fundamental and applied research. Here, we describe the guidelines of this collaborative effort, the current status of contributed data, and the PDBe-KB infrastructure, which includes the data exchange format, the deposition system for added value annotations, the distributable database containing the assembled data, and programmatic access endpoints. We also describe a series of novel web-pages—the PDBe-KB aggregated views of structure data—which combine information on macromolecular structures from many PDB entries. We have recently released the first set of pages in this series, which provide an overview of available structural and functional information for a protein of interest, referenced by a UniProtKB accession.",
    "image": "img/publications/pub_2020_NUCLEICACIDSRESEARCH_UnknownAuthor.png",
    "id": "10.1093/nar/gkz853",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://pdbe-kb.org"
  },
  {
    "title": "Visualization and Analysis of Protein Structures with LiteMol Suite",
    "year": "2020",
    "journal": "Methods in Molecular Biology",
    "doi": "10.1007/978-1-0716-0270-6_1",
    "authors": "David Sehnal, Radka Svobodová, Karel Berka, Lukáš Pravda, Adam Midlik, Jaroslav Koča",
    "category": [
      "Visualization",
      "Channels"
    ],
    "volume": "",
    "issue": "",
    "pages": "1-13",
    "image": "img/publications/pub_2020_MethodsinMolecularBiology_UnknownAuthor.png",
    "id": "10.1007/978-1-0716-0270-6_1",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "In vitro testing of flash-frozen sublingual membranes for storage and reproducible permeability studies of macromolecular drugs from solution or nanofiber mats",
    "year": "2019",
    "journal": "International Journal of Pharmaceutics",
    "doi": "10.1016/J.IJPHARM.2019.118711",
    "authors": "Pavel Berka, Denisa Stránská, Vladimír Semecký, Karel Berka, Pavel Doležal",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "572",
    "issue": "",
    "pages": "118711",
    "image": "img/publications/pub_2019_InternationalJournalofPharmaceutics_UnknownAuthor.png",
    "id": "10.1016/J.IJPHARM.2019.118711",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "MolMeDB: Molecules on Membranes Database",
    "year": "2019",
    "journal": "Database",
    "doi": "10.1093/database/baz078",
    "authors": "Jakub Juračka, Martin Šrejber, Michaela Melíková, Václav Bazgier, Karel Berka",
    "category": [
      "Drug Design",
      "Channels",
      "Databases",
      "Lipid Membranes",
      "Selected",
      "Tools"
    ],
    "volume": "2019",
    "issue": "",
    "pages": "",
    "abstract": "Abstract\n                  Biological membranes act as barriers or reservoirs for many compounds within the human body. As such, they play an important role in pharmacokinetics and pharmacodynamics of drugs and other molecular species. Until now, most membrane/drug interactions have been inferred from simple partitioning between octanol and water phases. However, the observed variability in membrane composition and among compounds themselves stretches beyond such simplification as there are multiple drug–membrane interactions. Numerous experimental and theoretical approaches are used to determine the molecule–membrane interactions with variable accuracy, but there is no open resource for their critical comparison. For this reason, we have built Molecules on Membranes Database (MolMeDB), which gathers data about over 3600 compound–membrane interactions including partitioning, penetration and positioning. The data have been collected from scientific articles published in peer-reviewed journals and complemented by in-house calculations from high-throughput COSMOmic approach to set up a baseline for further comparison. The data in MolMeDB are fully searchable and browsable by means of name, SMILES, membrane, method or dataset and we offer the collected data openly for further reuse and we are open to further additions. MolMeDB can be a powerful tool that could help researchers better understand the role of membranes and to compare individual approaches used for the study of molecule/membrane interactions.",
    "image": "img/publications/pub_2019_Database_UnknownAuthor.png",
    "id": "10.1093/database/baz078",
    "oa_url": null,
    "oa_is_preprint": false,
    "github": "https://github.com/MolMeDB/MolMeDB",
    "preprint_id": "pub_2020_NoJournal_UnknownAuthor",
    "fairsharing_id": "pub_2025_UniversityofOxfordUKFAIRsharing_UnknownAuthor",
    "web": "https://molmedb.chem.upol.cz"
  },
  {
    "title": "Automated Family-Wide Annotation of Secondary Structure Elements.",
    "year": "2019",
    "journal": "Methods in Molecular Biology",
    "doi": "10.1007/978-1-4939-9161-7_3",
    "authors": "Adam Midlik, Ivana Hutařová Vařeková, Jan Hutař, Taraka Ramji Moturu, Veronika Navrátilová, Jaroslav Koča, Karel Berka, Radka Svobodová Vařeková",
    "category": [
      "Channels"
    ],
    "volume": "",
    "issue": "",
    "pages": "47-71",
    "image": "img/publications/pub_2019_MethodsinmolecularbiologyCliftonNJ_UnknownAuthor.png",
    "id": "10.1007/978-1-4939-9161-7_3",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Synthesis of novel galeterone derivatives and evaluation of their in vitro activity against prostate cancer cell lines",
    "year": "2019",
    "journal": "European Journal of Medicinal Chemistry",
    "doi": "10.1016/j.ejmech.2019.06.040",
    "authors": "Radek Jorda, Eva Řezníčková, Urszula Kiełczewska, Jadwiga Maj, Jacek W. Morzycki, Leszek Siergiejczyk, Václav Bazgier, Karel Berka, Lucie Rárová, Agnieszka Wojtkielewicz",
    "category": [
      "Drug Design"
    ],
    "volume": "179",
    "issue": "",
    "pages": "483-492",
    "image": "img/publications/pub_2019_EUROPEANJOURNALOFMEDICINALCHEMISTRY_UnknownAuthor.png",
    "id": "10.1016/j.ejmech.2019.06.040",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Pokusnice - hub chemických pokusů",
    "year": "2019",
    "journal": "",
    "doi": "",
    "authors": "",
    "abstract": "",
    "category": [
      "Education & Outreach"
    ],
    "image": "img/publications/pub_2019_NoJournal_UnknownAuthor.png",
    "id": "pub_2019_NoJournal_UnknownAuthor",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://pokusnice.cz"
  },
  {
    "title": "ChannelsDB: database of biomacromolecular tunnels and pores",
    "year": "2018",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkx868",
    "authors": "Lukáš Pravda, David Sehnal, Radka Svobodová Vařeková, Veronika Navrátilová, Dominik Toušek, Karel Berka, Michal Otyepka, Jaroslav Koča",
    "category": [
      "Databases",
      "Channels"
    ],
    "volume": "46",
    "issue": "D1",
    "pages": "D399-D405",
    "image": "img/publications/pub_2018_NUCLEICACIDSRESEARCH_UnknownAuthor.png",
    "id": "10.1093/nar/gkx868",
    "oa_url": null,
    "oa_is_preprint": false,
    "github": "https://github.com/sb-ncbr/channelsdb",
    "web": "https://channelsdb.biodata.ceitec.cz"
  },
  {
    "title": "Channelsdb and Moleonline - Database and Tool for Analysis of Biomacromolecular Tunnels and Pores",
    "year": "2018",
    "journal": "Biophysical Journal",
    "doi": "10.1016/J.BPJ.2017.11.1912",
    "authors": "Lukáš Pravda, David Sehnal, Karel Berka, Veronika Navrátilová, Dominik Toušěk, Václav Bazgier, Radka Svobodová Vařeková, Michal Otyepka, Jaroslav Koča",
    "category": [
      "Databases",
      "Tools",
      "Channels",
      "Selected"
    ],
    "volume": "114",
    "issue": "3",
    "pages": "342a-343a",
    "image": "img/publications/pub_2018_BiophysicalJournal_UnknownAuthor.png",
    "id": "10.1016/J.BPJ.2017.11.1912",
    "oa_url": null,
    "oa_is_preprint": false,
    "github": "https://github.com/sb-ncbr/channelsdb",
    "web": "https://moleonline.cz"
  },
  {
    "title": "Discovery of N-2-(4-Amino-cyclohexyl)-9-cyclopentyl-N-6-(4-morpholin-4-ylmethyl-phenyl)-9H-purine-2,6-diamine as a Potent FLT3 Kinase Inhibitor for Acute Myeloid Leukemia with FLT3 Mutations",
    "year": "2018",
    "journal": "Journal of Medicinal Chemistry",
    "doi": "10.1021/acs.jmedchem.7b01529",
    "authors": "Tomáš Gucký, Eva Řezníčková, Tereza Radošová Muchová, Radek Jorda, Zuzana Klejová, Veronika Malínková, Karel Berka, Václav Bazgier, Haresh Ajani, Martin Lepšík, Vladimír Divoký, Vladimír Kryštof",
    "category": [
      "Drug Design"
    ],
    "volume": "61",
    "issue": "9",
    "pages": "3855-3869",
    "image": "img/publications/pub_2018_JOURNALOFMEDICINALCHEMISTRY_UnknownAuthor.png",
    "id": "10.1021/acs.jmedchem.7b01529",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Interactive 3D Macromolecular Structure Data Mining with MolQL and Litemol Suite",
    "year": "2018",
    "journal": "Biophysical Journal",
    "doi": "10.1016/J.BPJ.2017.11.308",
    "authors": "David Sehnal, Mandar Deshpande, Alexander Rose, Lukas Pravda, Adam Midlik, Radka Svobodová Vařeková, Saqib Mir, Karel Berka, Sameer Velankar, Jaroslav Koca",
    "category": [
      "Visualization",
      "Channels"
    ],
    "volume": "114",
    "issue": "3",
    "pages": "47a",
    "image": "img/publications/pub_2018_BiophysicalJournal_UnknownAuthor_2.png",
    "id": "10.1016/J.BPJ.2017.11.308",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Is Machine Learning the Future of Theoretical Chemistry?",
    "year": "2018",
    "journal": "Chemicke Listy",
    "doi": "",
    "authors": "Karel Berka et al.",
    "abstract": "",
    "category": [
      "Other / General"
    ],
    "image": "img/publications/pub_2018_ChemickeListy_Karel.png",
    "id": "pub_2018_ChemickeListy_Karel",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "MOLEonline: a web-based tool for analyzing channels, tunnels and pores (2018 update).",
    "year": "2018",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gky309",
    "authors": "Lukáš Pravda, David Sehnal, Dominik Toušek, Veronika Navrátilová, Václav Bazgier, Karel Berka, Radka Svobodová Vařeková, Jaroslav Koča, Michal Otyepka",
    "abstract": "MOLEonline is an interactive, web-based application for the detection and characterization of channels (pores and tunnels) within biomacromolecular structures. The updated version of MOLEonline overcomes limitations of the previous version by incorporating the recently developed LiteMol Viewer visualization engine and providing a simple, fully interactive user experience. The application enables two modes of calculation: one is dedicated to the analysis of channels while the other was specifically designed for transmembrane pores. As the application can use both PDB and mmCIF formats, it can be leveraged to analyze a wide spectrum of biomacromolecular structures, e.g. stemming from NMR, X-ray and cryo-EM techniques. The tool is interconnected with other bioinformatics tools (e.g., PDBe, CSA, ChannelsDB, OPM, UniProt) to help both setup and the analysis of acquired results. MOLEonline provides unprecedented analytics for the detection and structural characterization of channels, as well as information about their numerous physicochemical features. Here we present the application of MOLEonline for structural analyses of α-hemolysin and transient receptor potential mucolipin 1 (TRMP1) pores. The MOLEonline application is freely available via the Internet at https://mole.upol.cz.",
    "category": [
      "Channels",
      "Databases",
      "Lipid Membranes",
      "Selected",
      "Tools",
      "Visualization"
    ],
    "volume": "46",
    "issue": "W1",
    "pages": "W368-W373",
    "image": "img/publications/pub_2018_NUCLEICACIDSRESEARCH_Pravda.png",
    "id": "10.1093/nar/gky309",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://moleonline.cz"
  },
  {
    "title": "Membrane-attached mammalian cytochromes P450: An overview of the membrane's effects on structure, drug binding, and interactions with redox partners.",
    "year": "2018",
    "journal": "Journal of Inorganic Biochemistry",
    "doi": "10.1016/j.jinorgbio.2018.03.002",
    "authors": "Martin Šrejber, Veronika Navrátilová, Markéta Paloncýová, Václav Bazgier, Karel Berka, Pavel Anzenbacher, Michal Otyepka",
    "abstract": "Mammalian cytochromes P450 are an important class of enzymes involved in the biotransformation of many endo- and exogenous compounds. Cytochrome P450 isoforms are attached to the membrane of the endoplasmic reticulum or mitochondria, and their catalytic domains move along the membrane surface while being partially immersed in the membrane environment. Their active sites are connected to both the membrane and cytosolic environments via a complex network of access channels. Consequently, they can accept substrates from both environments. The membrane also supports the interactions of cytochromes P450 with their redox partners. In this review, we provide an overview of current knowledge of the structure, flexibility, and interactions with substrates and redox partners of cytochrome P450 on membranes, amalgamating information derived from both experiments and simulations.",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "183",
    "issue": "",
    "pages": "117-136",
    "image": "img/publications/pub_2018_JOURNALOFINORGANICBIOCHEMISTRY_rejber.png",
    "id": "10.1016/j.jinorgbio.2018.03.002",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Protein structures - a challenge of data delivery, visualization and annotation",
    "year": "2018",
    "journal": "FEBS Open Bio",
    "doi": "",
    "authors": "Karel Berka et al.",
    "abstract": "",
    "category": [
      "Visualization"
    ],
    "image": "img/publications/pub_2018_FEBSOpenBio_Karel.png",
    "id": "pub_2018_FEBSOpenBio_Karel",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Secondary Structure Elements - Annotations and Schematic 2D Visualizations Stable for Individual Protein Families",
    "year": "2018",
    "journal": "Biophysical Journal",
    "doi": "10.1016/J.BPJ.2017.11.307",
    "authors": "Radka Svobodova Varekova, Adam Midlik, Ivana Hutarova Varekova, Jan Hutar, Veronika Navratilova, Jaroslav Koca, Karel Berka",
    "abstract": "",
    "category": [
      "Visualization"
    ],
    "volume": "114",
    "issue": "3",
    "pages": "46a-47a",
    "image": "img/publications/pub_2018_BiophysicalJournal_Karel.png",
    "id": "10.1016/J.BPJ.2017.11.307",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Structural patterns of the human ABCC4/MRP4 exporter in lipid bilayers rationalize clinically observed polymorphisms.",
    "year": "2018",
    "journal": "Pharmacological Research",
    "doi": "10.1016/j.phrs.2018.02.029",
    "authors": "B. Chantemargue, F. Di Meo, K. Berka, N. Picard, H. Arnion, M. Essig, P. Marquet, M. Otyepka, P. Trouillas",
    "abstract": "The ABCC4/MRP4 exporter has a clinical impact on membrane transport of a broad range of xenobiotics. It is expressed at key locations for drug disposition or effects such as in the liver, the kidney and blood cells. Several polymorphisms and mutations (e.g., p.Gly187Trp) leading to MRP4 dysfunction are associated with an increased risk of toxicity of some drugs. So far, no human MRP4 structure has been elucidated, precluding rationalization of these dysfunctions at a molecular level. We constructed an atomistic model of the wild type (WT) MRP4 and the p.Gly187Trp mutant embedded in different lipid bilayers and relaxed them for hundreds of nanoseconds by molecular dynamics simulations. The WT MRP4 molecular structure confirmed and ameliorated the general knowledge about the transmembrane helices and the two nucleotide binding domains. Moreover, our model elucidated positions of three generally unresolved domains: L1 (linker between the two halves of the exporter); L0 (N-terminal domain); and the zipper helices (between the two NBDs). Each domain was thoroughly described in view of its function. The p.Gly187Trp mutation induced a huge structural impact on MRP4, mainly affecting NBD 1 structure and flexibility. The structure of transporter enabled rationalization of known dysfunctions associated with polymorphism of MRP4. This model is available to the pharmacology community to decipher the impact of any other clinically observed polymorphism and mutation on drug transport, giving rise to in silico predictive pharmacogenetics.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Drug Design",
      "Channels"
    ],
    "volume": "133",
    "issue": "",
    "pages": "318-327",
    "image": "img/publications/pub_2018_PHARMACOLOGICALRESEARCH_Chantemargue.png",
    "id": "10.1016/j.phrs.2018.02.029",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "ALK5 kinase inhibitory activity and synthesis of 2,3,4-substituted 5,5-dimethyl-5,6-dihydro-4H-pyrrolo[1,2-b]pyrazoles.",
    "year": "2017",
    "journal": "European Journal of Medicinal Chemistry",
    "doi": "10.1016/j.ejmech.2017.01.018",
    "authors": "Eva Řezníčková, Lukáš Tenora, Pavlína Pospíšilová, Juraj Galeta, Radek Jorda, Karel Berka, Pavel Majer, Milan Potáček, Vladimír Kryštof",
    "abstract": "A series of 2,3,4-substituted 5,5-dimethyl-5,6-dihydro-4H-pyrrolo[1,2-b]pyrazoles (DPPs) was synthesized and evaluated for their ALK5 inhibition activity. The most potent compounds displayed submicromolar IC50 values for ALK5. Preliminary profiling of one of the most active compounds in a panel of 50 protein kinases revealed its selectivity for ALK5. In cells, the compounds caused dose-dependent dephosphorylation of SMAD2, a well-established substrate of ALK5. In addition, the compounds blocked translocation of SMAD2/3 to nuclei of cells stimulated with TGFβ and the protein remained predominantly in cytoplasm, further confirming their molecular target. Therefore, novel DPP derivatives proved to be active as ALK5 inhibitors.",
    "category": [
      "Drug Design",
      "Channels"
    ],
    "volume": "127",
    "issue": "",
    "pages": "632-642",
    "image": "img/publications/pub_2017_EuropeanJournalofMedicinalChemistry_ezn.png",
    "id": "10.1016/j.ejmech.2017.01.018",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Acetylated deoxycholic (DCA) and cholic (CA) acids are potent ligands of pregnane X (PXR) receptor.",
    "year": "2017",
    "journal": "Toxicology Letters",
    "doi": "10.1016/j.toxlet.2016.11.013",
    "authors": "Alejandro Carazo, Lucie Hyrsova, Jan Dusek, Hana Chodounska, Alzbeta Horvatova, Karel Berka, Vaclav Bazgier, Hongying Gan-Schreier, Waleé Chamulitrat, Eva Kudova, Petr Pavek",
    "abstract": "The Pregnane X (PXR), Vitamin D (VDR) and Farnesoid X (FXR) nuclear receptors have been shown to be receptors of bile acids controlling their detoxification or synthesis. Chenodeoxycholic (CDCA) and lithocholic (LCA) acids are ligands of FXR and VDR, respectively, whereas 3-keto and acetylated derivates of LCA have been described as ligands for all three receptors. In this study, we hypothesized that oxidation or acetylation at position 3, 7 and 12 of bile acids DCA (deoxycholic acid), LCA, CA (cholic acid), and CDCA by detoxification enzymes or microbiome may have an effect on the interactions with bile acid nuclear receptors. We employed reporter gene assays in HepG2 cells, the TR-FRET assay with recombinant PXR and RT-PCR to study the effects of acetylated and keto bile acids on the nuclear receptors activation and their target gene expression in differentiated hepatic HepaRG cells. We demonstrate that the DCA 3,12-diacetate and CA 3,7,12-triacetate derivatives are ligands of PXR and DCA 3,12-diacetate induces PXR target genes such as CYP3A4, CYP2B6 and ABCB1/MDR1. In conclusion, we found that acetylated DCA and CA are potent ligands of PXR. Whether the acetylated bile acid derivatives are novel endogenous ligands of PXR with detoxification or physiological functions should be further studied in ongoing experiments.",
    "category": [
      "Drug Design"
    ],
    "volume": "265",
    "issue": "",
    "pages": "86-96",
    "image": "img/publications/pub_2017_ToxicologyLetters_Carazo.png",
    "id": "10.1016/j.toxlet.2016.11.013",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "LiteMol suite: interactive web-based visualization of large-scale macromolecular structure data.",
    "year": "2017",
    "journal": "Nature Methods",
    "doi": "10.1038/nmeth.4499",
    "authors": "David Sehnal, Mandar Deshpande, Radka Svobodová Vařeková, Saqib Mir, Karel Berka, Adam Midlik, Lukáš Pravda, Sameer Velankar, Jaroslav Koča",
    "abstract": "",
    "category": [
      "Visualization",
      "Channels"
    ],
    "volume": "14",
    "issue": "12",
    "pages": "1121-1122",
    "image": "img/publications/pub_2017_NatureMethods_Sehnal.png",
    "id": "10.1038/nmeth.4499",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Molecular insights into the role of a distal F240A mutation that alters CYP1A1 activity towards persistent organic pollutants.",
    "year": "2017",
    "journal": "Biochimica et Biophysica Acta (BBA) - General Subjects",
    "doi": "10.1016/j.bbagen.2017.08.002",
    "authors": "Veronika Navrátilová, Markéta Paloncýová, Karel Berka, Shintaro Mise, Yuki Haga, Chisato Matsumura, Toshiyuki Sakaki, Hideyuki Inui, Michal Otyepka",
    "abstract": "BackgroundCytochromes P450 are major drug-metabolizing enzymes involved in the biotransformation of diverse xenobiotics and endogenous chemicals. Persistent organic pollutants (POPs) are toxic hydrophobic compounds that cause serious environmental problems because of their poor degradability. This calls for rational design of enzymes capable of catalyzing their biotransformation. Cytochrome P450 1A1 isoforms catalyze the biotransformation of some POPs, and constitute good starting points for the design of biocatalysts with tailored substrate specificity.MethodsWe rationalized the activities of wild type and mutant forms of rat cytochrome P450 1A1 towards 2,3,7,8-tetrachloro-dibenzo-p-dioxin (TCDD) and 3,3',4,4'-tetrachlorobiphenyl (PCB77) using experiments and molecular dynamics simulations.ResultsWe showed that the enhanced activity of the CYP1A1 mutant towards TCDD was due to more efficient binding of the substrate in the active site even though the mutated site was over 2.5nm away from the catalytic center. Moreover, this mutation reduced activity towards PCB77.General significanceAmino acids that affect substrate access channels can be viable targets for rational enzyme design even if they are located far from the catalytic site.",
    "category": [
      "Drug Design",
      "Channels"
    ],
    "volume": "1861",
    "issue": "11",
    "pages": "2852-2860",
    "image": "img/publications/pub_2017_BiochimicaetBiophysicaActaGeneralSubjects_Navr.png",
    "id": "10.1016/j.bbagen.2017.08.002",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "RH421 binds into the ATP-binding site on the Na<sup>+</sup>/K<sup>+</sup>-ATPase.",
    "year": "2017",
    "journal": "Biochimica et Biophysica Acta (BBA) - Biomembranes",
    "doi": "10.1016/j.bbamem.2017.07.016",
    "authors": "Miroslav Huličiak, Václav Bazgier, Karel Berka, Martin Kubala",
    "abstract": "The Na+/K+-ATPase plays a key role in ion transport across the plasma membrane of all animal cells. The voltage-sensitive styrylpyrimidium dye RH421 has been used in several laboratories for monitoring of Na+/K+-ATPase kinetics. It is known, that RH421 can interact with the enzyme and it can influence its activity at micromolar concentrations, but structural details of this interaction are only poorly understood. Experiments with isolated large cytoplasmic loop (C45) of Na+/K+-ATPase revealed that RH421 can interact with this part of the protein with dissociation constant 1μM. The Trp-to-RH421 FRET performed on six single-tryptophan mutants revealed that RH421 binds directly into the ATP-binding site. This conclusion was further supported by results from molecular docking, site-directed mutagenesis and by competitive experiments using ATP. Experiments with C45/DPPC mixture revealed that RH421 can bind to both C45 and lipids, but only the former interaction was influenced by the presence of ATP.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "1859",
    "issue": "10",
    "pages": "2113-2122",
    "image": "img/publications/pub_2017_BiochimicaetBiophysicaActaBiomembranes_Huli.png",
    "id": "10.1016/j.bbamem.2017.07.016",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Real-Time Interactive Visualisation of Large Macromolecular Assemblies and Molecular Machines at Atomic Resolution",
    "year": "2017",
    "journal": "Biophysical Journal",
    "doi": "10.1016/J.BPJ.2016.11.984",
    "authors": "David Sehnal, Mandar Deshpande, Radka Svobodova Varekova, Saquib Mir, Karel Berka, Adam Midlik, Lukas Pravda, Sameer Velankar, Jaroslav Koca",
    "abstract": "",
    "category": [
      "Channels"
    ],
    "volume": "112",
    "issue": "3",
    "pages": "178a",
    "image": "img/publications/pub_2017_BiophysicalJournal_Karel.png",
    "id": "10.1016/J.BPJ.2016.11.984",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Structural Bioinformatics Tools for Drug Design: Extraction of Biologically Relevant Information from Structural Databases",
    "year": "2017",
    "journal": "SpringerBriefs in Biochemistry and Molecular Biology",
    "doi": "10.1007/978-3-319-47388-8",
    "authors": "Jaroslav Koča, Radka Svobodová Vařeková, Lukáš Pravda, Karel Berka, Stanislav Geidl, David Sehnal, Michal Otyepka",
    "abstract": "",
    "category": [
      "Databases",
      "Tools",
      "Drug Design",
      "Channels"
    ],
    "volume": "",
    "issue": "",
    "pages": "",
    "image": "img/publications/pub_2017_NoJournal_Karel.png",
    "id": "10.1007/978-3-319-47388-8",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Surface properties of MoS<sub>2</sub> probed by inverse gas chromatography and their impact on electrocatalytic properties.",
    "year": "2017",
    "journal": "Nanoscale",
    "doi": "10.1039/c7nr07342a",
    "authors": "Eva Otyepková, Petr Lazar, Jan Luxa, Karel Berka, Klára Čépe, Zdeněk Sofer, Martin Pumera, Michal Otyepka",
    "abstract": "Layered transition metal dichalcogenides (TMDs) are at the forefront of materials research. One of the most important applications of these materials is their electrocatalytic activity towards hydrogen evolution, and these materials are suggested to replace scarce platinum. Whilst there are significant efforts towards this goal, there are various reports of electrocatalysis of MoS2 (which is the most commonly tested TMD) with large variations of the reported electrocatalytic effect of the material, with overpotential varying by several hundreds of millivolts. Here, we analyzed surface properties of various bulk as well as single layer MoS2 samples using inverse gas chromatography. All samples displayed significant variations in surface energies and their heterogeneities. The surface energy ranged from 50 to 120 mJ m-2 depending on the sample and surface coverage. We correlated the surface properties and previously reported structural features of MoS2 with their electrochemical activities. We concluded that the observed differences in electrochemistry are caused by the surface properties. This is an important finding with an enormous impact on the whole field of electrocatalysis of layered materials.",
    "category": [
      "Tools"
    ],
    "volume": "9",
    "issue": "48",
    "pages": "19236-19244",
    "image": "img/publications/pub_2017_Nanoscale_Otyepkov.png",
    "id": "10.1039/c7nr07342a",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "<i>Arabidopsis</i> histidine kinase 4 cytokinin receptor - The object of interest in ligand-receptor study",
    "year": "2016",
    "journal": "New Biotechnology",
    "doi": "10.1016/J.NBT.2016.06.1292",
    "authors": "Lucia Gallová, Zoila Gándara Barreiro, Václav Bazgier, Karel Berka, Pavel Mazura, Lukáš Spíchal, Miroslav Strnad",
    "abstract": "",
    "category": [
      "Drug Design"
    ],
    "volume": "33",
    "issue": "",
    "pages": "S165",
    "image": "img/publications/pub_2016_NewBiotechnology_Karel.png",
    "id": "10.1016/J.NBT.2016.06.1292",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Design, synthesis and biological activities of new brassinosteroid analogues with a phenyl group in the side chain.",
    "year": "2016",
    "journal": "Organic &amp; Biomolecular Chemistry",
    "doi": "10.1039/c6ob01479h",
    "authors": "M. Kvasnica, J. Oklestkova, V. Bazgier, L. Rárová, P. Korinkova, J. Mikulík, M. Budesinsky, T. Béres, K. Berka, Q. Lu, E. Russinova, M. Strnad",
    "abstract": "We have prepared and studied a series of new brassinosteroid derivatives with a p-substituted phenyl group in the side chain. To obtain the best comparison between molecular docking and biological activities both types of brassinosteroids were synthesized; 6-ketones, 10 examples, and B-lactones, 8 examples. The phenyl group was introduced into the steroid skeleton by Horner-Wadsworth-Emmons. The docking studies were carried out using AutoDock Vina 1.05. Plant biological activities were established using different brassinosteroid bioassays in comparison with natural brassinosteroids. Differences in the production of the plant hormone ethylene were also observed in etiolated pea seedlings after treatment with new brassinosteroids. The most active compounds were lactone 8f and 6-oxo derivatives 8c and 9c, their biological activities were comparable or even better than naturally occurring brassinolide. Finally the cytotoxicity of the new derivatives was studied using human normal and cancer cell lines.",
    "category": [
      "Drug Design",
      "Channels"
    ],
    "volume": "14",
    "issue": "37",
    "pages": "8691-8701",
    "image": "img/publications/pub_2016_OrganicBiomolecularChemistry_Kvasnica.png",
    "id": "10.1039/c6ob01479h",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Effect of Lipid Charge on Membrane Immersion of Cytochrome P450 3A4.",
    "year": "2016",
    "journal": "The Journal of Physical Chemistry B",
    "doi": "10.1021/acs.jpcb.6b10108",
    "authors": "Veronika Navrátilová, Markéta Paloncýová, Karel Berka, Michal Otyepka",
    "abstract": "Microsomal cytochrome P450 enzymes (CYPs) are membrane-attached enzymes that play indispensable roles in biotransformations of numerous endogenous and exogenous compounds. Although recent progress in experiments and simulations has allowed many important features of CYP-membrane interactions to be deciphered, many other aspects remain underexplored. Using microsecond-long molecular dynamics simulations, we analyzed interaction of CYP3A4 with bilayers composed of lipids differing in their polar head groups, i.e., phosphatidylcholine, phosphatidylethanolamine, phosphatidylserine, and phosphatidylglycerol. In the negatively charged lipids, CYP3A4 was immersed more deeply and was more inclined toward the membrane because of favorable electrostatic and hydrogen bonding interactions between the CYP catalytic domain and lipid polar head groups. We showed that electrostatics significantly contributes to positioning and orientation of CYP on the membrane and might contribute to the experimentally observed preferences of individual CYP isoforms to distribute in (dis)ordered membrane microdomains.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Drug Design",
      "Channels"
    ],
    "volume": "120",
    "issue": "43",
    "pages": "11205-11213",
    "image": "img/publications/pub_2016_JournalofPhysicalChemistryB_Navr.png",
    "id": "10.1021/acs.jpcb.6b10108",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Exponential repulsion improves structural predictability of molecular docking.",
    "year": "2016",
    "journal": "Journal of Computational Chemistry",
    "doi": "10.1002/jcc.24473",
    "authors": "Václav Bazgier, Karel Berka, Michal Otyepka, Pavel Banáš",
    "abstract": "Molecular docking is a powerful tool for theoretical prediction of the preferred conformation and orientation of small molecules within protein active sites. The obtained poses can be used for estimation of binding energies, which indicate the inhibition effect of designed inhibitors, and therefore might be used for in silico drug design. However, the evaluation of ligand binding affinity critically depends on successful prediction of the native binding mode. Contemporary docking methods are often based on scoring functions derived from molecular mechanical potentials. In such potentials, nonbonded interactions are typically represented by electrostatic interactions between atom-centered partial charges and standard 6-12 Lennard-Jones potential. Here, we present implementation and testing of a scoring function based on more physically justified exponential repulsion instead of the standard Lennard-Jones potential. We found that this scoring function significantly improved prediction of the native binding modes in proteins bearing narrow active sites such as serine proteases and kinases. © 2016 Wiley Periodicals, Inc.",
    "category": [
      "Tools",
      "Drug Design",
      "Channels"
    ],
    "volume": "37",
    "issue": "28",
    "pages": "2485-2494",
    "image": "img/publications/pub_2016_JournalofComputationalChemistry_Bazgier.png",
    "id": "10.1002/jcc.24473",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "In silico pharmacology: Drug membrane partitioning and crossing.",
    "year": "2016",
    "journal": "Pharmacological Research",
    "doi": "10.1016/j.phrs.2016.06.030",
    "authors": "Florent Di Meo, Gabin Fabre, Karel Berka, Tahani Ossman, Benjamin Chantemargue, Markéta Paloncýová, Pierre Marquet, Michal Otyepka, Patrick Trouillas",
    "abstract": "Over the past decade, molecular dynamics (MD) simulations have become particularly powerful to rationalize drug insertion and partitioning in lipid bilayers. MD simulations efficiently support experimental evidences, with a comprehensive understanding of molecular interactions driving insertion and crossing. Prediction of drug partitioning is discussed with respect to drug families (anesthetics; β-blockers; non-steroidal anti-inflammatory drugs; antioxidants; antiviral drugs; antimicrobial peptides). To accurately evaluate passive permeation coefficients turned out to be a complex theoretical challenge; however the recent methodological developments based on biased MD simulations are particularly promising. Particular attention is paid to membrane composition (e.g., presence of cholesterol), which influences drug partitioning and permeation. Recent studies concerning in silico models of membrane proteins involved in drug transport (influx and efflux) are also reported here. These studies have allowed gaining insight in drug efflux by, e.g., ABC transporters at an atomic resolution, explicitly accounting for the mandatory forces induced by the surrounded lipid bilayer. Large-scale conformational changes were thoroughly analyzed.",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "111",
    "issue": "",
    "pages": "471-486",
    "image": "img/publications/pub_2016_PharmacologicalResearch_Di.png",
    "id": "10.1016/j.phrs.2016.06.030",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Ion Pathways in the Na<sup>+</sup>/K<sup>+</sup>-ATPase.",
    "year": "2016",
    "journal": "Journal of Chemical Information and Modeling",
    "doi": "10.1021/acs.jcim.6b00353",
    "authors": "Petra Čechová, Karel Berka, Martin Kubala",
    "abstract": "Na+/K+-ATPase (NKA) is an essential cation pump protein responsible for the maintenance of the sodium and potassium gradients across the plasma membrane. Recently published high-resolution structures revealed amino acids forming the cation binding sites (CBS) in the transmembrane domain and variable position of the domains in the cytoplasmic headpiece. Here we report molecular dynamic simulations of the human NKA α1β1 isoform embedded into DOPC bilayer. We have analyzed the NKA conformational changes in the presence of Na+- or K+-cations in the CBS, for various combinations of the cytoplasmic ligands, and the two major enzyme conformations in the 100 ns runs (more than 2.5 μs of simulations in total). We identified two novel cytoplasmic pathways along the pairs of transmembrane helices TM3/TM7 or TM6/TM9 that allow hydration of the CBS or transport of cations from/to the bulk. These findings can provide a structural explanation for previous mutagenesis studies, where mutation of residues that are distal from the CBS resulted in the alteration of the enzyme affinity to the transported cations or change in the enzyme activity.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "56",
    "issue": "12",
    "pages": "2434-2444",
    "image": "img/publications/pub_2016_JournalofChemicalInformationandModeling_echov.png",
    "id": "10.1021/acs.jcim.6b00353",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Novel thidiazuron-derived inhibitors of cytokinin oxidase/dehydrogenase.",
    "year": "2016",
    "journal": "Plant Molecular Biology",
    "doi": "10.1007/s11103-016-0509-0",
    "authors": "Jaroslav Nisler, David Kopečný, Radka Končitíková, Marek Zatloukal, Václav Bazgier, Karel Berka, David Zalabák, Pierre Briozzo, Miroslav Strnad, Lukáš Spíchal",
    "abstract": "Key messageTwo new TDZ derivatives (HETDZ and 3FMTDZ) are very potent inhibitors of CKX and are promising candidates for in vivo studies. Cytokinin hormones regulate a wide range of essential processes in plants. Thidiazuron (N-phenyl-N'-1,2,3-thiadiazol-5-yl urea, TDZ), formerly registered as a cotton defoliant, is a well known inhibitor of cytokinin oxidase/dehydrogenase (CKX), an enzyme catalyzing the degradation of cytokinins. TDZ thus increases the lifetime of cytokinins and their effects in plants. We used in silico modeling to design, synthesize and characterize twenty new TDZ derivatives with improved inhibitory properties. Two compounds, namely 1-[1,2,3]thiadiazol-5-yl-3-(3-trifluoromethoxy-phenyl)urea (3FMTDZ) and 1-[2-(2-hydroxyethyl)phenyl]-3-(1,2,3-thiadiazol-5-yl)urea (HETDZ), displayed up to 15-fold lower IC 50 values compared with TDZ for AtCKX2 from Arabidopsis thaliana and ZmCKX1 and ZmCKX4a from Zea mays. Binding modes of 3FMTDZ and HETDZ were analyzed by X-ray crystallography. Crystal structure complexes, solved at 2.0 Å resolution, revealed that HETDZ and 3FMTDZ bound differently in the active site of ZmCKX4a: the thiadiazolyl ring of 3FMTDZ was positioned over the isoalloxazine ring of FAD, whereas that of HETDZ had the opposite orientation, pointing toward the entrance of the active site. The compounds were further tested for cytokinin activity in several cytokinin bioassays. We suggest that the combination of simple synthesis, lowered cytokinin activity, and enhanced inhibitory effects on CKX isoforms, makes 3FMTDZ and HETDZ suitable candidates for in vivo studies.",
    "category": [
      "Drug Design",
      "Channels"
    ],
    "volume": "92",
    "issue": "1-2",
    "pages": "235-248",
    "image": "img/publications/pub_2016_PlantMolecularBiology_Nisler.png",
    "id": "10.1007/s11103-016-0509-0",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Role of Enzyme Flexibility in Ligand Access and Egress to Active Site: Bias-Exchange Metadynamics Study of 1,3,7-Trimethyluric Acid in Cytochrome P450 3A4.",
    "year": "2016",
    "journal": "Journal of Chemical Theory and Computation",
    "doi": "10.1021/acs.jctc.6b00075",
    "authors": "Markéta Paloncýová, Veronika Navrátilová, Karel Berka, Alessandro Laio, Michal Otyepka",
    "abstract": "Although the majority of enzymes have buried active sites, very little is known about the energetics and mechanisms associated with substrate and product channeling in and out. Gaining direct information about these processes is a challenging task both for experimental and theoretical techniques. Here, we present a methodology that enables following of a ligand during its passage to the active site of cytochrome P450 (CYP) 3A4 and mapping of the free energy associated with this process. The technique is based on a combination of a bioinformatics tool for identifying access channels and bias-exchange metadynamics and provides converged free energies in good agreement with experimental data. In addition, it identifies the energetically preferred escape routes, limiting steps, and amino acids residues lining the channel. The approach was applied to mapping of a complex channel network in a complex environment, i.e., CYP3A4 attached to a lipid bilayer mimicking an endoplasmic reticulum membrane. The results provided direct information about the energetics and conformational changes associated with the ligand channeling. The methodology can easily be adapted to study channeling through other flexible biomacromolecular channels.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Drug Design",
      "Channels"
    ],
    "volume": "12",
    "issue": "4",
    "pages": "2101-2109",
    "image": "img/publications/pub_2016_JournalofChemicalTheoryandComputation_Palonc.png",
    "id": "10.1021/acs.jctc.6b00075",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Synthesis, biological evaluation and molecular modeling of a novel series of 7-azaindole based tri-heterocyclic compounds as potent CDK2/Cyclin E inhibitors.",
    "year": "2016",
    "journal": "European Journal of Medicinal Chemistry",
    "doi": "10.1016/j.ejmech.2015.12.023",
    "authors": "Christine B. Baltus, Radek Jorda, Christophe Marot, Karel Berka, Václav Bazgier, Vladimír Kryštof, Gildas Prié, Marie-Claude Viaud-Massuard",
    "abstract": "From four molecules, inspired by the structural features of fascaplysin, with an interesting potential to inhibit cyclin-dependent kinases (CDKs), we designed a new series of tri-heterocyclic derivatives based on 1H-pyrrolo[2,3-b]pyridine (7-azaindole) and triazole heterocycles. Using a Huisgen type [3 + 2] cycloaddition as the convergent key step, 24 derivatives were synthesized and their biological activities were evaluated. Comparative molecular field analysis (CoMFA), based on three-dimensional quantitative structure-activity relationship (3D-QSAR) studies, was conducted on a series of 30 compounds from the literature with high to low known inhibitory activity towards CDK2/cyclin E and was validated by a test set of 5 compounds giving satisfactory predictive r(2) value of 0.92. Remarkably, it also gave a good prediction of pIC50 for our tri-heterocyclic series which reinforce the validation of this model for the pIC50 prediction of external set compounds. The most promising compound, 43, showed a micro-molar range inhibitory activity against CDK2/cyclin E and also an antiproliferative and proapoptotic activity against a panel of cancer cell lines.",
    "category": [
      "Tools",
      "Drug Design",
      "Channels"
    ],
    "volume": "108",
    "issue": "",
    "pages": "701-719",
    "image": "img/publications/pub_2016_EuropeanJournalofMedicinalChemistry_Baltus.png",
    "id": "10.1016/j.ejmech.2015.12.023",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "The Role of Protein-Protein and Protein-Membrane Interactions on P450 Function.",
    "year": "2016",
    "journal": "Drug Metabolism and Disposition",
    "doi": "10.1124/dmd.115.068569",
    "authors": "Emily E. Scott, C. Roland Wolf, Michal Otyepka, Sara C. Humphreys, James R. Reed, Colin J. Henderson, Lesley A. McLaughlin, Markéta Paloncýová, Veronika Navrátilová, Karel Berka, Pavel Anzenbacher, Upendra P. Dahal, Carlo Barnaba, James A. Brozik, Jeffrey P. Jones, D. Fernando Estrada, Jennifer S. Laurence, Ji Won Park, Wayne L. Backes",
    "abstract": "This symposium summary, sponsored by the ASPET, was held at Experimental Biology 2015 on March 29, 2015, in Boston, Massachusetts. The symposium focused on: 1) the interactions of cytochrome P450s (P450s) with their redox partners; and 2) the role of the lipid membrane in their orientation and stabilization. Two presentations discussed the interactions of P450s with NADPH-P450 reductase (CPR) and cytochrome b5. First, solution nuclear magnetic resonance was used to compare the protein interactions that facilitated either the hydroxylase or lyase activities of CYP17A1. The lyase interaction was stimulated by the presence of b5 and 17α-hydroxypregnenolone, whereas the hydroxylase reaction was predominant in the absence of b5. The role of b5 was also shown in vivo by selective hepatic knockout of b5 from mice expressing CYP3A4 and CYP2D6; the lack of b5 caused a decrease in the clearance of several substrates. The role of the membrane on P450 orientation was examined using computational methods, showing that the proximal region of the P450 molecule faced the aqueous phase. The distal region, containing the substrate-access channel, was associated with the membrane. The interaction of NADPH-P450 reductase (CPR) with the membrane was also described, showing the ability of CPR to \"helicopter\" above the membrane. Finally, the endoplasmic reticulum (ER) was shown to be heterogeneous, having ordered membrane regions containing cholesterol and more disordered regions. Interestingly, two closely related P450s, CYP1A1 and CYP1A2, resided in different regions of the ER. The structural characteristics of their localization were examined. These studies emphasize the importance of P450 protein organization to their function.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Drug Design",
      "Channels"
    ],
    "volume": "44",
    "issue": "4",
    "pages": "576-590",
    "image": "img/publications/pub_2016_DrugMetabolismandDisposition_Scott.png",
    "id": "10.1124/dmd.115.068569",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "2,6,9-Trisubstituted purines as CRK3 kinase inhibitors with antileishmanial activity in vitro.",
    "year": "2015",
    "journal": "Bioorganic &amp; Medicinal Chemistry Letters",
    "doi": "10.1016/j.bmcl.2015.04.030",
    "authors": "Eva Řezníčková, Alexandr Popa, Tomáš Gucký, Marek Zatloukal, Libor Havlíček, Václav Bazgier, Karel Berka, Radek Jorda, Igor Popa, Abdelmajeed Nasereddin, Charles L. Jaffe, Vladimír Kryštof, Miroslav Strnad",
    "abstract": "Here we describe the leishmanicidal activities of a library of 2,6,9-trisubstituted purines that were screened for interaction with Cdc2-related protein kinase 3 (CRK3) and subsequently for activity against parasitic Leishmania species. The most active compound inhibited recombinant CRK3 with an IC50 value of 162 nM and was active against Leishmania major and Leishmania donovani at low micromolar concentrations in vitro. Its mode of binding to CRK3 was investigated by molecular docking using a homology model.",
    "category": [
      "Drug Design",
      "Channels"
    ],
    "volume": "25",
    "issue": "11",
    "pages": "2298-2301",
    "image": "img/publications/pub_2015_BioorganicMedicinalChemistryLetters_ezn.png",
    "id": "10.1016/j.bmcl.2015.04.030",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Characterization of a Pyrazolo[4,3-d]pyrimidine Inhibitor of Cyclin-Dependent Kinases 2 and 5 and Aurora A With Pro-Apoptotic and Anti-Angiogenic Activity In Vitro.",
    "year": "2015",
    "journal": "Chemical Biology &amp; Drug Design",
    "doi": "10.1111/cbdd.12618",
    "authors": "Eva Řezníčková, Sabine Weitensteiner, Libor Havlíček, Radek Jorda, Tomáš Gucký, Karel Berka, Václav Bazgier, Stefan Zahler, Vladimír Kryštof, Miroslav Strnad",
    "abstract": "Selective inhibitors of kinases that regulate the cell cycle, such as cyclin-dependent kinases (CDKs) and aurora kinases, could potentially become powerful tools for the treatment of cancer. We prepared and studied a series of 3,5,7-trisubstituted pyrazolo[4,3-d]pyrimidines, a new CDK inhibitor scaffold, to assess their CDK2 inhibitory and antiproliferative activities. A new compound, 2i, which preferentially inhibits CDK2, CDK5, and aurora A was identified. Both biochemical and cellular assays indicated that treatment with compound 2i caused the downregulation of cyclins A and B, the dephosphorylation of histone H3 at Ser10, and the induction of mitochondrial apoptosis in the HCT-116 colon cancer cell line. It also reduced migration as well as tube and lamellipodia formation in human endothelial cells. The kinase inhibitory profile of compound 2i suggests that its anti-angiogenic activity is linked to CDK5 inhibition. This dual mode of action involving apoptosis induction in cancer cells and the blocking of angiogenesis-like activity in endothelial cells offers possible therapeutic potential.",
    "category": [
      "Tools",
      "Drug Design"
    ],
    "volume": "86",
    "issue": "6",
    "pages": "1528-1540",
    "image": "img/publications/pub_2015_ChemicalBiologyandDrugDesign_ezn.png",
    "id": "10.1111/cbdd.12618",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Chrysin, baicalein and galangin are indirect activators of the human constitutive androstane receptor (CAR).",
    "year": "2015",
    "journal": "Toxicology Letters",
    "doi": "10.1016/j.toxlet.2015.01.013",
    "authors": "Alejandro Carazo Fernández, Tomas Smutny, Lucie Hyrsová, Karel Berka, Petr Pavek",
    "abstract": "The constitutive androstane receptor (CAR) is a crucial transcriptional regulator of key xenobiotic-metabolizing enzymes such as cytochrome P450 CYP3A4, CYP2C9 and CYP2B6. The flavonoids chrysin, baicalein and galangin have been reported to activate CAR and interfere with EGFR signaling. Nevertheless, it is not known if these flavonoids are direct CAR ligands or indirect phenobarbital-like CAR activators via the inhibition of epidermal growth factor receptor (EGFR) signaling. We analyze the interactions of chrysin, galangin and baicalein and its glycoside baicalin with human CAR. We have employed and validated methods that can study direct interaction with the CAR ligand binding pocket. Secondly, we determined if the compounds affect human EGFR signaling and interact with EGFR. Employing a TR-FRET coactivator assay with recombinant CAR or CAR assembly assay, a consistent activation of CAR with flavonoids and phenobarbital was not observed. It was determined, however, that galangin, chrysin, and baicalein may slightly repress EGFR-Tyr1068 autophosphorylation after EGF treatment, phosphorylation of downstream transcription factor ELK1 and stimulate EGFP-CAR nuclear translocation in primary human hepatocytes. These data suggest that flavonoids chrysin, galangin and baicalein are indirect human CAR activators. This study also demonstrates new approach how to test the direct CAR interaction with its ligands.",
    "category": [
      "Drug Design"
    ],
    "volume": "233",
    "issue": "2",
    "pages": "68-77",
    "image": "img/publications/pub_2015_ToxicologyLetters_Carazo.png",
    "id": "10.1016/j.toxlet.2015.01.013",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Coarse-grain simulations of skin ceramide NS with newly derived parameters clarify structure of melted phase.",
    "year": "2015",
    "journal": "The Journal of Physical Chemistry B",
    "doi": "10.1021/jp5092366",
    "authors": "Žofie Sovová, Karel Berka, Michal Otyepka, Petr Jurečka",
    "abstract": "Ceramides are lipids that are involved in numerous biologically important structures (e.g., the stratum corneum and ceramide-rich platforms) and processes (e.g., signal transduction and membrane fusion), but their behavior is not fully understood. We report coarse-grain force field parameters for N-lignocerylsphingosine (ceramide NS, also known as ceramide 2) that are consistent with the Martini force field. These parameters were optimized for simulations in the gel phase and validated against atomistic simulations. Coarse-grained simulations with our parameters provide areas per lipid, membrane thicknesses, and electron density profiles that are in good agreement with atomistic simulations. Properties of the simulated membranes are compared with available experimental data. The obtained parameters were used to model the phase behavior of ceramide NS as a function of temperature and hydration. At low water content and above the main phase transition temperature, the bilayer melts into an irregular phase, which may correspond to the unstructured melted-chain phase observed in X-ray diffraction experiments. The developed parameters also reproduce the extended conformation of ceramide, which may occur in the stratum corneum. The parameters presented herein will facilitate studies on important complex functional structures such as the uppermost layer of the skin and ceramide-rich platforms in phospholipid membranes.",
    "category": [
      "Lipid Membranes"
    ],
    "volume": "119",
    "issue": "10",
    "pages": "3988-3998",
    "image": "img/publications/pub_2015_JournalofPhysicalChemistryB_Sovov.png",
    "id": "10.1021/jp5092366",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Cytochrome P450 Oxidoreductase Simulations: Cofactors Movement and Structural Changes",
    "year": "2015",
    "journal": "Protein Science",
    "doi": "",
    "authors": "Karel Berka et al.",
    "abstract": "",
    "category": [
      "Tools",
      "Drug Design"
    ],
    "image": "img/publications/pub_2015_ProteinScience_Karel.png",
    "id": "pub_2015_ProteinScience_Karel",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Effect of cholesterol on the structure of membrane-attached cytochrome P450 3A4.",
    "year": "2015",
    "journal": "Journal of Chemical Information and Modeling",
    "doi": "10.1021/ci500645k",
    "authors": "Veronika Navrátilová, Markéta Paloncýová, Michaela Kajšová, Karel Berka, Michal Otyepka",
    "abstract": "Cholesterol is a widely researched component of biological membranes that significantly influences membrane properties. Human cytochrome P450 3A4 (CYP3A4) is an important drug-metabolizing enzyme, wherein the catalytic domain is attached to a membrane by an N-terminal α-helical transmembrane anchor. We analyzed the behavior of CYP3A4 immersed in a 1,2-dioleoyl-sn-glycero-3-phosphocholine (DOPC) membrane with various amounts of cholesterol. The presence of cholesterol caused ordering and thickening of the membrane and led to greater immersion and inclination of CYP3A4 toward the membrane. Cholesterol also lowered the flexibility of and tended to concentrate around membrane-immersed parts of CYP3A4. Further, the pattern of the CYP3A4 active-site access channels was altered in the presence of cholesterol. In summary, cholesterol in the membrane affected the positioning and structural features of CYP3A4, which in turn may have implications for the activity of this enzyme in various membranes and membrane parts with different cholesterol content.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Drug Design",
      "Channels"
    ],
    "volume": "55",
    "issue": "3",
    "pages": "628-635",
    "image": "img/publications/pub_2015_JournalofChemicalInformationandModeling_Navr.png",
    "id": "10.1021/ci500645k",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Effect of Membrane Composition on the Structure of Membrane-Attached Cytochrome P450 3A4",
    "year": "2015",
    "journal": "Protein Science",
    "doi": "",
    "authors": "Karel Berka et al.",
    "abstract": "",
    "category": [
      "Drug Design",
      "Lipid Membranes"
    ],
    "image": "img/publications/pub_2015_ProteinScience_Karel_2.png",
    "id": "pub_2015_ProteinScience_Karel_2",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Lipocarbazole, an efficient lipid peroxidation inhibitor anchored in the membrane.",
    "year": "2015",
    "journal": "Bioorganic &amp; Medicinal Chemistry",
    "doi": "10.1016/j.bmc.2015.05.031",
    "authors": "Gabin Fabre, Anne Hänchen, Claude-Alain Calliste, Karel Berka, Srinivas Banala, Michal Otyepka, Roderich D. Süssmuth, Patrick Trouillas",
    "abstract": "Lipid peroxidation is a major deleterious effect caused by oxidative stress. It is involved in various diseases such as atherosclerosis, rheumatoid arthritis and neurodegenerative diseases. In order to inhibit lipid peroxidation, antioxidants must efficiently scavenge free radicals and penetrate inside biological membranes. Lipocarbazole has recently been shown to be a powerful antioxidant in solution. Here, we show its powerful capacity as lipid peroxidation inhibitor. Its mechanism of action is rationalized based on molecular dynamics simulations on a biomembrane model, quantum calculations and experimental evaluation. The role of the lipocarbazole side chain is particularly highlighted as a critical chemical feature responsible for its antioxidant activity.",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "23",
    "issue": "15",
    "pages": "4866-4870",
    "image": "img/publications/pub_2015_BioorganicMedicinalChemistry_Fabre.png",
    "id": "10.1016/j.bmc.2015.05.031",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Structural Changes in Ceramide Bilayers Rationalize Increased Permeation through Stratum Corneum Models with Shorter Acyl Tails.",
    "year": "2015",
    "journal": "The Journal of Physical Chemistry B",
    "doi": "10.1021/acs.jpcb.5b05522",
    "authors": "Markéta Paloncýová, Kateřina Vávrová, Žofie Sovová, Russell DeVane, Michal Otyepka, Karel Berka",
    "abstract": "Ceramides are indispensable constituents of the stratum corneum (SC), the uppermost impermeable layer of human skin. Ceramides with shorter (four- to eight-carbon acyl chains) fatty acid chains increase skin and model membrane permeability, while further shortening of the chain leads to increased resistance to penetration almost as good as that of ceramides from healthy skin (24 carbons long on average). Here we address the extent to which the atomistic CHARMM36 and coarse-grain MARTINI molecular dynamics (MD) simulations reflect the skin permeability data. As a result, we observed the same bell-shaped permeability trend for water that was observed in the skin and multilayer membrane experiments for model compounds. We showed that the enhanced permeability of the short ceramides is mainly caused by the disturbance of their headgroup conformation because of their inability to accommodate the shorter lipid acyl chain into a typical hairpin conformation, which further led to their destabilization and phase separation. As MD simulations described well delicate structural features of SC membranes, they seem to be suitable for further studies of the SC superstructure, including the development of skin penetration enhancers for transdermal drug delivery and skin toxicity risk assessment studies.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Drug Design",
      "Channels"
    ],
    "volume": "119",
    "issue": "30",
    "pages": "9811-9819",
    "image": "img/publications/pub_2015_JournalofPhysicalChemistryB_Palonc.png",
    "id": "10.1021/acs.jpcb.5b05522",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Synergism of antioxidant action of vitamins E, C and quercetin is related to formation of molecular associations in biomembranes.",
    "year": "2015",
    "journal": "Chemical Communications",
    "doi": "10.1039/c5cc00636h",
    "authors": "Gabin Fabre, Imene Bayach, Karel Berka, Markéta Paloncýová, Marcelina Starok, Claire Rossi, Jean-Luc Duroux, Michal Otyepka, Patrick Trouillas",
    "abstract": "Vitamins E, C and polyphenols (flavonoids and non-flavonoids) are major natural antioxidants capable of preventing damage generated by oxidative stress. Here we show the capacity of these antioxidants to form non-covalent association within lipid bilayers close to the membrane/cytosol interface. Antioxidant regeneration is significantly enhanced in these complexes.",
    "category": [
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "51",
    "issue": "36",
    "pages": "7713-7716",
    "image": "img/publications/pub_2015_ChemicalCommunications_Fabre.png",
    "id": "10.1039/c5cc00636h",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Tools and data services registry: a community effort to document bioinformatics resources.",
    "year": "2015",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkv1116",
    "authors": "Jon Ison, Kristoffer Rapacki, Hervé Ménager, Matúš Kalaš, Emil Rydza, Piotr Chmura, Christian Anthon, Niall Beard, Karel Berka, Dan Bolser, Tim Booth, Anthony Bretaudeau, Jan Brezovsky, Rita Casadio, Gianni Cesareni, Frederik Coppens, Michael Cornell, Gianmauro Cuccuru, Kristian Davidsen, Gianluca Della Vedova, Tunca Dogan, Olivia Doppelt-Azeroual, Laura Emery, Elisabeth Gasteiger, Thomas Gatter, Tatyana Goldberg, Marie Grosjean, Björn Grüning, Manuela Helmer-Citterich, Hans Ienasescu, Vassilios Ioannidis, Martin Closter Jespersen, Rafael Jimenez, Nick Juty, Peter Juvan, Maximilian Koch, Camille Laibe, Jing-Woei Li, Luana Licata, Fabien Mareuil, Ivan Mičetić, Rune Møllegaard Friborg, Sebastien Moretti, Chris Morris, Steffen Möller, Aleksandra Nenadic, Hedi Peterson, Giuseppe Profiti, Peter Rice, Paolo Romano, Paola Roncaglia, Rabie Saidi, Andrea Schafferhans, Veit Schwämmle, Callum Smith, Maria Maddalena Sperotto, Heinz Stockinger, Radka Svobodová Vařeková, Silvio C.E. Tosatto, Victor de la Torre, Paolo Uva, Allegra Via, Guy Yachdav, Federico Zambelli, Gert Vriend, Burkhard Rost, Helen Parkinson, Peter Løngreen, Søren Brunak",
    "abstract": "Life sciences are yielding huge data sets that underpin scientific discoveries fundamental to improvement in human health, agriculture and the environment. In support of these discoveries, a plethora of databases and tools are deployed, in technically complex and diverse implementations, across a spectrum of scientific disciplines. The corpus of documentation of these resources is fragmented across the Web, with much redundancy, and has lacked a common standard of information. The outcome is that scientists must often struggle to find, understand, compare and use the best resources for the task at hand.Here we present a community-driven curation effort, supported by ELIXIR-the European infrastructure for biological information-that aspires to a comprehensive and consistent registry of information about bioinformatics resources. The sustainable upkeep of this Tools and Data Services Registry is assured by a curation effort driven by and tailored to local needs, and shared amongst a network of engaged partners.As of November 2015, the registry includes 1785 resources, with depositions from 126 individual registrations including 52 institutional providers and 74 individuals. With community support, the registry can become a standard for dissemination of information about bioinformatics resources: we welcome everyone to join us in this common endeavour. The registry is freely available at https://bio.tools.",
    "category": [
      "Databases",
      "Tools"
    ],
    "volume": "44",
    "issue": "D1",
    "pages": "D38-D47",
    "image": "img/publications/pub_2015_NucleicAcidsResearch_Ison.png",
    "id": "10.1093/nar/gkv1116",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://bio.tools"
  },
  {
    "title": "Amphiphilic drug-like molecules accumulate in a membrane below the head group region.",
    "year": "2014",
    "journal": "The Journal of Physical Chemistry B",
    "doi": "10.1021/jp4112052",
    "authors": "Markéta Paloncýová, Russell DeVane, Bruce Murch, Karel Berka, Michal Otyepka",
    "abstract": "The partitioning behavior of drug-like molecules into biomembranes has a crucial impact on the design and efficacy of therapeutic drugs. Thermodynamic properties connected with the interaction of molecules with membranes can be evaluated by calculating free-energy profiles normal to the membrane surface. We calculated the free-energy profiles of 25 drug-like molecules in a 1,2-dioleoyl-sn-glycero-3-phosphocholine (DOPC) membrane and free energies of solvation in water and heptane using two methods, molecular dynamics (MD) simulations with the Berger lipid force field and COSMOmic, based on a continuum conductor-like screening model for realistic solvation (COSMO-RS). The biased MD simulations (in total ∼22 μs long) were relatively computationally expensive, whereas the COSMOmic approach offered a significantly less expensive alternative. Both methods provided similar results and showed that the studied amphiphilic drug-like molecules accumulate in the membrane, with the majority localized below the head group region. The MD simulations were more lipophilic and gave free-energy profiles that were systematically deeper than those calculated by COSMOmic. To investigate the physical nature of the increased lipophilicity, we analyzed a water/heptane system and identified that it is most likely caused by overestimation of the attractive term of the Lennard-Jones potential in lipid tails. We concluded that COSMOmic can be successfully used for high-throughput computations of global thermodynamic properties, for example, partition coefficients and energy barrier heights, in phosphocholine membranes. In contrast, MD is better for investigating local properties like molecular positioning and orientation in the membrane because they more accurately reflect the complex structure of lipid bilayers. MD is also useful for studies of highly complex systems, for example, drug-membrane-protein interactions.",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "118",
    "issue": "4",
    "pages": "1030-1039",
    "image": "img/publications/pub_2014_JournalofPhysicalChemistryB_Palonc.png",
    "id": "10.1021/jp4112052",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Anatomy of enzyme channels.",
    "year": "2014",
    "journal": "BMC Bioinformatics",
    "doi": "10.1186/s12859-014-0379-x",
    "authors": "Lukáš Pravda, Karel Berka, Radka Svobodová Vařeková, David Sehnal, Pavel Banáš, Roman A Laskowski, Jaroslav Koča, Michal Otyepka",
    "abstract": "BackgroundEnzyme active sites can be connected to the exterior environment by one or more channels passing through the protein. Despite our current knowledge of enzyme structure and function, surprisingly little is known about how often channels are present or about any structural features such channels may have in common.Results15 Å) leading to the active sites of 4,306 enzyme structures. We find that over 64% of enzymes contain two or more long channels, their typical length being 28 Å. We show that amino acid compositions of the channel significantly differ both to the composition of the active site, surface and interior of the protein.ConclusionsThe majority of enzymes have buried active sites accessible via a network of access channels. This indicates that enzymes tend to have buried active sites, with channels controlling access to, and egress from, them, and that suggests channels may play a key role in helping determine enzyme substrate.",
    "category": [
      "Tools",
      "Channels"
    ],
    "volume": "15",
    "issue": "1",
    "pages": "",
    "image": "img/publications/pub_2014_BMCBioinformatics_Pravda.png",
    "id": "10.1186/s12859-014-0379-x",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Benchmarking of Force Fields for Molecule-Membrane Interactions.",
    "year": "2014",
    "journal": "Journal of Chemical Theory and Computation",
    "doi": "10.1021/ct500419b",
    "authors": "Markéta Paloncýová, Gabin Fabre, Russell H. DeVane, Patrick Trouillas, Karel Berka, Michal Otyepka",
    "abstract": "Studies of drug-membrane interactions witness an ever-growing interest, as penetration, accumulation, and positioning of drugs play a crucial role in drug delivery and metabolism in human body. Molecular dynamics simulations complement nicely experimental measurements and provide us with new insight into drug-membrane interactions; however, the quality of the theoretical data dramatically depends on the quality of the force field used. We calculated the free energy profiles of 11 molecules through a model dimyristoylphosphatidylcholine (DMPC) membrane bilayer using five force fields, namely Berger, Slipids, CHARMM36, GAFFlipids, and GROMOS 43A1-S3. For the sake of comparison, we also employed the semicontinuous tool COSMOmic. High correlation was observed between theoretical and experimental partition coefficients (log K). Partition coefficients calculated by all-atomic force fields (Slipids, CHARMM36, and GAFFlipids) and COSMOmic differed by less than 0.75 log units from the experiment and Slipids emerged as the best performing force field. This work provides the following recommendations (i) for a global, systematic and high throughput thermodynamic evaluations (e.g., log K) of drugs COSMOmic is a tool of choice due to low computational costs; (ii) for studies of the hydrophilic molecules CHARMM36 should be considered; and (iii) for studies of more complex systems, taking into account all pros and cons, Slipids is the force field of choice.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Drug Design",
      "Channels"
    ],
    "volume": "10",
    "issue": "9",
    "pages": "4143-4151",
    "image": "img/publications/pub_2014_JournalofChemicalTheoryandComputation_Palonc.png",
    "id": "10.1021/ct500419b",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Biological activities of new monohydroxylated brassinosteroid analogues with a carboxylic group in the side chain.",
    "year": "2014",
    "journal": "Steroids",
    "doi": "10.1016/j.steroids.2014.04.007",
    "authors": "Miroslav Kvasnica, Jana Oklestkova, Vaclav Bazgier, Lucie Rarova, Karel Berka, Miroslav Strnad",
    "abstract": "Thirteen monohydroxylated brassinosteroids analogues were synthesized and tested for their biological activity in plant and animal systems. The cytotoxic activity of the products was studied using human normal and cancer cell lines with 28-homocastasterone as positive control, their brassinolide type activity was established using the bean second-internode test with 24-epibrassinolide as standard.",
    "category": [
      "Drug Design"
    ],
    "volume": "85",
    "issue": "",
    "pages": "58-64",
    "image": "img/publications/pub_2014_Steroids_Kvasnica.png",
    "id": "10.1016/j.steroids.2014.04.007",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "LiteMol: web-based 3D visualization of macromolecular structure data",
    "year": "2014",
    "journal": "Acta Crystallographica Section A: Foundations and Advances",
    "doi": "",
    "authors": "Karel Berka et al.",
    "abstract": "",
    "category": [
      "Visualization",
      "Channels"
    ],
    "image": "img/publications/pub_2014_ActaCrystallographicaSectionAFoundationsandAdvances_Karel.png",
    "id": "pub_2014_ActaCrystallographicaSectionAFoundationsandAdvances_Karel",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "PDBsum additions.",
    "year": "2014",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gkt940",
    "authors": "Tjaart A. P. de Beer, Karel Berka, Janet M. Thornton, Roman A. Laskowski",
    "abstract": "PDBsum, http://www.ebi.ac.uk/pdbsum, is a website providing numerous pictorial analyses of each entry in the Protein Data Bank. It portrays the structural features of all proteins, DNA and ligands in the entry, as well as depicting the interactions between them. The latest features, described here, include annotation of human protein sequences with their naturally occurring amino acid variants, dynamic graphs showing the relationships between related protein domain architectures, analyses of ligand binding clusters across different experimental determinations of the same protein, analyses of tunnels in proteins and new search options.",
    "category": [
      "Tools",
      "Channels"
    ],
    "volume": "42",
    "issue": "D1",
    "pages": "D292-D296",
    "image": "img/publications/pub_2014_NucleicAcidsResearch_de.png",
    "id": "10.1093/nar/gkt940",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "http://www.ebi.ac.uk/pdbsum"
  },
  {
    "title": "Photoluminescence effects of graphitic core size and surface functional groups in carbon dots: COO- induced red-shift emission",
    "year": "2014",
    "journal": "Carbon",
    "doi": "10.1016/j.carbon.2014.01.008",
    "authors": "Katerina Hola, Athanasios B. Bourlinos, Ondrej Kozak, Karel Berka, Karolina M. Siskova, Marketa Havrdova, Jiri Tucek, Klara Safarova, Michal Otyepka, Emmanuel P. Giannelis, Radek Zboril",
    "abstract": "",
    "category": [
      "Other / General"
    ],
    "volume": "70",
    "issue": "",
    "pages": "279-286",
    "image": "img/publications/pub_2014_Carbon_Karel.png",
    "id": "10.1016/j.carbon.2014.01.008",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Rationalization of reduced penetration of drugs through ceramide gel phase membrane.",
    "year": "2014",
    "journal": "Langmuir",
    "doi": "10.1021/la503289v",
    "authors": "Markéta Paloncýová, Russell H. DeVane, Bruce P. Murch, Karel Berka, Michal Otyepka",
    "abstract": "Since computing resources have advanced enough to allow routine molecular simulation studies of drug molecules interacting with biologically relevant membranes, a considerable amount of work has been carried out with fluid phospholipid systems. However, there is very little work in the literature on drug interactions with gel phase lipids. This poses a significant limitation for understanding permeation through the stratum corneum where the primary pathway is expected to be through a highly ordered lipid matrix. To address this point, we analyzed the interactions of p-aminobenzoic acid (PABA) and its ethyl (benzocaine) and butyl (butamben) esters with two membrane bilayers, which differ in their fluidity at ambient conditions. We considered a dioleoylphosphatidylcholine (DOPC) bilayer in a fluid state and a ceramide 2 (CER2, ceramide NS) bilayer in a gel phase. We carried out unbiased (100 ns long) and biased z-constraint molecular dynamics simulations and calculated the free energy profiles of all molecules along the bilayer normal. The free energy profiles converged significantly slower for the gel phase. While the compounds have comparable affinities for both membranes, they exhibit penetration barriers almost 3 times higher in the gel phase CER2 bilayer. This elevated barrier and slower diffusion in the CER2 bilayer, which are caused by the high ordering of CER2 lipid chains, explain the low permeability of the gel phase membranes. We also compared the free energy profiles from MD simulations with those obtained from COSMOmic. This method provided the same trends in behavior for the guest molecules in both bilayers; however, the penetration barriers calculated by COSMOmic did not differ between membranes. In conclusion, we show how membrane fluid properties affect the interaction of drug-like molecules with membranes.",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "30",
    "issue": "46",
    "pages": "13942-13948",
    "image": "img/publications/pub_2014_LangmuirtheACSjournalofsurfacesandcolloids_Palonc.png",
    "id": "10.1021/la503289v",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Structural properties of CYP2D6: Requirements for substrates and inhibitors",
    "year": "2014",
    "journal": "CYP2D6: Genetics, Pharmacology and Clinical Relevance",
    "doi": "10.2217/fmeb2013.13.91",
    "authors": "Eva Anzenbacherová, Karel Berka, Michal Otyepka, Pavel Anzenbacher",
    "abstract": "",
    "category": [
      "Tools",
      "Drug Design"
    ],
    "volume": "",
    "issue": "",
    "pages": "68-78",
    "image": "img/publications/pub_2014_CYP2D6GeneticsPharmacologyandClinicalRelevance_Karel.png",
    "id": "10.2217/fmeb2013.13.91",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Synthesis and kinase inhibitory activity of new sulfonamide derivatives of pyrazolo[4,3-e][1,2,4]triazines.",
    "year": "2014",
    "journal": "European Journal of Medicinal Chemistry",
    "doi": "10.1016/j.ejmech.2014.03.054",
    "authors": "Mariusz Mojzych, Veronika Šubertová, Anna Bielawska, Krzysztof Bielawski, Václav Bazgier, Karel Berka, Tomáš Gucký, Emilia Fornal, Vladimír Kryštof",
    "abstract": "A new series of sulfonamide derivatives of pyrazolo[4,3-e][1,2,4]triazine has been synthesized and characterized. Their anticancer activity was tested in vitro against multiple human cancer cell lines and were found to have dose-dependent antiproliferative effects. Furthermore, some of the new compounds inhibited the Abl protein kinase with low micromolar IC50 values and exhibited selective activity against the Bcr-Abl positive K562 and BV173 cell lines, providing starting points for the further development of this new kinase inhibitor scaffold.",
    "category": [
      "Drug Design"
    ],
    "volume": "78",
    "issue": "",
    "pages": "217-224",
    "image": "img/publications/pub_2014_EuropeanJournalofMedicinalChemistry_Mojzych.png",
    "id": "10.1016/j.ejmech.2014.03.054",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "A novel series of highly potent 2,6,9-trisubstituted purine cyclin-dependent kinase inhibitors.",
    "year": "2013",
    "journal": "Journal of Medicinal Chemistry",
    "doi": "10.1021/jm4006884",
    "authors": "Tomáš Gucký, Radek Jorda, Marek Zatloukal, Václav Bazgier, Karel Berka, Eva Řezníčková, Tibor Béres, Miroslav Strnad, Vladimír Kryštof",
    "abstract": "The inhibition of overactive CDKs during cancer remains an important strategy in cancer drug development. We synthesized and screened a novel series of 2-substituted-6-biarylmethylamino-9-cyclopentylpurine derivatives for improved CDK inhibitory activity and antiproliferative effects. One of the most potent compounds, 6b, exhibited strong cytotoxicity in the human melanoma cell line G361 that correlated with robust CDK1 and CDK2 inhibition and caspase activation. In silico modeling of 6b in the active site of CDK2 revealed a high interaction energy, which we believe is due to the 6-heterobiarylmethylamino substitution of the purine moiety.",
    "category": [
      "Drug Design"
    ],
    "volume": "56",
    "issue": "15",
    "pages": "6234-6247",
    "image": "img/publications/pub_2013_JournalofMedicinalChemistry_Guck.png",
    "id": "10.1021/jm4006884",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Antiallergic effects of pigments isolated from green sea urchin (Strongylocentrotus droebachiensis) shells.",
    "year": "2013",
    "journal": "Planta Medica",
    "doi": "10.1055/s-0033-1351098",
    "authors": "Olga Pozharitskaya, Alexander Shikov, Marina Makarova, Svetlana Ivanova, Vera Kosman, Valery Makarov, Václav Bazgier, Karel Berka, Michal Otyepka, Jitka Ulrichová",
    "abstract": "This study was undertaken to evaluate possible antiallergic effects of an extract of pigments from green sea urchin (Strongylocentrotus droebachiensis) shells. Effects were studied on animal models - guinea pig ileum contraction, rabbit eyes allergic conjunctivitis, and rabbit local skin irritation. The extract significantly reduced, in a dose-dependent manner, the histamine-induced contractions of the isolated guinea pig ileum with ID50 =1.2 µg/mL (in equivalents of spinochrome B), had an inhibitory effect on the model of ocular allergic inflammation surpassing the reference drug olopatadine, and did not show any irritating effect in rabbits. The extract predominantly contained polyhydroxy-1,4-naphthoquinone which would be responsible for the pharmacological activity. The active compounds of the extract were evaluated in silico with molecular docking. Molecular docking into H1R receptor structures obtained from molecular dynamic simulations showed that all spinochrome derivatives bind to the receptor active site, but spinochrome monomers fit better to it. The results of the present study suggest possibilities for the development of new agents for treating allergic diseases on the base of pigments from sea urchins shells.",
    "category": [
      "Drug Design",
      "Channels"
    ],
    "volume": "79",
    "issue": "18",
    "pages": "1698-1704",
    "image": "img/publications/pub_2013_PlantaMedica_Pozharitskaya.png",
    "id": "10.1055/s-0033-1351098",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Behavior of human cytochromes P450 on lipid membranes.",
    "year": "2013",
    "journal": "The Journal of Physical Chemistry B",
    "doi": "10.1021/jp4059559",
    "authors": "Karel Berka, Markéta Paloncýová, Pavel Anzenbacher, Michal Otyepka",
    "abstract": "Human cytochromes P450 (CYPs) are membrane-anchored enzymes involved in biotransformation of many marketed drugs. We constructed atomic models of six human CYPs (CYP1A2, 2A6, 2C9, 2D6, 2E1, and 3A4) anchored to a lipid bilayer to investigate the positions and orientations of CYPs on a membrane. We equilibrated the models by molecular dynamics simulations on a 100+ ns time scale. Catalytic domains of all studied CYPs were found to be partially immersed in the lipid bilayer, whereas the N-terminal part and F'/G' loop are deeply immersed. The proximal side of the enzyme faces the cytosol, whereas the distal side, where openings of substrate access and product release channels to the active site are primarily located, points toward the lipid bilayer. Access channels with openings in the vicinity of the B/C and F/G loops are typically positioned below the lipid head groups, whereas the solvent channel points toward the membrane-water interface. We found that the access channel opening positions match the preferred substrate positions, whereas the product release channel exit positions correspond closely with the positions of the products. This may indicate that membrane-anchored CYPs have evolutionarily adapted to facilitate uptake of nonpolar substrates from the membrane and uptake/release of polar substrates or products from/to the membrane-water interface.",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "117",
    "issue": "39",
    "pages": "11556-11564",
    "image": "img/publications/pub_2013_JournalofPhysicalChemistryB_Berka.png",
    "id": "10.1021/jp4059559",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Fluorone dyes binding to extracellular and cytoplasmic domains of Na, K-ATPase",
    "year": "2013",
    "journal": "The FEBS Journal",
    "doi": "",
    "authors": "Karel Berka et al.",
    "abstract": "",
    "category": [
      "Other / General"
    ],
    "image": "img/publications/pub_2013_TheFEBSJournal_Karel.png",
    "id": "pub_2013_TheFEBSJournal_Karel",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Fluorone dyes have binding sites on both cytoplasmic and extracellular domains of Na,K-ATPase.",
    "year": "2013",
    "journal": "Biochimica et Biophysica Acta (BBA) - Biomembranes",
    "doi": "10.1016/j.bbamem.2012.10.029",
    "authors": "Marika Havlíková, Miroslav Huličiak, Václav Bazgier, Karel Berka, Martin Kubala",
    "abstract": "Combination of fluorescence techniques and molecular docking was used to monitor interaction of Na,K-ATPase and its large cytoplasmic loop connecting fourth and fifth transmembrane helices (C45) with fluorone dyes (i.e. eosin Y, 5(6)-carboxyeosin, rose bengal, fluorescein, and erythrosine B). Our data suggested that there are at least two binding sites for all used fluorone dyes, except of 5(6)-carboxyeosin. The first binding site is located on C45 loop, and it is sensitive to the presence of nucleotide. The other site is located on the extracellular part of the enzyme, and it is sensitive to the presence of Na(+) or K(+) ions. The molecular docking revealed that in the open conformation of C45 loop (which is obtained in the presence of ATP) all used fluorone dyes occupy position directly inside the ATP-binding pocket, while in the closed conformation (i.e. in the absence of any ligand) they are located only near the ATP-binding site depending on their different sizes. On the extracellular part of the protein, the molecular docking predicts two possible binding sites with similar binding energy near Asp897(α) or Gln69(β). The former was identified as a part of interaction site between α- and β-subunits, the latter is in contact with conserved FXYD sequence of the γ-subunit. Our findings provide structural explanation for numerous older studies, which were performed with fluorone dyes before the high-resolution structures were known. Further, fluorone dyes seem to be good probes for monitoring of intersubunit interactions influenced by Na(+) and K(+) binding.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "1828",
    "issue": "2",
    "pages": "568-576",
    "image": "img/publications/pub_2013_BiochimicaetBiophysicaActaBiomembranes_Havl.png",
    "id": "10.1016/j.bbamem.2012.10.029",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Lipid bilayer membrane affinity rationalizes inhibition of lipid peroxidation by a natural lignan antioxidant.",
    "year": "2013",
    "journal": "The Journal of Physical Chemistry B",
    "doi": "10.1021/jp3127829",
    "authors": "Pavlína Podloucká, Karel Berka, Gabin Fabre, Markéta Paloncýová, Jean-Luc Duroux, Michal Otyepka, Patrick Trouillas",
    "abstract": "Lipid peroxidation is a degenerative oxidative process that modifies the structure of membranes, influencing their biological functions. Lignans, natural polyphenolic antioxidants widely distributed in plants, can prevent this membrane damage by free-radical scavenging. Here, we rationalize the difference in lipid peroxidation inhibition activity of argenteane, a natural dilignan isolated from wild nutmeg, and 3,3'-dimethoxy-1,1'-biphenyl-2,2'-diol, which represents the central part of argenteane responsible for its antioxidant activity. Although both compounds have the same capacity to scavenge free radicals, argenteane is a more active inhibitor of lipid peroxidation. We show that both compounds penetrate into DOPC and PLPC lipid bilayers and adopt similar positions and orientations, which therefore does not explain the difference in their lipid peroxidation inhibition activity. However, free energy profiles indicate that argenteane has a significantly higher affinity to the lipid bilayer, and thus a higher effective concentration to scavenge radicals formed during lipid peroxidation. This finding explains the higher activity of argenteane to inhibit lipid peroxidation.",
    "category": [
      "Drug Design",
      "Lipid Membranes"
    ],
    "volume": "117",
    "issue": "17",
    "pages": "5043-5049",
    "image": "img/publications/pub_2013_JournalofPhysicalChemistryB_Podlouck.png",
    "id": "10.1021/jp3127829",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "MOLE 2.0: advanced approach for analysis of biomacromolecular channels.",
    "year": "2013",
    "journal": "Journal of Cheminformatics",
    "doi": "10.1186/1758-2946-5-39",
    "authors": "David Sehnal, Radka Svobodová Vařeková, Karel Berka, Lukáš Pravda, Veronika Navrátilová, Pavel Banáš, Crina-Maria Ionescu, Michal Otyepka, Jaroslav Koča",
    "abstract": "BackgroundChannels and pores in biomacromolecules (proteins, nucleic acids and their complexes) play significant biological roles, e.g., in molecular recognition and enzyme substrate specificity.ResultsWe present an advanced software tool entitled MOLE 2.0, which has been designed to analyze molecular channels and pores. Benchmark tests against other available software tools showed that MOLE 2.0 is by comparison quicker, more robust and more versatile. As a new feature, MOLE 2.0 estimates physicochemical properties of the identified channels, i.e., hydropathy, hydrophobicity, polarity, charge, and mutability. We also assessed the variability in physicochemical properties of eighty X-ray structures of two members of the cytochrome P450 superfamily.ConclusionEstimated physicochemical properties of the identified channels in the selected biomacromolecules corresponded well with the known functions of the respective channels. Thus, the predicted physicochemical properties may provide useful information about the potential functions of identified channels. The MOLE 2.0 software is available at http://mole.chemi.muni.cz.",
    "category": [
      "Tools",
      "Drug Design",
      "Channels"
    ],
    "volume": "5",
    "issue": "1",
    "pages": "",
    "image": "img/publications/pub_2013_JournalofCheminformatics_Sehnal.png",
    "id": "10.1186/1758-2946-5-39",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "http://mole.chemi.muni.cz"
  },
  {
    "title": "Molecular insight into affinities of drugs and their metabolites to lipid bilayers.",
    "year": "2013",
    "journal": "The Journal of Physical Chemistry B",
    "doi": "10.1021/jp311802x",
    "authors": "Markéta Paloncýová, Karel Berka, Michal Otyepka",
    "abstract": "The penetration properties of drug-like molecules on human cell membranes are crucial for understanding the metabolism of xenobiotics and overall drug distribution in the human body. Here, we analyze partitioning of substrates of cytochrome P450s (caffeine, chlorzoxazone, coumarin, ibuprofen, and debrisoquine) and their metabolites (paraxanthine, 6-hydroxychlorzoxazone, 7-hydroxycoumarin, 3-hydroxyibuprofen, and 4-hydroxydebrisoquine) on two model membranes: dioleoylphosphatidylcholine (DOPC) and palmitoyloleoylphophatidylglycerol (POPG). We calculated the free energy profiles of these molecules and the distribution coefficients on the model membranes. The drugs were usually located deeper in the membrane than the corresponding metabolites and also had a higher affinity to the membranes. Moreover, the behavior of the molecules on the membranes differed, as they seemed to have a higher affinity to the DOPC membrane than to POPG, implying they have different modes of action in human (mostly PC) and bacterial (mostly PG) cells. As the xenobiotics need to pass through lipid membranes on their way through the body and the effect of some drugs might depend on their accumulation on membranes, we believe that detailed information of penetration phenomenon is important for understanding the overall metabolism of xenobiotics.",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "117",
    "issue": "8",
    "pages": "2403-2410",
    "image": "img/publications/pub_2013_JournalofPhysicalChemistryB_Palonc.png",
    "id": "10.1021/jp311802x",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Binding of quinidine radically increases the stability and decreases the flexibility of the cytochrome P450 2D6 active site.",
    "year": "2012",
    "journal": "Journal of Inorganic Biochemistry",
    "doi": "10.1016/j.jinorgbio.2012.02.010",
    "authors": "Karel Berka, Eva Anzenbacherová, Tereza Hendrychová, Reinhard Lange, Vlastimil Mašek, Pavel Anzenbacher, Michal Otyepka",
    "abstract": "Human cytochrome P450 2D6 (CYP2D6) is an enzyme of the CYP superfamily responsible for biotransformation of about 20% of drugs of known metabolism containing a basic nitrogen and a planar aromatic ring. Here, we present a combined experimental and computational study on the compressibility and flexibility of unliganded and quinidine-bound CYP2D6. Experimentally, high-pressure induced Soret band shifts of the enzyme were measured by UV/VIS spectroscopy, while 100 ns all atomic molecular dynamics (MD) simulations in explicit water were used in the computational analysis. We identified sharp differences between ligand-free and quinidine-bound CYP2D6 forms in compressibility, flexibility parameters and active site solvation. While the unliganded CYP2D6 is compressible, quinidine binding significantly rigidifies the CYP2D6 active site. In addition, MD simulations show that quinidine binding results in pronounced reductions in active site flexibility and solvation.",
    "category": [
      "Drug Design",
      "Channels"
    ],
    "volume": "110",
    "issue": "",
    "pages": "46-50",
    "image": "img/publications/pub_2012_JournalofInorganicBiochemistry_Berka.png",
    "id": "10.1016/j.jinorgbio.2012.02.010",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Convergence of Free Energy Profile of Coumarin in Lipid Bilayer.",
    "year": "2012",
    "journal": "Journal of Chemical Theory and Computation",
    "doi": "10.1021/ct2009208",
    "authors": "Markéta Paloncýová, Karel Berka, Michal Otyepka",
    "abstract": "Atomistic molecular dynamics (MD) simulations of druglike molecules embedded in lipid bilayers are of considerable interest as models for drug penetration and positioning in biological membranes. Here we analyze partitioning of coumarin in dioleoylphosphatidylcholine (DOPC) bilayer, based on both multiple, unbiased 3 μs MD simulations (total length) and free energy profiles along the bilayer normal calculated by biased MD simulations (∼7 μs in total). The convergences in time of free energy profiles calculated by both umbrella sampling and z-constraint techniques are thoroughly analyzed. Two sets of starting structures are also considered, one from unbiased MD simulation and the other from \"pulling\" coumarin along the bilayer normal. The structures obtained by pulling simulation contain water defects on the lipid bilayer surface, while those acquired from unbiased simulation have no membrane defects. The free energy profiles converge more rapidly when starting frames from unbiased simulations are used. In addition, z-constraint simulation leads to more rapid convergence than umbrella sampling, due to quicker relaxation of membrane defects. Furthermore, we show that the choice of RESP, PRODRG, or Mulliken charges considerably affects the resulting free energy profile of our model drug along the bilayer normal. We recommend using z-constraint biased MD simulations based on starting geometries acquired from unbiased MD simulations for efficient calculation of convergent free energy profiles of druglike molecules along bilayer normals. The calculation of free energy profile should start with an unbiased simulation, though the polar molecules might need a slow pulling afterward. Results obtained with the recommended simulation protocol agree well with available experimental data for two coumarin derivatives.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Drug Design",
      "Channels"
    ],
    "volume": "8",
    "issue": "4",
    "pages": "1200-1211",
    "image": "img/publications/pub_2012_JournalofChemicalTheoryandComputation_Palonc.png",
    "id": "10.1021/ct2009208",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Dynamics and hydration of the active sites of mammalian cytochromes P450 probed by molecular dynamics simulations",
    "year": "2012",
    "journal": "Current Drug Metabolism",
    "doi": "",
    "authors": "Karel Berka et al.",
    "abstract": "",
    "category": [
      "Drug Design",
      "Channels"
    ],
    "image": "img/publications/pub_2012_CurrentDrugMetabolism_Karel.png",
    "id": "pub_2012_CurrentDrugMetabolism_Karel",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Is there a relationship between the substrate preferences and structural flexibility of cytochromes P450?",
    "year": "2012",
    "journal": "Current Drug Metabolism",
    "doi": "10.2174/138920012798918372",
    "authors": "Michal Otyepka, Karel Berka, Pavel Anzenbacher",
    "abstract": "In the last decades, the structural flexibility of cytochromes P450 has been extensively studied by spectroscopic and in silico methods. Here, both approaches are reviewed and compared. Comparison of both methods indicates that the individual cytochromes P450 differ significantly in the flexibilities of their substrate-binding active sites. This finding probably accounts for the large number of isoforms of these enzymes (there are fifty-seven known cytochrome P450 genes in the human genome) and their functional versatility. On the other hand, most of the known cytochrome P450s have a set of common structural features, with an overall structure consisting of a relatively flexible domain (the distal side), a more rigid domain (the heme-binding core) and a domain on the proximal side of the hemoprotein with intermediate flexibility. Substrate access and product egress channels of CYP enzymes are also important structural elements as the majority of these channels are located in the flexible distal side; the location, flexibility, and function of these channels are discussed.",
    "category": [
      "Tools",
      "Drug Design",
      "Channels"
    ],
    "volume": "13",
    "issue": "2",
    "pages": "130-142",
    "image": "img/publications/pub_2012_CurrentDrugMetabolism_Otyepka.png",
    "id": "10.2174/138920012798918372",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "MOLEonline 2.0: interactive web-based analysis of biomacromolecular channels.",
    "year": "2012",
    "journal": "Nucleic Acids Research",
    "doi": "10.1093/nar/gks363",
    "authors": "K. Berka, O. Hanak, D. Sehnal, P. Banas, V. Navratilova, D. Jaiswal, C.-M. Ionescu, R. Svobodova Varekova, J. Koca, M. Otyepka",
    "abstract": "Biomolecular channels play important roles in many biological systems, e.g. enzymes, ribosomes and ion channels. This article introduces a web-based interactive MOLEonline 2.0 application for the analysis of access/egress paths to interior molecular voids. MOLEonline 2.0 enables platform-independent, easy-to-use and interactive analyses of (bio)macromolecular channels, tunnels and pores. Results are presented in a clear manner, making their interpretation easy. For each channel, MOLEonline displays a 3D graphical representation of the channel, its profile accompanied by a list of lining residues and also its basic physicochemical properties. The users can tune advanced parameters when performing a channel search to direct the search according to their needs. The MOLEonline 2.0 application is freely available via the Internet at http://ncbr.muni.cz/mole or http://mole.upol.cz.",
    "category": [
      "Channels",
      "Selected"
    ],
    "volume": "40",
    "issue": "W1",
    "pages": "W222-W227",
    "image": "img/publications/pub_2012_NucleicAcidsResearch_Berka.png",
    "id": "10.1093/nar/gks363",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://moleonline.cz"
  },
  {
    "title": "Positioning of antioxidant quercetin and its metabolites in lipid bilayer membranes: implication for their lipid-peroxidation inhibition.",
    "year": "2012",
    "journal": "The Journal of Physical Chemistry B",
    "doi": "10.1021/jp208731g",
    "authors": "Pavlína Košinová, Karel Berka, Michael Wykes, Michal Otyepka, Patrick Trouillas",
    "abstract": "Among numerous biological activities, natural polyphenols are antioxidants widely distributed in plants capable of inhibiting lipid peroxidation, which belongs to the most serious degenerative cell processes. Positioning of antioxidants in lipid bilayers can provide an insight to the lipid-peroxidation inhibition at the molecular level. This work aims at determining the location and orientation of quercetin and its most representative (glucuronidated, methylated, and sulfated) metabolites in lipid bilayer via molecular dynamic simulations. We show that quercetin derivatives penetrate the lipid bilayer and that the depths of penetration depend on molecular charge and substitutional variations. In the presence of charged substituents (sulfates and glucuronidates), the molecule is pulled toward the lipid bilayer surface. The orientation also depends on substitution as H-bonds are formed between the polar head groups of the bilayer and the (i) OH groups, (ii) sugar, and (iii) sulfate moieties of the antioxidants. As flavonoids and their derivatives are preferentially localized in the lipid bilayer membrane or on the bilayer/water interface, they readily concentrate in a relatively narrow membrane region. Despite the low concentrations of flavonoids in food, their spatial confinement in the membrane greatly enhances their local concentration in this vital region, thus increasing their importance for in vivo biological activities including oxidative stress defense.",
    "category": [
      "Tools",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "116",
    "issue": "4",
    "pages": "1309-1318",
    "image": "img/publications/pub_2012_JournalofPhysicalChemistryB_Ko.png",
    "id": "10.1021/jp208731g",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Korespondenční seminář inspirovaný chemickou tematikou (KSICHT)",
    "year": "2012",
    "journal": "Chemické listy",
    "doi": "",
    "authors": "",
    "abstract": "",
    "category": [
      "Education & Outreach"
    ],
    "image": "img/publications/pub_2012_Chemicklisty_UnknownAuthor.png",
    "id": "pub_2012_Chemicklisty_UnknownAuthor",
    "oa_url": null,
    "oa_is_preprint": false,
    "web": "https://ksicht.natur.cuni.cz"
  },
  {
    "title": "Insenstivity to Close Contacts and Inability to Predict Protein Foldability",
    "year": "2011",
    "journal": "Journal of Biomolecular Structure & Dynamics",
    "doi": "",
    "authors": "Karel Berka et al.",
    "abstract": "",
    "category": [
      "Channels"
    ],
    "image": "img/publications/pub_2011_JournalofBiomolecularStructureDynamics_Karel.png",
    "id": "pub_2011_JournalofBiomolecularStructureDynamics_Karel",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Membrane position of ibuprofen agrees with suggested access path entrance to cytochrome P450 2C9 active site.",
    "year": "2011",
    "journal": "The Journal of Physical Chemistry A",
    "doi": "10.1021/jp204488j",
    "authors": "Karel Berka, Tereza Hendrychová, Pavel Anzenbacher, Michal Otyepka",
    "abstract": "Cytochrome P450 2C9 (CYP2C9) is a membrane-anchored human microsomal protein involved in the drug metabolism in liver. CYP2C9 consists of an N-terminal transmembrane anchor and a catalytic cytoplasmic domain. While the structure of the catalytic domain is well-known from X-ray experiments, the complete structure and its incorporation into the membrane remains unsolved. We constructed an atomistic model of complete CYP2C9 in a dioleoylphosphatidylcholine membrane and evolved it by molecular dynamics simulations in explicit water on a 100+ ns time-scale. The model agrees well with known experimental data about membrane positioning of cytochromes P450. The entry to the substrate access channel is proposed to be facing the membrane interior while the exit of the product egress channel is situated above the interface pointing toward the water phase. The positions of openings of the substrate access and product egress channels correspond to free energy minima of CYP2C9 substrate ibuprofen and its metabolite in the membrane, respectively.",
    "category": [
      "Drug Design",
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "115",
    "issue": "41",
    "pages": "11248-11255",
    "image": "img/publications/pub_2011_JournalofPhysicalChemistryA_Berka.png",
    "id": "10.1021/jp204488j",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Novel covalent bond in proteins: calculations on model systems question the bond stability.",
    "year": "2011",
    "journal": "ChemPhysChem",
    "doi": "10.1002/cphc.201100664",
    "authors": "Milan Ončák, Karel Berka, Petr Slavíček",
    "abstract": "We have investigated the sulfilimine covalent link between methionine (Met) and lysine (Lys), recently identified in collagen IV (R. Vanacore, A.-J. L. Ham, M. Voehler, C. R. Sanders, T. P. Conrads, T. D. Veenstra, K. B. Sharpless, P. E. Dawson, B. G. Hudson, Science 2009, 325, 1230), and have explored its stability with respect to both the redox processes and UV radiation by means of advanced computational methods. We have concluded that the bond should be present in a protonated state, (-NH=S-)(+). The bond is characterized by a relatively high standard reduction potential, that is, the bond should not be stable in a typical cell environment; if the sulfilimine bond exists (as suggested by the experiment) then the bond has to be supported by the protein environment. The sulfilimine bond then destabilizes the protein structure with respect to the alternative tertiary structure. We discuss conditions under which the bond could be formed as well as other possible structural arrangements consistent with the Met-Lys stoichiometry; some of the alternative bond motifs are more thermodynamically stable than the sulfilimine bond. We suggest that the character of the Met-Lys contact could be approached via NEXAFS spectroscopy. Finally, we show that the protonation brings photostability to the sulfilimine bond.",
    "category": [
      "Tools"
    ],
    "volume": "12",
    "issue": "17",
    "pages": "3449-3457",
    "image": "img/publications/pub_2011_ChemPhysChem_On.png",
    "id": "10.1002/cphc.201100664",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Energy matrix of structurally important side-chain/side-chain interactions in proteins",
    "year": "2010",
    "journal": "Journal of Chemical Theory and Computation",
    "doi": "",
    "authors": "Karel Berka et al.",
    "abstract": "",
    "category": [
      "Tools"
    ],
    "image": "img/publications/pub_2010_JournalofChemicalTheoryandComputation_Karel.png",
    "id": "pub_2010_JournalofChemicalTheoryandComputation_Karel",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "On the Reliability of the AMBER Force Field and its Empirical Dispersion Contribution for the Description of Noncovalent Complexes",
    "year": "2010",
    "journal": "ChemPhysChem",
    "doi": "",
    "authors": "Karel Berka et al.",
    "abstract": "",
    "category": [
      "Other / General"
    ],
    "image": "img/publications/pub_2010_ChemPhysChem_Karel.png",
    "id": "pub_2010_ChemPhysChem_Karel",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Representative Amino Acid Side Chain Interactions in Proteins. A Comparison of Highly Accurate Correlated ab Initio Quantum Chemical and Empirical Potential Procedures.",
    "year": "2009",
    "journal": "Journal of Chemical Theory and Computation",
    "doi": "10.1021/ct800508v",
    "authors": "Karel Berka, Roman Laskowski, Kevin E. Riley, Pavel Hobza, Jiří Vondrášek",
    "abstract": "Interactions between amino acid side chains play a crucial role both within a folded protein and between the interacting protein molecules. Here we have selected a representative set of 24 of the 400 (20 × 20) possible interacting side chain pairs based on data from Atlas of Protein Side-Chain Interactions. For each pair, we obtained its most favorable interaction geometry from the structural data and computed the interaction energy in the gas phase using several different, commonly used, ab initio and force field methods, namely Møller-Plesset perturbation theory (MP2), density functional theory combined with symmetry-adapted perturbation theory (DFT-SAPT), density functional theory empirically augmented with an empirical dispersion term (DFT-D), and empirical potentials using the OPLS-AA/L and Amber03 force fields. All the methods were compared against a reference method taken to be the CCSD(T) level of theory extrapolated to the complete basis set limit. We found a high degree of agreement between the different methods, even though the range of binding energies obtained was extremely large. The most computationally intensive methods yielded the best results. Among the less computationally time-consuming methods, the DFT-D method as well as parm03 force field provided consistently good results when compared to the reference values. We also tested how representative the chosen geometries of the side chains were and investigated the effect on the binding energies of the dielectric constant of the surrounding medium.",
    "category": [
      "Tools",
      "Channels"
    ],
    "volume": "5",
    "issue": "4",
    "pages": "982-992",
    "image": "img/publications/pub_2009_JournalofChemicalTheoryandComputation_Berka.png",
    "id": "10.1021/ct800508v",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Analysis of energy stabilization inside the hydrophobic core of rubredoxin.",
    "year": "2009",
    "journal": "ChemPhysChem",
    "doi": "10.1002/cphc.200800401",
    "authors": "Karel Berka, Pavel Hobza, Jiří Vondrášek",
    "abstract": "The hydrophobic core of globular proteins is responsible for major stabilization of the protein tertiary structure. The prevailing amino-acid residues in the core are of aliphatic or aromatic character, and therefore, the core in a folded protein structure is mostly stabilized by noncovalent interactions of van der Waals origin between the amino-acid side chains. Herein, we present a theoretical analysis of the interaction energy between the amino acids of the hydrophobic core of the small globular protein rubredoxin (Rd) based on the symmetry-adapted perturbation theory (SAPT) method. The results show uniform proportions between the second-order dispersion and first-order electrostatic energy terms in favor of dispersion interaction, which plays a major role in the stabilization of this important structural element. To demonstrate the contrast between systems stabilized by different mechanisms, we perform a SAPT analysis of the typical hydrogen bonds involved in the formation of protein secondary structure elements in Rd, where dispersion still plays a non-negligible role but electrostatic energy is the major stabilizing factor.",
    "category": [
      "Tools"
    ],
    "volume": "10",
    "issue": "3",
    "pages": "543-548",
    "image": "img/publications/pub_2009_ChemPhysChem_Berka.png",
    "id": "10.1002/cphc.200800401",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "The stabilization energy of the Glu-Lys salt bridge in the protein/water environment: Correlated quantum chemical ab initio, DFT and empirical potential studies",
    "year": "2008",
    "journal": "Collection of Czechoslovak Chemical Communications",
    "doi": "10.1135/CCCC20080921",
    "authors": "Jan Řezáč, Karel Berka, Dominik Horinek, Pavel Hobza, Jiří Vondrášek",
    "abstract": "The stabilization energies of Glu-Lys salt bridges are calculated at the CCSD(T) complete basis set limit to provide a reasonable description of the strength of the ion-pair bond in the gas phase. The effect of the environment (protein with ε = 4 and water with ε = 80) on the stabilization energy was introduced via a modification of the quantum chemical DFT energy, for which the COSMO methodology was adopted. The other (standard) approach was based on incorporating a dielectric constant into the Coulomb electrostatic term of the Amber empirical potential function and utilizing the generalized Born model implemented in the Amber program. The environment affects the stabilization energy of the salt bridge dramatically: The protein reduces the energy to less than one half of the original value, whereas water sometimes changes stabilization to destabilization. Both theoretical procedures, based on completely different theoretical backgrounds, yield very similar results, which strongly support their validity. An ion pair is converted to an ion-neutral pair when its pH is changed. This transformation is connected with a strong reduction of the stabilization energy regardless of the environment. The substantial differences in the stabilization energies of ion pairs and ion-neutral pairs contradict the negligible changes of free energy detected experimentally. Evidently, the contribution of formation and hydration entropy is significant and compensates for the large stabilization energies. ",
    "category": [
      "Other / General"
    ],
    "volume": "73",
    "issue": "6-7",
    "pages": "921-936",
    "image": "img/publications/pub_2008_CollectionofCzechoslovakChemicalCommunications_Karel.png",
    "id": "10.1135/CCCC20080921",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Another role of proline: stabilization interactions in proteins and protein complexes concerning proline and tryptophane.",
    "year": "2008",
    "journal": "Physical Chemistry Chemical Physics",
    "doi": "10.1039/b805087b",
    "authors": "Lada Biedermannova, Kevin E. Riley, Karel Berka, Pavel Hobza, Jiri Vondrasek",
    "abstract": "Proline-tryptophan complexes derived from experimental structures are investigated by quantum chemical procedures known to properly describe the London dispersion energy. We study two geometrical arrangements: the \"L-shaped\", stabilized by an H-bond, and the \"stacked-like\", where the two residues are in parallel orientation without any H-bond. Interestingly, the interaction energies in both cases are comparable and very large ( approximately 7 kcal mol(-1)). The strength of stabilization in the stacked arrangement is rather surprising considering the fact that only one partner has an aromatic character. The interaction energy decomposition using the SAPT method further demonstrates the very important role of dispersion energy in such arrangement. To elucidate the structural features responsible for this unexpectedly large stabilization we examined the role of the nitrogen heteroatom and the importance of the cyclicity of the proline residue. We show that the electrostatic interaction due to the presence of the dipole, caused by the nitrogen heteroatom, contributes largely to the strength of the interaction. Nevertheless, the cyclic arrangement of proline, which allows for the largest amount of dispersive contact with the aromatic partner, also has a notable-effect. Geometry optimizations carried out for the \"stacked-like\" complexes show that the arrangements derived from protein structure are close to their gas phase optimum geometry, suggesting that the environment has only a minor effect on the geometry of the interaction. We conclude that the strength of proline non-covalent interactions, combined with this residue's rigidity, might be the explanation for its prominent role in protein stabilization and recognition processes.",
    "category": [
      "Tools"
    ],
    "volume": "10",
    "issue": "42",
    "pages": "6350",
    "image": "img/publications/pub_2008_PhysicalChemistryChemicalPhysics_Biedermannova.png",
    "id": "10.1039/b805087b",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Quantum chemical benchmark energy and geometry database for molecular clusters and complex molecular systems (www.begdb.com): A users manual and examples",
    "year": "2008",
    "journal": "Collection of Czechoslovak Chemical Communications",
    "doi": "10.1135/cccc20081261",
    "authors": "Jan Řezáč, Petr Jurečka, Kevin E. Riley, Jiří Černý, Haydee Valdes, Kristýna Pluháčková, Karel Berka, Tomáš Řezáč, Michal Pitoňák, Jiří Vondrášek, Pavel Hobza",
    "abstract": "Our previous benchmark CCSD(T)/ complete basis set limit calculations were collected into a database named begdb - Benchmark Energy and Geometry DataBase. Web-based interface to this database was prepared and is available at www.begdb.com. Users can browse, search and plot the data online or download structures and energy tables.",
    "category": [
      "Databases",
      "Channels"
    ],
    "volume": "73",
    "issue": "10",
    "pages": "1261-1270",
    "image": "img/publications/pub_2008_CollectionofCzechoslovakChemicalCommunications_Karel_2.png",
    "id": "10.1135/cccc20081261",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Ligand binding to the human MT2 melatonin receptor: the role of residues in transmembrane domains 3, 6, and 7.",
    "year": "2005",
    "journal": "Biochemical and Biophysical Research Communications",
    "doi": "10.1016/j.bbrc.2005.05.017",
    "authors": "Petr Mazna, Karel Berka, Irena Jelinkova, Ales Balik, Petr Svoboda, Veronika Obsilova, Tomas Obsil, Jan Teisinger",
    "abstract": "To better understand the mechanism of interactions between G-protein-coupled melatonin receptors and their ligands, our previously reported homology model of human MT2 receptor with docked 2-iodomelatonin was further refined and used to select residues within TM3, TM6, and TM7 potentially important for receptor-ligand interactions. Selected residues were mutated and radioligand-binding assay was used to test the binding affinities of hMT2 receptors transiently expressed in HEK293 cells. Our data demonstrate that residues N268 and A275 in TM6 as well as residues V291 and L295 in TM7 are essential for 2-iodomelatonin binding to the hMT2 receptor, while TM3 residues M120, G121, V124, and I125 may participate in binding of other receptor agonists and/or antagonists. Presented data also hint at possible specific interaction between the side-chain of Y188 in second extracellular loop and N-acetyl group of 2-iodomelatonin.",
    "category": [
      "Lipid Membranes"
    ],
    "volume": "332",
    "issue": "3",
    "pages": "726-734",
    "image": "img/publications/pub_2005_NoJournal_Mazna.png",
    "id": "10.1016/j.bbrc.2005.05.017",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Molecular modeling of human MT2 melatonin receptor: the role of Val204, Leu272 and Tyr298 in ligand binding.",
    "year": "2004",
    "journal": "Journal of Neurochemistry",
    "doi": "10.1111/j.1471-4159.2004.02758.x",
    "authors": "Petr Mazna, Veronika Obsilova, Irena Jelinkova, Ales Balik, Karel Berka, Zofie Sovova, Rüdiger Ettrich, Petr Svoboda, Tomas Obsil, Jan Teisinger",
    "abstract": "A model of the helical part of the human MT2 melatonin (hMT2) receptor, a member of the G protein-coupled receptors superfamily has been generated, based on the structure of bovine rhodopsin. Modeling has been combined with site-directed mutagenesis to investigate the role of the specific amino acid residues within the transmembrane domains (TM) numbers V, VI and VII of hMT2 receptor in the interaction with 2-iodomelatonin. Saturation binding assays with 2-iodomelatonin demonstrated that the substitution V204A (TMV) resulted in total loss of binding while the mutation V205A had no effect. The replacement of F209 with alanine led to a significant decrease in the Bmax value of receptor binding while mutations V205A and F209A also within TM V did not significantly change binding properties of the hMT2 receptor. In the case of TM VI, the substitution G271T caused substantial decrease in 2-iodomelatonin binding to the hMT2 receptor. The change L272A (TM VI) as well as mutation Y298A within TM VII completely abolished ligand binding to the receptor. These data suggest that several new amino acid residues within TM V, VI and VII are involved in ligand-MT2 receptor interaction.",
    "category": [
      "Lipid Membranes",
      "Channels"
    ],
    "volume": "91",
    "issue": "4",
    "pages": "836-842",
    "image": "img/publications/pub_2004_NoJournal_Mazna.png",
    "id": "10.1111/j.1471-4159.2004.02758.x",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Molecular modeling of human MT2 melatonin receptor: the role of Val204, Leu272 and Tyr298 in ligand binding (vol 91, pg 836, 2004)",
    "year": "2004",
    "journal": "Journal of Neurochemistry",
    "doi": "10.1111/J.1471-4159.2004.02965.X",
    "authors": "Petr Mazna, Veronika Obsilova, Irena Jelinkova, Ales Balik, Karel Berka, Zofie Sovova, Rüdiger Ettrich, Petr Svoboda, Tomas Obsil, Jan Teisinger",
    "abstract": "",
    "category": [
      "Channels"
    ],
    "volume": "91",
    "issue": "6",
    "pages": "1505-1505",
    "image": "img/publications/pub_2004_JournalofNeurochemistry_Karel.png",
    "id": "10.1111/J.1471-4159.2004.02965.X",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Detection of Channels",
    "year": "",
    "journal": "SpringerBriefs in Biochemistry and Molecular Biology",
    "doi": "10.1007/978-3-319-47388-8_6",
    "authors": "Jaroslav Koča, Radka Svobodová Vařeková, Lukáš Pravda, Karel Berka, Stanislav Geidl, David Sehnal, Michal Otyepka",
    "abstract": "",
    "category": [
      "Channels"
    ],
    "volume": "",
    "issue": "",
    "pages": "59-69",
    "image": "img/publications/pub__NoJournal_Karel.png",
    "id": "10.1007/978-3-319-47388-8_6",
    "oa_url": null,
    "oa_is_preprint": false
  },
  {
    "title": "Structural Bioinformatics Databases of General Use",
    "year": "",
    "journal": "SpringerBriefs in Biochemistry and Molecular Biology",
    "doi": "10.1007/978-3-319-47388-8_3",
    "authors": "Jaroslav Koča, Radka Svobodová Vařeková, Lukáš Pravda, Karel Berka, Stanislav Geidl, David Sehnal, Michal Otyepka",
    "abstract": "",
    "category": [
      "Databases",
      "Tools",
      "Channels"
    ],
    "volume": "",
    "issue": "",
    "pages": "17-30",
    "image": "img/publications/pub__NoJournal_Karel_2.png",
    "id": "10.1007/978-3-319-47388-8_3",
    "oa_url": null,
    "oa_is_preprint": false
  }
];


// Scientific Tools & Software Repositories Data
const toolsData = [
  {
    "id": "moleonline",
    "name": "MOLEonline",
    "description": {
      "en": "Interactive web-based application and standalone tool for finding, analyzing, and visualizing biomacromolecular tunnels, channels, and pores.",
      "cs": "Interaktivní webová aplikace a nástroj pro detekci, analýzu a vizualizaci biomakromolekulárních tunelů, kanálů a pórů."
    },
    "github": "https://github.com/sb-ncbr/MOLE",
    "web": "https://moleonline.cz",
    "category": [
      "Channels",
      "Tools",
      "Visualization"
    ],
    "languages": [
      "C++",
      "TypeScript",
      "C#"
    ],
    "doi": "10.1093/bioinformatics/btaf486",
    "org": "sb-ncbr"
  },
  {
    "id": "channelsdb",
    "name": "ChannelsDB 2.0",
    "description": {
      "en": "Comprehensive database of precomputed biomacromolecular tunnels and pores in experimental PDB structures and AlphaFold DB models.",
      "cs": "Komplexní databáze předvypočítaných biomakromolekulárních tunelů a pórů v experimentálních i AlphaFold strukturách."
    },
    "github": "https://github.com/sb-ncbr/channelsdb",
    "web": "https://channelsdb.biodata.ceitec.cz",
    "category": [
      "Channels",
      "Databases",
      "Alphafoldology"
    ],
    "languages": [
      "Python",
      "TypeScript",
      "HTML"
    ],
    "doi": "10.1093/nar/gkad1012",
    "org": "sb-ncbr"
  },
  {
    "id": "molmedb",
    "name": "MolMeDB",
    "description": {
      "en": "Open database of small molecule interactions with phospholipid membranes, compound permeabilities, free energy profiles, and membrane positioning.",
      "cs": "Otevřená databáze interakcí malých molekul s fosfolipidovými membránami, permeabilit sloučenin a profilů volné energie."
    },
    "github": "https://github.com/MolMeDB/MolMeDB",
    "web": "https://molmedb.chem.upol.cz",
    "category": [
      "Lipid Membranes",
      "Databases"
    ],
    "languages": [
      "Ruby",
      "JavaScript",
      "Python"
    ],
    "doi": "10.1093/database/baz078",
    "org": "MolMeDB"
  },
  {
    "id": "acc3",
    "name": "Atomic Charge Calculator III (ACC III)",
    "description": {
      "en": "Web platform and CLI engine for fast empirical calculation of partial atomic charges in small organic molecules and large biomolecules.",
      "cs": "Webová platforma a CLI nástroj pro rychlý empirický výpočet parciálních atomových nábojů v malých molekulách i makromolekulách."
    },
    "github": "https://github.com/sb-ncbr",
    "web": "https://acc.biodata.ceitec.cz",
    "category": [
      "Tools",
      "Visualization"
    ],
    "languages": [
      "C++",
      "Python",
      "TypeScript"
    ],
    "doi": "10.1093/nar/gkag379",
    "org": "sb-ncbr"
  },
  {
    "id": "proptimus",
    "name": "PROPTIMUS LIVE",
    "description": {
      "en": "Web application offering local constrained alpha-carbon optimization of protein structures powered by GFN-Force-Field.",
      "cs": "Webová aplikace pro lokální optimalizaci α-uhlíků proteinových struktur s využitím GFN silového pole."
    },
    "github": "https://github.com/sb-ncbr",
    "web": "https://proptimus.ceitec.cz/live",
    "category": [
      "Tools",
      "Alphafoldology"
    ],
    "languages": [
      "Python",
      "TypeScript"
    ],
    "doi": "10.1093/nar/gkag511",
    "org": "sb-ncbr"
  },
  {
    "id": "foldify",
    "name": "Foldify",
    "description": {
      "en": "Web application unifying AlphaFold 3, AlphaFold 2, ColabFold, OmegaFold, and ESMFold into a single user-friendly interface for structure prediction.",
      "cs": "Webová aplikace sjednocující AlphaFold 3, AlphaFold 2, ColabFold, OmegaFold a ESMFold do jednoho rozhraní pro predikci struktur."
    },
    "github": "https://github.com/sb-ncbr",
    "web": "https://foldify-open.cloud.e-infra.cz/",
    "category": [
      "Tools",
      "Alphafoldology",
      "Visualization"
    ],
    "languages": [
      "Python",
      "TypeScript"
    ],
    "doi": "10.1021/acs.jcim.6c01154",
    "org": "sb-ncbr"
  },
  {
    "id": "pdbcharges",
    "name": "PDBCharges",
    "description": {
      "en": "Database of quantum-mechanical partial atomic charges calculated for protein structure models from the Protein Data Bank.",
      "cs": "Databáze kvantově-mechanických parciálních atomových nábojů vypočítaných pro modely proteinových struktur z PDB."
    },
    "github": "https://github.com/sb-ncbr",
    "web": "https://charges.chemi.muni.cz/",
    "category": [
      "Databases",
      "Tools"
    ],
    "languages": [
      "Python",
      "JavaScript"
    ],
    "doi": "10.1093/nar/gkaf401",
    "org": "sb-ncbr"
  },
  {
    "id": "gromacs-metadump",
    "name": "Gromacs MetaDump",
    "description": {
      "en": "Command-line tool for extracting, inspecting, and managing structured metadata from GROMACS molecular dynamics simulation trajectory files.",
      "cs": "Nástroj pro příkazový řádek určený k extrakci a inspekci strukturovaných metadat ze souborů trajektorií simulací GROMACS."
    },
    "github": "https://github.com/sb-ncbr",
    "category": [
      "Tools",
      "Lipid Membranes"
    ],
    "languages": [
      "Python",
      "C++"
    ],
    "doi": "10.1186/s13321-025-01082-5",
    "org": "sb-ncbr"
  },
  {
    "id": "2dprots",
    "name": "2DProts",
    "description": {
      "en": "Database and web service generating family-wide protein secondary structure diagrams and interactive 2D structural representations.",
      "cs": "Databáze a webová služba generující diagramy sekundární struktury v rámci proteinových rodin a interaktivní 2D reprezentace."
    },
    "github": "https://github.com/sb-ncbr",
    "web": "https://2dprots.icm.edu.pl/",
    "category": [
      "Visualization",
      "Tools"
    ],
    "languages": [
      "Python",
      "JavaScript"
    ],
    "org": "sb-ncbr"
  },
  {
    "id": "secstrannotator",
    "name": "SecStrAnnotator",
    "description": {
      "en": "Annotation tool for automated identification and comparison of secondary structure elements and domain topology across protein families.",
      "cs": "Anotační nástroj pro automatickou identifikaci a srovnání prvků sekundární struktury a doménové topologie napříč proteinovými rodinami."
    },
    "github": "https://github.com/sb-ncbr",
    "web": "https://secstrannotator.ceitec.cz/",
    "category": [
      "Tools",
      "Visualization"
    ],
    "languages": [
      "C#",
      "Python"
    ],
    "org": "sb-ncbr"
  },
  {
    "id": "pokusnice",
    "name": "Pokusnice",
    "description": {
      "en": "Interactive web hub of chemistry experiments and educational resources designed for high school chemistry teaching and science outreach.",
      "cs": "Interaktivní portál chemických pokusů a vzdělávacích materiálů určený pro výuku chemie na středních školách a popularizaci vědy."
    },
    "github": "https://github.com/KarelBerka",
    "web": "https://pokusnice.cz",
    "category": [
      "Education"
    ],
    "languages": [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "org": "KarelBerka"
  },
  {
    "id": "alphafoldology",
    "name": "Alphafoldology",
    "description": {
      "en": "Comprehensive catalog and resource ecosystem for structural biology machine learning tools in the AlphaFold era.",
      "cs": "Komplexní katalog a ekosystém nástrojů strukturní biologie pro strojové učení v éře AlphaFold."
    },
    "github": "https://github.com/sb-ncbr/alphafoldology",
    "web": "https://alphafoldology.org",
    "category": [
      "Alphafoldology",
      "Tools",
      "Databases"
    ],
    "languages": [
      "Python",
      "JavaScript"
    ],
    "org": "sb-ncbr"
  },
  {
    "id": "orbital-simulator",
    "name": "Orbital Simulator",
    "description": {
      "en": "Interactive 3D visualization and simulation tool for exploring atomic and molecular orbital electron density shapes.",
      "cs": "Interaktivní 3D vizualizační a simulační nástroj pro zkoumání tvarů a elektronových hustot atomových i molekulových orbitalů."
    },
    "github": "https://github.com/KarelBerka/orbital-simulator",
    "web": "https://kfc.upol.cz/orbital",
    "category": [
      "Education",
      "Visualization"
    ],
    "languages": [
      "JavaScript",
      "WebGL",
      "HTML"
    ],
    "org": "KarelBerka"
  },
  {
    "id": "trestni-dilemata",
    "name": "Trestní dilemata",
    "description": {
      "en": "Interactive educational game and decision-making scenario simulator for law, ethics, and legal outreach.",
      "cs": "Interaktivní vzdělávací hra a simulátor rozhodovacích scénářů pro etiku a právní osvětu."
    },
    "github": "https://github.com/KarelBerka/trestni-dilemata",
    "web": "https://pokusnice.cz/dilemata",
    "category": [
      "Education"
    ],
    "languages": [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "org": "KarelBerka"
  },
  {
    "id": "academic-misconduct",
    "name": "Academic Misconduct Dilemmas",
    "description": {
      "en": "Interactive ethical scenario simulator focusing on scientific integrity, publication ethics, and academic misconduct dilemmas.",
      "cs": "Interaktivní simulátor etických scénářů zaměřený na vědeckou integritu, etiku publikování a akademická dilemata."
    },
    "github": "https://github.com/KarelBerka/academic-misconduct-dilemmas",
    "web": "https://pokusnice.cz/misconduct",
    "category": [
      "Education"
    ],
    "languages": [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "org": "KarelBerka"
  },
  {
    "id": "3dpmol",
    "name": "3DPMol*",
    "description": {
      "en": "3D printing export module and interactive web tool for converting biomacromolecular structures into 3D printable files via Mol* Viewer.",
      "cs": "Modul pro 3D tisk a interaktivní webový nástroj pro převod biomakromolekulárních struktur na soubory pro 3D tisk v prostředí Mol* Viewer."
    },
    "github": "https://github.com/sb-ncbr/3dpmol",
    "web": "https://3dpmol.ceitec.cz",
    "category": [
      "Visualization",
      "Tools"
    ],
    "languages": [
      "TypeScript",
      "JavaScript"
    ],
    "org": "sb-ncbr"
  },
  {
    "id": "2d-permeability-simulator",
    "name": "2D Permeability Simulator",
    "description": {
      "en": "Interactive 2D simulation tool for modeling small-molecule passive transport and diffusion kinetics across lipid membranes.",
      "cs": "Interaktivní 2D simulační nástroj pro modelování pasivního transportu a difúzní kinetiky malých molekul přes fosfolipidové membrány."
    },
    "github": "https://github.com/KarelBerka/2d-permeability-simulator",
    "web": "https://molmedb.chem.upol.cz/permeability",
    "category": [
      "Lipid Membranes",
      "Education",
      "Tools"
    ],
    "languages": [
      "JavaScript",
      "Canvas",
      "HTML"
    ],
    "org": "KarelBerka"
  }
];

