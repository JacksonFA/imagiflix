'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

export default function Player() {
  // const router = useRouter()

  return (
    <div className="relative">
      <div className="absolute z-10 h-20 w-full bg-black p-4">
        <Link href="/main">
          <ArrowLeft size={48} color="white" />
        </Link>
      </div>
      <video
        id="my_video_1"
        className="video-js vjs-default-skin h-screen w-screen"
        controls
        preload="none"
        poster="http://video-js.zencoder.com/oceans-clip.jpg"
      >
        <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
      </video>
    </div>
  )
}
