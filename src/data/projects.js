export const PROJECTS = [
  {
    id: 1,
    title: 'Marg-Darshak',
    description:
      'AI navigation device for the visually impaired. Streams live video from Raspberry Pi to a Flask + YOLOv8 server for real-time hazard detection (cars, stairs, potholes) with distance estimation at 15 FPS. Multi-threaded TTS voice alerts and microservice design earned 5th place at Health-Hack 2025 (VIT Bhopal × Johns Hopkins).',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'Raspberry Pi'],
    live: null,
    github: 'https://github.com/Sahil5273/Marg-Darshak',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Smart Document Assistant',
    description:
      'RAG-powered PDF chatbot with a full pipeline: PDF extraction → HuggingFace embeddings → ChromaDB retrieval → Gemini API. Grounds answers in source docs to cut hallucinations; supports PDFs up to 10 MB (~200 pages). Includes AI safety guardrails and bias mitigation; deployed to Hugging Face Spaces handling 100+ daily queries.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'Gemini API', 'Gradio'],
    live: 'https://huggingface.co/spaces/Sahil5273/Smart-Document-Assistant',
    github: 'https://github.com/Sahil5273/Smart-Document-Assistant',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Audio Transcription System',
    description:
      'Full-stack speech-to-text app with React frontend and async FastAPI backend using Faster-Whisper. Handles MP3/WAV/M4A files with non-blocking processing, smoothly transcribing clips up to 10 minutes without server timeouts. Deployed to Hugging Face Spaces.',
    tech: ['React', 'FastAPI', 'Faster-Whisper', 'Hugging Face Spaces'],
    live: 'https://huggingface.co/spaces/Sahil5273/audio-transcription-system',
    github: 'https://github.com/Sahil5273/Audio-Transcription-System',
    image: 'https://images.unsplash.com/photo-1478737270235-90f4771bd50b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'ShareBite',
    description:
      'Surplus food redistribution platform with React.js & Firebase managing real-time donation feeds with Role-Based Access Control. Node.js/Express AI microservice uses Gemini API to extract food metadata from uploads. Integrated Cloudinary, LocationIQ geocoding, and DB transactions to prevent concurrent claim errors.',
    tech: ['React.js', 'Node.js', 'Firebase', 'Gemini API', 'Cloudinary'],
    live: 'https://sharebyte-ff1a8.web.app/',
    github: 'https://github.com/Sahil5273/sharebite',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
  },
]
