import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, LightBulbIcon, CheckCircleIcon, UserGroupIcon } from '@heroicons/react/solid'
// import imgOne from '../assets/screenshots/page_one_shot1.png';
// import imgThree from '../assets/screenshots/page_one_shot3.png';
import imgOne from '../assets/screenshots/dec-2023-shots/explore_one.png';
import imgThree from '../assets/screenshots/dec-2023-shots/explore_two.png';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'The PlanMyEats menu planner and recipe finder mobile app is a game-changer in the world of culinary innovation. It\'s designed to transform your everyday cooking experience into a seamless, inspiring, and personalized journey. ',
    icon: LightBulbIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'With a user-friendly interface, the app caters to all levels of culinary expertise, making menu planning and cooking a breeze.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Database backups.',
    description: 'From novice cooks looking for beginner-friendly recipes to experienced chefs seeking fresh inspiration, the PlanMyEats app is your perfect kitchen companion.',
    icon: UserGroupIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 relative">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-600">PlanMyEats</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Overview</p>
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
          <div className="aspect-w-16 aspect-h-9 max-w-none ring-1 ring-gray-400/10 w-64 flex space-x-10">
            <motion.img
              src={imgOne}
              alt="My Image"
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 30 }}
              className="border border-gray-300 rounded-2xl"
            />
            <motion.img
              src={imgThree}
              alt="My Image"
              initial={{ y: '100vw', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 30 }}
              className="border border-gray-300 rounded-2xl"
            />
          </div>
        </div>
      </div>
      <Link to="/pme/explore" className="fixed right-12 bg-red-500 text-white p-4 rounded-full shadow-lg top-1/2 transform -translate-y-1/2">
        <ChevronRightIcon className="h-6 w-6" />
      </Link>
    </div>
  )
}
