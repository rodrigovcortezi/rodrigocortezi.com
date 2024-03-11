import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

interface About {
  greeting: React.ReactNode
  paragraph1: React.ReactNode
  paragraph2: React.ReactNode
}

const AboutSection = ({
  about: { greeting, paragraph1, paragraph2 },
}: {
  about: About
}) => {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl text-white font-semibold leading-tight md:leading-none">
        {greeting}
      </h1>
      <p className="pt-8 leading-relaxed">{paragraph1}</p>
      <p className="pt-4 leading-relaxed">{paragraph2}</p>
    </section>
  )
}

interface Experience {
  company: string
  period: [string, string]
  description: React.ReactNode
}

type ExperienceParagraphProps = Omit<Experience, 'description'> & {
  children: React.ReactNode
}

const ExperienceParagraph = ({
  company,
  period,
  children,
}: ExperienceParagraphProps) => {
  return (
    <>
      <h2 className="inline text-white">
        <b>{company}</b> ({period[0]}-{period[1]}) ––&ensp;
      </h2>
      <p className="inline">{children}</p>
    </>
  )
}

const ExperiencesSection = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <section>
      <ul className="space-y-6 leading-relaxed">
        {experiences.map((experience) => (
          <li key={experience.company}>
            <ExperienceParagraph
              company={experience.company}
              period={experience.period}
            >
              {experience.description}
            </ExperienceParagraph>
          </li>
        ))}
      </ul>
    </section>
  )
}

interface Contact {
  description: React.ReactNode
}

const ContactSection = ({ contact: { description } }: { contact: Contact }) => {
  return (
    <section>
      <p className="leading-relaxed">{description}</p>
    </section>
  )
}

export default function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Index')

  const about: About = {
    greeting: t.rich('title', {
      name: (chunks) => <span className="whitespace-nowrap">{chunks}</span>,
    }),
    paragraph1: t.rich('about.paragraph1', {
      greeting: (chunks) => <span className="text-white">{chunks}</span>,
      i: (chunks) => <i>{chunks}</i>,
    }),
    paragraph2: t('about.paragraph2'),
  }

  const experienceKeys = ['hurb', 'clarific', 'partiuingresso']
  const experiences: Experience[] = experienceKeys.map((key) => ({
    company: t(`experiences.${key}.company`),
    period: [
      t(`experiences.${key}.period.start`),
      t(`experiences.${key}.period.end`),
    ],
    description: t.rich(`experiences.${key}.description`, {
      i: (chunks) => <i>{chunks}</i>,
    }),
  }))

  const contact: Contact = {
    description: t.rich('contact', {
      github: () => <a href="https://github.com/rodrigovcortezi">GitHub</a>,
      linkedin: () => (
        <a href="https://linkedin.com/in/rodrigo-cortezi">LinkedIn</a>
      ),
      email: () => <a href="mailto:rodrigovcortezi@gmail.com">email</a>,
    }),
  }

  return (
    <main>
      <div className="pt-8 md:pt-[6vh] 2xl:pt-20">
        <section>
          <AboutSection about={about} />
        </section>
      </div>
      <div className="pt-11">
        <ExperiencesSection experiences={experiences} />
      </div>
      <div className="pt-16 pb-8">
        <ContactSection contact={contact} />
      </div>
    </main>
  )
}
