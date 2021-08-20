import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Headline from '../components/Headline';
import Banner from '../components/Banner';

import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>Dayane Silva | Marketing de Conteúdo</title>
        <meta name="description" content="Dayane Silva" />
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
                  title="Marketing descomplicado e sem fórmulas prontas"
                  subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  perspiciatis assumenda minima ducimus iure fuga, aliquam tempora autem
                  vero quaerat inventore dolorum ullam eos, dolor reiciendis modi
                  voluptatibus dolore distinctio?"
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
            title="A Imersão Asas está chegando"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti ut perspiciatis, esse recusandae odio doloribus ratione adipisci quibusdam consectetur magnam laboriosam aspernatur laborum maxime sunt dicta suscipit molestiae saepe."
            cta="Saiba Mais"
            link="https://imersao.dayanesilva.com.br/"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
