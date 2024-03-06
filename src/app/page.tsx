export default function Home() {
  return (
    <>
      <main className="px-[5vw]">
        <div className="max-w-4xl mx-auto">
          <section className="pt-8 md:pt-[6vh] 2xl:pt-36">
            <h1 className="text-3xl md:text-4xl text-white font-semibold leading-tight md:leading-none">
              Olá, eu sou{' '}
              <span className="whitespace-nowrap">Rodrigo Cortezi</span> 👋
            </h1>
            <p className="pt-8 leading-relaxed">
              <span className="text-white">Eu sou Engenheiro de Software</span>{' '}
              com uma verdadeira paixão por desenvolver soluções completas,
              combinando o desenvolvimento Full-Stack e uma visão empreendedora
              para trazer à vida inovações significativas. Nos útlimos 5 anos,
              estive à frente de iniciativas marcantes, incluindo a expansão do
              catálogo de produtos na Hurb e o lançamento bem-sucedido do
              PartiuIngresso, um <i>marketplace</i> de ingressos.
            </p>
            <p className="pt-4 leading-relaxed">
              Estou sempre em busca de desafios que me permitam explorar novas
              tecnologias e contribuir para o desenvolvimento de produtos que
              façam a diferença.
            </p>
          </section>
          <section className="pt-11">
            <ul className="space-y-6 leading-relaxed">
              <li>
                <h3 className="inline text-white">
                  <b>Hurb</b> (2022-2023) ––&ensp;
                </h3>
                <p className="inline">
                  Contribuí para o desenvolvimento de uma integração de software
                  chave na Hurb, expandindo efetivamente o catálogo de produtos
                  de atividades em mais de 200%. Esse aumento significativo nas
                  ofertas melhorou substancialmente a escolha do usuário e a
                  escalabilidade do negócio.
                </p>
              </li>
              <li>
                <h3 className="inline text-white">
                  <b>Clarific</b> (2020-2022) ––&ensp;
                </h3>
                <p className="inline">
                  Prestei consultoria em soluções de software para pequenas
                  empresas, levando ao desenvolvimento de mais de 4 produtos de
                  software. Esse papel envolveu compreender as necessidades
                  únicas dos negócios, projetar soluções sob medida e
                  implementar com sucesso essas tecnologias para impulsionar o
                  crescimento e a eficiência.
                </p>
              </li>
              <li>
                <h3 className="inline text-white">
                  <b>Partiu Ingresso</b> (2019-2020) ––&ensp;
                </h3>
                <p className="inline">
                  Desenvolvi de forma independente a plataforma PartiuIngresso,
                  um <i>marketplace</i> de ingressos dinâmico que alcançou mais
                  de R$1 milhão em vendas de ingressos e atendeu mais de 8.000
                  clientes, possibilitando um acesso adequado a shows e eventos.
                </p>
              </li>
            </ul>
          </section>
          <section className="pt-16 pb-8">
            <p className="leading-relaxed">
              Você pode dar uma olhada em alguns dos meus projetos no{' '}
              <a href="https://github.com/rodrigovcortezi">GitHub</a>, ou me
              chamar no{' '}
              <a href="https://linkedin.com/in/rodrigo-cortezi">LinkedIn</a>. Ou
              se preferir, pode me mandar um{' '}
              <a href="mailto:rodrigovcortezi@gmail.com">email</a>.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
