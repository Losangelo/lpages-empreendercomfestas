import Wbot from 'venom-bot';

// export default function WbotStart() {
//   let client = Wbot.create('Festeiras',
//     undefined,
//     // statusFind
//    (statusSession, session) => {
//     console.log('Status Session: ', statusSession)
//     console.log('Session name: ', session)
//    },
//    // options
//    {useChrome: false}
//   ).then((festeiras) => gerandoListaPeloWhatsapp(festeiras))
//   .catch((error) => {
//     console.log(error)
//   })
// }

export default async function WbotStart() {
  try {
    await Wbot.create('Festeiras',
        undefined,
        // statusFind
      (statusSession, session) => {
        console.log('Status Session: ', statusSession)
        console.log('Session name: ', session)
      },
      // options
      {useChrome: false})
      .then((client) => gerandoListaPeloWhatsapp(client))
      .catch((error) => {
        console.log(error)
      })
  } catch (error) {
    console.log(error)
  }

}

function gerandoListaPeloWhatsapp(client: Wbot.Whatsapp): any {
  client.onMessage(async (message) => {
    if (String(message.body).toUpperCase().trim() == 'SAIR') {
      client.sendText(
        message.from,
        'Pena que não quer mais receber nossas novidades, estarei aguardando seu retorno heim!!!'
      )
      return
    }

    if (String(message.body).toUpperCase().trim() == 'SIM') {

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
