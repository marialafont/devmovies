import { Logo } from './Logo'
import { Link } from 'react-router-dom'
import { TwitterIcon, InstagramIcon, FacebookIcon } from './SocialIcons'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-8 lg:pt-10 pb-4 mt-auto">
      <div className="mx-auto px-4 md:px-8 lg:px-14">
        <div className="flex flex-col items-center space-y-6 md:space-y-7 lg:space-y-8">
          <Logo
            width="140px"
            height="auto"
            className="md:w-[170px] lg:w-[200px]"
          />

          <nav className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
            >
              Cookies Policy
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
            >
              Help Center
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
            >
              About Us
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4 md:space-x-5 lg:space-x-6">
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <TwitterIcon className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <InstagramIcon className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <FacebookIcon className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-xs">
              ©DevMovies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
