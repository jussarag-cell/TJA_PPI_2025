import { useState } from 'react';
import styles from './CadastrarProdutos.module.css';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (editIndex !== null) {
      const novosProdutos = [...produtos];
      novosProdutos[editIndex] = { nome, preco };
      setProdutos(novosProdutos);
      setEditIndex(null);
    } else {
      setProdutos([...produtos, { nome, preco }]);
    }
    setNome('');
    setPreco('');
  }

  function handleEdit(index) {
    setNome(produtos[index].nome);
    setPreco(produtos[index].preco);
    setEditIndex(index);
  }

  function handleRemove(index) {
    setProdutos(produtos.filter((_, i) => i !== index));
    if (editIndex === index) {
      setNome('');
      setPreco('');
      setEditIndex(null);
    }
  }

  return (
    <div className={styles.wrapperProdutos}>
      <div className={styles.produtosContainer}>
        <h2>Cadastrar Produtos</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome do Produto:</label>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
          <label>Preço do Produto:</label>
          <input
            type="number"
            value={preco}
            onChange={e => setPreco(e.target.value)}
            required
          />
          <button type="submit">{editIndex !== null ? 'Atualizar' : 'Adicionar'}</button>
        </form>
        <ul className={styles.lista}>
          {produtos.map((p, i) => (
            <li key={i}>
              {p.nome} - R$ {p.preco}
              <button onClick={() => handleRemove(i)}>Deletar</button>
              <button onClick={() => handleEdit(i)}>Atualizar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}