import { FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

import styles from './styles.module.scss';

const FollowMe = () => {
  return (
    <ul className={styles.followMe}>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/efeitoborboleta.mkt/"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCU0Npl6VAg3iauFw5lM3kiw/videos"
        >
          <FaYoutube />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://br.pinterest.com/dayanemktdeconteudo/"
        >
          <FaPinterest />
        </a>
      </li>
    </ul>
  );
};

export default FollowMe;
