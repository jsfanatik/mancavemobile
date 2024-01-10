import React, { useState, useEffect } from 'react';
import { 
  LightBulbIcon, 
  CheckCircleIcon, 
  UserGroupIcon, 
  LightningBoltIcon, 
  ChevronDownIcon, 
  ChevronUpIcon,
  SearchIcon
 } from '@heroicons/react/solid'
import exploreMain from '../assets/screenshots/phase-two-screenshots/explore-main.png';
import cuisineSelector from '../assets/screenshots/phase-two-screenshots/cuisine-selector.png';
import recipeSelector from '../assets/screenshots/phase-two-screenshots/recipe-selector.png';
import recipeOne from '../assets/screenshots/phase-two-screenshots/recipe-one.png';
import recipeTwo from '../assets/screenshots/phase-two-screenshots/recipe-two.png';
import recipeThree from '../assets/screenshots/phase-two-screenshots/recipe-three.png';
import recipeFour from '../assets/screenshots/phase-two-screenshots/recipe-four.png';
import menuPlannerOne from '../assets/screenshots/phase-two-screenshots/menu-planner-one.png';
import menuPlannerTwo from '../assets/screenshots/phase-two-screenshots/menu-planner-two.png';
import menuPlannerThree from '../assets/screenshots/phase-two-screenshots/menu-planner-three.png';
import menuPlannerFour from '../assets/screenshots/phase-two-screenshots/menu-planner-four.png';
import search from '../assets/screenshots/phase-two-screenshots/search.png';
import shoppingOne from '../assets/screenshots/phase-two-screenshots/shopping-one.png';
import shoppingTwo from '../assets/screenshots/phase-two-screenshots/shopping-two.png';
import shoppingThree from '../assets/screenshots/phase-two-screenshots/shopping-three.png';
import shoppingFour from '../assets/screenshots/phase-two-screenshots/shopping-four.png';
import ingredientOne from '../assets/screenshots/phase-two-screenshots/ingredient-one.png';
import ingredientTwo from '../assets/screenshots/phase-two-screenshots/ingredient-two.png';
import ingredientThree from '../assets/screenshots/phase-two-screenshots/ingredient-three.png';
import favorites from '../assets/screenshots/phase-two-screenshots/favorites.png';

const features = [
  {
      id: 1,
      name: 'Push to deploy.',
      description:
      'The PlanMyEats menu planner and recipe finder mobile app is a game-changer in the world of culinary innovation. It\'s designed to transform your everyday cooking experience into a seamless, inspiring, and personalized journey. ',
      icon: LightBulbIcon
  },
  {
      id: 2,
      name: 'SSL certificates.',
      description: 'With a user-friendly interface, the app caters to all levels of culinary expertise, making menu planning and cooking a breeze.',
      icon: CheckCircleIcon
  },
  {
      id: 3,
      name: 'Database backups.',
      description: 'From novice cooks looking for beginner-friendly recipes to experienced chefs seeking fresh inspiration, the PlanMyEats app is your perfect kitchen companion.',
      icon: LightningBoltIcon
  },
  {
      id: 4,
      name: 'Database.',
      description: 'PlanMyEats not only features a user-friendly interface but also cultivates a vibrant community where users share recipes and collaborate on meal plans. This collaborative platform fosters creativity and culinary inspiration for a shared cooking experience.',
      icon: UserGroupIcon
  },
]

const products = [
  {
    id: 1,
    name: 'Explore (Home Screen)',
    image: exploreMain,
    imageAlt: 'mobile screen',
  },
  {
    id: 2,
    name: 'Category Selector',
    image: cuisineSelector,
    imageAlt: 'mobile screen',
  },
  {
    id: 3,
    name: 'Recipe Selector',
    image: recipeSelector,
    imageAlt: 'mobile screen',
  },
  {
    id: 4,
    name: 'Search',
    image: search,
    imageAlt: 'mobile screen',
  },
  {
    id: 5,
    name: 'Recipe',
    image: recipeOne,
    imageAlt: 'mobile screen',
  },
  {
    id: 6,
    name: 'Recipe - Save to Menu and Favorites',
    image: recipeTwo,
    imageAlt: 'mobile screen',
  },
  {
    id: 7,
    name: 'Recipe - Share/Export',
    image: recipeThree,
    imageAlt: 'mobile screen',
  },
  {
    id: 8,
    name: 'Recipe - Help Page',
    image: recipeFour,
    imageAlt: 'mobile screen',
  },
  {
    id: 9,
    name: 'Menu Planner',
    image: menuPlannerOne,
    imageAlt: 'mobile screen',
  },
  {
    id: 10,
    name: 'Menu Planner - Day Select (Swipe Right)',
    image: menuPlannerTwo,
    imageAlt: 'mobile screen',
  },
  {
    id: 11,
    name: 'Menu Planner - Meal Select (Swipe Left)',
    image: menuPlannerThree,
    imageAlt: 'mobile screen',
  },
  {
    id: 12,
    name: 'Menu Planner - Filters',
    image: menuPlannerFour,
    imageAlt: 'mobile screen',
  },
  {
    id: 13,
    name: 'Shopping List',
    image: shoppingOne,
    imageAlt: 'mobile screen',
  },
  {
    id: 14,
    name: 'Shopping List - Check Item',
    image: shoppingTwo,
    imageAlt: 'mobile screen',
  },
  {
    id: 15,
    name: 'Shopping List - Uncheck Item',
    image: shoppingThree,
    imageAlt: 'mobile screen',
  },
  {
    id: 16,
    name: 'Shopping List - Shared Ingredients',
    image: shoppingFour,
    imageAlt: 'mobile screen',
  },
  {
    id: 17,
    name: 'Search by Ingredients',
    image: ingredientOne,
    imageAlt: 'mobile screen',
  },
  {
    id: 18,
    name: 'Search by Ingredients',
    image: ingredientTwo,
    imageAlt: 'mobile screen',
  },
  {
    id: 19,
    name: 'Search by Ingredients',
    image: ingredientThree,
    imageAlt: 'mobile screen',
  },
  {
    id: 20,
    name: 'Favorites',
    image: favorites,
    imageAlt: 'mobile screen',
  }
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
              PlanMyEats
            </h1>
            <p className="mt-6 text-2xl leading-8 text-gray-600">
            ...a user-friendly mobile app that revolutionizes the culinary experience!
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
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
        {!isScrolledDown && <span className="hidden lg:block fixed bottom-4 right-14 p-2 text-red-600 bg-white rounded-full">PlanMyEats Gallery</span>}
      </div>

      {/* container two */}
      <div id="containerTwo" className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
            Gallery
          </h1>
        </div>
        <h2 className="sr-only">Products</h2>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-16 aspect-w-9 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-16 xl:aspect-w-9">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
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
