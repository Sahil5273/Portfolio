import { CERTIFICATES } from './certificates'

const RESUME_CERT_IDS = [
  'health-hack-2025',
  'azure-ai-103',
  'oracle-genai',
  'ibm-ai-developer',
  'azure-dp900',
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
    title: 'IBM AI Developer Professional Certificate',
    org: 'IBM',
    date: '2025',
  },
  'azure-dp900': {
    title: 'Azure Data Fundamentals (DP-900)',
    org: 'Microsoft',
    date: 'Jun 2025',
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
  experience: [
    {
      title: 'Python Developer Intern',
      org: 'Supernal Ventures Pvt. Ltd. · Hybrid (Surat, Gujarat)',
      date: 'May 2026 — July 2026',
      tech: ['Python', 'Pandas', 'NumPy', 'Data Pipelines'],
      description:
        'Paid internship building trading-system infrastructure: scalable architectures, backtesting, market data pipelines, and live trading support.',
      highlights: [
        'Developed a background scoring engine for an automated crypto trading system to evaluate market pairs weekly.',
        'Engineered data pipelines using Python and Pandas to compute momentum and volume indicators (ADX, MACD, OBV) for asset filtering.',
        'Preprocessed and validated extensive market datasets using Pandas and NumPy to ensure system reliability.',
        'Integrated AI/ML techniques for predictive modelling and supported live trading with real-time troubleshooting.',
      ],
      documents: [
        { label: 'Appointment Letter', href: '/certificates/supernal-appointment.pdf' },
        { label: 'Completion Certificate', href: '/certificates/supernal-completion.pdf' },
      ],
    },
  ],
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
