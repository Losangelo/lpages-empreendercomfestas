import { NextPage } from "next"
import { signIn, signOut, useSession } from 'next-auth/client'
import { SimpleGrid } from '@chakra-ui/react'
import { FaInstagramSquare, FaYoutubeSquare, FaFacebookSquare, FaAngellist } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

const MenuTradicional: NextPage = () => {
  const [session, loading] = useSession()

  return (
    <SimpleGrid
      columns={[2, null, 5]}
      spacing="auto"
      my-30
      h="100%"
      className="text-red-500 font-light font-sans justify-between flex flex-row-1 text-center ">
      <a
        href="https://www.instagram.com/festasdalu_/"
        target="_blank"
        className="hover:text-red-900"
        rel="noreferrer">
        <div className="hidden md:inline-block">
          <FaInstagramSquare size={45} color="#b48484" className="p-1 md:inline-block" />
          instagram
        </div>
      </a>

      <a
        href="https://www.facebook.com/lucianamfer"
        target="_blank"
        className="hover:text-red-900"
        rel="noreferrer">
        <div className="hidden md:inline-block">
          <FaFacebookSquare size={45} color="#b48484" className="p-1 hidden md:inline-block" />
          facebook
        </div>
      </a>

      <a
        href="https://www.youtube.com/channel/UCM67erhWa6HhOcwcm2Assmw"
        target="_blank"
        className="hover:text-red-900"
        rel="noreferrer">
        <div className="hidden md:inline-block">
          <FaYoutubeSquare size={45} color="#b48484" className="p-1 inline-block" />
          youtube
        </div>
      </a>

      <a
        href="https://linktr.ee/festasdaludecoracao"
        target="_blank"
        className="hover:text-red-900"
        rel="noreferrer">
        <div className="hidden md:inline-block">
          <FaAngellist size={45} color="#b48484" className="p-1 hidden md:inline-block" />
          Orçamento
        </div>
      </a>

      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 2; }`}</style>
      </noscript>

      <div className="signedInStatus">
        <p className={`nojs-show ${!session && 'loading' ? 'loading' : 'loaded'}`}>
          {!session && (
            <>
              <span className="notSignedInText">Faça Login</span>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className="mybottom p-1 hidden md:inline-block sm:flex-none right-1"
                startIcon={<MdAccountCircle />}
                onClick={() => signIn('google')}>
                Login Cursos
              </Button>
            </>
          )}
          {session && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url(${session?.user?.image})` }}
                  className="avatar"
                />
              )}
              <span className="signedInText">
                <small>Assinado como:</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <Avatar
                onClick={() => signOut()}
                alt="User"
                className="cursor-pointer h-72 m-2"
                src={session?.user?.image}
              />
            </>
          )}
        </p>
      </div>
    </SimpleGrid>
  )
}

export default MenuTradicional
