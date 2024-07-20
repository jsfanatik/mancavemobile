import { motion } from 'framer-motion';
import { LightningBoltIcon, TrendingUpIcon, SparklesIcon } from '@heroicons/react/solid'
import imgOne from '../assets/mobile-app.png';

const features = [
  {
    name: 'MobileEats',
    description:
      `is a unique and innovative mobile app development enterprise with a focus on 
      creating entertaining, practical, and user-friendly recipe and dining mobile applications.`,
    icon: LightningBoltIcon,
  },
  {
    name: 'Our mission',
    description: `is to transform the mundane into the extraordinary by developing a 
    collection of fun, useful, and intuitive mobile applications. We believe that technology 
    can be harnessed to make recipe and restaurant-finding more enjoyable, productive, and accessible.`,
    icon: TrendingUpIcon,
  },
  {
    name: 'Our vision',
    description: `is to build a suite of mobile applications that are fun, useful, intuitive, and mouthwatering!`,
    icon: SparklesIcon,
  },
]

export default function Example() {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
            <motion.img
              src={imgOne}
              alt="My Image"
              initial={{ x: '100vw', opacity: 0, rotate: 360 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 60 }}
            /> 
        </div>
      </div>
    </div>
  )
}
