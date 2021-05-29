import React, { ChangeEvent } from 'react';
import StepHeader from '../../components/StepHeader';
import WhiteBlock from '../../components/WhiteBlock';
import styles from './style.module.scss';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import axios from '../../core/axios';
import { useRouter } from 'next/dist/client/router';

const EnterSmsStep: React.FC = () => {
  const [codes, setCodes] = React.useState<string[]>(['', '', '', '']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const nextDisable = codes.some(elem => !elem);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const index = +event.target.id;
    setCodes(prevState => {
      const newCodes = [...prevState];
      newCodes[index] = event.target.value;
      return newCodes;
    });

    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLElement).focus();
    }
  }

  const showLoader = async (): Promise<void> => {
    try {
      const res = await axios.get('/users');
      router.push('/rooms');
    } catch (error) {
      console.log(error);
    }
    setIsLoading(true);
  }

  return (
    <div className={styles.block}>
      <StepHeader>
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMi4xNDEgMzAyLjE0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAyLjE0MSAzMDIuMTQxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMjQuMDY3LDI2Ljk3NWMwLjQzOCwxLjcyNiwxLjY0OCwzLjE1NSwzLjI3OSwzLjg3MWMxLjYzMSwwLjcxNiwzLjUwMSwwLjY0LDUuMDY5LTAuMjA2bDQuNjgxLTIuNTI3djU2LjQNCgkJYzAsMy4xOTIsMi41ODgsNS43OCw1Ljc4LDUuNzhoMTEuMzU2YzMuMTkyLDAsNS43OC0yLjU4OCw1Ljc4LTUuNzhWNy4wNjdjMC0zLjE5Mi0yLjU4OC01Ljc4LTUuNzgtNS43OGgtOC42NjENCgkJYy0xLjYwNSwwLTMuMTg2LDAuMzk2LTQuNjAxLDEuMTU0bC0xNi4zNzYsOC43NjRjLTIuMzQyLDEuMjU0LTMuNTI4LDMuOTQzLTIuODc1LDYuNTE4TDI0LjA2NywyNi45NzV6Ii8+DQoJPHBhdGggZD0iTTE2MS4wOCw4NC41MTNWNzQuNTZjMC0zLjE5Mi0yLjU4OC01Ljc4LTUuNzgtNS43OGgtMTguODVjMTMuMjI5LTEzLjE5OCwyMi43NTktMjUuMTg1LDIyLjc1OS00MC4xODYNCgkJQzE1OS4yMDksMTQuODIzLDE0OS44OTQsMCwxMjkuNDQ0LDBjLTkuNTEzLDAtMTguNjQ0LDMuMjg1LTI1LjcwOSw5LjI1MWwtMC40MDgsMC4zNDRjLTEuOTczLDEuNjY3LTIuNjAxLDQuNDQxLTEuNTM4LDYuNzk1DQoJCWwzLjg3OCw4LjU4NmMwLjc0MywxLjY0NiwyLjIxMywyLjg0OSwzLjk3MywzLjI1NGMxLjc2LDAuNDA1LDMuNjA3LTAuMDM3LDQuOTk1LTEuMTkybDAuNzE0LTAuNTk0DQoJCWMyLjIxMS0xLjg0Miw2LjcwNy00LjkzMSwxMS45OS00LjkzMWM2LjExMiwwLDguNjA0LDIuNDI1LDguNjA0LDguMzAyYy0wLjA5LDguNzk0LTcuODI0LDE3LjU2MS0yNi4zNDEsMzUuMTg0bC04LjI4NSw4LjA0NQ0KCQljLTEuMTIxLDEuMDg4LTEuNzUzLDIuNTg0LTEuNzUzLDQuMTQ2djcuMzIzYzAsMy4xOTIsMi41ODgsNS43OCw1Ljc4LDUuNzhIMTU1LjNDMTU4LjQ5Miw5MC4yOTMsMTYxLjA4LDg3LjcwNSwxNjEuMDgsODQuNTEzeiIvPg0KCTxwYXRoIGQ9Ik0xODYuNDg1LDg1LjA2NWwwLjQ2MiwwLjMwM2M0LjM2NiwyLjg2NiwxMy4wOTUsNi4yMTIsMjMuMzI4LDYuMjEyYzIzLjUwNCwwLDM0LjIxLTE1LjE4NywzNC4yMS0yOS4yOTYNCgkJYzAtOC4zNjYtMy43ODQtMTUuNjk5LTEwLjA5Mi0yMC41MjdjNC42MDktNC41NTgsNy4xNjgtMTAuNDk0LDcuMTY4LTE3LjEzOUMyNDEuNTYsMTIuNzYsMjMyLjcyMiwwLDIxMy4zMTcsMA0KCQljLTEwLjM4LDAtMTkuMjcsMy44MzEtMjMuNzMsNy4xMTFsLTAuNDI0LDAuMzExYy0yLjA2MSwxLjUxNS0yLjg4LDQuMjA1LTIuMDE1LDYuNjEybDMuMTg1LDguODYyDQoJCWMwLjYxMywxLjcwNCwxLjk4OCwzLjAyMiwzLjcxNiwzLjU2MmMxLjcyOCwwLjUzOSwzLjYxLDAuMjM4LDUuMDgzLTAuODE1bDAuNzYtMC41NDNjMi42NjItMS45MDMsNy4yMy0zLjgyMywxMS40MzQtMy44MjMNCgkJYzYuODQ5LDAsNi44NDksMy40ODgsNi44NDksNC45NzhjMCw1LjIwOC03Ljc1Nyw2LjM4LTEwLjQ3NSw2LjM4aC02LjQzOGMtMy4xOTIsMC01Ljc4LDIuNTg4LTUuNzgsNS43OHY5LjEzMw0KCQljMCwzLjE5MiwyLjU4OCw1Ljc4LDUuNzgsNS43OGg2LjQzOGMzLjA2NiwwLDEzLjA3NiwwLjYzMywxMy4xNjYsOC44MzljMC4wMTgsMC45NzgtMC4xNDQsMy40NTktMi4wMzgsNS4zODgNCgkJYy0yLjIyNiwyLjI2OC01Ljk0NCwyLjc0NC04LjY3MSwyLjc0NGMtNS40NjgsMC0xMC45NzgtMi4yNTYtMTMuMzQ3LTMuNzczbC0wLjc1MS0wLjQ4MWMtMS40ODYtMC45NTEtMy4zMjYtMS4xNzEtNC45OTQtMC41OTcNCgkJYy0xLjY2OSwwLjU3NC0yLjk4NCwxLjg3OC0zLjU3MSwzLjU0MmwtMy4yODgsOS4zMTdDMTgzLjMyMSw4MC44MTcsMTg0LjI2MSw4My42MDUsMTg2LjQ4NSw4NS4wNjV6Ii8+DQoJPHBhdGggZD0iTTc0LjExOCwxODguOTJoLTQuODY1di00MS40NzZjMC0zLjE5Mi0yLjU4OC01Ljc4LTUuNzgtNS43OEg1MS4yODZjLTEuODg4LDAtMy42NTYsMC45MjItNC43MzgsMi40NjlsLTM0LjI2MSw0OS4wMjcNCgkJYy0wLjY3OCwwLjk3MS0xLjA0MiwyLjEyNi0xLjA0MiwzLjMxMXY3LjcxNGMwLDMuMTkyLDIuNTg4LDUuNzgsNS43OCw1Ljc4aDI5LjU0NnYxNC45MjRjMCwzLjE5MiwyLjU4OCw1Ljc4LDUuNzgsNS43OGgxMS4xMjINCgkJYzMuMTkyLDAsNS43OC0yLjU4OCw1Ljc4LTUuNzh2LTE0LjkyNGg0Ljg2NWMzLjE5MiwwLDUuNzgtMi41ODgsNS43OC01Ljc4VjE5NC43Qzc5Ljg5OCwxOTEuNTA4LDc3LjMxLDE4OC45Miw3NC4xMTgsMTg4Ljkyeg0KCQkgTTQ2LjU3MSwxODguOTJoLTUuOTM5bDUuOTM5LTguMjU1VjE4OC45MnoiLz4NCgk8cGF0aCBkPSJNMjg0LjMwNSwyNjMuNzNsLTQ0LjEyOC00NC4xMjdjLTAuNDY5LTAuNDY5LTAuOTYxLTAuOTAxLTEuNDYtMS4zMmMxMi42MzgtMjUuODM4LDguMjUzLTU3Ljk2OC0xMy4xOTQtNzkuNDE3DQoJCWMtMjYuOTkyLTI2Ljk5Mi03MC45MS0yNi45OS05Ny45MDIsMGMtMjYuOTksMjYuOTkxLTI2Ljk5LDcwLjkxLDAsOTcuOTAxYzEzLjQ5NiwxMy40OTYsMzEuMjI0LDIwLjI0NCw0OC45NTEsMjAuMjQ0DQoJCWMxMC40NDYsMCwyMC44ODUtMi4zNjMsMzAuNDY2LTcuMDQ5YzAuNDE5LDAuNDk5LDAuODUsMC45OTEsMS4zMTksMS40Nmw0NC4xMjgsNDQuMTI3YzQuMzk0LDQuMzkzLDEwLjE1Miw2LjU5LDE1LjkxLDYuNTkNCgkJYzUuNzU4LDAsMTEuNTE3LTIuMTk3LDE1LjkxLTYuNTlDMjkzLjA5MiwyODYuNzY0LDI5My4wOTEsMjcyLjUxNywyODQuMzA1LDI2My43M3ogTTE0OC44MzMsMjE1LjU1Ng0KCQljLTE1LjI5NC0xNS4yOTUtMTUuMjk0LTQwLjE4MSwwLTU1LjQ3NmM3LjY0OC03LjY0NiwxNy42OTItMTEuNDcxLDI3LjczOC0xMS40NzFjMTAuMDQ2LDAsMjAuMDkxLDMuODI0LDI3LjczOCwxMS40NzENCgkJYzE1LjI5NCwxNS4yOTUsMTUuMjk0LDQwLjE4MSwwLDU1LjQ3NkMxODkuMDE1LDIzMC44NTEsMTY0LjEyOCwyMzAuODUxLDE0OC44MzMsMjE1LjU1NnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
        <h2>Enter your activate code</h2>
      </StepHeader>
      <WhiteBlock>
        {isLoading ? <Loader/> : 
          <>
            <div className={styles.code}>
              {
                codes.map((item, index) => {
                  return <input type="tel" key={index} placeholder="X" maxLength={1} onChange={changeHandler} id={`${index}`} value={codes[index] || ''} />
                })
              }
            </div>
            <div className={styles.info}>
              <Button onClick={showLoader} disabled={nextDisable}>Activate &rarr;</Button>
              <span>By entering your number, you're are agreeing to out Terms of Service and Privacy Policy. Thanks :)</span>
            </div>         
          </>
        }
      </WhiteBlock>
    </div>
  )
}

export default EnterSmsStep;