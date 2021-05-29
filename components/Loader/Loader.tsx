import styles from './loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <h2>Activate in progress...</h2>
    </div>
  )
}

export default Loader;