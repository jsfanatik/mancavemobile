import React, { useState, useEffect } from 'react';
import { 
  LightBulbIcon, 
  CheckCircleIcon, 
  UserGroupIcon, 
  LightningBoltIcon, 
  ChevronDownIcon, 
  ChevronUpIcon,
 } from '@heroicons/react/solid'
import fmeOne from '../assets/screenshots/fmeshots/fme-one.png'
import fmeTwo from '../assets/screenshots/fmeshots/fme-two.png'
import fmeThree from '../assets/screenshots/fmeshots/fme-three.png'
import fmeFour from '../assets/screenshots/fmeshots/fme-four.png'
import fmeFive from '../assets/screenshots/fmeshots/fme-five.png'
import fmeSix from '../assets/screenshots/fmeshots/fme-six.png'
import fmeSeven from '../assets/screenshots/fmeshots/fme-seven.png'
import fmeEight from '../assets/screenshots/fmeshots/fme-eight.png'
import fmeNine from '../assets/screenshots/fmeshots/fme-nine.png'
import fmeTen from '../assets/screenshots/fmeshots/fme-ten.png'
import fmeEleven from '../assets/screenshots/fmeshots/fme-eleven.png'
import fmeTwelve from '../assets/screenshots/fmeshots/fme-twelve.png'

const features = [
  {
      id: 1,
      name: 'Push to deploy.',
      description:
      `RandomEats is an app for indecisive eaters 
      and brave restaurant enthusiasts who are looking for a random restaurant selection as their next eating adventure.`,
      icon: LightBulbIcon
  },
  {
      id: 2,
      name: 'SSL certificates.',
      description: `RandomEats allows users to randomly select restaurants from various categories within 20 miles of the user's location.`,
      icon: CheckCircleIcon
  },
  {
      id: 3,
      name: 'Database backups.',
      description: `Simply shake your phone to trigger the randomizer, and let fate decide where you eat next.`,
      icon: LightningBoltIcon
  },
  {
      id: 4,
      name: 'Database.',
      description: `RandomEats is now available in an assortment of languages, 
      so that you can enjoy a more cultured dining experience!`,
      icon: UserGroupIcon
  },
]

const products = [
  {
    id: 1,
    name: 'Explore (Home Screen)',
    image: fmeOne,
    imageAlt: 'mobile screen',
  },
  {
    id: 2,
    name: 'Category Selector',
    image: fmeTwo,
    imageAlt: 'mobile screen',
  },
  {
    id: 3,
    name: 'Restaurant Details',
    image: fmeThree,
    imageAlt: 'mobile screen',
  },
  {
    id: 4,
    name: 'Add Restaurants to My List',
    image: fmeFour,
    imageAlt: 'mobile screen',
  },
  {
    id: 5,
    name: 'My List',
    image: fmeFive,
    imageAlt: 'mobile screen',
  },
  {
    id: 6,
    name: 'Sort by Distance, Rating, Price',
    image: fmeSix,
    imageAlt: 'mobile screen',
  },
  {
    id: 7,
    name: 'Random Shake',
    image: fmeSeven,
    imageAlt: 'mobile screen',
  },
  {
    id: 8,
    name: 'Shuffling',
    image: fmeEight,
    imageAlt: 'mobile screen',
  },
  {
    id: 9,
    name: 'Final Selection',
    image: fmeNine,
    imageAlt: 'mobile screen',
  },
  {
    id: 10,
    name: 'Marked as Visited',
    image: fmeTen,
    imageAlt: 'mobile screen',
  },
  {
    id: 11,
    name: 'Language Settings',
    image: fmeEleven,
    imageAlt: 'mobile screen',
  },
  {
    id: 12,
    name: 'App Language Updated',
    image: fmeTwelve,
    imageAlt: 'mobile screen',
  },
]

export default function Example() {

  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const containerTwo = document.getElementById('containerTwo');
      const rect = containerTwo.getBoundingClientRect();
      setIsScrolledDown(rect.top <= 0);
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      {/* container one */}
      <div id="containerOne" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
              RandomEats
            </h1>
            <p className="mt-6 text-2xl leading-8 text-gray-600">
            ...the #1 app for indecisive eaters!
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.id} className="relative pl-16">
                  <dt className="text-base leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <span className="mt-2 text-base leading-7 text-gray-600 text-md">{feature.description}</span>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <button
          className="fixed bottom-4 right-4 p-2 rounded-full bg-red-600 text-white"
          onClick={() => {
            const containerOne = document.getElementById('containerOne');
            const containerTwo = document.getElementById('containerTwo');
            if (isScrolledDown) {
              containerOne.scrollIntoView({ behavior: 'smooth' });
            } else {
              containerTwo.scrollIntoView({ behavior: 'smooth' });
            }
            setIsScrolledDown(!isScrolledDown);
          }}
        >
          {isScrolledDown ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}
        </button>
        {!isScrolledDown && <span className="hidden lg:block fixed bottom-4 right-14 p-2 text-red-600 bg-white rounded-full">RandomEats Gallery</span>}
      </div>

      {/* container two */}
      <div id="containerTwo" className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
            Gallery
          </h1>
        </div> */}
        <h2 className="sr-only">Products</h2>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-1 xl:aspect-w-1">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center border-2 border-gray-300" // Added border classes
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
