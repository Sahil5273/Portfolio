export const CERTIFICATE_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'cloud-ai', label: 'Cloud & AI' },
  { id: 'ibm', label: 'IBM Stack' },
  { id: 'specialized', label: 'Specialized' },
  { id: 'achievement', label: 'Awards' },
]

export const CERTIFICATES = [
  {
    id: 'azure-ai-103',
    title: 'Azure AI Apps & Agents Developer Associate',
    issuer: 'Microsoft',
    subtitle: 'Exam AI-103 · Valid until Jul 2027',
    image: '/certificates/azure-ai-103.jpg',
    accent: '#0078D4',
    year: '2026',
    type: 'certification',
    tier: 'featured',
    categories: ['featured', 'cloud-ai'],
    credentialId: 'B819AB2267097A7',
    verifyUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/SahilKumar-52/B819AB2267097A7',
    description:
      'Associate-level certification demonstrating expertise in building AI applications and agents on Microsoft Azure.',
  },
  {
    id: 'oracle-genai',
    title: 'OCI 2025 Certified Generative AI Professional',
    issuer: 'Oracle Cloud Infrastructure',
    subtitle: 'Certified Professional · Oct 2025 – Oct 2027',
    image: '/certificates/oracle-genai.jpg',
    accent: '#F80000',
    year: '2025',
    type: 'certification',
    tier: 'featured',
    categories: ['featured', 'cloud-ai'],
    credentialId: '322658959OCI25GAIOCP',
    verifyUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=60B5152158916120C0FC48AD8FE1E72E3839775BAF3C95C77B443F6F2EE46B50',
    description:
      'Professional certification in OCI Generative AI services, LLM integration, and cloud-native AI solutions.',
  },
  {
    id: 'ibm-ai-developer',
    title: 'IBM AI Developer Professional Certificate',
    issuer: 'IBM · Coursera',
    subtitle: '10-Course Professional Series · Jan 2025',
    image: '/certificates/ibm-ai-developer.jpg',
    accent: '#054ADA',
    year: '2025',
    type: 'certification',
    tier: 'featured',
    categories: ['featured', 'ibm'],
    verifyUrl: 'https://coursera.org/verify/professional-cert/50W92NVW8AMW',
    description:
      'Professional certificate covering generative AI, Python, Flask, prompt engineering, and full-stack AI application development.',
  },
  {
    id: 'health-hack-2025',
    title: 'Health-Hack 2025 — Silver Medal',
    issuer: 'VIT Bhopal × Johns Hopkins University',
    subtitle: '5th Place · Top 5 of 236 Teams · Feb 2025',
    image: '/certificates/health-hack-2025.jpg',
    accent: '#C0C0C0',
    year: '2025',
    type: 'achievement',
    tier: 'featured',
    categories: ['featured', 'achievement'],
    credentialId: 'VITB-HM25-154',
    description:
      'Top 5 of 236 teams from 150+ universities for Marg-Darshak — AI navigation device for the visually impaired.',
  },
  {
    id: 'oracle-ai-foundations',
    title: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle Cloud Infrastructure',
    subtitle: 'Certified Associate · Sep 2025 – Sep 2027',
    image: '/certificates/oracle-ai-foundations.jpg',
    accent: '#C74634',
    year: '2025',
    type: 'certification',
    tier: 'professional',
    categories: ['cloud-ai'],
    credentialId: '322658959OCI25AICFA',
    verifyUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E828B3A9D982CDC082042B83D73C3419D6C47654B531295F5CDBBCCDBBD73E18',
    description:
      'Foundational Oracle certification covering core AI concepts, OCI AI services, and cloud AI workflows.',
  },
  {
    id: 'azure-dp900',
    title: 'Azure Data Fundamentals',
    issuer: 'Microsoft',
    subtitle: 'Exam DP-900 · Issued Jun 2025 · Lifetime',
    image: '/certificates/azure-dp900.jpg',
    accent: '#0078D4',
    year: '2025',
    type: 'certification',
    tier: 'professional',
    categories: ['cloud-ai'],
    credentialId: 'wMybH-H9up',
    verifyUrl: 'https://www.certiport.com/portal/pages/credentialverification.aspx',
    description:
      'Validates foundational knowledge of core data concepts, Azure data services, analytics, and data workloads.',
  },
  {
    id: 'google-responsible-ai',
    title: 'Introduction to Responsible AI',
    issuer: 'Google Cloud',
    subtitle: 'Completion Badge · Lifetime',
    image: '/certificates/google-responsible-ai.png',
    accent: '#4285F4',
    year: '2025',
    type: 'certification',
    tier: 'professional',
    categories: ['cloud-ai'],
    description:
      'Covers ethical AI principles, bias mitigation, fairness, transparency, and responsible AI deployment practices.',
  },
  {
    id: 'aws-technical-essentials',
    title: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    subtitle: 'AWS Training & Certification · Lifetime',
    image: '/certificates/aws-technical.jpg',
    accent: '#FF9900',
    year: '2025',
    type: 'certification',
    tier: 'professional',
    categories: ['cloud-ai'],
    description:
      'Foundational AWS course covering core cloud services, security, architecture, and pricing models.',
  },
  {
    id: 'ibm-watsonx-genai',
    title: 'GEN AI Using IBM Watsonx',
    issuer: 'IBM · Skills Network',
    subtitle: 'IBM Career Education Program · Lifetime',
    image: '/certificates/ibm-watsonx.jpg',
    accent: '#0F62FE',
    year: '2025',
    type: 'certification',
    tier: 'professional',
    categories: ['ibm'],
    description:
      'Hands-on training in generative AI workflows using IBM watsonx for enterprise AI application development.',
  },
  {
    id: 'applied-ml-python',
    title: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan · Coursera',
    subtitle: 'Specialization Course · Lifetime',
    image: '/certificates/applied-ml-python.jpg',
    accent: '#FFCB05',
    year: '2025',
    type: 'certification',
    tier: 'professional',
    categories: ['specialized'],
    verifyUrl: 'https://coursera.org/verify/FX1JLDDQSYIS',
    description:
      'Covers supervised learning, model evaluation, feature engineering, and practical ML pipelines in Python.',
  },
  {
    id: 'cisco-data-science',
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    subtitle: 'Credly Badge · May 2024',
    image: '/certificates/cisco-data-science.jpg',
    accent: '#049FD9',
    year: '2024',
    type: 'certification',
    tier: 'professional',
    categories: ['specialized'],
    credentialId: '20305466-84f3-4eff-a999-cf1292f1bf83',
    verifyUrl:
      'https://www.credly.com/badges/1c91c459-b402-41e1-9916-99caa3feaf75/linked_in_profile',
    description:
      'Course completion covering data analytics fundamentals, AI/ML concepts, and data science career pathways.',
  },
  {
    id: 'nptel-iot',
    title: 'Introduction to Internet of Things',
    issuer: 'IIT Kharagpur · NPTEL',
    subtitle: 'Elite Certificate · Score 83%',
    image: '/certificates/nptel-iot.jpg',
    accent: '#1B4F8A',
    year: '2025',
    type: 'certification',
    tier: 'academic',
    categories: ['specialized'],
    credentialId: 'NPTEL26CS37S752402306',
    description:
      'Elite certification from IIT Kharagpur covering IoT architecture, sensors, connectivity, and embedded systems.',
  },
]

export const FEATURED_CERTIFICATES = CERTIFICATES.filter((cert) =>
  cert.categories.includes('featured'),
)

export function getCertificatesByCategory(categoryId) {
  if (categoryId === 'all') return CERTIFICATES
  return CERTIFICATES.filter((cert) => cert.categories.includes(categoryId))
}
