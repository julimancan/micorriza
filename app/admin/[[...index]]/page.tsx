// app/studio/[[…index]]/page.tsx
'use client'

import { adminConfig } from '@/sanity/adminConfig'
import {NextStudio} from 'next-sanity/studio'


export default function StudioPage() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={adminConfig} />
}