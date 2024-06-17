'use client'

import { useState } from 'react'
import Movie1 from '@/assets/movies/capa1.png'
import Movie2 from '@/assets/movies/capa2.png'
import Movie3 from '@/assets/movies/capa3.png'
import Movie4 from '@/assets/movies/capa4.png'
import { Cover } from '../cover/Cover'

type CategoryProps = {
  title: string
}

export function Category({ title }: CategoryProps) {
  const [list, setList] = useState([
    { id: 1, alt: 'filme-1', source: Movie1 },
    { id: 2, alt: 'filme-2', source: Movie2 },
    { id: 3, alt: 'filme-3', source: Movie3 },
    { id: 4, alt: 'filme-4', source: Movie4 },
  ])
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
