export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  github: string;
  liveDemo?: string;
  technicalImplementation?: string;
  challenges?: string;
  outcome?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "media-authenticity",
    title: "Media Authenticity Verification",
    category: "AI & Full Stack",
    date: "June 2026",
    description: "Full-stack AI-powered media verification platform designed to detect deepfake and voice-cloned content.",
    problem: "The rise of generative AI has made deepfakes and voice clones highly realistic, leading to concerns regarding digital media trust, misinformation, and identity theft.",
    solution: "Developed a secure full-stack verification system. Users upload media which is cryptographically hashed using SHA-256 for integrity tracking. The file then undergoes asynchronous backend analysis using deep learning models to inspect visual and auditory anomalies, rendering forensic details interactively.",
    features: [
      "Secure media upload and metadata parsing",
      "Cryptographic integrity tracking using SHA-256 hashing",
      "Asynchronous background queue for analysis processing",
      "Real-time forensic result visualization with heatmaps",
      "Deepfake video facial anomaly detection",
      "Voice-clone audio frequency forensic analysis"
    ],
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "SHA-256", "Deep Learning"],
    github: "https://github.com/Lathika-Kumar",
    featured: true,
    technicalImplementation: "Leveraged Next.js for the forensic visualization frontend and FastAPI for high-performance ML inference. Implemented an asynchronous message queue to handle media processing tasks without blocking the web server.",
    challenges: "Handling large video files over HTTP and processing ML inference asynchronously in the background. Solved by integrating a task worker pattern and providing progress updates via WebSockets.",
    outcome: "Successfully created a functional demo showing deepfake and voice clone classifications with confidence scores and highlight maps of manipulated regions."
  },
  {
    id: "scheme-bridge",
    title: "SchemeBridge",
    category: "Full Stack",
    date: "July 2026",
    description: "Personalized government scheme discovery and tracking platform designed for Indian citizens.",
    problem: "Fragmented information and complex eligibility guidelines make it difficult for Indian citizens, particularly in rural areas, to discover and apply for government welfare schemes they qualify for.",
    solution: "Designed and built SchemeBridge, a centralized portal utilizing an eligibility checking engine. The platform matches citizen demographic profiles with active schemes, calculates matching scores, checks document readiness, and provides interactive voice assistant support in multiple languages.",
    features: [
      "Personalized government scheme discovery matching user profiles",
      "Intelligent demographic-based eligibility checking engine",
      "Custom match score and document readiness checklists",
      "User profile onboarding and secure document storage",
      "Real-time application status tracking & SMS notifications",
      "Grievance registration and management portal",
      "Multi-language support and interactive voice assistant",
      "Administrative dashboard for state welfare managers"
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Lathika-Kumar/schemeBridge",
    featured: true,
    technicalImplementation: "Created a declarative eligibility rules engine that compares user profiles (age, income, location, occupation) against schema definitions of government schemes. Integrated Web Speech API for voice assistance.",
    challenges: "Structuring dynamic eligibility criteria that vary widely across different state and central schemes. Resolved by implementing a flexible JSON-based rule-matching architecture.",
    outcome: "Built a complete prototype displaying eligibility scoring, document verification states, and multi-lingual voice queries."
  },
  {
    id: "vehicle-classification",
    title: "Vehicle Type Classification System",
    category: "AI & Computer Vision",
    date: "April 2026",
    description: "Deep learning-based vehicle classification web application utilizing transfer learning.",
    problem: "Smart city traffic management systems require real-time, automated monitoring and classification of vehicle flow to optimize signal timings and emergency response routes.",
    solution: "Created a web application that processes image uploads of traffic scenes and performs instant vehicle classification. Built using ResNet18 transfer learning, it classifies vehicles into 5 major categories (Cars, Buses, Bikes, Trucks, Ambulances).",
    features: [
      "Image upload and processing interface",
      "Real-time prediction with high confidence classification",
      "Deep learning inference utilizing transfer learning",
      "Support for 5 categories: Cars, Buses, Bikes, Trucks, and Ambulances",
      "OpenCV preprocessing for contrast enhancement and image normalization"
    ],
    technologies: ["Python", "Flask", "PyTorch", "OpenCV", "ResNet18", "Transfer Learning"],
    github: "https://github.com/Lathika-Kumar/VechileClassificationSystem",
    featured: true,
    technicalImplementation: "Fine-tuned a pretrained ResNet18 architecture in PyTorch on a custom vehicle dataset. Integrated OpenCV to apply adaptive histogram equalization and resize images to 224x224 before feeding them into the network. Wrapped the model in a Flask web API.",
    challenges: "Classifying vehicles accurately under varying lighting conditions, nighttime, or in rainy weather. Addressed by applying image normalization, brightness enhancement, and dataset augmentation during training.",
    outcome: "Achieved high classification accuracy across validation sets, with low-latency inference suitable for near real-time edge processing."
  },
  {
    id: "emojifyy",
    title: "Emojifyy — AI Mood Recognition System",
    category: "AI & Web Application",
    date: "May 2026",
    description: "AI-powered emotion recognition platform that analyzes facial expressions in real time and recommends content.",
    problem: "Media platforms often offer static content recommendations that do not take into account the user's current mood or emotional state.",
    solution: "Developed Emojifyy, a mood-aware platform. Using webcam video streams, Emojifyy runs real-time facial expression analysis. Once the emotion is recognized (e.g., Happy, Sad, Angry), the system serves personalized entertainment recommendations (playlists, quotes, movies) to match or improve the user's mood.",
    features: [
      "Webcam-based real-time facial expression analysis",
      "DeepFace framework integration for facial sentiment parsing",
      "OpenCV video frame capturing and face detection",
      "Personalized entertainment recommendations matching detected moods",
      "Interactive and clean web dashboard"
    ],
    technologies: ["Python", "Flask", "DeepFace", "OpenCV", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Lathika-Kumar/Emojifyy",
    featured: true,
    technicalImplementation: "Integrated OpenCV's CascadeClassifier for face detection and the DeepFace library for facial expression analysis. Flask serves as the backend, rendering recommendations based on detected emotion keywords.",
    challenges: "Ensuring low-latency processing of video frames from the webcam. Solved by downsampling frames and optimizing the face bounding-box detection frequency.",
    outcome: "An interactive web app that successfully triggers appropriate playlist suggestions matching 7 standard emotional states (happy, sad, angry, surprised, neutral, fear, disgust)."
  },
  {
    id: "medipredict",
    title: "MediPredict Pro",
    category: "Machine Learning",
    date: "April 2026",
    description: "Machine learning-based disease risk prediction and assessment platform.",
    problem: "Access to initial health risk assessment tools can help individuals identify early warning signs of chronic conditions, but many existing tools are overly complex or unreliable.",
    solution: "Constructed an interactive machine learning risk assessment dashboard. Users select lifestyle parameters and symptoms, and the system runs Random Forest classification inference to predict potential health risks, showing confidence metrics and primary contributors.",
    features: [
      "Lifestyle parameter and symptom input dashboard",
      "Multiple disease risk assessment mapping",
      "Random Forest Classifier inference backend",
      "Detailed confidence score and prediction analysis",
      "Interactive Gradio UI dashboard"
    ],
    technologies: ["Python", "Scikit-learn", "Gradio", "Machine Learning", "Pandas"],
    github: "https://github.com/Lathika-Kumar/DiseasePredictor",
    featured: false,
    technicalImplementation: "Trained Random Forest and Support Vector Machine models on public health datasets. Preprocessed input features using one-hot encoding. Deployed the models using Gradio's web interface for simple user interaction.",
    challenges: "Ensuring the user understands the tool is purely educational and not a diagnostic system. Solved by designing clear, persistent medical disclaimer cards and focus on 'risk assessment and prediction analysis'.",
    outcome: "Created a clean, self-contained dashboard model that predicts risk profiles for diabetes, heart disease, and kidney disease."
  },
  {
    id: "alzheimers-predictor",
    title: "Alzheimer's Disease Predictor",
    category: "Machine Learning & Healthcare",
    date: "March 2026",
    description: "Machine learning classification model for assessing Alzheimer's disease progression based on clinical data.",
    problem: "Early detection of Alzheimer's is crucial for intervention, yet clinical diagnostics require complex examinations.",
    solution: "Created a predictive classification pipeline analyzing cognitive test scores, demographic data, and MRI markers to predict Alzheimer's stages. Deployed a dashboard highlighting key biomarkers.",
    features: [
      "Clinical data pre-processing and feature selection",
      "Alzheimer's stage prediction (Cognitively Normal, Mild Cognitive Impairment, Dementia)",
      "Interactive feature importance tracking (e.g., Mini-Mental State Examination scores, age)",
      "High accuracy classification models comparison (Random Forest, SVM, XGBoost)"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Gradio"],
    github: "https://github.com/Lathika-Kumar/AlzheimersDiseasePredictor",
    featured: false
  },
  {
    id: "train-reservation",
    title: "Train Ticket Reservation System",
    category: "Software Engineering",
    date: "December 2025",
    description: "Terminal-based and GUI-supported Java application implementing relational ticket booking logic.",
    problem: "Traditional reservation consoles require robust transaction safety, seat allocation algorithms, and collision resistance.",
    solution: "Developed a Java-based ticket booking console applying Object-Oriented Programming (OOP) and Data Structures to manage passenger details, coach numbers, seat configurations, and waitlist allocations.",
    features: [
      "Interactive passenger login and registration menu",
      "Real-time ticket search, booking, and cancellation rules",
      "Automated seat allocation and waitlist queue management",
      "Relational structures to handle trains, bookings, and passengers"
    ],
    technologies: ["Java", "OOP", "Data Structures", "Terminal UI"],
    github: "https://github.com/Lathika-Kumar/TrainTicketReservationSystem",
    featured: false
  }
];
