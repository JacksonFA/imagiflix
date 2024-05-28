'use client'

import { CircleX } from 'lucide-react'
import Link from 'next/link'

export function Close() {
  return (
    <Link href="/main" className="flex items-center justify-end">
      <CircleX size={48} />
    </Link>
  )
}
