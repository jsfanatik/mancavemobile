import { motion } from 'framer-motion';
import { LightningBoltIcon, TrendingUpIcon, ShieldCheckIcon } from '@heroicons/react/solid'
import imgOne from '../assets/screenshots/smartphone.png';

const features = [
  {
    name: 'ManCaveMobile',
    description:
      'is a unique and innovative mobile app development enterprise with a focus on creating entertaining, practical, and user-friendly mobile applications. Our one-of-a-kind approach is rooted in the concept of the "ManCave," where creative ideas are born and crafted into exceptional mobile solutions.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Our mission',
    description: 'is to transform the mundane into the extraordinary by developing a collection of fun, useful, and intuitive mobile applications. We believe that technology can be harnessed to make everyday tasks more enjoyable, productive, and accessible. We aim to build a digital "ManCave" where ideas come to life and technology is harnessed to make daily life more enjoyable and productive.',
    icon: TrendingUpIcon,
  },
  // {
  //   name: 'Our vision',
  //   description: '&copy; {new Date().getFullYear()} <span className="text-red-500">ManCave</span>Mobile. All rights reserved.',
  //   icon: ShieldCheckIcon,
  // },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
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
