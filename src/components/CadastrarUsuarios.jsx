import { useState } from 'react';
import styles from './CadastrarUsuarios.module.css';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${nome}\nE-mail: ${email}\nSenha: ${senha}`);
  };

  return (
    <div className={styles.wrapperCadastro}>
      <div className={styles.cadastroUsuarioContainer}>
        <h2>Cadastrar Usuário</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome e Sobrenome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />

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

          <button type="submit">Cadastrar Usuário</button>
        </form>
      </div>
    </div>
  );
}