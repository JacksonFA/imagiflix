'use client'

import { ArrowLeft, Flag } from 'lucide-react'
import { useRouter } from 'next/navigation' // Utilizado em versões mais novas (App Router)
// import { useRouter } from 'next/router' // Utilizado em versões mais antigas (Page Router)

type PlayerProps = {
  params: {
    movie: string
  }
}

export default function Player({ params }: PlayerProps) {
  const router = useRouter()

  return (
    <div className="group relative">
      <div className="absolute z-10 flex h-24 w-full justify-between px-12 pt-8 transition delay-300 duration-700 ease-in-out group-hover:bg-gradient-to-b group-hover:from-zinc-950 group-hover:from-25% group-hover:to-transparent">
        <ArrowLeft
          size={32}
          className="cursor-pointer text-zinc-50"
          onClick={() => router.back()}
        />
        <Flag size={32} className="cursor-pointer text-zinc-50" />
      </div>
      <video
        id="my_video_1"
        className="video-js vjs-default-skin h-screen w-screen"
        controls
        autoPlay
        preload="none"
        poster="http://video-js.zencoder.com/oceans-clip.jpg"
      >
        <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
      </video>
    </div>
  )
}
