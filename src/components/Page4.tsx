import { Optional } from '@/utils/types'
import { TalkView } from './models/talkView'
import { useContext } from 'react'
import { PageCtx } from './models/pageContext'
import VideoPlaylist, { Playlist } from './VideoPlaylist'

type Props = { view: Optional<TalkView> }

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

export default function Page(_: Props) {
  const { goNextPage } = useContext(PageCtx)

  return (
    <div className="w-full h-full">
      <VideoPlaylist onEnded={goNextPage} playlist={playlist}></VideoPlaylist>
    </div>
  )
}
