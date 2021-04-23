import { NextPage } from 'next'
import {
  FaInstagramSquare,
  FaYoutubeSquare,
  FaFacebookSquare,
  FaAngellist,
} from 'react-icons/fa'

const Menu: NextPage = () => (
  <div className="sm:text-red-500 font-light font-sans text-right justify-between flex flex-row-1">
    <a
      href="https://www.instagram.com/festasdaludecoracao/"
      target="_blank"
      className="hover:text-red-900"
      rel="noreferrer"
    >
      <div className="hidden md:inline-block">
        <FaInstagramSquare
          size={45}
          color="#b48484"
          className="p-2 md:inline-block"
        />
        instagram
      </div>
      <FaInstagramSquare size={40} color="#b48484" className="p-2 sm:hidden" />
    </a>

    <a
      href="https://www.facebook.com/lucianamfer"
      target="_blank"
      className="hover:text-red-900"
      rel="noreferrer"
    >
      <div className="hidden md:inline-block">
        <FaFacebookSquare
          size={45}
          color="#b48484"
          className="p-2 hidden md:inline-block"
        />
        facebook
      </div>
      <FaFacebookSquare size={40} color="#b48484" className="p-2 sm:hidden" />
    </a>

    <a
      href="https://www.youtube.com/channel/UCM67erhWa6HhOcwcm2Assmw"
      target="_blank"
      className="hover:text-red-900"
      rel="noreferrer"
    >
      <div className="hidden md:inline-block">
        <FaYoutubeSquare
          size={45}
          color="#b48484"
          className="p-2 hidden md:inline-block"
        />
        youtube
      </div>
      <FaYoutubeSquare size={40} color="#b48484" className="p-2 sm:hidden" />
    </a>

    <a
      href="https://linktr.ee/festasdaludecoracao"
      target="_blank"
      className="hover:text-red-900"
      rel="noreferrer"
    >
      <div className="hidden md:inline-block">
        <FaAngellist
          size={45}
          color="#b48484"
          className="p-2 hidden md:inline-block"
        />
        Orçamento
      </div>
      <FaAngellist size={40} color="#b48484" className="p-2 sm:hidden" />
    </a>
  </div>
)

export default Menu
