import Image from 'next/image';

import styles from './styles.module.scss';

const Banner = (props) => {
  return (
    <div className={styles.banner}>
      <a href={props.link ? props.link : null}>
        <Image
          src="/images/banner-imersao-asas-v2.jpg"
          layout="fill"
          unoptimized={true}
          className={styles.customImg}
          style={{ zIndex: '-1' }}
          alt="Imersão Asas"
        />
        <div className={styles.banner__wrapper}>
          <div className={styles.banner__text}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
          </div>
          <div className={styles.banner__link}>{props.cta}</div>
        </div>
      </a>
    </div>
  );
};

export default Banner;
