// Add, remove, or reorder projects here. The website builds the cards for you.
window.portfolioProjects = [
  {
    title: "High Altitude Launch System",
    eyebrow: "Senior Design · My contribution: manufacturing + fabrication",
    tags: ["CNC routing", "Manual machining", "DFM", "3D printing"],
    summary: "I translated the HALS team design into manufacturable hardware, then integrated the custom parts into a functional balloon-supported launch-platform prototype.",
    metrics: [
      { value: "2", label: "structural plates" },
      { value: "0.5 in", label: "Baltic birch" },
      { value: "4", label: "processes integrated" }
    ],
    highlights: [
      { title: "CAD to CNC", text: "Converted SolidWorks plate models into DXF geometry, generated Carbide Create toolpaths, and ran both parts on a Shapeoko 3 router." },
      { title: "Design for manufacturing", text: "Replaced inaccessible internal corners with cutter-compatible radii, adjusted slots and holes, and added retention tabs." },
      { title: "Lathe-machined interfaces", text: "Drilled and precision-bored one-inch PVC fittings using DRO references and repeated test fits to control the final interface." },
      { title: "Manual-milled linkage", text: "Machined an aluminum servo linkage with the slot and hole pattern needed to drive the helium-release valve." },
      { title: "Printed modular hardware", text: "Designed and fabricated PLA threaded joints, adapters, and servo mounts connecting removable PVC arms to the platform." },
      { title: "Repeatable assembly", text: "Improved workholding, reduced tool loading after cutter failures, and moved critical holes to a drill press for better consistency." }
    ],
    result: "Combined CNC-routed, manually machined, 3D-printed, and off-the-shelf components into a working integrated prototype.",
    image: "assets/projects/hals-routed-plate.webp",
    imageAlt: "CNC-routed Baltic birch structural plate for the High Altitude Launch System",
    imageCredit: "HALS senior design team documentation",
    imageCreditUrl: "",
    gallery: [
      { image: "assets/projects/hals-cam-toolpaths.webp", alt: "Carbide Create contour toolpaths for a HALS structural plate", caption: "CAM simulation and contour toolpaths verified the cut before machining." },
      { image: "assets/projects/hals-manual-mill.webp", alt: "Manual mill cutting the aluminum servo linkage", caption: "Manual-mill setup for the linkage slot and mounting-hole pattern." },
      { image: "assets/projects/hals-servo-linkage.webp", alt: "Aluminum linkage connecting a servo to the printed valve assembly", caption: "Machined linkage integrated with the servo and printed valve hardware." },
      { image: "assets/projects/hals-pvc-interface.webp", alt: "Machined PVC cap joining the structural plate to a PVC tube", caption: "Lathe-modified PVC interface installed in the final plate assembly." }
    ],
    featured: true,
    caseStudy: true
  },
  {
    title: "Ethereum Mining Thermal Optimization",
    eyebrow: "Personal project",
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
    featured: false
  }
];
