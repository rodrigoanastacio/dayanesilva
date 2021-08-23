import Image from 'next/image';

import styles from './styles.module.scss';

const Banner = (props) => {
  return (
    <div className={styles.banner}>
      <a href={props.link ? props.link : null}>
        <img src={'/images/' + props.bgImage} alt={props.title} />
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
