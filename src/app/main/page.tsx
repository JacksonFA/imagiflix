'use client'

import { BellDot, ChevronDown, Search, Play, Info, PlusCircle, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import Logo from '@/assets/logo.png'
import BackgroundImg from '@/assets/background_hero.png'
import Movie1 from '@/assets/movies/capa1.png'
import Movie2 from '@/assets/movies/capa2.png'
import Movie3 from '@/assets/movies/capa3.png'
import Movie4 from '@/assets/movies/capa4.png'
import Movie5 from '@/assets/movies/capa5.png'

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <main className="bg-zinc-950">
      <div className="relative min-h-full w-screen">
        <div id="hero" className="absolute top-0 z-0 h-screen w-screen">
          <Image
            alt="Hero background"
            src={BackgroundImg}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            className="-z-10 object-fill brightness-50"
          />
          <div className="grid grid-rows-5 text-zinc-50">
            <div></div>
            <div className="row-span-3 row-start-3 pl-16">
              <p className="flex gap-4 text-5xl font-extrabold text-zinc-200 before:block before:h-16 before:w-2 before:bg-red-600">
                FILMES
              </p>
              <div className="flex">
                <div className="-ml-3 mt-6 h-12 -rotate-90 text-5xl font-extrabold">OS </div>
                <span className="-ml-4 text-8xl font-extrabold">MERCENÁRIOS</span>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-red-600 text-xl/none font-extrabold">
                  <p>TOP</p>
                  <p>10</p>
                </div>
                <p className="text-3xl font-bold">Top 5 em filmes hoje</p>
              </div>
              <div className="mt-16">
                <p className="max-w-3xl text-pretty text-base font-medium">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus placeat
                  nesciunt vel ullam? Nostrum magni molestias est ipsum vero facere ab fuga enim qui
                  quas eos, sint consectetur, perferendis perspiciatis!
                </p>
                <div className="mt-12 flex gap-8">
                  <button className="flex h-14 w-60 cursor-pointer items-center justify-center gap-4 rounded-xl bg-zinc-50 text-zinc-950 hover:bg-zinc-400">
                    <Play size="32px" strokeWidth="3px" />
                    <span className="text-xs font-bold">Assistir</span>
                  </button>
                  <button className="flex h-14 w-60 cursor-pointer items-center justify-center gap-4 rounded-xl bg-zinc-50/30 text-zinc-50 hover:bg-zinc-50/10">
                    <Info size="32px" />
                    <span className="text-xs font-bold">Mais informações</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky z-10 flex h-12 justify-between px-16 pt-12 text-zinc-50">
        <div className="flex items-center gap-16">
          <Image src={Logo} alt="Imagiflix Logo" />
          <ul className="flex gap-4">
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Séries</a>
            </li>
            <li>
              <a href="#">Filmes</a>
            </li>
            <li>
              <a href="#">Bombando</a>
            </li>
            <li>
              <a href="#">Minha lista</a>
            </li>
            <li>
              <a href="#">Navegar por idiomas</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Search className="cursor-pointer" />
          <span className="cursor-pointer px-4">Infantil</span>
          <BellDot className="cursor-pointer" />
          <div className="flex cursor-pointer items-center">
            <Image
              width={32}
              height={32}
              src="https://github.com/JacksonFA.png"
              alt="User avatar"
              className="rounded-lg"
            />
            <ChevronDown />
          </div>
        </div>
      </header>
      <div className="mt-[85vh] flex flex-col gap-8 pb-8 pl-16">
        <section className="sticky">
          <p className="text-xl font-bold text-zinc-50">Comédias</p>
          <div className="mt-6 flex gap-8">
            <Image
              alt="Filme 1"
              src={Movie1}
              className="cursor-pointer rounded-md"
              // onMouseOut={onClose}
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
            <Image
              alt="Filme 2"
              src={Movie2}
              className="cursor-pointer rounded-md"
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
            <Image
              alt="Filme 3"
              src={Movie3}
              className="cursor-pointer rounded-md"
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
            <Image
              alt="Filme 4"
              src={Movie4}
              className="cursor-pointer rounded-md"
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
          </div>
        </section>
        <section className="sticky">
          <p className="text-xl font-bold text-zinc-50">Em alta</p>
          <div className="mt-6 flex gap-8">
            <Image
              alt="Filme 1"
              src={Movie1}
              className="cursor-pointer rounded-md"
              // onMouseOut={onClose}
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
            <Image
              alt="Filme 2"
              src={Movie2}
              className="cursor-pointer rounded-md"
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
            <Image
              alt="Filme 3"
              src={Movie3}
              className="cursor-pointer rounded-md"
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
            <Image
              alt="Filme 4"
              src={Movie4}
              className="cursor-pointer rounded-md"
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
          </div>
        </section>
        <section className="sticky">
          <p className="text-xl font-bold text-zinc-50">Séries em alta para maratonar</p>
          <div className="mt-6 flex gap-8">
            <Image
              alt="Filme 1"
              src={Movie1}
              className="cursor-pointer rounded-md"
              // onMouseOut={onClose}
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
            <Image
              alt="Filme 2"
              src={Movie2}
              className="cursor-pointer rounded-md"
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
            <Image
              alt="Filme 3"
              src={Movie3}
              className="cursor-pointer rounded-md"
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
            <Image
              alt="Filme 4"
              src={Movie4}
              className="cursor-pointer rounded-md"
              onMouseOver={() => setTimeout(onOpen, 500)}
            />
          </div>
        </section>
      </div>

      <Modal onClose={onClose} size="md" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent className="w-[480px]">
          <ModalHeader id="modal" className="bg-black !p-0">
            <Image alt="Movie1" src={Movie5} className="w-full" />
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody className="bg-zinc-900 text-zinc-50">
            <div className="flex flex-col gap-12 p-8">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <Play size={48} />
                  <PlusCircle size={48} />
                  <ThumbsUp size={48} />
                </div>
                <div>
                  <ChevronDown size={48} />
                </div>
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
    </main>
  )
}
