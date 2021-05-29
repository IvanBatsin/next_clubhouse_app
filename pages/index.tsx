import React from 'react';
import ChooseAvatarStep from '../steps/ChooseAvatarStep/ChooseAvatarStep';
import EnterNameStep from '../steps/EnterNameStep/EnterNameStep';
import EnterPhoneStep from '../steps/EnterPhoneStep/EnterPhoneStep';
import EnterSmsStep from '../steps/EnterSmsStep/EnterSmsStep';
import TwitterStep from '../steps/TwitterStep/TwitterStep';
import WelcomeStep from '../steps/WelcomeStep/WelcomeStep';
import styles from '../styles/Home.module.css';

interface stepsComponentsInterface {
  [key: number]: React.FC
}

type MainContextProps = {
  onNextStep: () => void,
  step: number
};

const MainContext = React.createContext<Partial<MainContextProps>>({});
export const useMainContext = () => React.useContext(MainContext);

const stepsComponents: stepsComponentsInterface = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterSmsStep
};


export default function Home() {
  const [step, setStep] = React.useState<number>(0);
  const Step = stepsComponents[step];

  const onNextStep = (): void => {
    setStep(prevState => prevState + 1)
  }

  return (
    <MainContext.Provider value={{onNextStep, step}}>
      <div className={styles.container}>
        <Step/>
      </div>
    </MainContext.Provider>
  )
}