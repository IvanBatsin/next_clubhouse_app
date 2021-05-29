import React from 'react';
import Button from '../../components/Button/Button';
import WhiteBlock from '../../components/WhiteBlock';
import styles from './chooseAvatarStep.module.scss';
import StepHeader from '../../components/StepHeader';
import { useMainContext } from '../../pages';

const ChooseAvatarStep: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = React.useState<string>('');
  const { onNextStep } = useMainContext();

  const handleChange = (event: Event): void => {
    const file = (event.target as HTMLInputElement).files![0];
    const imageUrl = URL.createObjectURL(file);
    console.log(imageUrl);
    setAvatarUrl(imageUrl);
  }

  const handleInputClick = () => {
    inputRef.current?.click();
  }

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', handleChange);
    }

    return () => {
      inputRef.current?.removeEventListener('change', handleChange);
    }
  }, []);
  return (
    <div>
      <StepHeader classes={styles.header}>
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDgwLjE4NyA0ODAuMTg3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODAuMTg3IDQ4MC4xODc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNERDFDNEI7IiBkPSJNMjQzLjQyMSwxOTkuNDhjLTYyLjAwOC02Mi0xMzAtOTQuNTM2LTE1MS44NzItNzIuNjcyYy0yLjQsMi41MTQtNC4xNjYsNS41NjMtNS4xNTIsOC44OTYNCglsLTAuMzUyLTAuMzUybC0yMC44ODgsODUuNmwtMjAuOCw4NS4zNDRMMTkuNzAxLDQwNy4zNTJsLTE1LjYwOCw2NGw5Mi40MDgtMzQuOTY4bDExNy41MzYtNDQuNDcybDkzLjc2OC0zNS40OGwtMC4xMTItMC4xMTINCgljMy4xMzktMS4wMDEsNi4wMTEtMi42OTksOC40LTQuOTY4QzMzNy45NjUsMzI5LjQ4LDMwNS40MjksMjYxLjQ4OCwyNDMuNDIxLDE5OS40OHoiLz4NCjxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcwNzEgLTAuNzA3MSAwLjcwNzEgLTAuNzA3MSAxNzguOTE0NiA1NTIuMjA3NSkiIHN0eWxlPSJmaWxsOiNEMUUzRUU7IiBjeD0iMjAzLjgyMyIgY3k9IjIzOS4wNDkiIHJ4PSIxNTguNzc3IiByeT0iNTYiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNCMjFENDg7IiBkPSJNMjk5LjI5MywzNTkuMmMtMTEuMTk2LDAuMTk2LTIyLjMwNC0yLjAwOC0zMi41NzYtNi40NjRsLTc2LjY0LDI5TDcyLjUwMSw0MjYuMTY4TDkuNDUzLDQ1MC4wMjQNCglMNC4wOTMsNDcybDkyLjQwOC0zNC45NjhsMTE3LjUzNi00NC40NzJMMzAwLjA5MywzNjBMMjk5LjI5MywzNTkuMnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkJGNDE7IiBkPSJNMzk2LjA5MywyOTZjLTAuOTU4LTAuMDAzLTEuOTA4LTAuMTc0LTIuODA4LTAuNTA0Yy00MC42MTMtMTUuMjE1LTg0LjUxNC0xOS40ODEtMTI3LjI5Ni0xMi4zNjgNCgkJbC0yOC41NzYsNC43NmMtNC4zNzQsMC42MjQtOC40MjYtMi40MTYtOS4wNS02Ljc5Yy0wLjYwMy00LjIyNiwyLjIxOC04LjE4MSw2LjQxLTguOTg2bDI4LjU4NC00LjgNCgkJYzQ1LjU1NC03LjU2OSw5Mi4yOTctMy4wMywxMzUuNTQ0LDEzLjE2YzQuMTU4LDEuNDk0LDYuMzE3LDYuMDc2LDQuODIzLDEwLjIzNEM0MDIuNTcsMjkzLjkxOCwzOTkuNTA2LDI5Ni4wNDQsMzk2LjA5MywyOTZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQkY0MTsiIGQ9Ik0yNTIuMDkzLDI0OGMtNC40MTgtMC4wMjYtNy45NzktMy42MjktNy45NTMtOC4wNDdjMC4wMTgtMy4wNSwxLjc2OC01LjgyNCw0LjUxMy03LjE1M2wxNjgtODANCgkJYzMuOTktMS45LDguNzY0LTAuMjA2LDEwLjY2NCwzLjc4NHMwLjIwNiw4Ljc2NC0zLjc4NCwxMC42NjRsMCwwbC0xNjgsODBDMjU0LjQ1NywyNDcuNzUxLDI1My4yODIsMjQ4LjAwOCwyNTIuMDkzLDI0OHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZCRjQxOyIgZD0iTTE1OC41NDEsMjMyYy0xLjA1NSwwLjAwMi0yLjEtMC4yMDctMy4wNzItMC42MTZjLTQuMDc4LTEuNzAxLTYuMDA1LTYuMzg1LTQuMzA0LTEwLjQ2Mw0KCQljMCwwLDAtMC4wMDEsMC0wLjAwMWwxMS42MzItMjcuOTEyYzE3Ljg5Ny00Mi43NjUsMjIuMDctOTAuMDMzLDExLjk0NC0xMzUuMjcyYy0xLjAzOC00LjI5NSwxLjYwMy04LjYxNyw1Ljg5Ny05LjY1NQ0KCQljNC4yOTUtMS4wMzgsOC42MTcsMS42MDMsOS42NTUsNS44OTdjMC4wMjMsMC4wOTUsMC4wNDQsMC4xOSwwLjA2NCwwLjI4NmMxMC44NDgsNDguNDYxLDYuMzc1LDk5LjA5NS0xMi44LDE0NC45MDRsLTExLjY0LDI3LjkxMg0KCQlDMTY0LjY3NSwyMzAuMDU3LDE2MS43NjcsMjMxLjk5NywxNTguNTQxLDIzMkwxNTguNTQxLDIzMnoiLz4NCjwvZz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0Q1NTU3RTsiIGN4PSI0MzYuMDkzIiBjeT0iMzEyIiByPSIxNiIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojREQ5NUMxOyIgY3g9IjI0NC4wOTMiIGN5PSI4OCIgcj0iMTYiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM3RkNDQ0I7IiBkPSJNMTcyLjA5MywzMmMtOC44MzcsMC0xNi03LjE2My0xNi0xNnM3LjE2My0xNiwxNi0xNnMxNiw3LjE2MywxNiwxNlMxODAuOTMsMzIsMTcyLjA5MywzMnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMyMjc2QkI7IiBkPSJNMzk2LjA5Myw2NGMtNC40MTgsMC04LTMuNTgyLTgtOHYtOGMwLTQuNDE4LDMuNTgyLTgsOC04czgsMy41ODIsOCw4djgNCgkJQzQwNC4wOTMsNjAuNDE4LDQwMC41MTIsNjQsMzk2LjA5Myw2NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjI3NkJCOyIgZD0iTTM5Ni4wOTMsMjRjLTQuNDE4LDAtOC0zLjU4Mi04LThWOGMwLTQuNDE4LDMuNTgyLTgsOC04czgsMy41ODIsOCw4djgNCgkJQzQwNC4wOTMsMjAuNDE4LDQwMC41MTIsMjQsMzk2LjA5MywyNHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjI3NkJCOyIgZD0iTTQyMC4wOTMsNDBoLThjLTQuNDE4LDAtOC0zLjU4Mi04LThzMy41ODItOCw4LThoOGM0LjQxOCwwLDgsMy41ODIsOCw4UzQyNC41MTIsNDAsNDIwLjA5Myw0MHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjI3NkJCOyIgZD0iTTM4MC4wOTMsNDBoLThjLTQuNDE4LDAtOC0zLjU4Mi04LThzMy41ODItOCw4LThoOGM0LjQxOCwwLDgsMy41ODIsOCw4UzM4NC41MTIsNDAsMzgwLjA5Myw0MHoiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNjcuNTk3LDIzMmMtMC44OTYtMy40MjQtMS42OTYtNi44OC0yLjQ0LTEwLjRsLTIwLjgsODUuMzQ0bDEuNiwxOS41MTINCgljMy40ODcsNDEuNTk5LDIxLjM1Nyw4MC42ODMsNTAuNTM2LDExMC41MzZsMTE3LjU0NC00NC40MzJjLTAuNjQtMC4yLTEuMzA0LTAuMzQ0LTEuOTQ0LTAuNTYNCglDMTQwLjgxOCwzNjUuMjc1LDg2Ljk0NSwzMDUuNjIxLDY3LjU5NywyMzJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjZGNkU3OyIgZD0iTTIxNC4wMzcsMzkyLjU2Yy0wLjY0LTAuMi0xLjMwNC0wLjM0NC0xLjk0NC0wLjU2Yy03LjctMi45MTUtMTUuMjQyLTYuMjM0LTIyLjU5Mi05Ljk0NA0KCUw4My42MjksNDIyLjExMmM0LjAxNCw1LjIwNiw4LjMxMSwxMC4xODcsMTIuODcyLDE0LjkyTDIxNC4wMzcsMzkyLjU2eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0M5REE1MzsiIGQ9Ik0zNDAuMDkzLDk1LjgzMlYxMzZoLTQwLjE2OFY5NS44MzJIMzQwLjA5M3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkJGNDE7IiBkPSJNMTk2LjA5MywyNDBjLTQuNDE4LTAuMDAxLTcuOTk5LTMuNTg0LTcuOTk4LTguMDAyYzAuMDAxLTIuMjY2LDAuOTYyLTQuNDI1LDIuNjQ2LTUuOTQybDgwLTcyDQoJYzMuMzQxLTIuODkxLDguMzkzLTIuNTI2LDExLjI4NCwwLjgxNWMyLjgxMSwzLjI0OCwyLjU1NSw4LjEzNi0wLjU4LDExLjA3M2wtODAsNzJDMTk5Ljk3NywyMzkuMjY3LDE5OC4wNywyMzkuOTk5LDE5Ni4wOTMsMjQwDQoJTDE5Ni4wOTMsMjQweiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGREI0MzsiIGQ9Ik00MjguMDkzLDIwOGMtNC40MTgsMC04LTMuNTgyLTgtOHYtOGMwLTQuNDE4LDMuNTgyLTgsOC04czgsMy41ODIsOCw4djgNCgkJQzQzNi4wOTMsMjA0LjQxOCw0MzIuNTEyLDIwOCw0MjguMDkzLDIwOHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEQjQzOyIgZD0iTTQ1Ni4zODEsMTk2LjI4Yy0yLjEyMywwLjAwNi00LjE2LTAuODM4LTUuNjU2LTIuMzQ0bC01LjY1Ni01LjY1Ng0KCQljLTMuMDY5LTMuMTc4LTIuOTgyLTguMjQzLDAuMTk2LTExLjMxMmMzLjEtMi45OTQsOC4wMTUtMi45OTQsMTEuMTE2LDBsNS42NTYsNS42NTZjMy4xMjQsMy4xMjUsMy4xMjMsOC4xOS0wLjAwMiwxMS4zMTQNCgkJQzQ2MC41MzYsMTk1LjQzNyw0NTguNTAyLDE5Ni4yOCw0NTYuMzgxLDE5Ni4yOEw0NTYuMzgxLDE5Ni4yOHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEQjQzOyIgZD0iTTQ2OC4wOTMsMTY4aC04Yy00LjQxOCwwLTgtMy41ODItOC04czMuNTgyLTgsOC04aDhjNC40MTgsMCw4LDMuNTgyLDgsOFM0NzIuNTEyLDE2OCw0NjguMDkzLDE2OHoiDQoJCS8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGREI0MzsiIGQ9Ik00NTAuNzI1LDE0NS4zNzZjLTQuNDE4LTAuMDAxLTcuOTk5LTMuNTgzLTcuOTk4LTguMDAyYzAtMi4xMjEsMC44NDMtNC4xNTUsMi4zNDItNS42NTQNCgkJbDUuNjU2LTUuNjU2YzMuMTc4LTMuMDcsOC4yNDItMi45ODIsMTEuMzEyLDAuMTk2YzIuOTk0LDMuMSwyLjk5NCw4LjAxNSwwLDExLjExNmwtNS42NTYsNS42NTYNCgkJQzQ1NC44ODEsMTQ0LjUzMiw0NTIuODQ3LDE0NS4zNzYsNDUwLjcyNSwxNDUuMzc2TDQ1MC43MjUsMTQ1LjM3NnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEQjQzOyIgZD0iTTQyOC4wOTMsMTM2Yy00LjQxOCwwLTgtMy41ODItOC04di04YzAtNC40MTgsMy41ODItOCw4LThzOCwzLjU4Miw4LDh2OA0KCQlDNDM2LjA5MywxMzIuNDE4LDQzMi41MTIsMTM2LDQyOC4wOTMsMTM2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkRCNDM7IiBkPSJNNDA1LjQ2MSwxNDUuMzc2Yy0yLjEyMiwwLTQuMTU2LTAuODQ0LTUuNjU2LTIuMzQ0bC01LjY1Ni01LjY1Ng0KCQljLTMuMDY5LTMuMTc4LTIuOTgyLTguMjQzLDAuMTk2LTExLjMxMmMzLjEtMi45OTQsOC4wMTUtMi45OTQsMTEuMTE2LDBsNS42NTYsNS42NTZjMy4xMjQsMy4xMjUsMy4xMjMsOC4xOS0wLjAwMiwxMS4zMTQNCgkJQzQwOS42MTYsMTQ0LjUzMyw0MDcuNTgyLDE0NS4zNzYsNDA1LjQ2MSwxNDUuMzc2TDQwNS40NjEsMTQ1LjM3NnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEQjQzOyIgZD0iTTQ0LjA5Myw4bDEyLjM2LDI1LjA0OGwyNy42NCw0LjAxNmwtMjAsMTkuNDk2bDQuNzIsMjcuNTI4bC0yNC43Mi0xM2wtMjQuNzIsMTNsNC43Mi0yNy41MjgNCgkJbC0yMC0xOS40OTZsMjcuNjQtNC4wMTZMNDQuMDkzLDh6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojMkJCM0NFOyIgZD0iTTQ3My41NjUsNDMzLjMyOGMtMy44MDUtMTMuNDg1LTEyLjU2Ni0yNS4wMzItMjQuNTI4LTMyLjMyOGwtMy4yOTYtNC45NDQNCgljLTE4LjQ4MS0yNy42MzctNDcuNTQyLTQ2LjQyOS04MC4zMjgtNTEuOTQ0Yy00LjM3NC0wLjYyNC04LjQyNiwyLjQxNi05LjA1LDYuNzljLTAuNjAzLDQuMjI2LDIuMjE4LDguMTgxLDYuNDEsOC45ODYNCgljMjMuNjQ4LDQuMDE0LDQ1LjE5OSwxNi4wMjgsNjEuMDQ4LDM0LjAzMmMtMTMuMzI1LDIuMzk3LTI0Ljk3OSwxMC40LTMyLDIxLjk3NmMtOC42MTYsMTUuNDMxLTMuMDkxLDM0LjkyNCwxMi4zNCw0My41NA0KCXMzNC45MjQsMy4wOTEsNDMuNTQtMTIuMzRjMy4yOTEtNi4zNTMsNS4wNjgtMTMuMzgyLDUuMTkyLTIwLjUzNmM4LjUxMiwxMi4zNjMsOS4xOTMsMjguNTA4LDEuNzUyLDQxLjU0NA0KCWMtMi4yNTQsMy44LTEuMDAxLDguNzA4LDIuNzk5LDEwLjk2MmMzLjgsMi4yNTQsOC43MDgsMS4wMDEsMTAuOTYyLTIuNzk5YzAuMDcyLTAuMTIyLDAuMTQxLTAuMjQ1LDAuMjA3LTAuMzcxDQoJQzQ3NS44ODEsNDYyLjkzNyw0NzcuNjY0LDQ0Ny42MDksNDczLjU2NSw0MzMuMzI4TDQ3My41NjUsNDMzLjMyOHogTTQzMy43NDksNDM5LjI4OGMtNC4yNyw3LjczNy0xNC4wMDMsMTAuNTQ3LTIxLjczOSw2LjI3Nw0KCWMtNy43MzctNC4yNy0xMC41NDctMTQuMDAzLTYuMjc3LTIxLjczOWMwLjAyNC0wLjA0MywwLjA0OC0wLjA4NywwLjA3Mi0wLjEzYzQuNzIxLTcuNzMsMTIuNjg0LTEyLjkxMiwyMS42NjQtMTQuMDk2DQoJYzEuMzkxLTAuMDM4LDIuNzY4LDAuMjgyLDQsMC45MjhDNDM4LjIyMSw0MTQuMjk2LDQzOC41ODEsNDMwLjYzMiw0MzMuNzQ5LDQzOS4yODh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
        <h4>Okay, User photo!</h4>
        <span>How's this photo?</span>
      </StepHeader>
      <WhiteBlock>
        <div className={styles.content}>
          <div className={styles.photo} style={{backgroundImage: `url(${avatarUrl || './assets/girl2.jpg'})`}}></div>
          <span onClick={handleInputClick}>Choose a different photo</span>
          <input type="file" hidden ref={inputRef}/>
          <Button onClick={onNextStep}>Next &rarr;</Button>
        </div>
      </WhiteBlock>
    </div>
  )
}

export default ChooseAvatarStep;