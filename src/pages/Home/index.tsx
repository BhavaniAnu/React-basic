import react, { useEffect, useState } from 'react';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';

const Home = () => {
  const [email, setEmail] = useState<{ value: string; error: string }>({
    value: '',
    error: '',
  });
  const [password, setPassword] = useState<string>('');

  // useEffect(() => {
  //   console.log('email', email);

  //   // return () => {
  //   //   console.log('unmount');
  //   // };
  // }, [email]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email.value === '') {
      setEmail((prevVal) => ({
        ...prevVal,
        error: 'Please enter your email address',
      }));
    } else {
      console.log('email', email);
      console.log('password', password);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextBox
          placeholder='email'
          value={email.value}
          onChange={(e: any) => setEmail({ value: e.target.value, error: '' })}
        />
        <p>{email.error}</p>
        <TextBox
          placeholder='password'
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <Button label='Submit' />
      </form>
    </div>
  );
};

export default Home;
