import { Bell, ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/common/Logo'
import userImage from '@/assets/images/user.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-popover sticky top-0 z-50 h-[60px] md:h-[70px] lg:h-[80px] w-full px-2 md:px-6 lg:px-14 flex items-center">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between lg:justify-start">
          <Button
            variant="clean"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          <div className="flex items-center lg:space-x-8">
            <Link to="/home" className="lg:ml-0">
              <Logo
                width="100px"
                height="auto"
                className="md:w-[120px] lg:w-[150px]"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-6">
              <Link
                to="#"
                className="text-foreground font-semibold hover:text-muted-foreground"
              >
                Home
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Tv Shows
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Movies
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Kids
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                New
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Popular
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 lg:ml-auto">
            <Button variant="clean" size="icon">
              <Bell className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
            <Button
              variant="clean"
              className="flex items-center space-x-0 lg:space-x-1 p-0"
            >
              <img
                src={userImage}
                alt="User avatar"
                className="h-6 w-6 lg:h-8 lg:w-8 rounded-full object-cover"
              />
              <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden fixed top-[60px] md:top-[70px] left-0 w-1/2 md:w-[35%] bg-popover/95 shadow-lg z-40">
            <nav className="flex flex-col space-y-4 p-6">
              <Link
                to="#"
                className="text-foreground font-semibold hover:text-muted-foreground py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tv Shows
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Movies
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kids
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                New
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Popular
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
