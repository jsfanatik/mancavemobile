import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import caveImg from '../assets/screenshots/cave.png';

export default function Home() {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-32 sm:py-36 lg:py-44">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative px-3 py-1 text-sm leading-6 text-gray-600">
                        <motion.img
                            src={caveImg}
                            alt="My Image"
                            initial={{ y: '-100vw', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 40 }}
                            width={90}
                        />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Innovative, Intuitive, and Practical Mobile Apps
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    ...rooted in the concept of the "ManCave," 
                    where creative ideas are born and crafted into exceptional mobile solutions.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                        to="/pme/overview"
                        className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        PlanMyEats Overview
                        </Link>
                        <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}