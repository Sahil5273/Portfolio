import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react'
import { HuggingFaceIcon } from '../components/icons/HuggingFaceIcon'
import { DEVELOPER } from './developer'

export const SOCIAL_LINKS = [
  { key: 'github', Icon: IconBrandGithub, label: 'GitHub', url: DEVELOPER.social.github },
  { key: 'linkedin', Icon: IconBrandLinkedin, label: 'LinkedIn', url: DEVELOPER.social.linkedin },
  { key: 'huggingface', Icon: HuggingFaceIcon, label: 'HuggingFace', url: DEVELOPER.social.huggingface },
  { key: 'email', Icon: IconMail, label: 'Email', url: DEVELOPER.social.email },
]
