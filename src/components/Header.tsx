import { NextPage } from 'next'
import Logo from './Logo'
import Menu from './Menu'

const Header: NextPage = () => (
  <div className="bg-red-900 bg-opacity-10 flex container max-w-screen-2xl mx-auto y-75 p-2 justify-between items-center fixed z-auto top-0 right-0">
    <Logo />
    <Menu />
  </div>
)

export default Header
