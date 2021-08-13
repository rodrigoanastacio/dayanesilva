import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Headline from '../components/Headline';

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
            <Headline
              title="Marketing descomplicado e sem fórmulas prontas"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              perspiciatis assumenda minima ducimus iure fuga, aliquam tempora autem
              vero quaerat inventore dolorum ullam eos, dolor reiciendis modi
              voluptatibus dolore distinctio?"
            />

            <div className={styles.image}>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
