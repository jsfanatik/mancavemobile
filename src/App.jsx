import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Page1 from '../src/pages/Page1'
import Page2 from '../src/pages/Page2'
import Page3 from '../src/pages/Page3'
import Page4 from '../src/pages/Page4'
import Page5 from '../src/pages/Page5'
import Page6 from '../src/pages/Page6'

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
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
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

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
          </div>
        </div>
      </div>
      {/* <AnimatedRoutes /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/pme/overview" element={<Page1 />} />
        <Route path="/pme/explore" element={<Page2 />} />
        <Route path="/pme/planner" element={<Page3 />} />
        <Route path="/pme/shopping" element={<Page4 />} />
        <Route path="/pme/favorites" element={<Page5 />} />
        <Route path="/pme/contact" element={<Page6 />} />
      </Routes>
    </Router>
  )
}