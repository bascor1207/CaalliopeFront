import { Link } from 'react-router-dom';

import styles from './PageNotFound.module.scss';

const PageNotFound = () => (
  <div className={styles.container}>
    <h2>The requested page doesn't exist.</h2>
    <div>Please click <Link to="/">here</Link> to return to home page.</div>
  </div>
);

export default PageNotFound;
