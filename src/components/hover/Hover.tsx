import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { PlusCircle, ThumbsUp } from 'lucide-react'
import { FaCaretDown, FaCirclePlay } from 'react-icons/fa6'
import Image from 'next/image'
import Movie5 from '@/assets/movies/capa5.png'
import Link from 'next/link'

interface HoverProps {
  onClose: () => void
  isOpen: boolean
}

export function Hover({ onClose, isOpen }: HoverProps) {
  return (
    <Modal onClose={onClose} size="md" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent className="w-[480px]" onMouseLeave={onClose}>
        <ModalHeader id="modal" className="bg-black !p-0">
          <Image alt="Movie1" src={Movie5} className="w-full" />
        </ModalHeader>
        <ModalBody className="bg-zinc-900 text-zinc-50">
          <div className="flex flex-col gap-12 p-8">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Link href="/player">
                  <FaCirclePlay size={48} />
                </Link>
                <PlusCircle size={48} />
                <ThumbsUp size={48} />
              </div>
              <Link href="/details">
                <FaCaretDown size={48} />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-green-500">97% relevante</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 text-[10px] font-bold text-zinc-50">
                A16
              </div>
              <span className="text-sm font-normal">2000 1h 29m HD</span>
            </div>
            <span>violência extrema . conteúdo sexual . drogas</span>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
