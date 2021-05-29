import Button from "../../components/Button/Button";
import WhiteBlock from "../../components/WhiteBlock";
import Head from 'next/head';
import styles from './welcomeStep.module.scss';
import { useMainContext } from "../../pages";

const WelcomeStep: React.FC = () => {
  const { onNextStep } = useMainContext();

  return (
    <>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <WhiteBlock>
        <h2 className={styles.title}><img src="https://www.joinclubhouse.com/static/img/icon_wave.2872aeea710c.png" alt="Celebration"/>Welcome to Clubhouse!</h2>
        <p className={styles.text}>We're working hard to get Clubhouse ready for everyone! While we wrap up the finishing youches, we're adding people gradually to make shure nothing breaks :)</p>
        <div className={styles.signIn}>
          <Button onClick={onNextStep}>Get your username &rarr;</Button>
          <span>Have an ivite text? Sing In</span>
        </div>
      </WhiteBlock>
    </>
  )
}

export default WelcomeStep;