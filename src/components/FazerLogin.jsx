import { useState } from 'react';
import styles from './FazerLogin.module.css';


export default function FazerLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nSenha: ${senha}`);
  };


  return (
    <div className={styles.wrapperLogin}>
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />


          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />


          <button type="submit">Acessar</button>
        </form>
      </div>
    </div>
  );
}