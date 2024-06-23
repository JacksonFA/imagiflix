import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Hover } from '../hover/Hover'

type CoverProps = {
  alt: string
  source: string
}

export function Cover({ alt, source }: CoverProps) {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>()

  function debounceTime(delay: number) {
    const id = setTimeout(onOpen, delay)
    setTimeoutId(id)
  }

  return (
    <>
      <Image
        alt={alt}
        src={source}
        className="cursor-pointer rounded-md"
        onMouseOut={() => clearTimeout(timeoutId)}
        onMouseOver={() => debounceTime(1000)}
        onClick={() => router.push(`/details/${alt}`)}
      />
      <Hover onClose={onClose} isOpen={isOpen} slug={alt} />
    </>
  )
}
