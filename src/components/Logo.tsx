import { NextPage } from 'next'

const Logo: NextPage = () => (
  <>
    <img
      src="/assets/logo.png"
      width={110}
      className="p-2 hidden md:inline-block"
      alt="Luciana Ferreira"
    />
    <img
      src="/assets/logo.png"
      width={85}
      className="p-2 md:hidden"
      alt="Luciana Ferreira"
    />
  </>
)

export default Logo
