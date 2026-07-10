import { CERTIFICATES } from './certificates'
import { PROJECTS } from './projects'
import { SKILLS } from './skills'

const SKILL_SEARCH = Object.entries(SKILLS).flatMap(([category, items]) =>
  items.map((skill) => ({
    type: 'skills',
    title: skill.name,
    desc: category,
    tags: [category.split(' ')[0]],
  })),
)

const PROJECT_SEARCH = PROJECTS.map((project) => ({
  type: 'projects',
  title: project.title,
  desc: project.description.slice(0, 80),
  tags: project.tech.slice(0, 4),
}))

const CERT_SEARCH = CERTIFICATES.map((cert) => ({
  type: 'certifications',
  title: cert.title,
  desc: cert.issuer,
  tags: [cert.issuer.split(' ')[0], cert.type === 'achievement' ? 'Award' : 'Certification'],
}))

const CASE_STUDY_SEARCH = [
  { type: 'casestudies', title: 'Marg-Darshak Case Study', desc: 'Computer vision navigation architecture', tags: ['YOLOv8', 'Computer Vision'] },
  { type: 'casestudies', title: 'Smart Document Assistant Case Study', desc: 'RAG pipeline architecture', tags: ['RAG', 'LangChain'] },
  { type: 'casestudies', title: 'ShareBite Case Study', desc: 'Food redistribution platform', tags: ['Firebase', 'Gemini'] },
]

export const SEARCH_DATA = [
  ...PROJECT_SEARCH,
  ...SKILL_SEARCH,
  ...CERT_SEARCH,
  ...CASE_STUDY_SEARCH,
]

export const SEARCH_TYPE_COLORS = {
  projects: '#00D9FF',
  skills: '#FF6B6B',
  certifications: '#6BCB77',
  casestudies: '#A855F7',
}

export const SEARCH_TYPE_LABELS = {
  projects: 'Projects',
  skills: 'Skills',
  certifications: 'Certifications',
  casestudies: 'Case Studies',
}
