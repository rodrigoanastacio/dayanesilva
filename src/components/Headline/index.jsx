import styles from './styles.module.scss';

const Headline = (props) => {
  return (
    <div className={styles.headline}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Headline;
