import FollowMe from '../FollowMe';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Dayane Silva</h1>
        <FollowMe />
      </div>
    </header>
  );
};

export default Header;
