import { CERTIFICATES } from './certificates'

const RESUME_CERT_IDS = [
  'health-hack-2025',
  'azure-ai-103',
  'oracle-genai',
  'ibm-ai-developer',
  'google-responsible-ai',
]

const RESUME_CERT_OVERRIDES = {
  'health-hack-2025': {
    title: '5th Place (Silver Medal) — Health-Hack 2025',
    org: 'VIT Bhopal × Johns Hopkins University',
    date: 'Feb 2025',
  },
  'azure-ai-103': {
    title: 'Azure AI Apps and Agents Developer Associate (AI-103)',
    org: 'Microsoft',
    date: 'Jul 2026',
  },
  'oracle-genai': {
    title: 'OCI 2025 Certified Generative AI Professional',
    org: 'Oracle Cloud Infrastructure',
    date: '2025',
  },
  'ibm-ai-developer': {
    title: 'IBM AI Developer Certificate',
    org: 'IBM',
    date: '2025',
  },
  'google-responsible-ai': {
    title: 'Introduction to Responsible AI',
    org: 'Google Cloud',
    date: '2025',
  },
}

const certById = Object.fromEntries(CERTIFICATES.map((cert) => [cert.id, cert]))

export const RESUME = {
  education: [
    {
      title: 'B.Tech CSE (AI & ML Specialisation)',
      org: 'VIT Bhopal University',
      date: 'Sept 2023 — Sept 2027 · CGPA: 8.04 / 10',
      description: '',
    },
  ],
  experience: [],
  certifications: RESUME_CERT_IDS.map((id) => {
    const cert = certById[id]
    const override = RESUME_CERT_OVERRIDES[id]
    return {
      title: override?.title ?? cert?.title ?? id,
      org: override?.org ?? cert?.issuer ?? '',
      date: override?.date ?? cert?.year ?? '',
    }
  }),
}
