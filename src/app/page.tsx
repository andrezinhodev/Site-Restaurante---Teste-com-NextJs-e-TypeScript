export default function Home() {
  return (
    <main
      className="
        flex min-h-[calc(100vh-80px)]
        items-center justify-center
        bg-white px-6
      "
    >

      <div className="max-w-3xl text-center">

        <h1
          className="
            text-5xl font-bold
            tracking-tight text-gray-900
            sm:text-6xl
          "
        >
          Os melhores sabores da cidade
        </h1>

        <p
          className="
            mt-8 text-lg leading-8
            text-gray-600
          "
        >
          Descubra restaurantes incríveis,
          peça online e receba sua comida
          com rapidez, qualidade e segurança.
        </p>

        <div
          className="
            mt-10 flex items-center
            justify-center gap-x-6
          "
        >

          <a
            href="/cardapio"
            className="
              rounded-md bg-orange-500
              px-5 py-3 text-sm
              font-semibold text-white
              shadow-lg transition
              hover:bg-orange-400
            "
          >
            Ver Cardápio
          </a>

          <a
            href="/contato"
            className="
              text-sm font-semibold
              text-gray-900
            "
          >
            Fale conosco →
          </a>

        </div>

      </div>

    </main>
  )
}