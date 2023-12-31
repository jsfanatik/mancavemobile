
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import caveImg from '../assets/screenshots/cave.png';
import caveImg from '../assets/screenshots/dec-2023-shots/twitter.png';

export default function Home() {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-32 sm:py-36 lg:py-44">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <motion.img
                        src={caveImg}
                        alt="My Image"
                        initial={{ y: '-100vw', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 40 }}
                        width={90}
                    />
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Follow us!
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Stay up to date with the latest news and updates from <a href="https://twitter.com/TheRetroFanatik" target="_blank" className="font-bold text-blue-900">
                            ManCaveMobile on X.
                        </a>
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                        to="/"
                        className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Return to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}