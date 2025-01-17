"use client"
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon, PlusIcon } from '@heroicons/react/20/solid'
import { Button } from './Button'

const frequencies = [
  { value: 'standard', label: 'Standard', priceSuffix: '/starting at' },
  { value: 'premium', label: 'Premium', priceSuffix: '/starting at' },
]
const tiers = [
  {
    name: 'Basic Tune-Up',
    id: 'basic-tune-up',
    href: '#',
    price: { standard: '$50', premium: '$80' },
    description: 'Get your bike in working order for casual rides.',
    features: ['Adjust gears and brakes', 'Lubricate drivetrain', 'Safety check'],
    mostPopular: true,
  },
  {
    name: 'Performance Tune-Up',
    id: 'performance-tune-up',
    href: '#',
    price: { standard: '$100', premium: '$150' },
    description: 'Optimize your bike for peak performance on and off the trail.',
    features: ['Complete drivetrain overhaul', 'Wheel truing', 'Frame alignment'],
    mostPopular: false,
  },
  {
    name: 'Full Overhaul',
    id: 'full-overhaul',
    href: '#',
    price: { standard: '$200', premium: '$300' },
    description: 'Comprehensive service for bikes in need of serious attention.',
    features: ['Strip down and rebuild', 'Replace worn components', 'Test ride and fine-tuning'],
    mostPopular: false,
  },
];

// You can now use the 'tiers' array to render these bike service tiers on your website.

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Services() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-600">Servicing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Bike services for every rider
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable service that’s packed with the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-emerald-600 text-white' : 'text-gray-500',
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-emerald-600' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-emerald-600' : 'text-gray-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-emerald-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-emerald-600">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                {/* @ts-ignore */}
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-500'
                    : 'text-emerald-600 ring-1 ring-inset ring-emerald-200 hover:ring-emerald-300',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
                )}
              >
                Book a service
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-emerald-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
                  <li className="flex gap-x-3">
                    <PlusIcon className="h-6 w-5 flex-none text-emerald-600" aria-hidden="true" />
                    And more...
                  </li>
              </ul>
            </div>
          ))}
        </div>
        <div className='mx-auto mt-16 max-w-2xl text-center text-gray-600'>
          <Button variant='solid' color='emerald' href='#'>Service breakdown</Button>
          </div>
      </div>
    </div>
  )
}
