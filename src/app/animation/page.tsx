'use client'

import dynamic from "next/dynamic"

const PixiApp = dynamic(() => import("../../components/PixiApp"), { ssr: false })

export default function Anim() {
  return (
    <div>
      {/* <h1> NextJs</h1> */}
      <link rel="stylesheet" href="https://use.typekit.net/egz6rzg.css"></link>
      <PixiApp onEnded={() => {}}/>
    </div>
  )
}
