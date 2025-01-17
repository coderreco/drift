import Image from 'next/image'
import rizaBlack from '../../images/parts/riza/chromag-riza-stem-black.jpg'

const trendingProducts = [
  {
    id: 1,
    name: 'Chromag Riza',
    color: 'Black',
    price: '$180',
    href: '/product/chromag-riza',
    imageSrc: rizaBlack,
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#fcba03' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
      { name: 'Red', colorBg: '#fc1703' },
      { name: 'Blue', colorBg: '#0324fc' },
    ],
  },
  {
    id: 1,
    name: 'Chromag Riza',
    color: 'Black',
    price: '$180',
    href: '/product/chromag-riza',
    imageSrc: rizaBlack,
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#fcba03' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
      { name: 'Red', colorBg: '#fc1703' },
      { name: 'Blue', colorBg: '#0324fc' },
    ],
  },
  {
    id: 1,
    name: 'Chromag Riza',
    color: 'Black',
    price: '$180',
    href: '/product/chromag-riza',
    imageSrc: rizaBlack,
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#fcba03' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
      { name: 'Red', colorBg: '#fc1703' },
      { name: 'Blue', colorBg: '#0324fc' },
    ],
  },
  {
    id: 1,
    name: 'Chromag Riza',
    color: 'Black',
    price: '$180',
    href: '/product/chromag-riza',
    imageSrc: rizaBlack,
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#fcba03' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
      { name: 'Red', colorBg: '#fc1703' },
      { name: 'Blue', colorBg: '#0324fc' },
    ],
  },
  // More products...
]

export default function FeaturedProducts() {
  return (
    <section aria-labelledby="trending-heading" className="">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-16">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 id="trending-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            Trending products
          </h2>
          <a href="#" className="hidden text-sm font-semibold text-emerald-600 hover:text-emerald-500 sm:block">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative w-full overflow-x-auto">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {trendingProducts.map((product) => (
                <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                    </div>
                  </div>

                  <h4 className="sr-only">Available colors</h4>
                  <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">
                    {product.availableColors.map((color) => (
                      <li
                        key={color.name}
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color.colorBg }}
                      >
                        <span className="sr-only">{color.name}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 px-4 sm:hidden">
          <a href="#" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}