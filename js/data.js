/* ==========================================================================
   MeliPop Design Lab — Structured Portfolio, Research, Shop & Studio Data
   Edit this file to update project dates, descriptions, credits, or add
   real photography (set `image: "assets/your-photo.jpg"` on any item).
   ========================================================================== */

window.MELIPOP_DATA = {
  brand: {
    name: 'MeliPop Design Lab',
    discipline: 'Spatial and Product Design',
    tagline: 'Play. Make. Transform.',
    quote: 'For us, complexity is a fun idea. And simplicity, a fun challenge.',
    summary:
      'MeliPop is a spatial and product design practice working across scales, from products and interiors to architecture and large-scale systems. The website presents projects, research and teaching, products for sale, and the trajectory behind the studio without dividing them into separate professional identities.',
  },

  scales: [
    { id: 'S', label: 'Products', shortDesc: 'Games, toys, books, objects & prototypes' },
    { id: 'M', label: 'Interiors', shortDesc: 'Children’s rooms, residences & playgrounds' },
    { id: 'L', label: 'Architecture', shortDesc: 'Houses & residential complexes' },
    { id: 'XL', label: 'Large Scale', shortDesc: 'Computational façades, civic & hospitality' },
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
      featured: true,
      year: 'c. 2025–2026 · ongoing',
      location: 'Location to confirm',
      role: 'Co-creator & Product Designer',
      studio: 'Feli and Meli',
      collaborators: 'Feliciano & Melicia Planchart',
      client: 'Feli and Meli',
      image: '',
      motif: 'balance',
      story:
        'A tactile balancing and construction game exploring leverage, equilibrium, and playful physics through simple wooden components.',
      process:
        'Iterative physical prototyping, proportion testing, rule-set balancing, and small-batch fabrication trials developed jointly under Feli and Meli.',
      outcome:
        'Ongoing game edition currently in development and playtesting for future release in the MeliPop Shop.',
    },
    {
      id: 'zooloriko',
      title: 'Zooloriko',
      scale: 'S',
      subcategory: 'Games, toys and books',
      featured: true,
      year: 'Date to confirm',
      location: 'Location to confirm',
      role: 'Creator & Designer',
      studio: 'MeliPop',
      collaborators: 'MeliPop',
      client: 'MeliPop',
      image: '',
      motif: 'zoo',
      story:
        'An original MeliPop play world combining modular animal characters, colour, and storytelling for open-ended imaginative play.',
      process:
        'Character geometry studies, colour-system exploration, material testing, and tactile packaging development.',
      outcome:
        'Original MeliPop product line featured in the studio’s curated Shop.',
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
      studio: 'MeliPop',
      collaborators: 'MeliPop',
      client: 'MeliPop',
      image: '',
      motif: 'book',
      story:
        'An illustrated narrative and book project crafted under MeliPop, bridging visual storytelling, spatial imagination, and childhood curiosity.',
      process:
        'Narrative structure, illustration layout, editorial pacing, and print-format prototyping.',
      outcome:
        'Original MeliPop book and story edition.',
    },

    // ================= S · PRODUCTS — Object design and prototypes ==========
    {
      id: 'object-design-prodiseno',
      title: 'Object design with ProDiseño',
      scale: 'S',
      subcategory: 'Object design and prototypes',
      featured: false,
      year: 'c. 2015',
      location: 'Caracas, Venezuela',
      role: 'Object Designer',
      studio: 'ProDiseño',
      collaborators: 'ProDiseño',
      client: 'Academic / Studio Exploration',
      image: '',
      motif: 'vessels',
      story:
        'Early series of functional objects and material explorations developed with ProDiseño, examining everyday rituals through geometry and craft.',
      process:
        'Sketching, scale mock-ups, material experimentation, and workshop fabrication.',
      outcome:
        'Collection of physical object prototypes forming a foundation for MeliPop’s product practice.',
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
      studio: 'MeliPop',
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
    {
      id: 'woodpecker-chair',
      title: 'Woodpecker Chair',
      scale: 'S',
      subcategory: 'Object design and prototypes',
      featured: true,
      year: 'c. 2018–2021',
      location: 'Location to confirm',
      role: 'Furniture Designer',
      studio: 'Independent / MeliPop',
      collaborators: 'Melicia Planchart',
      client: 'Independent Prototype',
      image: '',
      motif: 'chair',
      story:
        'A sculptural timber seating object balancing crisp joinery, ergonomic posture, and a playful silhouette.',
      process:
        'Digital 3D modelling, CNC and woodworking joinery tests, structural load validation, and full-scale timber prototyping.',
      outcome:
        'Built full-scale wooden chair prototype.',
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
      studio: 'Independent / MeliPop',
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

    // ================= M · INTERIORS ========================================
    {
      id: 'savignyplatz-childrens-rooms',
      title: "Savignyplatz Children's Rooms",
      scale: 'M',
      subcategory: 'Interiors',
      featured: true,
      year: '2026',
      location: 'Berlin, Germany',
      role: 'Spatial & Interior Designer',
      studio: 'MeliPop Design Lab',
      collaborators: 'Collaboration with Ana',
      client: 'Private Residence',
      image: '',
      motif: 'rooms',
      story:
        'Playful, adaptable children’s bedrooms designed around bespoke storage, colour blocking, and spatial flexibility as children grow.',
      process:
        'Spatial zoning, custom millwork detailing, colour and material palettes, and close coordination with craftsmen.',
      outcome:
        'Completed interior concept and bespoke furniture system for a Berlin family apartment.',
    },
    {
      id: 'casa-bali',
      title: 'Casa Bali',
      scale: 'M',
      subcategory: 'Interiors',
      featured: false,
      year: 'Date to confirm',
      location: 'Location to confirm',
      role: 'Interior & Spatial Designer',
      studio: 'MeliPop Design Lab',
      collaborators: 'Collaboration with Tomás',
      client: 'Private Residence',
      image: '',
      motif: 'arch',
      story:
        'An atmospheric residential interior emphasizing natural textures, calm light transitions, and custom spatial elements.',
      process:
        'Interior layout studies, lighting and material curation, and bespoke fixture drawings.',
      outcome:
        'Designed interior architecture and spatial identity.',
    },
    {
      id: 'magia-jumps-playground',
      title: 'Magia Jumps Playground',
      scale: 'M',
      subcategory: 'Interiors',
      featured: false,
      year: 'Date to confirm',
      location: 'Location to confirm',
      role: 'Spatial Designer',
      studio: 'MeliPop Design Lab',
      collaborators: 'Collaboration with Máxima',
      client: 'Magia Jumps',
      image: '',
      motif: 'playground',
      story:
        'An energetic indoor play landscape translating movement, colour, and discovery into safe architectural play structures.',
      process:
        'Circulation mapping, playful geometry studies, safety-compliant detailing, and visual identity integration.',
      outcome:
        'Designed playground interior uniting spatial graphics and active play.',
    },
    {
      id: 'melipop-childrens-rooms',
      title: "MeliPop Children's Rooms",
      scale: 'M',
      subcategory: 'Interiors',
      featured: false,
      year: 'c. 2022–present',
      location: 'Various locations',
      role: 'Lead Spatial & Product Designer',
      studio: 'MeliPop Design Lab',
      collaborators: 'MeliPop Design Lab',
      client: 'Private Clients',
      image: '',
      motif: 'blocks',
      story:
        'An ongoing series of tailored children’s interiors where furniture, walls, and play objects work as one coherent system.',
      process:
        'Family workshops, modular furniture design, colour composition, and custom fabrication drawings.',
      outcome:
        'Multiple realized and in-progress children’s spaces across scales.',
    },

    // ================= L · ARCHITECTURE =====================================
    {
      id: 'house-trinidad-tobago',
      title: 'House in Trinidad and Tobago',
      scale: 'L',
      subcategory: 'Architecture',
      featured: false,
      year: 'Date to confirm',
      location: 'Trinidad and Tobago',
      role: 'Architect',
      studio: 'Independent Practice',
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
      studio: 'Independent Practice',
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
      id: 'casa-kremer-bermudez',
      title: 'Casa Kremer Bermúdez',
      scale: 'L',
      subcategory: 'Architecture',
      featured: true,
      year: '2025–2026',
      location: 'Location to confirm',
      role: 'Architect',
      studio: 'MeliPop Design Lab',
      collaborators: 'Collaboration with Claudia',
      client: 'Private Residence',
      image: '',
      motif: 'courtyard',
      story:
        'A contemporary residential project balancing clear spatial sequences, daylight courtyards, and warm material contrasts.',
      process:
        'Architectural programming, 3D spatial studies, envelope detailing, and collaborative design development.',
      outcome:
        'Residential architecture project developed 2025–2026.',
    },
    {
      id: 'residential-complex-los-chorros',
      title: 'Residential Complex in Los Chorros',
      scale: 'L',
      subcategory: 'Architecture',
      featured: false,
      year: 'Date to confirm',
      location: 'Los Chorros, Caracas, Venezuela',
      role: 'Architect',
      studio: 'Collaboration',
      collaborators: 'Collaboration with Luis',
      client: 'Private Development',
      image: '',
      motif: 'complex',
      story:
        'Multi-unit residential architecture organizing shared landscape, stepped volumes, and rhythmic façades on a sloped urban plot.',
      process:
        'Massing optimization, unit typologies, circulation studies, and façade articulation.',
      outcome:
        'Multi-family architectural scheme for Los Chorros.',
    },

    // ================= XL · LARGE SCALE =====================================
    {
      id: 'dhl-lej-parkhaus',
      title: 'DHL LEJ Parkhaus',
      scale: 'XL',
      subcategory: 'Large Scale',
      featured: true,
      year: 'c. 2023–2024',
      location: 'Leipzig, Germany',
      role: 'Team Lead Computational Design',
      studio: 'Developed while employed at AVANCIS',
      collaborators: 'AVANCIS Computational Design & Engineering Teams',
      client: 'DHL',
      image: '',
      motif: 'bipv',
      story:
        'Large-scale Building-Integrated Photovoltaics (BIPV) façade system for the DHL Leipzig parking structure, uniting solar performance with architectural rhythm.',
      process:
        'Parametric façade generation, solar radiation analysis, geometric rationalization, and automated design-to-fabrication data workflows.',
      outcome:
        'Engineered BIPV façade system demonstrating computational design at industrial infrastructure scale.',
    },
    {
      id: 'glasstec-live-glt-prototype',
      title: 'glasstec live GLT Prototype',
      scale: 'XL',
      subcategory: 'Large Scale',
      featured: false,
      year: '2024',
      location: 'Düsseldorf, Germany',
      role: 'Computational Designer',
      studio: 'Developed while employed at AVANCIS',
      collaborators: 'AVANCIS',
      client: 'glasstec Exhibition',
      image: '',
      motif: 'prism',
      story:
        'Full-scale architectural façade demonstrator showcasing next-generation glass and BIPV integration at glasstec 2024.',
      process:
        'Parametric geometry detailing, panelization logic, tolerances coordination, and fabrication documentation.',
      outcome:
        'Built and exhibited live prototype at glasstec 2024.',
    },
    {
      id: 'tiuna-el-fuerte',
      title: 'Tiuna el Fuerte',
      scale: 'XL',
      subcategory: 'Large Scale',
      featured: false,
      year: 'Exact year to confirm',
      location: 'Caracas, Venezuela',
      role: 'Architectural Designer',
      studio: 'Developed while employed with LAB.PRO.FAB',
      collaborators: 'LAB.PRO.FAB',
      client: 'Cultural Park / Public Institution',
      image: '',
      motif: 'truss',
      story:
        'Civic cultural infrastructure and modular public spaces designed for community programming, arts, and youth culture.',
      process:
        'Modular structural planning, participatory spatial programming, and tectonic detailing.',
      outcome:
        'Large-scale cultural architecture contribution with LAB.PRO.FAB.',
    },
    {
      id: 'las-isletas-sports-facilities',
      title: 'Las Isletas Sports Facilities',
      scale: 'XL',
      subcategory: 'Large Scale',
      featured: false,
      year: 'Exact year to confirm',
      location: 'Location to confirm',
      role: 'Architectural Designer and Project Design Manager',
      studio: 'Developed while employed at Glocalstudio',
      collaborators: 'Glocalstudio',
      client: 'Sports & Recreation Development',
      image: '',
      motif: 'stadium',
      story:
        'Masterplanning and architectural design of multi-discipline sports facilities organized around shaded public promenades.',
      process:
        'Design management, masterplan zoning, roof-span geometry, and multidisciplinary coordination.',
      outcome:
        'Comprehensive architectural design for large-scale sports facilities.',
    },
    {
      id: 'five-star-hotel',
      title: 'Five Star Hotel',
      scale: 'XL',
      subcategory: 'Large Scale',
      featured: false,
      year: 'Exact year to confirm',
      location: 'Location to confirm',
      role: 'Project Designer',
      studio: 'Developed while employed at Glocalstudio',
      collaborators: 'Glocalstudio',
      client: 'Hospitality Client',
      image: '',
      motif: 'tower',
      story:
        'Hospitality architecture integrating guest-room modularity, public terraces, and a sculpted façade envelope.',
      process:
        'Program stacking, façade studies, spatial experience design, and technical coordination.',
      outcome:
        'Large-scale hospitality design developed at Glocalstudio.',
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
          'AVANCIS and DHL — industrial-scale façade engineering and computational tooling',
          'BIPV façade development, solar analysis, geometric optimisation, and design-to-fabrication workflows',
        ],
      },
      academic: {
        title: '1.2 Academic Research',
        points: [
          'M.Eng. Integrated Design academic projects (TH OWL)',
          'Generative design, simulation, optimisation, and computational methods',
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
        title: 'Academic Papers & Design Research',
        desc: 'Peer-reviewed articles and technical writing on BIPV façades, parametric workflows, and integrated design.',
      },
      {
        title: 'Books & Other Publications',
        desc: 'Published books, studio essays, and exhibition catalogues.',
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
        brand: 'MeliPop',
        category: 'Play Object / Game',
        status: 'Edition · Inquire',
        motif: 'zoo',
        summary: 'Modular animal play set and imaginative world designed by MeliPop.',
        details: 'Crafted in small batches. Reach out for current edition availability, stockists, or custom requests.',
      },
      {
        id: 'shop-aurelia',
        title: 'El viaje de Aurelia',
        brand: 'MeliPop',
        category: 'Book & Story',
        status: 'Edition · Inquire',
        motif: 'book',
        summary: 'Illustrated story book created by MeliPop celebrating curiosity and spatial imagination.',
        details: 'Printed edition. Contact the studio to reserve a copy or inquire about readings and bookshops.',
      },
      {
        id: 'shop-palanca',
        title: 'Palanca / PLANK',
        brand: 'Feli and Meli',
        category: 'Game',
        status: 'In Development · 2025–2026',
        motif: 'balance',
        summary: 'Tactile balance and construction game created jointly by Feliciano and Melicia.',
        details: 'Currently in prototyping and playtesting. Join the studio mailing list or inquire for the upcoming first edition.',
      },
      {
        id: 'shop-paper-lamps',
        title: 'Paper Lamps — Limited Edition',
        brand: 'MeliPop',
        category: 'Object & Limited Edition',
        status: 'Made to Order',
        motif: 'lantern',
        summary: 'Geometric folded paper lighting objects casting warm architectural shadows.',
        details: 'Numbered studio editions assembled to order.',
      },
      {
        id: 'shop-melipop-editions',
        title: 'MeliPop Products & Editions',
        brand: 'MeliPop Design Lab',
        category: 'Objects & Prototypes',
        status: 'Curated Releases',
        motif: 'vessels',
        summary: 'Small-run spatial objects, prototypes, and playful editions released directly from the studio.',
        details: 'New objects and editions are added gradually as prototypes move into small-batch production.',
      },
    ],
    brandRelationships: [
      {
        name: 'MeliPop Design Lab',
        role: 'Main spatial and product design practice',
      },
      {
        name: 'MeliPop',
        role: 'Zooloriko, books, stories, objects and original products',
      },
      {
        name: 'Feli and Meli',
        role: 'Games and products created jointly by Feliciano and Melicia',
      },
    ],
  },

  /* ------------------------------------------------------------------------
     STUDIO / ABOUT (PDF page 7)
     ------------------------------------------------------------------------ */
  studio: {
    profile:
      'MeliPop is a spatial and product design practice founded by Melicia Planchart, an architect, computational designer and educator. The studio works across scales, combining design and research with parametric design and digital fabrication.',
    trajectory: [
      'Architecture and spatial design in Venezuela',
      'Product design and digital fabrication',
      'M.Eng. Integrated Design at TH OWL',
      'Computational design and BIPV at AVANCIS',
      'Teaching and research at FAU UCV',
      'Independent practice and MeliPop',
    ],
    creditsStatement:
      'MeliPop brings together independent projects, collaborations and selected professional work developed by Melicia Planchart across studios, institutions and multidisciplinary teams. Every project credits the corresponding studio, institution and collaborators and identifies Melicia’s specific role.',
    collaborators: [
      { name: 'Ana', context: "Savignyplatz Children's Rooms" },
      { name: 'Tomás', context: 'Casa Bali' },
      { name: 'Máxima', context: 'Magia Jumps Playground' },
      { name: 'Claudia', context: 'Casa Kremer Bermúdez' },
      { name: 'Luis', context: 'Residential Complex in Los Chorros' },
      { name: 'Feliciano', context: 'Feli and Meli · Palanca / PLANK' },
      { name: 'ProDiseño', context: 'Object Design' },
      { name: 'AVANCIS', context: 'DHL LEJ Parkhaus · glasstec live GLT' },
      { name: 'LAB.PRO.FAB', context: 'Tiuna el Fuerte' },
      { name: 'Glocalstudio', context: 'Las Isletas · Five Star Hotel' },
      { name: 'FAU UCV', context: 'Design Education & Research' },
      { name: 'TH OWL', context: 'M.Eng. Integrated Design' },
    ],
    links: {
      cvUrl: '#studio/cv',
      linkedinUrl: 'https://www.linkedin.com',
      email: 'hello@melipop.design',
    },
  },
};
