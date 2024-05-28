import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Hover } from '../hover/Hover'
import Link from 'next/link'

type CoverProps = {
  alt: string
  source: StaticImageData
}

export function Cover({ alt, source }: CoverProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>()

  function debounceTime(delay: number) {
    const id = setTimeout(onOpen, delay)
    setTimeoutId(id)
  }

  return (
    <Link href="/details">
      <Image
        alt={alt}
        src={source}
        className="cursor-pointer rounded-md"
        onMouseOut={() => clearTimeout(timeoutId)}
        onMouseOver={() => debounceTime(1000)}
      />
      <Hover onClose={onClose} isOpen={isOpen} />
    </Link>
  )
}
