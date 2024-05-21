import { Info, Play } from 'lucide-react'
import { FaPlay } from 'react-icons/fa6'
import Image from 'next/image'
import BackgroundImg from '@/assets/background_hero.png'

export function Hero() {
  return (
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
                  <FaPlay size="32px" />
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
  )
}
