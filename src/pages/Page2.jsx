import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, LightningBoltIcon } from '@heroicons/react/solid'
import imgOne from '../assets/screenshots/page_one_shot2.png';
import imgTwo from '../assets/screenshots/page_one_shot8.png';

const features = [
  {
    name: 'Explore.',
    description:
      'The Explore section is the heart of the app, offering a curated selection of mouthwatering dishes from diverse cuisines, dietary preferences, and cooking styles, all with simple instructions.',
    icon: SearchIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Discover trending recipes, seasonal delights, and explore new culinary horizons effortlessly.',
    icon: LightningBoltIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-600">PlanMyEats</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features && features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 max-w-none ring-1 ring-gray-400/10 w-1/2 flex space-x-10">
            <motion.img
              src={imgOne}
              alt="My Image"
              initial={{ y: '100vw', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 30 }}
              className="border border-gray-300"
            />
            <motion.img
              src={imgTwo}
              alt="My Image"
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 30 }}
              className="border border-gray-300"
            />
          </div>
        </div>
      </div>
      <Link to="/pme/overview" className="fixed left-4 bottom-4 bg-red-500 text-white p-4 rounded-full shadow-lg">
        <ChevronLeftIcon className="h-6 w-6" />
      </Link>
      <Link to="/pme/planner" className="fixed right-4 bottom-4 bg-red-500 text-white p-4 rounded-full shadow-lg">
        <ChevronRightIcon className="h-6 w-6" />
      </Link>
    </div>
  )
}
