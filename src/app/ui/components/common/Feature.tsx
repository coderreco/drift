import { WrenchScrewdriverIcon, BoltIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'
import markAir from '@/app/ui/images/riding/mm-1.jpeg'
import Image from 'next/image'

const features = [
  {
    name: 'Personalized Services',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Same day repairs',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: BoltIcon,
  },
  {
    name: 'Good hangs',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CheckBadgeIcon,
  },
]

export default function FeatureWithImage({eyebrow, heading, subheading}: {eyebrow: string, heading: string, subheading: string}) {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 2xl:py-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg py-12">
              <h2 className="text-base font-semibold leading-7 text-emerald-600">{eyebrow}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ heading }</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {subheading}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-emerald-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start relative justify-center sm:justify-end w-full h-full bg-emerald-200 lg:order-first">
            <Image
              src={markAir}
              alt="Product screenshot"
              className="w-[48rem] rounded sm:rounded-none 2xl:w-full 2xl:rounded max-w-none h-full object-cover object-right shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const CenteredFeature = ({eyebrow, heading, text, video}:{eyebrow: string, heading: string, text: string, video?: string}) => (
  <div className=" relative px-6 py-24 sm:py-32 lg:px-8">
    {video && (
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={video}
        />
      </div>
    )
     }
      <div className="mx-auto relative z-10 max-w-2xl text-center">
      <p className="text-base font-semibold leading-7 text-emerald-600">{ eyebrow }</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">{heading}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-50">
          {text}
        </p>
      </div>
    </div>
)
  
const Feature = ({eyebrow, heading, text}:{eyebrow: string, heading: string, text: string}) => (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-emerald-600">{eyebrow}</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{heading}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {text}
          </p>
        </div>
      </div>
    </div>
)

export {CenteredFeature, Feature}