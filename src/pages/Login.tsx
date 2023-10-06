import React from 'react'
import styles from './login.module.css';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const Login = () => {
  const [user, setUser] = React.useState({
    nome: '', 
    password: ''
  });
  return (
    <div className={styles.container}>
      <form className='box'>
        <Input id="userName" label='Nome' value={user.nome} onChange={({target}) => setUser({...user, nome: target.value})}/>
        <Input id="userPassword" label='Senha'type='password'value={user.password} onChange={({target}) => setUser({...user, password: target.value})}/>
      </form>
      <Button label='Login'/>
      <h1>{user.nome}</h1>
      <h1>{user.password}</h1>
    </div>
  )
}

export default Login
