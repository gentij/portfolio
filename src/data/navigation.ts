export type NavItem = {
  to: string
  label: string
  description: string
}

export const primaryNavItems: NavItem[] = [
  {
    to: '/',
    label: './HOME',
    description: 'Profile snapshot and featured work',
  },
  {
    to: '/projects',
    label: './WORK',
    description: 'Selected engineering work and technical proof',
  },
  {
    to: '/resume',
    label: './RESUME',
    description: 'Experience, stack, education, and CV',
  },
  {
    to: '/contact',
    label: './CONTACT',
    description: 'Direct contact and public profile links',
  },
]
