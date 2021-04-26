import { signIn, signOut, useSession } from 'next-auth/client'

import {
  FaInstagramSquare,
  FaYoutubeSquare,
  FaFacebookSquare,
  FaAngellist,
  FaSign,
  FaSignOutAlt,
  FaSignLanguage,
} from 'react-icons/fa'

// const Menu: NextPage = () => (

export default function Menu() {
  const [ session, loading ] = useSession();

  return <>
    <div className="sm:text-red-500 font-light font-sans text-center justify-between flex flex-row-1">
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
            className="p-1 md:inline-block"
          />
          instagram
        </div>
        <FaInstagramSquare size={40} color="#b48484" className="p-1 sm:hidden" />
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
            className="p-1 hidden md:inline-block"
          />
          facebook
        </div>
        <FaFacebookSquare size={40} color="#b48484" className="p-1 sm:hidden" />
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
            className="p-1 hidden md:inline-block"
          />
          youtube
        </div>
        <FaYoutubeSquare size={40} color="#b48484" className="p-1 sm:hidden" />
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
            className="p-1 hidden md:inline-block"
          />
          Orçamento
        </div>
        <FaAngellist size={40} color="#b48484" className="p-1 sm:hidden" />
      </a>
    </div>

    {!session && <>
      <FaSignOutAlt
        size={45}
        color="#b48484"
        className="p-1 hidden md:inline-block"
      />
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      <FaSign
        size={45}
        color="#b48484"
        className="p-1 hidden md:inline-block"
      />
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>
}

