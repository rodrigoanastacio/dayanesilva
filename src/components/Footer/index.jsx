import Styles from './styles.module.scss';

const Footer = (props) => {
  return <footer className={Styles.footer}>{props.children}</footer>;
};

export default Footer;
