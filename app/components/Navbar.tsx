import Link from 'next/link'
import Image from 'next/image'
import logo from "@/public/logo.png"
import phoneIcon from "@/public/phone-icon.png"

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo} // Make sure to add your logo image
                alt="RealWaves Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/category-one"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Category One
              </Link>
              <Link
                href="/category-two"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Category Two
              </Link>
              <Link
                href="/category-three"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Category Three
              </Link>
              <Link
                href="/category-four"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Category Four
              </Link>
            </div>
          </div>

          {/* Phone Number Button */}
          <div className="flex items-center">
            <a
              href="tel:+910000000000"
              className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700"
            >
              <div className="flex items-center bg-white rounded-full p-1">
                <Image
                  src={phoneIcon}
                  alt="Phone Icon"
                  width={20}
                  height={20}
                />
              </div>
              <span>+ 91 00000 00000</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
