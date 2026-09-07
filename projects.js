// Add, remove, or reorder projects here. The website builds the cards for you.
window.portfolioProjects = [
  {
    title: "Ethereum Mining Thermal Optimization",
    tags: ["Thermal management", "Power optimization", "Testing"],
    summary: "Improved a personal GPU mining system by redesigning airflow, tuning power use, and monitoring performance for sustained efficiency.",
    details: [
      "Compared thermals, throughput, and power draw before and after changes.",
      "Reworked airflow and cooling to reduce heat-related performance loss.",
      "Balanced operating settings for efficiency, stability, and minimal downtime."
    ],
    result: "Efficiency improved from 0.43 to 0.50 MH/W while producing up to $500 per month with minimal downtime.",
    visual: "thermal",
    image: "",
    imageAlt: "",
    imageCredit: "",
    imageCreditUrl: "",
    link: "",
    featured: true
  },
  {
    title: "Drum Clamp Structural Analysis",
    tags: ["SolidWorks", "FEA", "Mechanical design"],
    summary: "Translated a real impact-loading use case into a structural model to evaluate stress, displacement, and design margin.",
    details: [
      "Created the clamp geometry and analysis-ready model in SolidWorks.",
      "Defined representative constraints and impact loading.",
      "Reviewed stress concentrations, displacement, and factor of safety to guide iteration."
    ],
    result: "Converted a practical hardware problem into a clear, defensible engineering analysis.",
    visual: "clamp",
    image: "",
    imageAlt: "",
    imageCredit: "",
    imageCreditUrl: "",
    link: "",
    featured: false
  },
  {
    title: "Dynamic Systems Modeling",
    tags: ["MATLAB", "Controls", "Modeling"],
    summary: "Modeled mechanical and electrical systems to understand transient behavior and predict system response.",
    details: [
      "Built state-space and transfer-function representations.",
      "Connected subsystems with block diagrams.",
      "Used MATLAB to calculate and interpret system response."
    ],
    result: "Created models that connect equations, physical behavior, and engineering decisions.",
    visual: "systems",
    image: "",
    imageAlt: "",
    imageCredit: "",
    imageCreditUrl: "",
    link: "",
    featured: false
  }
];
