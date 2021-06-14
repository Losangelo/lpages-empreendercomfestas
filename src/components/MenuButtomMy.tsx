import { NextPage } from "next";
import React from "react";
import { Menu, MenuButton, IconButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
import { signIn, signOut, useSession } from 'next-auth/client'
import Button from '@material-ui/core/Button'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { HamburgerIcon } from '@chakra-ui/icons'

const MenuButtomMy: NextPage = () => {
  const [session, loading] = useSession()

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>

          <MenuItem>
            <a
              href="https://www.instagram.com/festasdaludecoracao/"
              target="_blank"
              className="hover:text-red-900"
              rel="noreferrer">
              <FaInstagramSquare
                size={35}
                color="#b48484"
                className="text-center sm:text-left inline-flex"
              />
              Instagram
            </a>
          </MenuItem>

          <MenuItem>
            <a
              href="https://www.facebook.com/lucianamfer"
              target="_blank"
              className="hover:text-red-900"
              rel="noreferrer">
              <FaFacebookSquare
                size={35}
                color="#b48484"
                className="text-center sm:text-left inline-flex"
              />
              Facebook
            </a>
          </MenuItem>

          <MenuItem>
            <a
              href="https://www.youtube.com/channel/UCM67erhWa6HhOcwcm2Assmw"
              target="_blank"
              className="hover:text-red-900"
              rel="noreferrer">
              <FaYoutubeSquare
                size={35}
                color="#b48484"
                className="text-center sm:text-left inline-flex"
              />
              Youtube
            </a>
          </MenuItem>

          <MenuItem>
            <a
              href="https://www.facebook.com/lucianamfer"
              target="_blank"
              className="hover:text-red-900"
              rel="noreferrer">
              <FaFacebookSquare
                size={35}
                color="#b48484"
                className="text-center sm:text-left inline-flex"
              />
              Facebook
            </a>
          </MenuItem>
          <MenuItem>
            <noscript>
              <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
            </noscript>

            <div className="signedInStatus">
              <p className={`nojs-show ${!session && 'loading' ? 'loading' : 'loaded'}`}>
                {!session && (
                  <>
                    {/* //<span className="notSignedInText">Você não está conectado</span> */}
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      className="mybottom p-1 md:inline-block sm:inline-block right-1"
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
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )}

export default MenuButtomMy
