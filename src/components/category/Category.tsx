'use client'

import { useEffect, useState } from 'react'
import Movie1 from '@/assets/movies/capa1.png'
import Movie2 from '@/assets/movies/capa2.png'
import Movie3 from '@/assets/movies/capa3.png'
import Movie4 from '@/assets/movies/capa4.png'
import { Cover } from '../cover/Cover'
import { Movie } from '@/types/movie'

type CategoryProps = {
  title: string
}

type ListProps = {
  id: number
  alt: string
  source: string
}

export function Category({ title }: CategoryProps) {
  const [list, setList] = useState<ListProps[]>([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch('/api/tmdb/popular')
      const results: Movie[] = await response.json()
      const movies = results.map((result) => ({
        id: result.id,
        alt: result.title,
        source: result.poster_path,
      }))
      // setList(movies)
    })()
  }, [])

  return (
    <section className="sticky">
      <p className="text-xl font-bold text-zinc-50">{title}</p>
      <div className="mt-6 flex gap-8">
        {list.map(({ id, alt, source }) => (
          <Cover key={id} alt={alt} source={source} />
        ))}
      </div>
    </section>
  )
}
