import Image from 'next/image'
import Movie from '@/assets/movies/capa6.png'
import { CircleX, PlusCircle, ThumbsUp, Volume2 } from 'lucide-react'
import { Button } from '@/components/button/Button'
import { FaPlay } from 'react-icons/fa6'

export default function Details() {
  return (
    <main className="flex h-screen w-screen justify-center bg-zinc-950">
      <section className="w-full max-w-xl bg-zinc-800">
        <div className="relative h-96 w-full">
          <div className="absolute z-0 h-full w-full">
            <Image
              alt="movie"
              src={Movie}
              placeholder="blur"
              quality={100}
              fill
              className="-z-10"
            />
            <div className="flex h-80 flex-col justify-between px-4 pt-4 text-zinc-50">
              <div className="flex items-center justify-end">
                <CircleX size={48} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button icon={<FaPlay size={32} />} text="Assistir" color="primary" />
                  <PlusCircle size={48} />
                  <ThumbsUp size={48} />
                </div>
                <Volume2 size={48} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-4 pt-8 text-zinc-50">
          <div className="flex flex-col gap-2">
            <div className="text-sm font-normal">
              <span className="font-bold text-green-700">97% relevante</span> 2000 1h 29min HD
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-[10px] font-bold text-zinc-50">
                A16
              </div>
              <span className="text-xs font-semibold">
                Violência extrema, conteúdo sexual, drogas
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-red-600 text-[10px] font-bold text-zinc-50">
                <p>TOP</p>
                <p>10</p>
              </div>
              <span className="text-sm font-bold">Top 5 em filmes hoje</span>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  )
}
