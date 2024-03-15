import { LocaleLink } from '@/components/localeLink'
import { EmailIcon, GithubIcon, LinkedinIcon, XIcon } from '@/components/icons'

const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-block hover:opacity-75 focus:*:opacity-75 focus:*:outline-none">
      {children}
    </div>
  )
}

export const Footer = () => {
  return (
    <footer className="flex flex-col py-7 pt-12 items-center">
      <div className="text-white flex items-center gap-8">
        <FooterLink>
          <a href="https://linkedin.com/in/rodrigo-cortezi" target="_blank">
            <LinkedinIcon size={28} />
          </a>
        </FooterLink>
        <FooterLink>
          <a href="https://github.com/rodrigovcortezi" target="_blank">
            <GithubIcon size={30} />
          </a>
        </FooterLink>
        <FooterLink>
          <a href="https://x.com/rodrigovcortezi">
            <XIcon size={24} />
          </a>
        </FooterLink>
        <FooterLink>
          <a href="mailto:rodrigovcortezi@gmail.com" target="">
            <EmailIcon size={30} />
          </a>
        </FooterLink>
      </div>
      <div className="text-sm text-white space-x-2 pt-7">
        <FooterLink>
          <LocaleLink href="/" locale="pt-BR">
            Português
          </LocaleLink>
        </FooterLink>
        <span>|</span>
        <FooterLink>
          <LocaleLink href="/" locale="en">
            English
          </LocaleLink>
        </FooterLink>
      </div>
    </footer>
  )
}
