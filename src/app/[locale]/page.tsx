import { useTranslations } from 'next-intl'

interface ExperienceParagraphProps {
  companyName: string
  period: [string, string]
  children: React.ReactNode
}

const ExperienceParagraph = ({
  companyName,
  period,
  children,
}: ExperienceParagraphProps) => {
  return (
    <>
      <h2 className="inline text-white">
        <b>{companyName}</b> ({period[0]}-{period[1]}) ––&ensp;
      </h2>
      <p className="inline">{children}</p>
    </>
  )
}

export default function Home() {
  const t = useTranslations('Index')
  return (
    <>
      <main className="px-[5vw]">
        <div className="max-w-4xl mx-auto">
          <section className="pt-8 md:pt-[6vh] 2xl:pt-36">
            <h1 className="text-3xl md:text-4xl text-white font-semibold leading-tight md:leading-none">
              {t.rich('title', {
                name: (chunks) => (
                  <span className="whitespace-nowrap">{chunks}</span>
                ),
              })}
            </h1>
            <p className="pt-8 leading-relaxed">
              {t.rich('about.paragraph1', {
                greeting: (chunks) => (
                  <span className="text-white">{chunks}</span>
                ),
                i: (chunks) => <i>{chunks}</i>,
              })}
            </p>
            <p className="pt-4 leading-relaxed">{t('about.paragraph2')}</p>
          </section>
          <section className="pt-11">
            <ul className="space-y-6 leading-relaxed">
              <li>
                <ExperienceParagraph
                  companyName={t('experiences.hurb.company')}
                  period={[
                    t('experiences.hurb.period.start'),
                    t('experiences.hurb.period.end'),
                  ]}
                >
                  {t('experiences.hurb.description')}
                </ExperienceParagraph>
              </li>
              <li>
                <ExperienceParagraph
                  companyName={t('experiences.clarific.company')}
                  period={[
                    t('experiences.clarific.period.start'),
                    t('experiences.clarific.period.end'),
                  ]}
                >
                  {t('experiences.clarific.description')}
                </ExperienceParagraph>
              </li>
              <li>
                <ExperienceParagraph
                  companyName={t('experiences.partiuingresso.company')}
                  period={[
                    t('experiences.partiuingresso.period.start'),
                    t('experiences.partiuingresso.period.end'),
                  ]}
                >
                  {t.rich('experiences.partiuingresso.description', {
                    i: (chunks) => <i>{chunks}</i>,
                  })}
                </ExperienceParagraph>
              </li>
            </ul>
          </section>
          <section className="pt-16 pb-8">
            <p className="leading-relaxed">
              {t.rich('contact', {
                github: () => (
                  <a href="https://github.com/rodrigovcortezi">GitHub</a>
                ),
                linkedin: () => (
                  <a href="https://linkedin.com/in/rodrigo-cortezi">LinkedIn</a>
                ),
                email: () => (
                  <a href="mailto:rodrigovcortezi@gmail.com">email</a>
                ),
              })}
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
