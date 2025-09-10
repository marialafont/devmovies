import twitterIcon from '@/assets/icons/twitter.svg'
import instagramIcon from '@/assets/icons/instagram.svg'
import facebookIcon from '@/assets/icons/facebook.svg'

export function TwitterIcon({ className }) {
  return <img src={twitterIcon} alt="Twitter" className={className} />
}

export function InstagramIcon({ className }) {
  return <img src={instagramIcon} alt="Instagram" className={className} />
}

export function FacebookIcon({ className }) {
  return <img src={facebookIcon} alt="Facebook" className={className} />
}
