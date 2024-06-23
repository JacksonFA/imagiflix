import { NextResponse } from 'next/server'
import { PopularResponse } from '@/types/tmdb.dto'

export async function GET(req: Request) {
  const api_key = process.env.TMDB_API_KEY as string
  const api_url = process.env.TMDB_API_URL as string
  const url = `${api_url}/3/movie/popular?language=en-US&page=1`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`,
    },
  }
  try {
    const response = await fetch(url, options)
    const { results }: PopularResponse = await response.json()
    const movie = results[0].id
    const imageResponse = await fetch(`${api_url}/3/movie/${movie}/images`, options)
    const imageResult = await imageResponse.json()
    console.log(imageResult)
    return NextResponse.json(results)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Erro ao busca os filmes.' })
  }
}
