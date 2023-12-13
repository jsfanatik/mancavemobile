import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import twitterImg from './assets/screenshots/dec-2023-shots/twitter.png';
import { X } from 'react-feather';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Overview from './pages/Overview'
import Explore from './pages/Explore'
import MenuPlanner from './pages/MenuPlanner'
import Shopping from './pages/Shopping'
import Favorites from './pages/Favorites'
import Contact from './pages/Contact'
import Search from './pages/Search'

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Demos', href: '/pme/overview' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/pme/contact' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Router>
      {/* <div className="flex flex-col min-h-screen">
        <div className="flex-grow">

        </div>
      </div> */}
        
      <div className="bg-white">
        <header className="fixed top-0 w-full z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <span className="text-2xl font-bold text-gray-900">
                    <span className="text-red-500">ManCave</span>Mobile
                </span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation && navigation.map((item) => (
                <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation && navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        {/* <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
          </div>
        </div> */}
      </div>
      {/* <AnimatedRoutes /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/pme/overview" element={<Overview />} />
        <Route path="/pme/explore" element={<Explore />} />
        <Route path="/pme/search" element={<Search />} />
        <Route path="/pme/planner" element={<MenuPlanner />} />
        <Route path="/pme/shopping" element={<Shopping />} />
        <Route path="/pme/favorites" element={<Favorites />} />
        <Route path="/pme/contact" element={<Contact />} />
      </Routes>
      <footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center p-4">
        &copy; {new Date().getFullYear()} <span className="text-red-500">ManCave</span>Mobile. All rights reserved.
      </footer>
    </Router>
  )
}