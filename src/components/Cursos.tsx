import React from 'react'

const dbCursosList = [
  {
    Id: 1,
    Title: 'Planejando a sua Festa',
    urlImage: '/assets/PlanejandoAsuafesta.jpg',
    price: '100',
    Description:
      'E-book especial criado pra você mamãe que gosta de planejar a festa do seu filho(a) mas tem medo de errar. Nele você vai encontrar os tipos de festas, quantidades de comidas, bebidas, lembranças, personalizados, doces decorados. E ainda terá um check list de organização.',
  },
  {
    Id: 2,
    Title: 'Manual de Precificação para Festas',
    urlImage: '/assets/CapaManualdePrecificacaoparaFestas.jpg',
    price: '100',
    Description:
      'Nesse momento onde passamos muito tempo em casa, ficamos ansiosos e muitas vezes com os nervos a flor da pela e nada como tem algo para ocupar o nosso tempo, onde possamos focar nossa atenção e relaxar um pouco, além de melhorar nossa habilidade manual e para alguns até ganhando dinheiro no processo com Personalizados nesta Páscoa! No Pocket Páscoa você vai aprender lindos modelos no tema Páscoa para presentear amigos e familiares e ainda fazer uma boa renda extra. Então já aproveita e garanta sua vaga!',
  },
  {
    Id: 3,
    Title: 'Pocket Páscoa',
    urlImage: '/assets/PocktPscoa.jpg',
    price: '100',
    Description:
      'Saiba como cobrar por suas festas e tenha lucros reais! Saber precificar é um dos grandes problemas enfrentados por muitas decoradoras de festas, principalmente as que estão começando agora no mercado. Descubra como precificar um orçamento e nunca mais perca dinheiro por não saber cobrar. Precificar nunca mais será um bicho papão. Com esse manual, você saberá o que precisa fazer na hora de precificar uma proposta de orçamento de forma simples e descomplicado.',
  },
  {
    Id: 4,
    Title: ' Viver de Festas',
    urlImage: '/assets/logo.png',
    price: '497',
    Description:
      'É um curso 100% online que vai te guiar passo a passo para você se tornar uma decorador(a) reconhecido(a) e valorizado(a), para VIVER de FESTAS como sempre sonhou, mesmo que ainda não tenha começado.',
  },
]

export default function Curso(): any {
  const CourseCard = dbCursosList.map((item) => (
    <>
      <div
        key={item.Id}
        className="pb-2 max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-full w-full object-contain md:w-48"
              src={item.urlImage}
              alt="Personalizado de Luxo Luciana Fereira"
            />
          </div>

          <div className="p-8">
            <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
              {item.Title}
            </div>

            <a
              href="#"
              className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
              'Produto Digital: R$' {item.price}
            </a>

            <p className="mt-2 text-gray-500 text-justify font-light">{item.Description}</p>
          </div>
        </div>
      </div>
    </>
  ))
  return CourseCard
}
