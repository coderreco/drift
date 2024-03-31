"use client"
import { useState } from 'react'
import { RadioGroup,  } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import chromagBlack from '@/app/ui/images/parts/riza/chromag-riza-stem-black.jpg'
import chromagGold from '@/app/ui/images/parts/riza/chromag-riza-stem-gold.jpg'
import chromagRed from '@/app/ui/images/parts/riza/chromag-riza-stem-red.jpg'
import chromagSilver from '@/app/ui/images/parts/riza/chromag-riza-stem-silver.jpg'
import chromagBlue from '@/app/ui/images/parts/riza/chromag-riza-stem-blue.jpg'
import Image from 'next/image'


const product = {
  name: 'Chromag Riza',
  price: '$180',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Parts', href: '#' },
    { id: 2, name: 'Stems', href: '#' },
  ],
  images: [
    {
      src: chromagBlack,
      alt: 'Black Chromag Riza stem on white background',
    },
    {
      src: chromagGold,
      alt: 'Gold Chromag Riza stem on white background',
    },
    {
      src: chromagRed,
      alt: 'Red Chromag Riza stem on white background',
    },
    {
      src: chromagSilver,
      alt: 'Silver Chromag Riza stem on white background',
    },
    {
      src: chromagBlue,
      alt: 'Blue Chromag Riza stem on white background',
    },
  ],
  colors: [
    { name: 'Black', class: 'bg-black', selectedClass: 'ring-black ring-offset-2' },
    { name: 'Gold', class: 'bg-yellow-300', selectedClass: 'ring-yellow-300 ring-offset-2' },
    { name: 'Red', class: 'bg-red-600', selectedClass: 'ring-red-600 ring-offset-2' },
    { name: 'Silver', class: 'bg-gray-300', selectedClass: 'ring-gray-300 ring-offset-2' },
    { name: 'Blue', class: 'bg-blue-600', selectedClass: 'ring-blue-600 ring-offset-2' },
  ],
  diameters: [
    { name: '31.5', inStock: true },
    { name: '33.5', inStock: false },
    { name: '35', inStock: true },
    { name: '35.5', inStock: false },
    { name: '37.5', inStock: false },
  ],
  description:
    'We&apos;ve used our knowledge of making stems for almost 20 years to create a new, highest level, Canadian-made bar grabber. There is no doubt the RIZA is our finest stem to date. CNC machined in Whistler, Canada from premium 6061 billet aluminum, it features our new faded edge on the clamp face to help avoid hot spots and stress risers when your bar flexes under load. Also it looks really flippin&apos; nice. The RIZA comes in 31.8 and 35mm clamps and 32, 38 and 45mm lengths.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The Riza stem is made from 6061 billet aluminum and is CNC machined in Whistler, Canada. It features a new faded edge on the clamp face to help avoid hot spots and stress risers when your bar flexes under load. The Riza comes in 31.8 and 35mm clamps and 32, 38 and 45mm lengths.',
}
const reviews = {
  href: '#',
  average: 4,
  totalCount: 117,
  featured: [
    {
      id: 1,
      title: 'This is the best stem I have ever owned!',
      rating: 5,
      content: `
        <p>I have been riding for over 20 years and have owned many stems. The Riza is by far the best stem I have ever owned. It is stiff, light, and looks great. I highly recommend it!</p>
      `,
      author: 'Mark Edwards',
      avatarSrc:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      title: 'Great stem for the price',
      rating: 4,
      content: `
        <p>I have been riding the Riza stem for a few months now and have been really happy with it. It is a great stem for the price and I would recommend it to anyone looking for a new stem.</p>
      `,
      author: 'Sarah Peters',
      avatarSrc:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      title: 'Looks great on my bike',
      rating: 5,
      content: `
        <p>The Riza stem looks great on my bike. It is a great stem for the price and I would recommend it to anyone looking for a new stem.</p>
      `,
      author: 'John Smith',
      avatarSrc:
       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
}
const products = [
  {
    id: 1,
    name: 'OSX LTD',
    href: '#',
    imageSrc: 'https://chromagbikes.com/cdn/shop/products/osx-ltd-group-WEB_1200x.jpg?v=1613929912',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$140',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Contact Pedals',
    href: '#',
    imageSrc: 'https://chromagbikes.com/cdn/shop/products/contact-gunmetal_1200x.jpg?v=1588093586',
    imageAlt: "Front of bike pedal in gunmetal.",
    price: '$155',
    color: 'Gunmetal',
  },
  {
    id: 3,
    name: 'OSX LTD',
    href: '#',
    imageSrc: 'https://chromagbikes.com/cdn/shop/products/osx-ltd-group-WEB_1200x.jpg?v=1613929912',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$140',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Contact Pedals',
    href: '#',
    imageSrc: 'https://chromagbikes.com/cdn/shop/products/contact-gunmetal_1200x.jpg?v=1588093586',
    imageAlt: "Front of bike pedal in gunmetal.",
    price: '$155',
    color: 'Gunmetal',
  }
  // More products...
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.diameters[2])

  return (
    <div className="">

      <main className="pt-10 sm:pt-16">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <Image
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-emerald-600 hover:text-emerald-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* diameters */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-500">
                    Size guide
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.diameters.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer  text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-emerald-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-emerald-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 id="shipping-heading" className="text-sm font-medium text-gray-900">
                Details
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Reviews */}
            <section aria-labelledby="reviews-heading" className="border-t border-gray-200 pt-10 lg:pt-16">
              <h2 id="reviews-heading" className="sr-only">
                Reviews
              </h2>

              <div className="space-y-10">
                {reviews.featured.map((review) => (
                  <div key={review.id} className="flex flex-col sm:flex-row">
                    <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                      <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>
                      <p className="sr-only">{review.rating} out of 5 stars</p>

                      <div
                        className="mt-3 space-y-6 text-sm text-gray-600"
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                    </div>

                    <div className="order-1 flex items-center sm:flex-col sm:items-start">
                      <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />

                      <div className="ml-4 sm:ml-0 sm:mt-4">
                        <p className="text-sm font-medium text-gray-900">{review.author}</p>
                        <div className="mt-2 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <section aria-labelledby="related-products-heading" className="">
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 id="related-products-heading" className="text-xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
