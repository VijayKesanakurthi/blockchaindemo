import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from 'next/link'
import { useRouter } from 'next/router'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const router=useRouter()

  const isActive=(route)=>{
    if(route===router.pathname) return true
    return false
    
  }
  
  const styles={
   navItem:`text-gray-100 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium`,
    actv:'bg-indigo-500',
    mobileItem:"text-gray-300 hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"

  }
  return (
        <nav className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 max-w-screen w-11/12 rounded-xl mt-2">
        <div className="max-w-screen px-4 py-2 sm:px-6 relative lg:px-8">
          <div className="flex items-center justify-between ">
            <div className="flex w-full items-center justify-between">
              <div className=" md:basis-1/2 text-white text-xl font-bold font-robo">
                Block Chain Demo
              </div>
              <div className="hidden md:block ">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/hash">
                    <a 
                    className={`${styles.navItem} ${isActive('/hash')?styles.actv:' '}` }
                  >
                    Hash
                  </a>
                    </Link>

                  <a
                    href="#"
                    className={`${styles.navItem}`}
                  >
                    Block
                  </a>
                  <Link href="/">
                       
                  <a
                    className={`${styles.navItem} ${isActive('/')?styles.actv:' '}`}
                  >
                   Blockchain
                  </a>
                  </Link>
                  <a
                    href="#"
                    className={`${styles.navItem}`}
                  >
                    Distributed
                  </a>

                  <a
                    href="#"
                    className={`${styles.navItem}`}
                  >
                   Tokens
                  </a>
                    <a
                    href="#"
                    className={`${styles.navItem}`}
                  >
                   Coinbase
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-purple-400 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offsetpurple-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-100 -translate-y-10"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-50"
        >
          {(ref) => (
            <div className="md:hidden bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 w-full opacity-90 rounded-lg absolute" id="mobile-menu z-0 shadow">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className={`${styles.mobileItem}`}
                >
                  Hash
                </a>

                <a
                  href="#"
                  className={`${styles.mobileItem}`}
                >
                 Block
                </a>

                <a
                  href="#"
                  className={`${styles.mobileItem}`}
                >
                  Blockchain
                </a>

                <a
                  href="#"
                  className={`${styles.mobileItem}`}
                >
                  Distributed
                </a>

                <a
                  href="#"
                  className={`${styles.mobileItem}`}
                >
                  Tokens
                </a>
                  <a
                  href="#"
                  className={`${styles.mobileItem}`}
                >
                  Coinbase
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

  );
}

export default Nav;