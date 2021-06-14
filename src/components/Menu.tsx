import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import HamburgerMenu from '../components/MenuButtomMy'
import MenuDefault from '../components/MenuTradicional'

export default function Menu() {
  const [isLargerThan500] = useMediaQuery('(min-width: 640px)')
  return ( isLargerThan500 ?  <MenuDefault /> : <HamburgerMenu /> )
}
