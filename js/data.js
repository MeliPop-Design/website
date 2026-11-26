/* ==========================================================================
   Melipop Design Lab — Structured Portfolio, Research, Shop & Studio Data
   Edit this file to update project dates, descriptions, credits, or add
   real photography (set `image: "assets/your-photo.jpg"` on any item).
   ========================================================================== */

window.MELIPOP_DATA = {
  brand: {
    name: 'Melipop Design Lab',
    discipline: 'Spatial and Product Design',
    tagline: 'Play. Make. Transform.',
    quote: 'For us, complexity is a fun idea. And simplicity, a fun challenge.',
    summary:
      'Melipop is a spatial and product design practice working across scales, from products and interiors to architecture and large-scale systems. The website presents projects, research and teaching, products for sale, and the trajectory behind the studio without dividing them into separate professional identities.',
  },

  scales: [
    { id: 'S', label: 'Products', shortDesc: 'Games, toys, books, objects & prototypes' },
    { id: 'M', label: 'Interiors', shortDesc: 'Children’s rooms, residences & playgrounds' },
    { id: 'L', label: 'Architecture', shortDesc: 'Houses & residential complexes' },
    { id: 'XL', label: 'Large Scale', shortDesc: 'Computational façades, civic & hospitality' },
  ],

  /* ------------------------------------------------------------------------
     MAIN BANNER BACKGROUND CAROUSEL (linked to S / M / L / XL scale bar)
     ------------------------------------------------------------------------ */
  heroCarousel: [
    {
      scale: 'S',
      image: 'assets/images/woodpecker-stool.jpg',
      alt: 'Woodpecker parametric plywood stool with living hinge detail',
      caption: 'Woodpecker — Parametric Furniture',
      category: 'S · Product Design · Digital Fabrication',
      projectId: 'woodpecker-chair',
    },
    {
      scale: 'M',
      image: 'assets/images/savignyplatz-loft.png',
      alt: 'Apartment in Savigny Platz I custom oak mezzanine loft and study interior render',
      caption: 'Apartment in Savigny Platz I',
      category: 'M · Interior Design · Space Optimization',
      projectId: 'apartment-savigny-platz-1',
    },
    {
      scale: 'L',
      image: 'assets/images/fruto-vivas-deck.png',
      alt: 'Casa Bali — Fruto Vivas Residence twilight timber deck, pergola, and reflecting pool',
      caption: 'Casa Bali — Fruto Vivas Residence Restoration',
      category: 'L · Residential Restoration · Architecture',
      projectId: 'house-restoration-fruto-vivas',
    },
    {
      scale: 'XL',
      image: 'assets/images/dhl-1.png',
      motif: 'bipv',
      alt: 'DHL Parkhouse Campus LEJ — Computational BIPV Façade System',
      caption: 'DHL Parkhouse, Campus LEJ — BIPV Façade',
      category: 'XL · Large Scale · Computational Design',
      projectId: 'dhl-lej-parkhaus',
    },
  ],

  /* ------------------------------------------------------------------------
     PROJECTS BY SCALE (20 projects from PDF pages 3–4)
     Every project has Story, Process, Outcome, and Credits.
     ------------------------------------------------------------------------ */
  projects: [
    // ================= S · PRODUCTS — Games, toys and books =================
    {
      id: 'palanca-plank',
      title: 'Palanca / PLANK',
      scale: 'S',
      subcategory: 'Games, toys and books',
      featured: false,
      year: 'c. 2025–2026 · ongoing',
      location: 'Location to confirm',
      role: 'Co-creator & Product Designer',
      studio: 'Feli & Meli',
      collaborators: 'Feliciano & Melicia Planchart',
      client: 'Feli & Meli',
      image: '',
      motif: 'balance',
      story:
        'A tactile balancing and construction game exploring leverage, equilibrium, and playful physics through simple wooden components.',
      process:
        'Iterative physical prototyping, proportion testing, rule-set balancing, and small-batch fabrication trials developed jointly under Feli & Meli.',
      outcome:
        'Ongoing game edition currently in development and playtesting for future release in the Melipop Shop.',
    },
    {
      id: 'zooloriko',
      title: 'Zooloriko',
      scale: 'S',
      subcategory: 'Games, toys and books',
      featured: false,
      year: 'Date to confirm',
      location: 'Location to confirm',
      role: 'Creator & Designer',
      studio: 'Melipop',
      collaborators: 'Melipop',
      client: 'Melipop',
      image: '',
      motif: 'zoo',
      story:
        'An original Melipop play world combining modular animal characters, colour, and storytelling for open-ended imaginative play.',
      process:
        'Character geometry studies, colour-system exploration, material testing, and tactile packaging development.',
      outcome:
        'Original Melipop product line featured in the studio’s curated Shop.',
    },
    {
      id: 'el-viaje-de-aurelia',
      title: 'El viaje de Aurelia',
      scale: 'S',
      subcategory: 'Games, toys and books',
      featured: false,
      year: 'Date to confirm',
      location: 'Location to confirm',
      role: 'Author & Designer',
      studio: 'Melipop',
      collaborators: 'Melipop',
      client: 'Melipop',
      image: '',
      motif: 'book',
      story:
        'An illustrated narrative and book project crafted under Melipop, bridging visual storytelling, spatial imagination, and childhood curiosity.',
      process:
        'Narrative structure, illustration layout, editorial pacing, and print-format prototyping.',
      outcome:
        'Original Melipop book and story edition.',
    },

    // ================= S · PRODUCTS — Object design and prototypes ==========
    {
      id: 'woodpecker-chair',
      title: 'Woodpecker — Parametric Furniture',
      scale: 'S',
      subcategory: 'Object design and prototypes',
      featured: true,
      year: 'c. 2018–2021',
      location: 'Germany / Venezuela',
      role: 'Design, Concept Development, Parametric Modeling & Fabrication',
      studio: 'Melipop · TH-OWL',
      collaborators: 'Melicia Planchart',
      client: 'Open-Source Design Research & Prototype',
      image: 'assets/images/woodpecker-stool.jpg',
      images: [
        'assets/images/woodpecker-stool.jpg',
        'assets/images/woodpecker-2.jpg',
        'assets/images/woodpecker-3.jpg',
      ],
      motif: 'chair',
      story:
        'Developed during the M.Eng. in Computational Design, Woodpecker is an open furniture system that turns a flat sheet of plywood into a stable stool through bending, tension, and the springing character of a living hinge.',
      process:
        'Designed with parametric design and materiality logics, combining computational form finding, kerf-bending living-hinge studies, and CNC digital fabrication from flat-pack plywood.',
      outcome:
        'Compact, adaptable, and easy-to-assemble stool built for playful everyday use, fully customizable through parametric design and structured to scale into a larger open-source furniture family.',
      highlights: [
        'Flat-sheet plywood transformed into a self-tensioned stool via a living hinge',
        'Parametric form-finding and digital fabrication workflow',
        'Published open-source design research paper and full showcase presentation',
      ],
      links: [
        {
          label: 'Read Research Paper (ResearchGate) ↗',
          url: 'https://www.researchgate.net/publication/396473066_DEVELOPMENT_OF_DESIGN_CRITERIA_FOR_AN_OPEN_SOURCE_DESIGN_In_the_Context_of_The_Makers_Movement_Digital_Fabrication_and_Living_Labs',
        },
        {
          label: 'View Showcase Slides ↗',
          url: 'https://www.canva.com/design/DAGzT_pyhK4/1VpWdTjrc98ZB_1ETHv5GA/view?utm_content=DAGzT_pyhK4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h16d7550f4d',
        },
      ],
    },
    {
      id: 'skala-rules-app',
      title: 'SKALA Rules Design App',
      scale: 'S',
      subcategory: 'Object design and prototypes',
      featured: true,
      year: '2024',
      location: 'Germany',
      role: 'Computational Design Lead & Product Owner',
      studio: 'Developed while employed at AVANCIS GmbH',
      collaborators: 'Melicia Planchart & Doğancan Yilmaz',
      client: 'AVANCIS GmbH',
      image: 'assets/images/skala-app-1.png',
      images: [
        'assets/images/skala-app-1.png',
        'assets/images/skala-app-2.png',
        'assets/images/skala-app-3.png',
      ],
      motif: 'bipv',
      story:
        'Interactive browser-based parametric configurator supporting early-stage architectural decisions in solar façade projects, connecting concept design directly with manufacturing constraints and technical planning.',
      process:
        'Defined the parametric strategy, UX scope, and real-time engineering parameters—coordinating development so architects can adjust module size, power output, colour, mounting system, and clamp positions live.',
      outcome:
        'Published live web configurator producing real-time previews and downloadable publish-ready technical outputs that accelerate client alignment and project feasibility.',
      highlights: [
        'Real-time adjustment of module dimensions, power output, colour, and mounting clamps',
        'Direct bridge between early architectural concept design and factory constraints',
        'Downloadable publish-ready configuration outputs for client review',
      ],
      links: [
        {
          label: 'Launch SKALA Rules App ↗',
          url: 'https://skala-tool.netlify.app',
        },
      ],
    },
    {
      id: 'chacao-drum-container',
      title: 'Drum Recycling Container ("Contenedor Tipo-Tambor")',
      scale: 'S',
      subcategory: 'Object design and prototypes',
      featured: false,
      year: 'c. 2015',
      location: 'Chacao, Caracas, Venezuela',
      role: 'Design Team Lead & Project Manager',
      studio: 'ProDiseño · Municipality of Chacao',
      collaborators: 'Moisés P. Ramírez, Mario De Fina, Gabriela Mora, Vanessa Pan, José "Cheo" Carvajal & Jaime Cruz',
      client: 'Municipality of Chacao',
      image: 'assets/images/chacao-drum-1.png',
      images: [
        'assets/images/chacao-drum-1.png',
        'assets/images/chacao-drum-2.png',
        'assets/images/chacao-drum-3.png',
      ],
      motif: 'vessels',
      story:
        'Human-centered social innovation consultancy for the Municipality of Chacao, creating a durable urban drum recycling container ("Contenedor Tipo-Tambor") designed directly around community waste-sorting habits.',
      process:
        'Field observation, participatory community prototyping, graphic signage integration, and iterative redesign across a three-part civic sustainability initiative with ProDiseño.',
      outcome:
        'Implemented municipal recycling product uniting ergonomics, clear visual sorting cues, and urban durability.',
      highlights: [
        'Human-centered civic product developed with ProDiseño and Municipality of Chacao',
        'Part of a three-part community recycling and social innovation program',
        'Integrated industrial design, graphic wayfinding, and field-tested prototyping',
      ],
    },
    {
      id: 'chacao-recycled-backpack',
      title: 'Recycled City-Banner Backpack',
      scale: 'S',
      subcategory: 'Object design and prototypes',
      featured: false,
      year: 'c. 2015',
      location: 'Chacao, Caracas, Venezuela',
      role: 'Design Team Lead, Product Designer & Project Manager',
      studio: 'ProDiseño · Municipality of Chacao',
      collaborators: 'Chacao Community',
      client: 'Municipality of Chacao',
      image: 'assets/images/chacao-backpack-1.png',
      images: [
        'assets/images/chacao-backpack-1.png',
        'assets/images/chacao-backpack-2.png',
        'assets/images/chacao-backpack-3.png',
        'assets/images/chacao-backpack-4.png',
      ],
      motif: 'vessels',
      story:
        'A foldable, expandable backpack crafted from repurposed city advertising banner tarpaulin—designed as a low-cost reusable alternative to single-use plastic bags that keeps advertising waste out of landfills.',
      process:
        'Engineered a no-sew, low-tech assembly using rivets and tape so the backpack can be produced locally without sewing machines or specialized skills, paired with community workshops and digital reward concepts.',
      outcome:
        'Scalable circular-design product extending the lifespan of municipal vinyl banners while engaging residents directly in the making process.',
      highlights: [
        'Repurposed municipal tarpaulin banners assembled without sewing (rivets & tape)',
        'Foldable, expandable, low-cost alternative to single-use plastic bags',
        'Designed for local community production and circular material reuse',
      ],
    },
    {
      id: 'chacao-recycled-bag',
      title: 'Recycled Supermarket Bag',
      scale: 'S',
      subcategory: 'Object design and prototypes',
      featured: false,
      year: 'c. 2015',
      location: 'Chacao, Caracas, Venezuela',
      role: 'Design Team Lead, Product Designer & Project Manager',
      studio: 'ProDiseño · Municipality of Chacao',
      collaborators: 'Local School Volunteers',
      client: 'Municipality of Chacao',
      image: 'assets/images/chacao-bag-1.png',
      images: [
        'assets/images/chacao-bag-1.png',
        'assets/images/chacao-bag-2.png',
        'assets/images/chacao-bag-3.png',
      ],
      motif: 'vessels',
      story:
        'Circular product and social-awareness initiative transforming discarded municipal and advertising banners into die-cut reusable supermarket bags in a context where single-use plastic remained the norm.',
      process:
        'Developed a clean die-cut manufacturing pattern for rapid low-cost production, organizing local school volunteers to clean and prepare recovered banners.',
      outcome:
        'Affordable reusable shopping bags that reduced landfill waste while bringing younger generations into hands-on conversations about plastic reuse.',
      highlights: [
        'Die-cut reusable supermarket bags produced from discarded city banners',
        'School volunteer engagement for material cleaning and sustainability education',
        'Low-cost circular alternative promoting plastic waste awareness',
      ],
    },
    {
      id: 'chacao-dog-waste-strategy',
      title: 'Dog Waste Collection Strategy',
      scale: 'S',
      subcategory: 'Object design and prototypes',
      featured: false,
      year: 'c. 2015',
      location: 'Chacao, Caracas, Venezuela',
      role: 'Design Team Lead, Product Designer & Project Manager',
      studio: 'ProDiseño · Municipality of Chacao',
      collaborators: 'Chacao Community',
      client: 'Municipality of Chacao',
      image: '',
      motif: 'vessels',
      story:
        'Human-centered urban hygiene product and civic awareness strategy developed with ProDiseño to encourage responsible dog waste collection in public parks and sidewalks.',
      process:
        'Field research with pet owners, dispenser and signage prototyping, and community-tested behavioural nudges integrated into municipal street furniture.',
      outcome:
        'Civic collection system and public awareness toolkit designed for Chacao neighbourhoods.',
    },
    {
      id: 'wooden-daybed',
      title: 'Wooden Daybed',
      scale: 'S',
      subcategory: 'Object design and prototypes',
      featured: false,
      year: 'c. 2018–2021',
      location: 'Location to confirm',
      role: 'Furniture Designer',
      studio: 'Melipop',
      collaborators: 'Melicia Planchart',
      client: 'Independent Prototype',
      image: '',
      motif: 'daybed',
      story:
        'A low-slung timber daybed designed around rhythmic slats, calm proportion, and tactile honesty.',
      process:
        'Proportion studies, modular timber assembly drawings, and full-scale fabrication.',
      outcome:
        'Built wooden daybed prototype.',
    },
    {
      id: 'paper-lamps',
      title: 'Paper Lamps',
      scale: 'S',
      subcategory: 'Object design and prototypes',
      featured: false,
      year: 'Date to confirm',
      location: 'Location to confirm',
      role: 'Designer & Maker',
      studio: 'Melipop',
      collaborators: 'Melicia Planchart',
      client: 'Independent Research / Prototype',
      image: '',
      motif: 'lantern',
      story:
        'Lightweight folded and assembled lighting objects investigating how planar sheets transform into luminous three-dimensional volumes.',
      process:
        'Parametric crease-pattern studies, paper-weight tests, light diffusion experiments, and hand-assembled prototypes.',
      outcome:
        'Series of functional lighting prototypes exploring structural origami and warm ambient glow.',
    },

    // ================= M · INTERIORS ========================================
    {
      id: 'apartment-savigny-platz-1',
      title: 'Apartment in Savigny Platz I',
      scale: 'M',
      subcategory: 'Interiors · Space Optimization',
      featured: true,
      year: '2026',
      location: 'Berlin, Germany',
      role: 'Interior Design, Custom-Made Furniture & Lighting Concept',
      studio: 'Melipop, +Espacio',
      collaborators: 'Collaboration with Ana',
      client: 'Private Residence · Savignyplatz (Kinderzimmer Federico)',
      image: 'assets/images/savignyplatz-loft.png',
      images: [
        'assets/images/savignyplatz-loft.png',
        'assets/images/savignyplatz-2.png',
      ],
      motif: 'rooms',
      story:
        'Space optimization for Kinderzimmer Federico in a Berlin apartment at Savignyplatz, maximizing vertical volume for sleep, study, storage, music, and active play.',
      process:
        'Detailed floor plans (Grundriss), interior elevations (Ansichten), custom colour and material palettes, integrated lighting concepts, and 3D interior visualizations.',
      outcome:
        'A tailored mezzanine loft system integrating an elevated bed with storage staircase, built-in wardrobe, study desk, indoor swing, and dedicated music and sports wall storage.',
      highlights: [
        'Custom oak mezzanine loft bed with integrated storage staircase',
        'Built-in wardrobe, study desk, and warm architectural lighting concept',
        'Indoor swing and dedicated wall storage for musical instruments and sports gear',
      ],
    },
    {
      id: 'apartment-savigny-platz-2',
      title: 'Apartment in Savigny Platz II',
      scale: 'M',
      subcategory: 'Interiors · Space Optimization',
      featured: true,
      year: '2026',
      location: 'Berlin, Germany',
      role: 'Interior Design, Custom-Made Furniture & Lighting Concept',
      studio: 'Melipop, +Espacio',
      collaborators: 'Collaboration with Ana',
      client: 'Private Residence · Savignyplatz (Kinderzimmer Carlotta)',
      image: 'assets/images/savignyplatz-carlotta-render.png',
      images: [
        'assets/images/savignyplatz-carlotta-render.png',
        'assets/images/savignyplatz-carlotta-railing.png',
        'assets/images/savignyplatz-carlotta-board.png',
      ],
      motif: 'rooms',
      story:
        'Space optimization for Kinderzimmer Carlotta in a Berlin apartment at Savignyplatz, combining bespoke joinery, soft ambient lighting, and calm study and sleeping zones.',
      process:
        'Detailed floor plans (Grundriss), interior elevations (Ansichten), bespoke railing design (Geländerdesign), colour and material palettes, lighting concepts, and 3D visualizations.',
      outcome:
        'A custom loft bed with signature railing detail, backlit shelving, built-in wardrobe, and an integrated study nook tailored to grow over time.',
      highlights: [
        'Custom loft bed featuring bespoke railing design (Geländerdesign)',
        'Integrated backlit shelving and warm layered lighting concept',
        'Built-in wardrobe and dedicated study nook maximizing room footprint',
      ],
    },
    {
      id: 'kita-hiddeser-berg',
      title: 'KITA Hiddeser Berg — Classroom Renovation',
      scale: 'M',
      subcategory: 'Interiors · Wall Concepts',
      featured: true,
      year: '2018',
      location: 'Hiddeser Berg, Germany',
      role: 'Volunteer Project Manager — Concept, Graphic Design & Implementation',
      studio: 'Melipop',
      collaborators: 'KITA Hiddeser Berg Community',
      client: 'KITA Hiddeser Berg (Public Kindergarten)',
      image: 'assets/images/kita-3.png',
      images: [
        'assets/images/kita-3.png',
        'assets/images/kita-4.png',
        'assets/images/kita-2.png',
        'assets/images/kita-hiddeser-berg.png',
      ],
      motif: 'playground',
      story:
        'Interior design proposals and hands-on classroom renovation for a public kindergarten in Germany, creating functional, warm, and child-friendly spaces for learning, care, and daily activities.',
      process:
        'Led spatial concept development, bespoke green organic wave wall graphics, colour coordination, and on-site implementation organization with volunteer teams.',
      outcome:
        'Transformed classroom interior documented Before and After, bringing calm visual rhythm, acoustic warmth, and playful identity to the children’s daily environment.',
      highlights: [
        'Public kindergarten classroom spatial and graphic wall concept',
        'Custom wavy green wall illustration transforming the learning zone',
        'End-to-end volunteer project management and on-site execution',
      ],
    },
    {
      id: 'compact-kitchen-renovation',
      title: 'Compact Kitchen Renovation',
      scale: 'M',
      subcategory: 'Interiors · Small Spaces',
      featured: false,
      year: '2024–2025',
      location: 'Berlin, Germany',
      role: 'Interior Designer & Custom Cabinetry Designer',
      studio: 'Melipop',
      collaborators: 'Melicia Planchart',
      client: 'Private Residence',
      image: 'assets/images/compact-kitchen.png',
      images: [
        'assets/images/compact-kitchen.png',
        'assets/images/compact-kitchen-2.png',
        'assets/images/compact-kitchen-3.png',
      ],
      motif: 'blocks',
      story:
        'Small-space kitchen renovation maximizing storage capacity, workspace ergonomics, and social dining within a compact residential footprint.',
      process:
        '3D perspective visualization, custom-made cabinet detailing, and dimensioned architectural frontal elevations (alzado frontal) coordinating millwork, appliances, and peninsula bar seating.',
      outcome:
        'Completed compact kitchen with bespoke cabinetry and an integrated breakfast peninsula balancing utility and visual lightness.',
      highlights: [
        'Custom-made cabinetry tailored to tight spatial tolerances',
        'Dimensioned frontal elevations and 3D perspective studies',
        'Integrated peninsula bar seating and streamlined storage',
      ],
    },
    {
      id: 'magia-jumps-playground',
      title: 'Magia Jumps Recreational Park',
      scale: 'M',
      subcategory: 'Interiors · Entertainment Venue',
      featured: false,
      year: 'c. 2016',
      location: 'Venezuela',
      role: 'Architect & Design Concept Development',
      studio: 'Melipop',
      collaborators: 'Collaboration with Máxima',
      client: 'Magia Jumps',
      image: 'assets/images/magia-jumps-1.png',
      images: [
        'assets/images/magia-jumps-1.png',
        'assets/images/magia-jumps-2.png',
        'assets/images/magia-jumps-3.png',
      ],
      motif: 'playground',
      story:
        'Full store concept and interior architecture for the Magia Jumps recreational park, translating movement, playful colour, and discovery into an energetic, family-friendly entertainment venue.',
      process:
        'Led spatial concept development, bespoke lighting, large-scale wall graphic design, engineering project coordination, and on-site construction supervision.',
      outcome:
        'Built indoor recreational park uniting vibrant spatial graphics, custom lighting, and active play zones.',
      highlights: [
        'Complete store concept, spatial layout, and entertainment venue architecture',
        'Integrated lighting design, custom wall graphics, and brand identity',
        'Full construction supervision and multidisciplinary engineering coordination',
      ],
    },
    {
      id: 'apartment-renovation-450',
      title: 'Apartment Renovation (450 sqm)',
      scale: 'M',
      subcategory: 'Interiors · Residential',
      featured: false,
      year: 'c. 2016–2018',
      location: 'Caracas, Venezuela',
      role: 'Interior Design, Supervision, Material Selection & Custom Furniture',
      studio: 'Melipop',
      collaborators: 'Melicia Planchart',
      client: 'Private Residence',
      image: 'assets/images/apt450-1.png',
      images: [
        'assets/images/apt450-1.png',
        'assets/images/apt450-2.png',
        'assets/images/apt450-3.png',
      ],
      motif: 'rooms',
      story:
        'Comprehensive 450 m² residential apartment renovation unifying open social dining and living spaces with bespoke millwork, curated materials, and custom-designed furniture.',
      process:
        'Full architectural floor-plan reconfiguration, 3D interior visualization, material and lighting specification, custom furniture detailing, and on-site supervision.',
      outcome:
        'Completed 450 sqm residence balancing warm natural finishes, tailored storage, and contemporary spatial flow.',
      highlights: [
        '450 m² full-scope interior architecture and spatial reconfiguration',
        'Custom-designed furniture pieces and curated material palette',
        'End-to-end 3D visualization, architectural plans, and construction supervision',
      ],
    },
    {
      id: 'perception-workshop-ucv',
      title: 'Perception Workshop — Public Space Intervention',
      scale: 'M',
      subcategory: 'Interiors · Public Space & Workshop',
      featured: false,
      year: '2012',
      location: 'FAU-UCV, Caracas, Venezuela',
      role: 'Prof. Tutor, Design Concept Development & Supervision',
      studio: 'FAU-UCV',
      collaborators: 'Melicia Planchart, Miguel Bracelli & Francisco Paul',
      client: 'FAU-UCV Academic Workshop',
      image: 'assets/images/perception-1.png',
      images: [
        'assets/images/perception-1.png',
        'assets/images/perception-2.png',
        'assets/images/perception-3.png',
        'assets/images/perception-4.png',
      ],
      motif: 'playground',
      story:
        'Participatory public space intervention and spatial perception workshop at FAU-UCV investigating how lightweight ephemeral installations alter human movement, perspective, and collective interaction.',
      process:
        'Co-led studio concept development, 1:1 physical prototyping, and live campus installation supervision with students and co-tutors Miguel Bracelli and Francisco Paul.',
      outcome:
        'Built full-scale public space intervention transforming everyday university circulation into an active perceptual landscape.',
      highlights: [
        'Full-scale participatory public space intervention at FAU-UCV (2012)',
        'Co-led with Miguel Bracelli and Francisco Paul',
        'Explored spatial perception, lightweight assembly, and public engagement',
      ],
    },
    {
      id: 'melipop-childrens-rooms',
      title: 'Melipop Wall Concepts Catalog',
      scale: 'M',
      subcategory: 'Interiors · Wall Concepts',
      featured: true,
      year: '2024–2026',
      location: 'Berlin, Germany',
      role: 'Lead Spatial, Colour & Graphic Designer',
      studio: 'Melipop',
      collaborators: 'Melipop',
      client: 'Interior Catalog & Private Clients',
      image: 'assets/images/wall-concepts.png',
      images: [
        'assets/images/wall-concepts.png',
        'assets/images/wall-concepts-2.png',
        'assets/images/wall-concepts-3.png',
      ],
      motif: 'blocks',
      story:
        'A curated interior wall-concepts catalog for children’s bedrooms, teenage bedrooms, master bedrooms, living rooms, and home offices—designed with softness, play, gentle colours, and custom geometric wall illustrations.',
      process:
        'Developed cohesive colour palettes (including Paarl #a95225, Moss Green #5F724C, Comet #9e9298, Taupe #a37c77, slate, teal, and ochre) paired with custom architectural wall compositions tailored to each room’s rhythm.',
      outcome:
        'Four signature interior collections ready for bespoke residential application across bedrooms, workspaces, and shared living spaces.',
      highlights: [
        'Children Bedrooms: #Geometry-Garden, #Warm-Meadow, #Calm-Currents',
        'Teenage Bedrooms: #Modern-Peaks, #Flowing-Horizons, #Sunset-Waves',
        'Master Bedrooms: #Diagonal-Energy, #Sunbeam-Stripes',
        'Living Rooms & Home Office: #Bright-Balance-Zone, #Warm-Arc-Workspace, #Bauhaus-Composition, #Soft-Fracture',
      ],
    },

    // ================= L · ARCHITECTURE =====================================
    {
      id: 'house-restoration-fruto-vivas',
      title: 'Casa Bali — Fruto Vivas Residence Restoration',
      scale: 'L',
      subcategory: 'Residential Restoration · Lighting & Furniture',
      featured: true,
      year: '2024–2025',
      location: 'Venezuela',
      role: 'Interior & Spatial Designer, Lighting Designer & Furniture Consultant',
      studio: 'Melipop',
      collaborators: 'Collaboration with Tomás · Original Architecture by Fruto Vivas',
      client: 'Private Residence',
      image: 'assets/images/fruto-vivas-deck.png',
      images: [
        'assets/images/fruto-vivas-deck.png',
        'assets/images/fruto-vivas-dining.png',
        'assets/images/fruto-vivas-3.png',
        'assets/images/fruto-vivas-4.png',
      ],
      motif: 'tropical',
      story:
        'Restoration of an iconic mid-century tropical residence originally designed by award-winning architect Fruto Vivas—transforming previously dark spaces and unlandscaped grounds through recovery of original architectural elements, kitchen and bathroom renovations, wood restoration, and landscape design.',
      process:
        'Developed comprehensive interior, exterior, and landscape lighting concepts alongside luminaire specification and contemporary furniture curation, balancing the residence’s iconic stone-and-timber character with warm modern accents.',
      outcome:
        'Revitalized mid-century tropical landmark uniting sculptural Italian lighting, restored natural timber, reflecting-pool deck ambiance, and curated statement furniture across indoor and courtyard living spaces.',
      highlights: [
        'Luminaires specified: Foscarini Rituals 3er Set, Foscarini Gregg Outdoor, Foscarini Jamaica, Foscarini Big Bang White R7s, and Prandina wall lamps',
        'Furniture curated: Riva 1920 Kauri Bree e Onda dining table and Platone by Filippo Protasoni',
        'Full interior, exterior pergola deck, courtyard bar/lounge, and garden stepping-stone lighting design',
      ],
    },
    {
      id: 'house-trinidad-tobago',
      title: 'House in Trinidad and Tobago',
      scale: 'L',
      subcategory: 'Architecture',
      featured: false,
      year: 'Date to confirm',
      location: 'Trinidad and Tobago',
      role: 'Architect',
      studio: 'Melipop',
      collaborators: 'Design by Melicia Planchart',
      client: 'Private Client',
      image: '',
      motif: 'tropical',
      story:
        'A residential architecture project responding to tropical climate, cross-ventilation, and shaded indoor-outdoor living.',
      process:
        'Site and climate analysis, volumetric massing, architectural drawings, and shading envelope studies.',
      outcome:
        'Complete architectural design proposal.',
    },
    {
      id: 'two-houses-los-chorros',
      title: 'Two Houses in Los Chorros',
      scale: 'L',
      subcategory: 'Architecture',
      featured: false,
      year: 'Dates to confirm',
      location: 'Los Chorros, Caracas, Venezuela',
      role: 'Architect',
      studio: 'Melipop',
      collaborators: 'Design by Melicia Planchart',
      client: 'Private Clients',
      image: '',
      motif: 'duo',
      story:
        'A pair of residences nestled in the verdant slopes of Los Chorros, negotiating topography, privacy, and framed garden views.',
      process:
        'Topographic section studies, structural grids, material tectonics, and architectural documentation.',
      outcome:
        'Architectural designs tailored to hillside living.',
    },
    {
      id: 'house-renovation-spandau',
      title: 'Casa K&B — House Renovation Spandau',
      scale: 'L',
      subcategory: 'Architecture · Renovation & Spatial Concept',
      featured: true,
      year: '2025–2026',
      location: 'Berlin-Spandau, Germany',
      role: 'Architect, Interior Designer, Spatial Concept & Furniture Consultant',
      studio: 'Melipop',
      collaborators: 'Collaboration with Claudia',
      client: 'Private Residence',
      image: 'assets/images/spandau-renovation.png',
      images: [
        'assets/images/spandau-renovation.png',
        'assets/images/spandau-2.png',
        'assets/images/spandau-3.png',
      ],
      motif: 'courtyard',
      story:
        'Comprehensive multi-level residential renovation of Casa K&B in Berlin-Spandau, reimagining circulation, kitchen, dining, living, and private bedroom zones across three storeys with clear spatial sequences and warm material contrasts.',
      process:
        'Developed architectural programming, spatial concepts, and furniture layouts in collaboration with Claudia through 3D architectural section cutaways and furnished axonometric floor-plan models covering every level and room angle.',
      outcome:
        'Cohesive three-level residential renovation blueprint aligning spatial flow, custom storage, kitchen ergonomics, and furniture selection.',
      highlights: [
        'Three-level 3D architectural section cutaway models',
        'Multi-angle furnished axonometrics for kitchen, living, and bedroom zones',
        'Integrated architecture, spatial concept, and furniture consultation in collaboration with Claudia',
      ],
    },
    {
      id: 'residential-complex-los-chorros',
      title: 'Los Chorros — Dwelling',
      scale: 'L',
      subcategory: 'Architecture',
      featured: false,
      year: '2015',
      location: 'Los Chorros, Caracas, Venezuela',
      role: 'Architect Designer — Freelance Architect',
      studio: 'Melipop',
      collaborators: 'Collaboration with Luis',
      client: 'Private Development',
      image: 'assets/images/los-chorros-1.png',
      images: [
        'assets/images/los-chorros-1.png',
        'assets/images/los-chorros-2.jpg',
        'assets/images/los-chorros-3.jpg',
        'assets/images/los-chorros-4.jpg',
      ],
      motif: 'complex',
      story:
        'Multi-unit brick and concrete apartment complex organizing shared landscape, stepped volumes, and rhythmic façades on a sloped urban plot in Los Chorros.',
      process:
        'Concept design, design development, and architectural documentation—balancing massing optimization, unit typologies, circulation studies, and tectonic façade articulation.',
      outcome:
        'Comprehensive multi-family architectural scheme tailored to hillside living in Caracas.',
      highlights: [
        'Brick-and-concrete tectonic language adapted to sloped terrain',
        'Concept design, design development, and architectural documentation',
        'Stepped residential volumes framing shared garden terraces',
      ],
    },

    // ================= XL · LARGE SCALE =====================================
    {
      id: 'dhl-lej-parkhaus',
      title: 'DHL Parkhouse, Campus LEJ — BIPV Façade',
      scale: 'XL',
      subcategory: 'Large Scale · Computational Design',
      featured: true,
      year: '2023–2024',
      location: 'Leipzig, Germany',
      role: 'Architect, Computational Design & Team Lead',
      studio: 'Developed while employed at AVANCIS GmbH',
      collaborators: 'Architektur Von Domaros (original concept)',
      client: 'DHL',
      image: 'assets/images/dhl-1.png',
      images: [
        'assets/images/dhl-1.png',
        'assets/images/dhl-2.png',
        'assets/images/dhl-3.png',
        'assets/images/dhl-4.png',
      ],
      motif: 'bipv',
      story:
        'Large-scale Building-Integrated Photovoltaics (BIPV) façade system for the DHL Campus LEJ parking structure in Leipzig, translating a sculpted architectural concept into a buildable, high-efficiency solar skin.',
      process:
        'Led technical consultancy, parametric form-finding, and shape rationalization—reducing 109 bespoke panel sizes down to 43 special sizes and standardizing the complex envelope into 10 substructure types with < 10° downward-facing tilt.',
      outcome:
        'Built 2,820 m² BIPV façade integrating 440 SKALA solar modules, demonstrating computational geometry optimization at industrial infrastructure scale.',
      highlights: [
        '2,820 m² façade area with 440 AVANCIS SKALA solar modules',
        'Shape rationalization reduced special panel sizes from 109 down to 43',
        '10 standardized substructure types with < 10° downward-facing tilt',
      ],
    },
    {
      id: 'parametric-democube',
      title: 'DemoCube — Parametric Façades Demo Building',
      scale: 'L',
      subcategory: 'Architecture · Parametric Façades',
      featured: false,
      year: '2021–2025',
      location: 'Germany',
      role: 'Designer, Product Owner & Computational Design Team Lead',
      studio: 'Developed while employed at AVANCIS GmbH',
      collaborators: 'Computational Design Team',
      client: 'AVANCIS GmbH · R&D',
      image: 'assets/images/democube-1.png',
      images: [
        'assets/images/democube-1.png',
        'assets/images/democube-2.jpg',
        'assets/images/democube-3.png',
        'assets/images/democube-4.png',
        'assets/images/democube-5.png',
      ],
      motif: 'bipv',
      story:
        'A fully parametrically designed demonstrator building (DemoCube) and genetic façade-paneling algorithm serving as an architectural testbed for BIPV pattern configuration, solar radiation analysis, and performance comparison across locations and time frames.',
      process:
        'Combined genetic algorithm search and convergence (optimizing standard vs. short SKALA modules, passive elements, installed kWp capacity, and cost ratio) with automated radiation simulations and energetic performance reporting.',
      outcome:
        'Applied computational workflow supporting incoming BIPV projects with automated Total Annual Irradiation, Effective PV Area, Expected Annual Energy Yield, and CO₂ Savings estimates—accompanied by the paper "Parametric Design as a Pattern Configuration Tool for Facades".',
      highlights: [
        'Genetic algorithm optimization: 127 standard + 53 short SKALA modules, 57 m² passive elements, 24.3 kWp installed capacity',
        'Automated solar radiation simulations and energetic performance & CO₂ savings reports',
        'Published research paper: "Parametric Design as a Pattern Configuration Tool for Facades"',
      ],
    },
    {
      id: 'avancis-bim-workflow',
      title: 'BIM Family & Rhino.Inside Automation Workflow',
      scale: 'XL',
      subcategory: 'Large Scale · Computational Design',
      featured: false,
      year: '2023–2025',
      location: 'Germany',
      role: 'Product Owner',
      studio: 'Developed while employed at AVANCIS GmbH',
      collaborators: 'Digital Tool Development Team',
      client: 'AVANCIS GmbH',
      image: 'assets/images/bim-1.png',
      images: [
        'assets/images/bim-1.png',
        'assets/images/bim-2.png',
        'assets/images/bim-3.png',
        'assets/images/bim-4.png',
      ],
      motif: 'prism',
      story:
        'Digital toolset bridging parametric design and BIM production: a published Revit BIM family for the SKALA solar module paired with a Revit + Rhino.Inside + Grasshopper workflow automating façade panel distribution and IFC interoperability.',
      process:
        'Led parametric strategy, project scope, team follow-up, and Speckle/BIM automation—delivering publish-ready Revit family layouts, downloadable PDF user manuals, and Grasshopper scripts for direct model handling.',
      outcome:
        'Streamlined technical consultancy and client adoption of BIPV systems across Revit and IFC environments.',
      highlights: [
        'Parametric Revit BIM family for SKALA solar modules published online for client download',
        'Revit + Rhino.Inside + Grasshopper automated panel distribution with IFC interoperability',
        'Delivered with complete Revit Family User Manual PDF and Speckle connector workflows',
      ],
    },
    {
      id: 'abm-high-rise',
      title: 'ABM High Rise Building',
      scale: 'XL',
      subcategory: 'Large Scale · Computational Design',
      featured: false,
      year: '2019',
      location: 'Detmold, Germany',
      role: 'Design & Script Development',
      studio: 'Academic Project · M.Eng. Integrated Design (TH-OWL)',
      collaborators: 'Individual Project',
      client: 'Academic Research Studio',
      image: 'assets/images/abm-1.png',
      images: [
        'assets/images/abm-1.png',
        'assets/images/abm-2.png',
        'assets/images/abm-3.png',
        'assets/images/abm-4.png',
      ],
      motif: 'tower',
      story:
        '18,000 m² high-rise tower exploring Agent-Based Modeling (ABM) where wind acts as a generative environmental agent informing the sculpted building envelope.',
      process:
        'Developed custom ABM prism tests and iterative CFD wind simulations to evaluate aerodynamic pressure zones and translate environmental vector fields into architectural form.',
      outcome:
        'Aerodynamically responsive high-rise proposal uniting algorithmic simulation with structural articulation.',
      highlights: [
        '18,000 m² tower shaped through Agent-Based Modeling (ABM)',
        'Wind vector fields and CFD simulations driving envelope geometry',
        'Custom scripting and architectural prism rationalization studies',
      ],
    },
    {
      id: 'formosa-hub',
      title: 'Formosa Hub — Hyperloop Mobility Hub',
      scale: 'XL',
      subcategory: 'Large Scale · Computational Design',
      featured: true,
      year: '2020',
      location: 'Portugal Coast',
      role: 'Design & Script Development',
      studio: 'Academic Project · M.Eng. Integrated Design (TH-OWL)',
      collaborators: 'Amanda Jardim, Melicia Planchart & Melissa Santodomingo',
      client: 'Academic Research Studio',
      image: 'assets/images/formosa-1.jpg',
      images: [
        'assets/images/formosa-1.jpg',
        'assets/images/formosa-2.jpg',
        'assets/images/formosa-3.jpg',
        'assets/images/formosa-4.jpg',
      ],
      motif: 'stadium',
      story:
        'Coastal Hyperloop Mobility Hub on the Portuguese coast integrating high-speed transit, submerged acrylic/glass domes, tidal energy turbines, a marine research centre, and public aquarium.',
      process:
        'Applied Space Syntax and Graph Theory topology relations (locus, topos, graph) to organize complex multi-level pedestrian flows, transit nodes, and coastal ecological interfaces.',
      outcome:
        'Speculative coastal infrastructure prototype pairing computational spatial topology with renewable tidal energy and public civic space.',
      highlights: [
        'Space Syntax and Graph Theory topology driving spatial organization',
        'Submerged acrylic/glass domes, tidal energy turbines, research centre, and aquarium',
        'Coastal section and exploded axonometric systems integration',
      ],
    },
    {
      id: 'nethra-sculpture',
      title: 'Nethra — Ephemeral Interactive Sculpture',
      scale: 'XL',
      subcategory: 'Large Scale · Computational Design',
      featured: false,
      year: 'c. 2020',
      location: 'Berlin, Germany (Reichstag Lawn)',
      role: 'Design & Script Development',
      studio: 'Computational Design · TH-OWL',
      collaborators: 'Melicia Planchart',
      client: 'Conceptual / Public Installation',
      image: 'assets/images/nethra-1.jpg',
      images: [
        'assets/images/nethra-1.jpg',
        'assets/images/nethra-2.jpg',
        'assets/images/nethra-3.jpg',
      ],
      motif: 'prism',
      story:
        'Ephemeral interactive architectural sculpture conceived for Berlin’s Reichstag lawn, uniting a parametric principal structural network with responsive pneumatic tubes and nodes.',
      process:
        'Developed custom geometry form-finding scripts analyzing structural overlap between the rigid primary grid and inflatable pneumatic network across multi-angle elevations.',
      outcome:
        'Lightweight interactive pavilion concept demonstrating computational form-finding and dual-network structural logic.',
      highlights: [
        'Geometry form-finding uniting principal structure with pneumatic tubes & nodes',
        'Dual-network structural overlap and elevation studies',
        'Site-specific ephemeral civic installation set on Berlin’s Reichstag lawn',
      ],
    },
    {
      id: 'glasstec-live-glt-prototype',
      title: 'Solar Sculpture — glasstec live GLT',
      scale: 'XL',
      subcategory: 'Large Scale · Exhibition Prototype',
      featured: false,
      year: '2022',
      location: 'Düsseldorf, Germany',
      role: 'Computational Design Lead & Product Owner',
      studio: 'Developed while employed at AVANCIS GmbH',
      collaborators: '',
      client: 'glasstec 2022 · GTL Glass Technology Live Exhibition',
      image: 'assets/images/solar-sculpture-1.png',
      images: [
        'assets/images/solar-sculpture-1.png',
        'assets/images/solar-sculpture-2.png',
        'assets/images/solar-sculpture-3.png',
        'assets/images/solar-sculpture-4.png',
      ],
      motif: 'prism',
      story:
        'Full-scale architectural BIPV demonstrator pavilion showcased at glasstec 2022 (GTL Glass Technology Live Exhibition) in Düsseldorf, highlighting sculptural possibilities of solar glass.',
      process:
        'Led computational design, parametric geometry detailing, panelization logic, tolerances coordination, and fabrication documentation as Product Owner.',
      outcome:
        'Built and exhibited live architectural Solar Sculpture at glasstec 2022.',
      highlights: [
        'Exhibited at glasstec 2022 — GTL Glass Technology Live, Düsseldorf',
        'Full-scale sculptural BIPV demonstrator combining glass and solar modules',
        'End-to-end parametric detailing and fabrication coordination',
      ],
    },
    {
      id: 'tiuna-el-fuerte',
      title: 'Tiuna El Fuerte — Cultural Building',
      scale: 'XL',
      subcategory: 'Large Scale · Civic & Cultural',
      featured: false,
      year: '2005–ongoing',
      location: 'Caracas, Venezuela',
      role: 'Architect Designer',
      studio: 'Developed with LAB.PRO.FAB',
      collaborators: 'Arch. Alejandro Haiek · Tiuna el Fuerte Foundation',
      client: 'Intersticial Park · Tiuna el Fuerte Foundation',
      image: 'assets/images/tiuna-1.png',
      images: [
        'assets/images/tiuna-1.png',
        'assets/images/tiuna-2.png',
        'assets/images/tiuna-3.png',
        'assets/images/tiuna-4.png',
      ],
      motif: 'truss',
      story:
        'Civic cultural park and modular container architecture for the Tiuna el Fuerte Foundation in Caracas—transforming an urban interstitial site into an open platform for youth culture, murals, music, and community programming.',
      process:
        'Concept and spatial explorations uniting modular structural planning, adaptive reuse of shipping containers, participatory social/ecological mapping, and vibrant tectonic detailing.',
      outcome:
        'Internationally recognized community cultural infrastructure developed with LAB.PRO.FAB.',
      highlights: [
        'Intersticial Park cultural complex with adaptive container architecture',
        'Concept & spatial explorations with Arch. Alejandro Haiek / LAB.PRO.FAB',
        'Integrated social, cultural, and ecological civic programming',
      ],
    },
    {
      id: 'las-isletas-sports-facilities',
      title: 'Sport Complex Las Isletas',
      scale: 'L',
      subcategory: 'Architecture · Sports & Recreation',
      featured: false,
      year: '2012',
      location: 'Las Isletas, Venezuela',
      role: 'Architect, Designer, Project Coordination & Engineering Integration',
      studio: 'Developed while employed at GLOCALSTUDIO (Caracas/Budapest)',
      collaborators: 'Arch. Bela & Dietrich Kunckel',
      client: 'Las Isletas Sports Complex',
      image: 'assets/images/isletas-sport-1.jpg',
      images: [
        'assets/images/isletas-sport-1.jpg',
        'assets/images/isletas-sport-2.jpg',
        'assets/images/isletas-sport-3.jpg',
      ],
      motif: 'stadium',
      story:
        '12,000 m² multi-discipline sports complex in Las Isletas uniting basketball, baseball, football stadiums, and swimming pools around shaded public promenades.',
      process:
        'Architectural design, physical model studies, site masterplanning, long-span roof geometry, and multidisciplinary engineering coordination.',
      outcome:
        'Comprehensive architectural design and engineering integration for a major regional sports campus.',
      highlights: [
        '12,000 m² sports complex featuring basketball, baseball, football, and swimming facilities',
        'Developed at GLOCALSTUDIO (Caracas/Budapest) with Arch. Bela & Dietrich Kunckel',
        'Site masterplan, structural roof studies, and engineering coordination',
      ],
    },
    {
      id: 'isletas-capex',
      title: 'Isletas Capex — Educational Building',
      scale: 'XL',
      subcategory: 'Large Scale · Educational',
      featured: false,
      year: '2011',
      location: 'CAPET Las Isletas, Venezuela',
      role: 'Architect, Designer, Project Coordination & Engineering Integration',
      studio: 'Developed while employed at GLOCALSTUDIO (Caracas/Budapest)',
      collaborators: 'Arch. Bela & Dietrich Kunckel',
      client: 'Petrochemical Training Center (CAPET)',
      image: 'assets/images/isletas-capex-1.png',
      images: [
        'assets/images/isletas-capex-1.png',
        'assets/images/isletas-capex-2.png',
        'assets/images/isletas-capex-3.png',
      ],
      motif: 'truss',
      story:
        '12,000 m² technical training and capacitation building designed for a petrochemical institution in Las Isletas, balancing shaded tropical circulation with expressive cantilevered volumes.',
      process:
        'Architectural concept design, iterative physical scale models, climatic envelope studies, and full engineering coordination across Caracas and Budapest teams.',
      outcome:
        'Cohesive educational landmark organizing classrooms, laboratories, and shaded public courtyards.',
      highlights: [
        '12,000 m² institutional capacitation building in CAPET Las Isletas',
        'Physical architectural model studies and climatic shading integration',
        'Project coordination and multidisciplinary engineering integration',
      ],
    },
    {
      id: 'five-star-hotel',
      title: 'Hotel ZRPV — Architecture Competition',
      scale: 'L',
      subcategory: 'Architecture · Hospitality',
      featured: false,
      year: '2009',
      location: 'Venezuela',
      role: 'Architect & Designer',
      studio: 'Developed while employed at GLOCALSTUDIO (Caracas/Budapest)',
      collaborators: 'Arch. Bela & Dietrich Kunckel',
      client: 'Hotel & Convention Center ZRPV Competition',
      image: 'assets/images/hotel-zrpv-1.png',
      images: [
        'assets/images/hotel-zrpv-1.png',
        'assets/images/hotel-zrpv-2.jpg',
        'assets/images/hotel-zrpv-3.png',
      ],
      motif: 'tower',
      story:
        '40,000 m² Hotel and Convention Center competition entry combining sculpted high-rise hospitality towers, landscaped public courtyards, and expansive convention halls.',
      process:
        'Program stacking, façade studies, courtyard spatial sequencing, and competition presentation drawings developed at GLOCALSTUDIO.',
      outcome:
        'Large-scale hospitality and convention center architectural competition proposal.',
      highlights: [
        '40,000 m² Hotel & Convention Center competition scheme (2009)',
        'Sculpted tower silhouette paired with shaded public courtyard terraces',
        'Developed with GLOCALSTUDIO (Caracas/Budapest)',
      ],
    },
  ],

  /* ------------------------------------------------------------------------
     RESEARCH AND TEACHING (PDF page 5)
     ------------------------------------------------------------------------ */
  researchAndTeaching: {
    intro:
      'This section belongs inside Work but is separate from the S / M / L / XL project filter because research and teaching are activities and methods rather than scales.',
    computationalResearch: {
      applied: {
        title: '1.1 Applied Research',
        points: [
          'AVANCIS GmbH & DHL Campus LEJ — industrial-scale BIPV façade engineering, shape rationalization, and computational tooling',
          'DemoCube & SKALA Rules Design App — parametric façade configuration, solar radiation simulations, energy yield & CO₂ reporting',
          'BIM Automation — parametric Revit SKALA family, Rhino.Inside + Grasshopper panel distribution, and IFC/Speckle workflows',
        ],
      },
      academic: {
        title: '1.2 Academic Research',
        points: [
          'M.Eng. Integrated Design (Computational Design) at TH-OWL, Germany — Master’s thesis on genetic algorithms for PV façade paneling',
          'ABM High Rise Building — wind-driven Agent-Based Modeling and CFD envelope optimization',
          'Formosa Hub — Space Syntax & Graph Theory spatial topology for a coastal Hyperloop Mobility Hub',
        ],
      },
    },
    designEducation: {
      objectDesign: {
        title: '2.1 Object Design',
        institution: 'FAU UCV (Facultad de Arquitectura y Urbanismo, Universidad Central de Venezuela)',
        summary:
          'Foundational studio exploring material intelligence, ergonomics, prototyping, and craft-driven object making.',
      },
      parametricDesign: {
        title: '2.2 Parametric Design and Digital Fabrication',
        institution: 'FAU UCV',
        points: [
          'FAU UCV course overview, computational methods, and selected studio results',
          'Student work organised inside the course page by scale: S, M, and L',
          'Every student project credited individually',
        ],
        studentWork: [
          {
            scale: 'S',
            title: 'Parametric Surface Vessels',
            student: 'Student credit to confirm · FAU UCV',
            method: 'Algorithmic patterning & 3D printing / laser cutting',
          },
          {
            scale: 'M',
            title: 'Modular Pavilion Partition',
            student: 'Student credit to confirm · FAU UCV',
            method: 'CNC waffle assembly & interlocking timber joints',
          },
          {
            scale: 'L',
            title: 'Responsive Shading Envelope',
            student: 'Student credit to confirm · FAU UCV',
            method: 'Solar-driven parametric façade study',
          },
        ],
      },
    },
    workshops: [
      {
        title: 'Perception Workshop (FAU-UCV, 2012)',
        desc: 'Public space intervention and spatial perception workshop co-led with Miguel Bracelli and Francisco Paul — exploring 1:1 ephemeral installations and collective campus interaction.',
      },
      {
        title: 'Toy Lab',
        desc: 'Hands-on participatory workshop exploring play mechanics, prototyping, and open-ended object making.',
      },
      {
        title: 'Other Workshops',
        desc: 'Computational design, digital fabrication, and spatial play intensives hosted across academic and cultural settings.',
      },
    ],
    publications: [
      {
        title: 'Parametric Design as a Pattern Configuration Tool for Facades',
        desc: 'Applied computational design research developed around DemoCube and BIPV façade pattern optimization at AVANCIS GmbH.',
      },
      {
        title: 'Development of Design Criteria for an Open-Source Design',
        desc: 'Published paper on open-source design in the context of the Makers Movement, Digital Fabrication, and Living Labs (ResearchGate, featuring the Woodpecker stool).',
      },
    ],
  },

  /* ------------------------------------------------------------------------
     SHOP (PDF page 6)
     ------------------------------------------------------------------------ */
  shop: {
    intro:
      'The shop presents products without turning the entire website into an online store. It can grow gradually as products become available.',
    items: [
      {
        id: 'shop-zooloriko',
        title: 'Zooloriko',
        brand: 'Melipop',
        category: 'Play Object / Game',
        status: 'Edition · Inquire',
        motif: 'zoo',
        summary: 'Modular animal play set and imaginative world designed by Melipop.',
        details: 'Crafted in small batches. Reach out for current edition availability, stockists, or custom requests.',
      },
      {
        id: 'shop-aurelia',
        title: 'El viaje de Aurelia',
        brand: 'Melipop',
        category: 'Book & Story',
        status: 'Edition · Inquire',
        motif: 'book',
        summary: 'Illustrated story book created by Melipop celebrating curiosity and spatial imagination.',
        details: 'Printed edition. Contact the studio to reserve a copy or inquire about readings and bookshops.',
      },
      {
        id: 'shop-palanca',
        title: 'Palanca / PLANK',
        brand: 'Feli & Meli',
        category: 'Game',
        status: 'In Development · 2025–2026',
        motif: 'balance',
        summary: 'Tactile balance and construction game created jointly by Feliciano and Melicia.',
        details: 'Currently in prototyping and playtesting. Join the studio mailing list or inquire for the upcoming first edition.',
      },
      {
        id: 'shop-paper-lamps',
        title: 'Paper Lamps — Limited Edition',
        brand: 'Melipop',
        category: 'Object & Limited Edition',
        status: 'Made to Order',
        motif: 'lantern',
        summary: 'Geometric folded paper lighting objects casting warm architectural shadows.',
        details: 'Numbered studio editions assembled to order.',
      },
      {
        id: 'shop-melipop-editions',
        title: 'Melipop Products & Editions',
        brand: 'Melipop Design Lab',
        category: 'Objects & Prototypes',
        status: 'Curated Releases',
        motif: 'vessels',
        summary: 'Small-run spatial objects, prototypes, and playful editions released directly from the studio.',
        details: 'New objects and editions are added gradually as prototypes move into small-batch production.',
      },
    ],
    brandRelationships: [
      {
        name: 'Melipop Design Lab',
        role: 'Main spatial and product design practice',
      },
      {
        name: 'Melipop',
        role: 'Zooloriko, books, stories, objects and original products',
      },
      {
        name: 'Feli & Meli',
        role: 'Games and products created jointly by Feliciano and Melicia',
      },
    ],
  },

  /* ------------------------------------------------------------------------
     STUDIO / ABOUT (PDF page 7)
     ------------------------------------------------------------------------ */
  studio: {
    portrait: 'assets/images/melicia-portrait-color.jpg',
    portraitAlt: 'Melicia Planchart — Architect, Computational Designer, and Founder of Melipop Design Lab',
    profile:
      'Melipop is a spatial and product design practice founded by Melicia Planchart — Architect, M.Eng. Computational Designer, and Lecturer based in Berlin. Working across Germany and Venezuela, the studio bridges architecture, interior concepts, product design, digital fabrication, and academic teaching.',
    trajectory: [
      'Architect — Universidad Central de Venezuela (FAU UCV) & Lecturer in Object and Parametric Design',
      'Product Designer — ProDiseño (urban furniture and urban services)',
      'Architect & Project Manager — GLOCALSTUDIO (Caracas/Budapest) & LAB.PRO.FAB',
      'M.Eng. Integrated Design (Computational Design) & Research Assistant — TH-OWL, Germany',
      'Computational Design Lead — AVANCIS GmbH (Building Skins / Solar Façades)',
      'Founder & Independent Design Consultant — Melipop Creative Studio, Berlin',
    ],
    cv: {
      education: [
        'M.Eng. Master of Integrated Design (Profile: Computational Design) — TH-OWL, Germany',
        'Architect — Universidad Central de Venezuela (UCV)',
        'Product Management & Development Studies — IU Akademie, Germany',
        'Design & Social Innovation Studies · Entrepreneurship Program (Berlin) · Mechanical Engineering',
      ],
      experience: [
        'Computational Design Lead — AVANCIS GmbH (Solar Façades / Building Skins)',
        'Founder & Independent Design Consultant — MeliPop Creative Studio, Berlin',
        'Architect & Project Manager — GLOCALSTUDIO & LAB.PRO.FAB',
        'Research Assistant — TH-OWL, Germany · Lecturer — UCV, Venezuela · Product Designer — ProDiseño',
      ],
      skills: {
        Technical: ['Grasshopper', 'Rhino 3D', 'Rhino.Inside', 'Revit / BIM', 'Shape & Geometry Optimization', 'CFD & Solar Simulation', 'CNC / Laser Cutting', '3D Printing'],
        Design: ['Architectural & Spatial Design', 'Interior Concepts & Lighting', 'Furniture & Product Design', 'Digital Product & UX Prototyping'],
        Leadership: ['Computational Team Lead', 'Product Ownership', 'Project Coordination', 'Teaching & Mentoring', 'Entrepreneurial Mindset'],
      },
    },
    creditsStatement:
      'Melipop brings together independent projects, collaborations and selected professional work developed by Melicia Planchart across studios, institutions and multidisciplinary teams. Every project credits the corresponding studio, institution and collaborators and identifies Melicia’s specific role.',
    collaborators: [
      { name: 'Ana', context: "Savignyplatz Children's Rooms" },
      { name: 'Tomás', context: 'Casa Bali' },
      { name: 'Máxima', context: 'Magia Jumps Playground' },
      { name: 'Claudia', context: 'Casa K&B' },
      { name: 'Luis', context: 'Residential Complex in Los Chorros' },
      { name: 'Feliciano', context: 'Feli & Meli · Palanca / PLANK' },
      { name: 'ProDiseño', context: 'Object Design' },
      { name: 'AVANCIS', context: 'DHL LEJ Parkhaus · glasstec live GLT' },
      { name: 'LAB.PRO.FAB', context: 'Tiuna el Fuerte' },
      { name: 'Glocalstudio', context: 'Las Isletas · Five Star Hotel' },
      { name: 'FAU UCV', context: 'Design Education & Research' },
      { name: 'TH OWL', context: 'M.Eng. Integrated Design' },
    ],
    links: {
      cvUrl: '#studio/cv',
      linkedinUrl: 'https://www.linkedin.com/in/melicia-planchart',
      email: 'planchart.architect@gmail.com',
      phone: '+49 1590 1703846',
      location: 'Berlin 10629, Germany',
    },
  },
};
