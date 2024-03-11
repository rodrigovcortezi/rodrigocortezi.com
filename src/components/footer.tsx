import { LocaleLink } from '@/components/localeLink'

export const Footer = () => {
  return (
    <footer className="flex py-7 justify-center">
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
