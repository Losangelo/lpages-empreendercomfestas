const Card = () => (
  <div className="px-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="p-2 h-38 w-full object-cover md:w-48"
          src={img}
          alt="Luciana Ferreira"
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {title}
        </div>
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {subtitle}
        </a>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  </div>
)

export default Card
