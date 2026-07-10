export const CASE_STUDIES = [
  {
    key: 'margdarshak',
    title: 'Marg-Darshak',
    fullTitle: 'Marg-Darshak — AI Navigation Device for the Visually Impaired',
    domain: 'Computer Vision • Accessibility • Edge AI',
    accent: '#6BCB77',
    overview:
      'Marg-Darshak is a real-time AI navigation system that streams live video from a Raspberry Pi to a Flask + YOLOv8 server for hazard detection including cars, stairs, and potholes with distance estimation at 15 FPS.',
    problem:
      'Visually impaired individuals face significant navigation challenges detecting dynamic hazards in real-world environments with limited affordable assistive technology solutions.',
    solution:
      'Built an edge-to-cloud pipeline with YOLOv8 object detection, distance estimation, and multi-threaded TTS voice alerts. Microservice architecture enables independent component testing and stable video feed performance.',
    tech: {
      'Edge Device': ['Raspberry Pi', 'Camera Module', 'Live Video Stream'],
      'AI / CV': ['YOLOv8', 'OpenCV', 'Distance Estimation'],
      Backend: ['Flask', 'Python', 'Multi-threading'],
      Output: ['TTS Voice Alerts', 'Real-time Hazard Warnings'],
    },
    features: [
      'Real-time Hazard Detection',
      'Distance Estimation',
      'TTS Voice Alerts',
      '15 FPS Processing',
      'Microservice Architecture',
      'Concurrent Thread Management',
    ],
    challenges: [
      'Maintaining stable video feed under load',
      'Low-latency inference on edge hardware',
      'Multi-threaded TTS without blocking video',
      'Accurate distance estimation',
      'Microservice integration testing',
    ],
    unique: [
      'Health-Hack 2025 Silver Medal (5th/236)',
      'Real-world accessibility impact',
      'Edge AI + cloud hybrid design',
      'Johns Hopkins collaboration',
    ],
    future: [
      'Indoor Navigation',
      'Obstacle Path Planning',
      'Wearable Form Factor',
      'Offline Mode',
      'Multi-language TTS',
    ],
    learning: [
      'Real-time computer vision pipelines',
      'Edge device deployment',
      'Multi-threaded system design',
      'Accessibility-focused engineering',
    ],
  },
  {
    key: 'smartdoc',
    title: 'Smart Document Assistant',
    fullTitle: 'Smart Document Assistant — RAG-Powered PDF Chatbot',
    domain: 'Generative AI • RAG • Document Intelligence',
    accent: '#00D9FF',
    overview:
      'A production RAG chatbot that grounds answers in uploaded PDF documents using HuggingFace embeddings, ChromaDB retrieval, and Gemini API — deployed on Hugging Face Spaces handling 100+ daily queries.',
    problem:
      'LLMs hallucinate when answering questions about private documents. Users need trustworthy, source-grounded answers from PDFs up to 200 pages without expensive infrastructure.',
    solution:
      'Implemented a full RAG pipeline: PDF extraction → chunking → HuggingFace embeddings → ChromaDB vector store → Gemini generation with AI safety guardrails and bias mitigation.',
    tech: {
      'RAG Pipeline': ['LangChain', 'PDF Extraction', 'Chunking'],
      Embeddings: ['HuggingFace Transformers', 'ChromaDB'],
      LLM: ['Gemini API', 'Prompt Engineering'],
      Deployment: ['Gradio', 'Hugging Face Spaces'],
    },
    features: [
      'PDF Upload up to 10 MB',
      'Source-Grounded Answers',
      'Hallucination Reduction',
      'AI Safety Guardrails',
      'Bias Mitigation',
      '100+ Daily Queries',
    ],
    challenges: [
      'Chunking strategy for long documents',
      'Retrieval relevance tuning',
      'Response filtering and validation',
      'Deployment scaling on HF Spaces',
      'Handling diverse PDF formats',
    ],
    unique: [
      'Production deployment with real users',
      'Full RAG stack from scratch',
      'AI ethics guardrails built-in',
      'Handles ~200 page documents',
    ],
    future: [
      'Multi-document Knowledge Base',
      'Citation Highlighting',
      'Azure OpenAI Integration',
      'Document Comparison',
      'API Access Layer',
    ],
    learning: [
      'RAG architecture design',
      'Vector database optimization',
      'LLM safety and guardrails',
      'Cloud deployment at scale',
    ],
  },
  {
    key: 'audiotranscription',
    title: 'Audio Transcription',
    fullTitle: 'Audio Transcription System — Full-Stack Speech-to-Text',
    domain: 'Speech AI • Full-Stack • Async Processing',
    accent: '#A855F7',
    overview:
      'A full-stack speech-to-text application with React frontend and async FastAPI backend using Faster-Whisper, handling MP3/WAV/M4A files up to 10 minutes without server timeouts.',
    problem:
      'Synchronous audio processing causes server timeouts on longer clips. Users need a responsive interface that handles multiple audio formats reliably.',
    solution:
      'Built an async FastAPI backend with non-blocking Faster-Whisper inference and a React frontend, deployed to Hugging Face Spaces for public access.',
    tech: {
      Frontend: ['React', 'File Upload UI', 'Progress Tracking'],
      Backend: ['FastAPI', 'Async Processing', 'Faster-Whisper'],
      Formats: ['MP3', 'WAV', 'M4A'],
      Deployment: ['Hugging Face Spaces', 'Docker'],
    },
    features: [
      'Multi-format Audio Support',
      'Async Non-blocking Processing',
      'Up to 10 Minute Clips',
      'No Server Timeouts',
      'Clean React UI',
      'HF Spaces Deployment',
    ],
    challenges: [
      'Async job queue design',
      'Memory management for audio files',
      'Format conversion edge cases',
      'Frontend progress feedback',
      'Cold start on HF Spaces',
    ],
    unique: [
      'Faster-Whisper for speed',
      'True async architecture',
      'Production HF Spaces deploy',
      'Multi-format support',
    ],
    future: [
      'Speaker Diarization',
      'Timestamp Alignment',
      'Batch Processing',
      'Translation Layer',
      'Real-time Streaming',
    ],
    learning: [
      'Async Python with FastAPI',
      'Speech-to-text model deployment',
      'Full-stack audio processing',
      'Cloud inference optimization',
    ],
  },
  {
    key: 'sharebite',
    title: 'ShareBite',
    fullTitle: 'ShareBite — Surplus Food Redistribution Platform',
    domain: 'Social Impact • Full-Stack • AI Metadata Extraction',
    accent: '#FF922B',
    overview:
      'A surplus food redistribution web app with real-time donation feeds, RBAC, and a Gemini-powered AI microservice that automatically extracts food metadata from user uploads.',
    problem:
      'Food waste and hunger coexist in communities. Manual data entry for food donations is slow, error-prone, and discourages participation in redistribution platforms.',
    solution:
      'Built a React + Firebase platform with Node.js/Express AI microservice using Gemini API for automatic metadata extraction, plus Cloudinary image processing and LocationIQ geocoding.',
    tech: {
      Frontend: ['React.js', 'Firebase Auth', 'Real-time Feeds'],
      Backend: ['Node.js', 'Express', 'Gemini 3.5 API'],
      Services: ['Cloudinary', 'LocationIQ', 'Firebase DB'],
      Patterns: ['RBAC', 'DB Transactions', 'Microservices'],
    },
    features: [
      'Real-time Donation Feeds',
      'Role-Based Access Control',
      'AI Metadata Extraction',
      'Image Processing',
      'Geocoding Integration',
      'Concurrent Claim Prevention',
    ],
    challenges: [
      'Preventing concurrent claim errors',
      'AI metadata accuracy',
      'Real-time feed synchronization',
      'Image upload optimization',
      'Location-based matching',
    ],
    unique: [
      'Social impact use case',
      'AI streamlines data entry',
      'Full microservice architecture',
      'Production-grade transactions',
    ],
    future: [
      'Smart Matching Algorithm',
      'Expiry Prediction',
      'Mobile App',
      'NGO Dashboard',
      'Impact Analytics',
    ],
    learning: [
      'Firebase real-time architecture',
      'AI microservice design',
      'Transaction-safe DB operations',
      'Social impact engineering',
    ],
  },
]
