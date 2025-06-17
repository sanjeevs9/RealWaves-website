import Link from 'next/link'
import Image from 'next/image'
import logo from "@/public/logo.png"

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
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Products
              </Link>
              <Link
                href="/blogs"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Blogs
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
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                  <path d="M2.36955 0.938228C2.63024 0.676361 3.05386 0.675424 3.31566 0.936118C3.31633 0.936791 3.31704 0.937494 3.31771 0.938228L6.27819 3.8987C6.54005 4.15939 6.54098 4.58295 6.2803 4.84476L4.53987 6.58524C4.04108 7.0786 3.97832 7.86261 4.39235 8.429C5.02109 9.29189 5.71687 10.1038 6.47315 10.8575C7.31634 11.7043 8.233 12.4747 9.21238 13.1595C9.77827 13.5542 10.5455 13.4877 11.035 13.0015L12.7154 11.2947C12.9761 11.0328 13.3997 11.0319 13.6615 11.2926L16.6294 14.2657C16.8913 14.5264 16.8923 14.9499 16.6316 15.2118C16.6309 15.2125 16.6302 15.2132 16.6295 15.2139V15.2087L15.8287 16.0041C14.7932 17.0527 13.285 17.4841 11.8515 17.1419C10.4073 16.7553 9.0344 16.14 7.78483 15.3193C6.6239 14.5773 5.54805 13.71 4.57676 12.7327C3.68307 11.8456 2.88017 10.8715 2.17989 9.82496C1.41392 8.69885 0.807679 7.47207 0.378334 6.17959C-0.113845 4.66123 0.293977 2.99516 1.43187 1.87584L2.36955 0.938228Z" fill="#2476FE" />
                </svg>
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
