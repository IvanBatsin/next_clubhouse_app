import React from 'react';
import Button from '../../components/Button/Button';
import StepHeader from '../../components/StepHeader';
import WhiteBlock from '../../components/WhiteBlock';
import { axios } from '../../core/axios';
import { useMainContext } from '../../pages';
import styles from './enterEmailStep.module.scss';

const EnterEmailStep: React.FC = () => {
  const { setFieldValue, userData, onNextStep } = useMainContext(); 
  const [email, setEmail] = React.useState<string>('');
  let isDisabled = !new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/).test(email);

  const handleButtonClick = async (): Promise<void> => {
    try {
      const { data } = await axios.post<{error: boolean, message: string}>('/auth/email', JSON.stringify({email}), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWUiOiIiLCJhdmF0YXJVcmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjE1MTQ1ODQ_dj00IiwiaXNBY3RpdmUiOmZhbHNlLCJwaG9uZSI6IiIsInVzZXJOYW1lIjoiSXZhbkJhdHNpbiIsImVtYWlsIjoiIiwidXBkYXRlZEF0IjoiMjAyMS0wNi0xNVQxNTowODoyOS4zOTFaIiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0xNVQxNTowODoyOS4zOTFaIiwiaWF0IjoxNjIzNzY5NzA5LCJleHAiOjE2MjYzNjE3MDl9.HPgaIl-7294sDhbW7_eJHpxGaKM_gNLzqhIVFSS5YBE',
          'Access-Control-Allow-Origin': '*'
        }
      });

      console.log(data);

      // if (data.error) {
      //   console.log('Error with add email');
      //   return;
      // }

      // setFieldValue!('email', email);
      // onNextStep!();
    } catch (error) {
      console.log(error.response.data);
    }
  }   

  return (
    <div>
      <StepHeader>
       <img src="data:text/html;base64,PEhUTUw+PEhFQUQ+PFRJVExFPkVycm9yPC9USVRMRT48L0hFQUQ+PEJPRFk+CkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LjxwPgpSZWZlcmVuY2UmIzMyOyYjMzU7MTk5JiM0Njs2Y2M0MTEwMiYjNDY7MTYyMzc0MDQ3NCYjNDY7NDUxMzZiOAo8L0JPRFk+PC9IVE1MPgo=" />
        <h4>{userData?.userName} enter you Email</h4>
      </StepHeader>
      <WhiteBlock>
        <div className={styles.emailBlock}>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="test@mail.com"/>
          <Button onClick={handleButtonClick} disabled={isDisabled}>Enter &rarr;</Button>
        </div>
      </WhiteBlock>
    </div>
  )
}

export default EnterEmailStep;