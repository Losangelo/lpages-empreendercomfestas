import React from 'react'
import Image from 'next/image'

const PeloWhats = () => (
  <>
    <i style="margin-top:16px" className="fa fa-whatsapp" />
    <Image
      id="imagem_whats"
      src="../public/assets/bwhasts.png"
      width={100}
      height={100}
      onClick="window.open('https://web.whatsapp.com/send?phone=+5586981794415&amp;text=Olá!', '_blank');"
    />

    <Image
      id="imagem_whats2"
      src="../public/assets/bwhasts.png"
      width={100}
      height={100}
      onClick="window.open('https://api.whatsapp.com/send?phone=+5586981794415&amp;text=Olá!', '_blank');"
    />

    <div className="preloader">
      <div className="preloaderimg" />
    </div>
  </>
)

export default PeloWhats
