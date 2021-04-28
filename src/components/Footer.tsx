import { NextPage } from 'next'
import { FaWhatsapp } from 'react-icons/fa'

const Footer: NextPage = () => (
  <>
    <hr />

    <div className="text-center bg-red-900 ">
      <a
        href="https://about.me/losangelo"
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 text-gray-50 font-extrabold justify-center flex flex-row"
      >
        Desenvolvido por Losangelo Pacífico Tudo pela mulher
        <img
          src="/assets/LucianaMFer2.svg"
          alt="LosangeloPacifio"
          className="w-150"
          width={150}
        />
      </a>
    </div>

    <a
      href="https://wa.me/5586981794415?text=Adorei%20seu%20trabalho,%20desejo%20saber%20mais!"
    className="fixed z-auto bottom-5 right-4"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp size={80} color="#00fa9a" />
    </a>
  </>
)

export default Footer
