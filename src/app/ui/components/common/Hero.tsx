

export default function Hero() {

  return (
    <div>
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-0"
          aria-hidden="true"
        >
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="https://ev1.pinkbike.org/v1920/46/pbvid-467623.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mx-auto z-10 relative max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our grand opening.{' '}
              <a href="#" className="font-semibold text-emerald-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The Bike Shack
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Shop online
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Book a service <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
