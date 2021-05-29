import Button from '../../components/Button/Button';
import StepHeader from '../../components/StepHeader';
import WhiteBlock from '../../components/WhiteBlock';
import { useMainContext } from '../../pages';
import styles from './style.module.scss';

const TwitterStep: React.FC = () => {
  const { onNextStep } = useMainContext();

  return (
    <div>
      <StepHeader>
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDIzOC4xMjYgMjM4LjEyNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjM4LjEyNiAyMzguMTI2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNMjA1LjA3MSw5OC42NzhjLTEuMTk0LTIuNzI4LTMuODkxLTQuNDktNi44NjktNC40OWgtNjIuMzNsMzAuMDIzLTg0LjE2N2MxLjE5Ny0zLjM1Ny0wLjEzNC03LjA5NC0zLjE4NC04LjkzOA0KCWMtMy4wNTItMS44NDUtNi45NzktMS4yODctOS4zOTUsMS4zMzNMMzQuNDExLDEzMS4zNTVjLTIuMDE5LDIuMTg5LTIuNTUxLDUuMzY2LTEuMzU1LDguMDk0YzEuMTk0LDIuNzI4LDMuODkxLDQuNDksNi44NjksNC40OQ0KCWg0MC41MjFjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVINTcuMDQzbDgyLjM2NS04OS4zMTVsLTIxLjI0LDU5LjU0M2MtMC44MTgsMi4yOTctMC40MzIsNC44NDksMC45NzQsNi44NDINCgljMS40MDUsMS45OTMsMy43MywzLjE3OCw2LjE2OSwzLjE3OGg1NS43NzJsLTgyLjM1Myw4OS4zMDVsMjEuMjQzLTU5LjUzM2MwLjgyLTIuMjk3LDAuNDcyLTQuODQ5LTAuOTM0LTYuODQyDQoJcy0zLjY5MS0zLjE3OS02LjEzLTMuMTc5aC0wLjA3NGMtMy41MjUsMC02LjQ1NSwyLjQzMi03LjI1LDUuNzA5bC0zMy4zNDgsOTMuNDU2Yy0xLjE5OCwzLjM1NywwLjEzMyw3LjA5NCwzLjE4Myw4LjkzOA0KCWMxLjIwNSwwLjcyOSwyLjU0NywxLjA4MywzLjg3OCwxLjA4M2MyLjAzOSwwLDQuMDU1LTAuODMxLDUuNTE3LTIuNDE2bDExOC44OTktMTI4LjkzOA0KCUMyMDUuNzM0LDEwNC41ODIsMjA2LjI2NiwxMDEuNDA2LDIwNS4wNzEsOTguNjc4eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
        <h4>Do you want import info from Twitter?</h4>
      </StepHeader>
      <WhiteBlock>
        <div className={styles.content}>
          <div className={styles.avatar}>
            AD
          </div>
          <span className={styles.username}>User name</span>
          <Button onClick={onNextStep}>Import from Twitter &rarr;</Button>
          <span>Enter my info manually</span>
        </div>
      </WhiteBlock>
    </div>
  )
}

export default TwitterStep;