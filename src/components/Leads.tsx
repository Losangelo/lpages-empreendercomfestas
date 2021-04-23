import { NextPage } from 'next'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CheckSVG } from '../../icons'
import lead from '../../pages/api/lead'

const Leads: NextPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handlerRegister(e) {
    e.preventDefault()

    if (!name) {
      return toast.warning('Como devo lhe chamar?')
    }
    function isEmail(email) {
      // eslint-disable-next-line no-control-regex
      return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
        email
      )
    }
    if (!isEmail(email)) {
      return toast.error(
        'Digite aqui um email válido, de preferência o que você verifica com frequência!'
      )
    }

    return lead()
  }

  return (
    <>
      <article className="mt-36 top-40 grid grid-col-2 lg:grid-cols-2">
        <div>
          <ToastContainer />

          <p className="font-sans font-bold">
            Agora Você Pode Realizar Seu Sonho!!!
          </p>
          <span>"CRIE NA CRISE!"</span>
          <p className="py-2 font-sans">
            Saia do stress, relaxe, ocupe-se com algo que lhe trará prazer, mais
            concentração, uma nova habilidade manual, onde, poderá até, usá-la
            como uma
            <span className="font-bold">nova fonte de renda!</span>
          </p>
          <p className="py-8 font-sans font-medium">
            Chegou a grande oportunidade que você esperava! Se você desejar
            saber mais sobre as novidades de personalizados de luxo e papelaria
            de luxo ...
          </p>

          <div className="uppercase text-4xl font-extrabold  font-sans">
            <span className="p-2">Se inscreva aqui.</span>
          </div>

          <form onSubmit={handlerRegister} method="POST">
            <div className="grid grid-cols1 gap-6">
              <input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Coloque aqui seu nome"
                className="border border-transparent focus:outline-none focus:ring-2"
              />

              <input
                type="text"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Coloque aqui seu e-mail"
                className="border border-transparent focus:outline-none focus:ring-2"
              />

              <button
                type="submit"
                className="px-4 py-2
                      text-sm
                      text-red-400
                      rounded-full
                      border
                      hover:border-red-600
                      focus:outline-none
                      focus:ring-1
                      focus:ring-offset-1
                      focus:ring-offset-red-600"
              >
                <CheckSVG />
                Cadastrar
              </button>
            </div>
          </form>
        </div>

        <div id="bgLu">
          <img
            src="/assets/LucianaMFer2.png"
            alt="Luciana Ferreira Personalizados de Luxo"
          />
          <img
            src="/assets/LucianaMFer2.png"
            width={75}
            className="p-2 md:hidden"
            alt="Luciana Ferreira"
          />
        </div>
      </article>
    </>
  )
}

export default Leads
