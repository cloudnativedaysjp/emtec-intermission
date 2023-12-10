'use client'

import { useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Playlist } from '@/components/VideoPlaylist'

const VideoPlaylist = dynamic(() => import('../../components/VideoPlaylist'))

const playlist: Playlist = [
  {
    sources: [
      {
        src: 'https://web-intermission.s3.isk01.sakurastorage.jp/cndt2023/cm1.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    sources: [
      {
        src: 'https://web-intermission.s3.isk01.sakurastorage.jp/cndt2023/cm2.mp4',
        type: 'video/mp4',
      },
    ],
  },
  {
    sources: [
      {
        src: 'https://web-intermission.s3.isk01.sakurastorage.jp/cndt2023/cm3.mp4',
        type: 'video/mp4',
      },
    ],
  },
]

export default function Page() {
  return (
    <div>
      <h1>Video playlist</h1>
      <div className="w-[1280px] h-[720px]">
        <VideoPlaylist onEnded={() => {}} playlist={playlist} />
      </div>
    </div>
  )
}
