const subjects = [
  {
    title: "Accounting and Finance (A&F)",
    description: "Management of financial resources and reporting for effective decision-making.",
    link: "/subject/accounting-and-finance-af",
  },
  {
    title: "Advanced Computer Architecture (ACA)",
    description: "Exploring cutting-edge concepts in advanced computer system design and optimization.",
    link: "/subject/advanced-computer-architecture-aca",
  },
  {
    title: "Advanced Database Concepts (ADC)",
    description: "In-depth exploration of advanced topics in database management and optimization.",
    link: "/subject/advanced-database-concepts-adc",
  },
  {
    title: "Advanced Operating System (AOS)",
    description: "Exploring Cutting-Edge Concepts in Advanced Operating System Design and Functionality",
    link: "/subject/advanced-operating-system-aos",
  },
  {
    title: "Advanced Programming (AdP)",
    description: "Complex software development techniques, algorithms, and problem-solving for experienced programmers.",
    link: "/subject/advanced-programming-ap",
  },
  {
    title: "Advanced Software Engineering (ASE)",
    description: "Complex software development methodologies, tools, and best practices for experts.",
    link: "/subject/advanced-software-engineering-ase",
  },
  {
    title: "Advanced Stats (AdS)",
    description: "Advanced Stats: Complex quantitative methods for in-depth data analysis and interpretation.",
    link: "/subject/advanced-stats-as",
  },
  {
    title: "Applied Physics (AP)",
    description: "Practical application of physics principles in real-world technological advancements.",
    link: "/subject/applied-physics-ap",
  },
  {
    title: "Artificial Intelligence (AI)",
    description: "Machine learning, algorithms, and data for intelligent computer systems and automation.",
    link: "/subject/artificial-intelligence-ai",
  },
  {
    title: "Big Data (BD)",
    description: "Analysis of vast digital datasets for insights, trends, and decision-making.",
    link: "/subject/big-data-bd",
  },
  {
    title: "Business Process Engineering (BPE)",
    description: "Optimizing workflows for efficiency, innovation, and competitiveness in organizations",
    link: "/subject/business-process-engineering-bpe",
  },
  {
    title: "COAL LAB (COALL)",
    description: "Hands-on exploration of computer hardware and low-level programming techniques.",
    link: "/subject/coal-lab-coall",
  },
  {
    title: "Calculus (Cal)",
    description: "Mathematical study of change and motion through derivatives and integrals.",
    link: "/subject/calculus-cal",
  },
  {
    title: "Cloud Computing (ICC)",
    description: "Digital data storage, processing, and access via remote servers.",
    link: "/subject/cloud-computing-icc",
  },
  {
    title: "Communication and Presentation Skills (CPS)",
    description: "Effective verbal and visual communication techniques for impactful presentations.",
    link: "/subject/communication-and-presentation-skills-cps",
  },
  {
    title: "Communication and Presentation Skills Lab(CPS Lab)",
    description: "Enhancing communication, public speaking, and presentation skills through practical exercises.",
    link: "/subject/communication-and-presentation-skills-labcps-lab",
  },
  {
    title: "Complier Construction (CC)",
    description: "Compiler Construction: Building efficient language translation tools for software development.",
    link: "/subject/complier-construction-cc",
  },
  {
    title: "Computer Architecture (CA)",
    description: "Design and organization of computer systems and their components.",
    link: "/subject/computer-architecture-ca",
  },
  {
    title: "Computer Modelling Simulation (CMS)",
    description: "Digital replication of real-world processes for analysis and problem-solving.",
    link: "/subject/computer-modelling-simulation",
  },
  {
    title: "Computer Networks (CN)",
    description: "Study of data communication and connectivity in digital information systems.",
    link: "/subject/computer-networks-cn"
  },
  {
    title: "Computer Networks Lab (CN Lab)",
    description: "Practical exploration of computer network concepts and protocols in a laboratory.",
    link: "/subject/computer-networks-lab-cn-lab"
  },
  {
    title: "Computer Organization & Assembly Language (COAL)",
    description: "Hardware fundamentals and low-level programming with assembly language",
    link: "/subject/computer-organization-assembly-language-coal"
  },
  {
    title: "Computer Vision (CV)",
    description: "Computer Vision: Machine perception, analysis, and understanding of visual data.",
    link: "/subject/computer-vision-cv"
  },
  {
    title: "Critical Thinking (CT)",
    description: "Analytical and reasoned approach to problem-solving and decision-making skills.",
    link: "/subject/critical-thinking-ct"
  },
  {
    title: "Data Science (DS)",
    description: "Analyzing data to extract insights, inform decisions, and drive innovation.",
    link: "/subject/data-science-ds"
  },
  {
    title: "Data Structures (DS)",
    description: "Organizing and managing data for efficient storage and retrieval techniques.",
    link: "/subject/data-structures-ds"
  },
  {
    title: "Data Structures Lab (DS Lab)",
    description: "Practical exploration of fundamental data structures through hands-on programming exercises.",
    link: "/subject/data-structures-lab-ds-lab"
  },
  {
    title: "Data Warehousing & Data Mining (DW)",
    description: "Analyzing vast datasets to extract valuable insights for informed decisions.",
    link: "/subject/data-warehousing-data-mining-dw"
  },
  {
    title: "Data Warehousing and Data Mining (DW)",
    description: "Integration and analysis of data for informed decision-making and insights.",
    link: "/subject/data-warehousing-and-data-mining-dw"
  },
  {
    title: "Database (DB)",
    description: "Structured storage of digital information for efficient retrieval and management.",
    link: "/subject/database-db"
  },
  {
    title: "Database Lab (DB Lab)",
    description: "Exploring databases, data management, and SQL in practical laboratory settings.",
    link: "/subject/database-lab-db-lab"
  },
  {
    title: "Deep Learning (DL)",
    description: "Advanced machine learning technique using neural networks for complex tasks.",
    link: "/subject/deep-learning-dl"
  },
  {
    title: "Design and Analysis of Algorithms (Algo)",
    description: "Efficient problem-solving through algorithm development, complexity analysis, and optimization techniques.",
    link: "/subject/design-and-analysis-of-algorithms-algo"
  },
  {
    title: "Differential Equations (DE)",
    description: "Mathematical study of rates of change in diverse real-world phenomena.",
    link: "/subject/differential-equations-de"
  },
  {
    title: "Digital Image Processing (DIP)",
    description: "Digital Image Processing: Enhancing, analyzing, and manipulating visual data digitally.",
    link: "/subject/digital-image-processing-dip"
  },
  {
    title: "Digital Logic Design (DLD)",
    description: "Foundations of electronic circuits and binary system for digital technology.",
    link: "/subject/digital-logic-design-dld"
  },
  {
    title: "Digital Logic Designing Lab (DLD Lab)",
    description: "Hands-on exploration of digital circuit design, analysis, and implementation techniques.",
    link: "/subject/digital-logic-designing-lab-dld-lab"
  },
  {
    title: "Discrete Structures (DS)",
    description: "Mathematical foundations of computer science and problem-solving with discrete elements.",
    link: "/subject/discrete-structures-ds"
  },
  {
    title: "Ecommerce (EC)",
    description: "Online buying and selling of goods and services via websites.",
    link: "/subject/ecommerce-ec"
  },
  {
    title: "English Comprehension Lab (Eng Comp Lab)",
    description: "Enhancing English comprehension skills through interactive learning and practice sessions",
    link: "/subject/english-comprehension-lab-eng-comp-lab"
  },
  {
    title: "English Comprehension and Composition (Eng Comp)",
    description: "Enhancing language skills through reading, analysis, and effective writing strategies.",
    link: "/subject/english-comprehension-and-composition-eng-comp"
  },
  {
    title: "Enterprise Information Systems (EIS)",
    description: "Integration of technology for efficient business data management and operations.",
    link: "/subject/enterprise-information-systems-eis"
  },
  {
    title: "Entrepreneurship (Entre)",
    description: "Innovative pursuit of business opportunities, creating value and driving growth.",
    link: "/subject/entrepreneurship-entre"
  },
  {
    title: "Environmental Sciences (ES)",
    description: "Study of Earth's ecosystems, climate, and human impact on nature.",
    link: "/subject/environmental-sciences-es"
  },
  {
    title: "Evolutionary Computation (EC)",
    description: "Algorithmic optimization inspired by natural selection and genetic algorithms.",
    link: "/subject/evolutionary-computation-ec"
  },
  {
    title: "Formal Methods (FM)",
    description: "Mathematical techniques ensuring software/system correctness and reliability through rigorous analysis.",
    link: "/subject/formal-methods-fm"
  },
  {
    title: "Human Computer Interaction (HCI)",
    description: "Study of how humans interact with computers and user interface design.",
    link: "/subject/human-computer-interaction-hci"
  },
  {
    title: "Human Resource Management (HRM)",
    description: "Strategic personnel oversight for organizational success, talent development, and workforce optimization.",
    link: "/subject/human-resource-management-hrm",
  },
  {
    title: "Information Retrieval (IR)",
    description: "Efficient methods for finding and retrieving relevant data and documents.",
    link: "/subject/information-retrieval-ir",
  },
  {
    title: "Information Security (IS)",
    description: "Protecting data and systems from unauthorized access and breaches.",
    link: "/subject/information-security-is",
  },
  {
    title: "International Relations (IR)",
    description: "Global diplomacy, politics, and cooperation among nations for world order.",
    link: "/subject/international-relations-ir",
  },
  {
    title: "Internet of Things (IOT)",
    description: "Interconnected devices transforming data, automation, and connectivity across industries and homes.",
    link: "/subject/internet-of-things-iot",
  },
  {
    title: "Intro to Data Science (Intro to DS)",
    description: "Foundations of Data Analysis and Interpretation for Practical Decision-Making.",
    link: "/subject/intro-to-data-science-intro-to-ds",
  },
  {
    title: "Introduction To ICT (IICT)",
    description: "Foundations of Information and Communication Technology: An Introductory Overview.",
    link: "/subject/introduction-to-ict-iict",
  },
  {
    title: "Islamic Studies",
    description: "Academic exploration of Islam's history, beliefs, culture, and societal impact.",
    link: "/subject/islamic-studies",
  },
  {
    title: "Linear Algebra (LA)",
    description: "Mathematical study of vectors, matrices, and their algebraic properties.",
    link: "/subject/linear-algebra-la",
  },
  {
    title: "Management and Organizational Behavior (MOB)",
    description: "Study of leadership, teamwork, and decision-making in organizational settings.",
    link: "/subject/management-and-organizational-behavior-mob",
  },
  {
    title: "Marketing Management (MM)",
    description: "Strategies for promoting products, services, and brands in competitive markets.",
    link: "/subject/marketing-management-mm",
  },
  {
    title: "Mass Communication (MC)",
    description: "Study of information dissemination through various media channels and platforms.",
    link: "/subject/mass-communication-mc",
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Computer-based analysis of human language for communication and understanding.",
    link: "/subject/natural-language-processing-nlp",
  },
  {
    title: "Network Security (NS)",
    description: "Protecting digital systems from threats through robust safeguarding techniques.",
    link: "/subject/network-security-ns",
  },
  {
    title: "Numerical Computing (NC)",
    description: "Mathematical techniques for efficient, accurate, and practical computational solutions.",
    link: "/subject/numerical-computing-nc",
  },
  {
    title: "Object Oriented Analysis & Design Lab (SDA Lab)",
    description: "Practical application of Object-Oriented concepts in software system development.",
    link: "/subject/object-oriented-analysis-design-lab-sda-lab",
  },
  {
    title: "Object Oriented Programming (OOP)",
    description: "Programming paradigm using objects to model and organize code systems.",
    link: "/subject/object-oriented-programming-oop",
  },
  {
    title: "Object Oriented Programming Lab (OOP Lab)",
    description: "Practical application of OOP concepts through hands-on programming exercises.",
    link: "/subject/object-oriented-programming-lab-oop-lab",
  },
  {
    title: "Operating System (OS)",
    description: "Software managing hardware and enabling user applications on computers.",
    link: "/subject/operating-system-os",
  },
  {
    title: "Operating System Lab (OS Lab)",
    description: "Exploring OS fundamentals, practical implementation, and system administration techniques.",
    link: "/subject/operating-system-lab-os-lab",
  },
  {
    title: "Operations Research (OR)",
    description: "Mathematical optimization for efficient decision-making and problem-solving in complex systems.",
    link: "/subject/operations-research-or",
  },
  {
    title: "Pakistan Studies (PS)",
    description: "Interdisciplinary study of Pakistan's history, culture, society, and political development.",
    link: "/subject/pakistan-studies-ps",
  },
  {
    title: "Parallel and Distributed Computing (PB)",
    description: "Improving software reliability and performance through systematic quality assurance practices.",
    link: "/subject/paper-bucket-pb",
  },
  {
    title: "Parallel and Distributing Computing (PDC)",
    description: "Efficient computing across multiple processors for faster data processing.",
    link: "/subject/parallel-and-distributing-computing-pdc",
  },
  {
    title: "Principles of Leadership (PoL)",
    description: "Fundamental principles guiding effective and ethical leadership strategies and practices.",
    link: "/subject/principles-of-leadership-pol",
  },
  {
    title: "Probability",
    description: "Quantifying uncertainty and predicting outcomes through mathematical analysis and statistics.",
    link: "/subject/probability",
  },
  {
    title: "Professional Issues in IT (PP)",
    description: "Ethical dilemmas, security, and challenges in contemporary Information Technology careers.",
    link: "/subject/professional-issues-in-it-pp",
  },
  {
    title: "Programming Fundamental Lab (PF Lab)",
    description: "Introduction to coding basics and hands-on programming exercises for beginners.",
    link: "/subject/programming-fundamental-lab-pf-lab",
  },
  {
    title: "Programming Fundamentals (PF)",
    description: "Essential principles for beginners: Programming Fundamentals demystified and made accessible.",
    link: "/subject/programming-fundamentals-pf",
  },
  {
    title: "Psychology",
    description: "The study of mind, behavior, and mental processes in individuals.",
    link: "/subject/psychology",
  },
  {
    title: "Requirements Engineering (RE)",
    description: "Requirements Engineering: Defining, analyzing, and documenting software project specifications effectively.",
    link: "/subject/requirements-engineering-re",
  },
  {
    title: "Social Network Analysis (SNA)",
    description: "Analyzing connections in networks to study social relationships and structures.",
    link: "/subject/social-network-analysis-sna",
  },
  {
    title: "Sociology",
    description: "Study of human society, behavior, and relationships to understand social dynamics.",
    link: "/subject/sociology",
  },
  {
    title: "Software Design and Analysis (SDA)",
    description: "Methods for creating and evaluating effective software solutions systematically.",
    link: "/subject/software-design-and-analysis-sda",
  },
  {
    title: "Software Engineering (SE)",
    description: "Designing, developing, and maintaining efficient, reliable, and scalable software systems.",
    link: "/subject/software-engineering-se",
  },
  {
    title: "Software Engineering Technologies (SET)",
    description: "Advanced tools and methods for modern software development practices.",
    link: "/subject/software-engineering-technologies-set",
  },
  {
    title: "Software Process Management and Metrics (SPMM)",
    description: "Optimizing software development through effective processes and performance measurement techniques.",
    link: "/subject/software-process-management-and-metrics-spmm",
  },
  {
    title: "Software Quality Assurance & Management (SQA)",
    description: "Ensuring software reliability, efficiency, and compliance through systematic management.",
    link: "/subject/software-quality-assurance-management-sqa",
  },
  {
    title: "Software Requirements Engineering (SRE)",
    description: "Capturing, analyzing, and documenting software needs for successful development projects.",
    link: "/subject/software-requirements-engineering-sre",
  },
  {
    title: "Software Testing (ST)",
    description: "Quality assurance through systematic evaluation and validation of software functionality.",
    link: "/subject/software-testing-st",
  },
  {
    title: "Software for Mobile Devices (SMD)",
    description: "Mobile Device Software: Development, Applications, and User Experience Optimization.",
    link: "/subject/software-for-mobile-devices-smd",
  },
  {
    title: "Statistical Pattern Recognition & Learning (SPRL)",
    description: "Machine learning techniques for recognizing patterns in complex data sets.",
    link: "/subject/statistical-pattern-recognition-learning-sprl",
  },
  {
    title: "Technical & Business Writing (TBW)",
    description: "Effective communication for professionals in technical and business contexts.",
    link: "/subject/technical-business-writing-tbw",
  },
  {
    title: "Theory of Automata (TA)",
    description: "Formal study of abstract machines and computational problem-solving principles.",
    link: "/subject/theory-of-automata-ta",
  },
  {
    title: "Theory of Programming Languages (TPA)",
    description: "Study of formal languages, syntax, semantics, and language design principles.",
    link: "/subject/theory-of-programming-languages-tpa",
  },
  {
    title: "Web Engineering (WE)",
    description: "Designing, developing, and maintaining websites and web applications for efficiency.",
    link: "/subject/web-engineering-we",
  },
  {
    title: "Web Programming (WP)",
    description: "Creating dynamic websites using coding languages for interactive user experiences.",
    link: "/subject/web-programming-wp",
  }
];


export default subjects;