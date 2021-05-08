import { NextPage } from 'next'

const Logo: NextPage = () => (
  <>
    <img
      src="/assets/logo.png"
      width={110}
      className="p-2 hidden sm:inline-block"
      alt="Luciana Ferreira"
    />
    <img src="/assets/logo.png" width={85} className="p-2 sm:hidden" alt="Luciana Ferreira" />
  </>
)

export default Logo
