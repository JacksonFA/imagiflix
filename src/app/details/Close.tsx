'use client'

import { CircleX } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Close() {
  const router = useRouter()

  return <CircleX size={48} className="cursor-pointer" onClick={() => router.back()} />
}
