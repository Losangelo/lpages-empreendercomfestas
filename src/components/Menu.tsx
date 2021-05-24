import { signIn, signOut, useSession } from 'next-auth/client'
import { FaInstagramSquare, FaYoutubeSquare, FaFacebookSquare, FaAngellist } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

// const Menu: NextPage = () => (

export default function Menu() {
  const [session] = useSession()

  return (
    <>
      <div className="text-red-500 font-light font-sans text-center justify-between flex flex-row-1 sm:text-center">
        <a
          href="https://www.instagram.com/festasdaludecoracao/"
          target="_blank"
          className="hover:text-red-900"
          rel="noreferrer">
          <div className="hidden md:inline-block">
            <FaInstagramSquare size={45} color="#b48484" className="p-1 md:inline-block" />
            instagram
          </div>
          <FaInstagramSquare
            size={35}
            color="#b48484"
            className="sm:hidden text-center sm:text-left"
          />
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
          <FaFacebookSquare
            size={35}
            color="#b48484"
            className="sm:hidden text-center sm:text-left"
          />
        </a>

        <a
          href="https://www.youtube.com/channel/UCM67erhWa6HhOcwcm2Assmw"
          target="_blank"
          className="hover:text-red-900"
          rel="noreferrer">
          <div className="hidden md:inline-block">
            <FaYoutubeSquare size={45} color="#b48484" className="p-1 hidden md:inline-block" />
            youtube
          </div>
          <FaYoutubeSquare
            size={35}
            color="#b48484"
            className="sm:hidden text-center sm:text-left"
          />
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
          <FaAngellist size={35} color="#b48484" className="sm:hidden text-center sm:text-left" />
        </a>
      </div>

      {!session ? (
        <>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className="p-1 hidden md:inline-block right-1"
            startIcon={<MdAccountCircle />}
            onClick={() => signIn('google')}>
            Login Cursos
          </Button>
        </>
      ) : (
        <>
          <Avatar
            onClick={() => signOut()}
            alt="User"
            className="cursor-pointer h-72 m-2"
            src={session?.user?.image}
          />
        </>
      )}
    </>
  )
}
