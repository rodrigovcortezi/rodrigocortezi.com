import { LocaleLink } from '@/components/localeLink'
import { EmailIcon, GithubIcon, LinkedinIcon, XIcon } from '@/components/icons'

const FooterLink = ({
  href,
  target = '_blank',
  children,
}: {
  href: string
  target?: string
  children: React.ReactNode
}) => {
  return (
    <a
      href={href}
      target={target}
      className="hover:opacity-75 focus:opacity-75 focus:outline-none"
    >
      {children}
    </a>
  )
}

export const Footer = () => {
  return (
    <footer className="flex flex-col py-7 items-center">
      <div className="text-white flex items-center gap-7 pb-7">
        <FooterLink href="https://linkedin.com/in/rodrigo-cortezi">
          <LinkedinIcon size={30} />
        </FooterLink>
        <FooterLink href="https://github.com/rodrigovcortezi">
          <GithubIcon size={32} />
        </FooterLink>
        <FooterLink href="https://x.com/rodrigovcortezi">
          <XIcon size={26} />
        </FooterLink>
        <FooterLink href="mailto:rodrigovcortezi@gmail.com" target="">
          <EmailIcon size={32} />
        </FooterLink>
      </div>
      <div className="text-sm text-white space-x-2">
        <LocaleLink href="/" locale="pt-BR">
          Português
        </LocaleLink>
        <span>|</span>
        <LocaleLink href="/" locale="en">
          English
        </LocaleLink>
      </div>
    </footer>
  )
}
