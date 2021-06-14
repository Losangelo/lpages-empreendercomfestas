// import Wbot from 'sulla';
import { create, Whatsapp } from 'venom-bot'

export default async function WbotStart() {
  try {
    await create('Festeiras')
      .then((client) => gerandoListaPeloWhatsapp(client))
      .catch((error) => {
        console.log(error)
      })
  } catch (error) {
    console.log(error)
  }
}

function gerandoListaPeloWhatsapp(client: Whatsapp) {
  client.onMessage(async (message) => {
    if (String(message.body).toUpperCase().trim() == 'sair') {
      client.sendText(
        message.from,
        'Pena que você, não quer mais receber nossas novidades, você pode voltar, quando quiser, heim !!!'
      )
      return
    }

    if (String(message.body).toUpperCase().trim() == 'sim') {
      fetch('/api/whatslead', {
        body: JSON.stringify({
          whatsName: message.sender.pushname,
          whatsNumber: String(message.from).split('@')[0],
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      client.sendText(
        message.from,
        'Obrigada por ser uma(um) assinante! Vou te manter informada das novidades!!!'
      )
      return
    }

    client.sendText(
      message.from,
      'Olá, sou a *Lu*, uma atendente virtual, Irei te manter informada(a) com notícias relevantes.' +
        "Digite 'SIM' para se cadastrar a ficar bem informada(o)"
    )
  })
}
