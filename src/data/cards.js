export { DEVELOPER } from './developer'
export { PROJECTS } from './projects'
export { SKILLS } from './skills'
export { RESUME } from './resume'
export { ACHIEVEMENTS } from './achievements'

import { DEVELOPER } from './developer'
import { PROJECTS } from './projects'

export const CARDS = [
  {
    id: 'about',
    navId: 'about',
    title: 'About Me',
    subtitle: 'AI/ML Engineer & Developer',
    accent: '#6C63FF',
    icon: 'user-circle',
    preview: {
      type: 'bio',
      lines: [DEVELOPER.shortBio],
      badge: { text: DEVELOPER.status, color: '#6BCB77' },
    },
  },
  {
    id: 'profile',
    navId: 'profile',
    title: 'Profile',
    subtitle: 'GitHub · LinkedIn · HuggingFace',
    accent: '#A855F7',
    icon: 'brand-github',
    preview: {
      type: 'social',
      socials: ['github', 'linkedin', 'huggingface'],
    },
  },
  {
    id: 'projects',
    navId: 'work',
    title: 'Projects',
    subtitle: '4 AI & full-stack builds',
    accent: '#00D9FF',
    icon: 'layout-grid',
    preview: {
      type: 'pills',
      items: PROJECTS.map((p) => p.title),
    },
  },
  {
    id: 'skills',
    navId: 'skills',
    title: 'Skills',
    subtitle: 'AI/ML · Languages · Cloud',
    accent: '#FF6B6B',
    icon: 'cpu',
    preview: {
      type: 'tags',
      items: ['Python', 'RAG / GenAI', 'LangChain', 'Azure AI', 'YOLOv8', 'FastAPI'],
    },
  },
  {
    id: 'resume',
    navId: 'resume',
    title: 'Resume',
    subtitle: 'Download · View · Share',
    accent: '#FFD93D',
    icon: 'file-cv',
    preview: {
      type: 'resume-preview',
      education: 'B.Tech CSE (AI & ML)',
      org: 'VIT Bhopal University',
      cgpa: 'CGPA: 8.04/10',
      skills: ['Python', 'LangChain', 'React', 'Azure AI'],
      certs: ['Microsoft Azure AI-103', 'Oracle GenAI Professional'],
    },
  },
  {
    id: 'achievements',
    navId: 'achievements',
    title: 'Achievements',
    subtitle: 'Certs · Awards · Milestones',
    accent: '#6BCB77',
    icon: 'trophy',
    preview: {
      type: 'achievements',
      items: [
        'Health-Hack 2025 Silver Medal',
        'Microsoft Azure AI-103',
        'Oracle GenAI Professional',
        '+2 More Certifications',
      ],
    },
  },
  {
    id: 'contact',
    navId: 'contact',
    title: 'Contact',
    subtitle: "Let's build something",
    accent: '#FF922B',
    icon: 'mail-forward',
    preview: {
      type: 'availability',
      text: 'Available for AI/ML internships',
    },
  },
  {
    id: 'featured',
    navId: 'featured',
    title: 'Featured Work',
    subtitle: 'Selected portfolio highlights',
    accent: '#14B8A6',
    icon: 'rocket',
    preview: {
      type: 'featured-projects',
      items: [
        { title: 'Marg-Darshak', desc: 'AI Navigation for Visually Impaired', tech: 'YOLOv8 • OpenCV • Flask' },
        { title: 'Smart Document Assistant', desc: 'RAG-Powered PDF Chatbot', tech: 'LangChain • ChromaDB • Gemini' },
      ],
    },
  },
]
