import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Headline from '../components/Headline';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>Dayane Silva | Marketing de Conteúdo</title>
        <meta
          name="description"
          content="Marketing e Estratégias Digitais voltados para negócios no Instagram!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.text}>
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Headline
                  title="Me conta: Quantas informações sobre Marketing Digital e conteúdo você já viu na internet?"
                  subtitle="Muita gente dizendo que existe uma formula específica e você não sabe para onde seguir. 
                    Pois eu te afirmo, criar conteúdo que gera resultados, precisa de estratégia, objetivo e clareza!"
                ></Headline>
              </motion.div>
            </div>

            <div className={styles.image}>
              <motion.div
                src="/images/dayane-silva-hero.png"
                alt="Imagem que ilustra a consultora Dayane Silva"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img className="shape" src="./images/borboleta.png" alt="" />
                <img className="shape2" src="./images/borboleta2.png" alt="" />
                <img className="shape3" src="./images/borboleta3.png" alt="" />

                <Image
                  className={styles.perfil}
                  src="/images/dayane-silva-hero.png"
                  width={426}
                  height={376}
                  alt="Imagem de perfil"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <Banner
            bgImage="banner-imersao-asas-v2.jpg"
            title="Análise de Perfil"
            text="O serviço de análise de perfil é para você que já possui uma marca no Instagram, mas precisa de uma avaliação e um olhar mais específico e de forma profissional sobre o seu negócio. Com a análise voce vai descobrir seus pontos fracos e fortes e dessa forma melhorar seus resultados."
            cta="Saiba Mais"
            link="https://forms.gle/JTTeTfunso3nnyDm7"
          />
          <Banner
            bgImage="banner-consultoria.jpg"
            title="Consultoria de Marketing para Negócios Digitais"
            text="A consultoria é ideal para você que já tem um perfil de negócios, e tem dúvidas de quais estratégias usar para melhorar seus resultados, quais objetivos precisa organizar para crescer e ter um direcionamento totalmente focado para a sua marca."
            cta="Saiba Mais"
            link="https://dayanesilva.com.br/consultoria-de-marketing-para-empreendedoras?utm_source=DS_Site&utm_medium=banner&utm_campaign=consultoria"
          />
        </div>
      </section>

      <Footer>
        <div className="container">
          <p>&copy; 2021 Dayane Silva | Todos os direitos reservados</p>
          <p>
            Feito com <img src="/images/coracao.svg" alt="Feito com amor" /> por
            Rodrigo Anastacio
          </p>
        </div>
      </Footer>
    </>
  );
};

export default Home;
