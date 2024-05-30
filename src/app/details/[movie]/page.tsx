import Image from 'next/image'
import Movie from '@/assets/movies/capa6.png'
import { PlusCircle, ThumbsUp, Volume2 } from 'lucide-react'
import { Button } from '@/components/button/Button'
import { FaPlay } from 'react-icons/fa6'
import { Close } from '../Close'

type DetailsProps = {
  params: {
    movie: string
  }
}

export default function Details({ params }: DetailsProps) {
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
                <Close />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    icon={<FaPlay size={32} />}
                    text="Assistir"
                    color="primary"
                    action={`/player/${params.movie}`}
                  />
                  <PlusCircle size={48} className="cursor-pointer" />
                  <ThumbsUp size={48} className="cursor-pointer" />
                </div>
                <Volume2 size={48} className="cursor-pointer" />
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
              <span className="text-[10px] font-semibold">
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
            <p className="max-w-64 text-[10px] font-medium">
              Marlon e shawn wayans contribuem para alfinetar algunsdos maiores campeões de
              bilheteria de terror adolescente Hollywood, nesta sátira mordaz
            </p>
          </div>
          <div className="flex max-w-52 flex-col gap-6 text-[10px]/none font-medium">
            <p>
              <span className="text-zinc-500">Elenco:</span> Anna Farias, jon Abrahams,Shannon
              Elizabeth, mais
            </p>
            <p>
              <span className="text-zinc-500">Gênero:</span> Sátira, filmes de comédia,filmes de
              terros
            </p>
            <p>
              <span className="text-zinc-500">Cenas e momentos:</span> Apimentados, irreverentes,
              besteirol
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="mb-6 text-xl font-black text-zinc-50">
            <span className="text-zinc-500">Sobre: </span> {params.movie}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-medium text-zinc-50">
              <span className="text-zinc-500">Direção:</span> Keenen Ivory Wayans
            </p>
            <p className="text-[10px] font-medium text-zinc-50">
              <span className="text-zinc-500">Elenco:</span> Keenen Ivory Wayans Keenen Ivory Wayans
              Keenen Ivory Wayans Keenen Ivory Wayans Keenen Ivory Wayans Keenen Ivory Wayans Keenen
            </p>
            <p className="text-[10px] font-medium text-zinc-50">
              <span className="text-zinc-500">Roteiro:</span> Keenen Ivory Wayans Keenen Ivory
              Wayans Keenen Ivory Wayans Keenen Ivory Wayans Keenen Ivory Wayans Keenen Ivory Wayans
              Keenen Keenen Ivory Wayans Keenen Ivory Wayans Keenen Ivory Wayans Keenen Ivory Wayans
              Keenen Ivory Wayans Keenen Ivory Wayans
            </p>
            <p className="text-[10px] font-medium text-zinc-50">
              <span className="text-zinc-500">Gêneros:</span> Sátira, filmes de comédia, filmes de
              terror, filmes de comédia e de fim de noite.
            </p>
            <p className="text-[10px] font-medium text-zinc-50">
              <span className="text-zinc-500">Cenas e momentos:</span> Apimentados, Irreverentes,
              Besteirol
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-[10px] font-bold text-zinc-50">
                A16
              </div>
              <p className="text-[10px] font-medium text-zinc-50">
                violência extrema, conteúdo sexual, drogas não recomendado para menores de 16 anos
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
