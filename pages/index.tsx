import React from 'react';
import ChooseAvatarStep from '../steps/ChooseAvatarStep/ChooseAvatarStep';
import EnterNameStep from '../steps/EnterNameStep/EnterNameStep';
import EnterPhoneStep from '../steps/EnterPhoneStep/EnterPhoneStep';
import EnterSmsStep from '../steps/EnterSmsStep/EnterSmsStep';
import GitHubStep from '../steps/GitHubStep/GitHubStep';
import WelcomeStep from '../steps/WelcomeStep/WelcomeStep';
import EnterEmailStep from '../steps/EnterEmailStep/EnterEmailStep';
import styles from '../styles/Home.module.css';
import { UserProps } from '../server/models/interfaces';

interface stepsComponentsInterface {
  [key: number]: React.FC
}

export interface UserData extends UserProps {
  token: string
}

type MainContextProps = {
  onNextStep: () => void,
  step: number,
  setUserData: React.Dispatch<React.SetStateAction<UserData>>,
  userData: UserData,
  setFieldValue: (field: keyof UserData, value: string) => void
};

const MainContext = React.createContext<Partial<MainContextProps>>({});
export const useMainContext = () => React.useContext(MainContext);

const stepsComponents: stepsComponentsInterface = {
  0: WelcomeStep,
  1: GitHubStep,
  2: EnterNameStep,
  3: EnterEmailStep,
  4: ChooseAvatarStep,
  5: EnterPhoneStep,
  6: EnterSmsStep
};


export default function Home() {
  const [step, setStep] = React.useState<number>(3);
  const [userData, setUserData] = React.useState<UserData>({
    avatarUrl: '',
    fullName: '',
    isActive: false,
    phone: '',
    userName: '',
    token: '',
    email: ''
  });
  const Step = stepsComponents[step];

  const onNextStep = (): void => {
    setStep(prevState => prevState + 1)
  }

  const setFieldValue = (field: keyof UserData, value: string): void => {
    setUserData(prevState => ({
      ...prevState,
      [field]: value
    }));
  }

  return (
    <MainContext.Provider value={{onNextStep, step, userData, setUserData, setFieldValue}}>
      <div className={styles.container}>
        <Step/>
      </div>
    </MainContext.Provider>
  )
}