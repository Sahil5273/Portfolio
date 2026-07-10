import { CERTIFICATES } from './certificates'

const ACHIEVEMENT_ENTRIES = [
  {
    certId: 'health-hack-2025',
    icon: 'trophy',
    date: 'Feb 2025',
    title: 'Health-Hack 2025 — Silver Medal (5th Place)',
    org: 'VIT Bhopal × Johns Hopkins University',
  },
  {
    certId: 'azure-ai-103',
    icon: 'trophy',
    date: 'Jul 2026',
    title: 'Microsoft Certified: Azure AI Apps and Agents Developer',
    org: 'Microsoft · AI-103',
  },
  {
    certId: 'oracle-genai',
    icon: 'star',
    date: '2025',
    title: 'Oracle Cloud Infrastructure Generative AI Professional',
    org: 'Oracle',
  },
  {
    certId: 'ibm-ai-developer',
    icon: 'star',
    date: 'Jan 2025',
    title: 'IBM AI Developer Certificate',
    org: 'IBM · Coursera',
  },
  {
    certId: 'google-responsible-ai',
    icon: 'star',
    date: '2025',
    title: 'Google Cloud — Introduction to Responsible AI',
    org: 'Google Cloud',
  },
]

const certById = Object.fromEntries(CERTIFICATES.map((cert) => [cert.id, cert]))

export const ACHIEVEMENTS = ACHIEVEMENT_ENTRIES.map((entry) => {
  const cert = certById[entry.certId]
  return {
    icon: entry.icon,
    title: entry.title,
    org: entry.org,
    date: entry.date,
    description: cert?.description ?? '',
    image: cert?.image ?? '',
  }
})
