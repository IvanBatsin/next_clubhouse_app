import React from 'react';
import WhiteBlock from '../../components/WhiteBlock';
import styles from './enterNameStep.module.scss';
import Button from '../../components/Button/Button';
import StepHeader from '../../components/StepHeader';
import { useMainContext } from '../../pages';

const EnterNameStep: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const { onNextStep } = useMainContext();

  const nextDisabled = !name.length;

  return (
    <div>
      <StepHeader classes={styles.header}>
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZEOTNCOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojM0U0MzQ3OyIgZD0iTTI1Niw0MjAuNTQ0Yy03NC44NjQsMC0xNDAuMDk2LTUwLjcwNC0xNTguNjI0LTEyMy4yOGMtMS40NTYtNS43MTIsMS45ODQtMTEuNTIsNy42OTYtMTIuOTc2DQoJYzUuNjgtMS40ODgsMTEuNTA0LDEuOTg0LDEyLjk2LDcuNjk2YzE2LjEyOCw2My4xMzYsNzIuODQ4LDEwNy4yMzIsMTM3Ljk1MiwxMDcuMjMyczEyMS44NC00NC4wOTYsMTM3Ljk1Mi0xMDcuMjMyDQoJYzEuNDQtNS43MTIsNy4yNDgtOS4xODQsMTIuOTc2LTcuNjk2YzUuNzEyLDEuNDU2LDkuMTUyLDcuMjY0LDcuNjk2LDEyLjk3NkMzOTYuMDk2LDM2OS44NCwzMzAuODY0LDQyMC41NDQsMjU2LDQyMC41NDR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjRDNTM0OyIgZD0iTTUxMiwyNTZjMCwxNDEuNDQtMTE0LjY0LDI1Ni0yNTYsMjU2Yy04MC40OCwwLTE1Mi4zMi0zNy4xMi0xOTkuMjgtOTUuMjgNCgljNDMuOTIsMzUuNTIsOTkuODQsNTYuNzIsMTYwLjcyLDU2LjcyYzE0MS4zNiwwLDI1Ni0xMTQuNTYsMjU2LTI1NmMwLTYwLjg4LTIxLjItMTE2LjgtNTYuNzItMTYwLjcyDQoJQzQ3NC44LDEwMy42OCw1MTIsMTc1LjUyLDUxMiwyNTZ6Ii8+DQo8ZWxsaXBzZSBzdHlsZT0iZmlsbDojM0U0MzQ3OyIgY3g9IjE3My4zMjgiIGN5PSIyMjAuMzA0IiByeD0iMzkuMjMyIiByeT0iNDYuNjI0Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNUE1RjYzOyIgZD0iTTE5MS4wMjQsMjEwLjI3MmMtMy4wNTYsMi40LTguMDgsMS4yMTYtMTEuMjk2LTIuNjg4cy0zLjM3Ni05LjEzNi0wLjMyLTExLjUzNg0KCWMzLjA0LTIuNTEyLDguMDgtMS4zMjgsMTEuMjgsMi41NzZDMTkzLjkyLDIwMi42NCwxOTMuOTUyLDIwNy43NzYsMTkxLjAyNCwyMTAuMjcyeiIvPg0KPGVsbGlwc2Ugc3R5bGU9ImZpbGw6IzNFNDM0NzsiIGN4PSIzMzguNzIiIGN5PSIyMjAuMzA0IiByeD0iMzkuMjMyIiByeT0iNDYuNjI0Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNUE1RjYzOyIgZD0iTTM1Ni4zODQsMjEwLjI3MmMtMy4wNTYsMi40LTguMDgsMS4yMTYtMTEuMjk2LTIuNjg4cy0zLjM3Ni05LjEzNi0wLjMyLTExLjUzNg0KCWMzLjA0LTIuNTEyLDguMDY0LTEuMzI4LDExLjI4LDIuNTc2QzM1OS4yOCwyMDIuNjQsMzU5LjMxMiwyMDcuNzc2LDM1Ni4zODQsMjEwLjI3MnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
        <h4>Whats your fullname?</h4>
        <span>People use real names on Clubhouse :) Thanks!</span>
      </StepHeader>
      <WhiteBlock>
        <div className={styles.input_name}>
          <input value={name} type="text" placeholder="Name" onChange={event => setName(event.target.value)}/>
          <Button disabled={nextDisabled} onClick={onNextStep}>Next &rarr;</Button>
        </div>
      </WhiteBlock>
    </div>
  )
}

export default EnterNameStep;