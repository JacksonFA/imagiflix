import { BellDot, ChevronDown, Search, Play, Info } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/assets/logo.png'
import BackgroundImg from '@/assets/background_hero.png'

export default function Main() {
  return (
    <main className="relative w-screen min-h-full bg-black">
      <header className="text-zinc-50 flex justify-between px-16 pt-12 h-12 z-10 sticky">
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
          <span className="px-4 cursor-pointer">Infantil</span>
          <BellDot className="cursor-pointer" />
          <div className="flex items-center cursor-pointer">
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
      <div id="hero" className="w-screen h-screen absolute top-0 z-0">
        <Image
          alt="Hero background"
          src={BackgroundImg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className="-z-10 object-fill brightness-50"
        />
        <div className="text-zinc-50 grid grid-rows-2">
          <div></div>
          <div className="pl-16">
            <div className="mt-16">
              <p className="text-zinc-200 flex gap-4 font-extrabold text-5xl before:block before:h-16 before:w-2 before:bg-red-600">
                FILMES
              </p>
              <div className="flex">
                <div className="font-extrabold text-5xl -rotate-90 -ml-3 h-12 mt-6">OS </div>
                <span className="font-extrabold text-8xl -ml-4">MERCENÁRIOS</span>
              </div>
              <div className="flex gap-8 items-center">
                <div className="w-16 h-16 bg-red-600 flex flex-col items-center justify-center rounded-md font-extrabold text-xl/none">
                  <p>TOP</p>
                  <p>10</p>
                </div>
                <p className="font-bold text-3xl">Top 5 em filmes hoje</p>
              </div>
              <p className="max-w-3xl text-pretty font-medium text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus placeat
                nesciunt vel ullam? Nostrum magni molestias est ipsum vero facere ab fuga enim qui
                quas eos, sint consectetur, perferendis perspiciatis!
              </p>
              <div className="flex gap-8 mt-12">
                <button className="w-60 h-14 rounded-xl flex items-center justify-center gap-4 bg-zinc-50 text-zinc-950 cursor-pointer hover:bg-zinc-400">
                  <Play size="32px" strokeWidth="3px" />
                  <span className="font-bold text-xs">Assistir</span>
                </button>
                <button className="w-60 h-14 rounded-xl flex items-center justify-center gap-4 bg-zinc-50/30 text-zinc-50 cursor-pointer hover:bg-zinc-50/10">
                  <Info size="32px" />
                  <span className="font-bold text-xs">Mais informações</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
