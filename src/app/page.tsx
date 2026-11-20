import type { Metadata } from 'next'

import { HomeExperience } from './home-experience'

export const metadata: Metadata = {
  title: 'ducheng1 — 写代码，也写下途中所想',
  description: 'ducheng1 的个人博客，记录开发、项目与日常思考。',
}

export default function Page() {
  return <HomeExperience />
}
