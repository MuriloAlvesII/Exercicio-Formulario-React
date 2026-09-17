import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Livro from './Livro'
import './FormularioLivro.css'

function FormularioLivro() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [anoPublic, setAnoPublic] = useState('');
  const [genero, setGenero] = useState('');

  const [livros, setLivros] = useState([]);

  function handleSubmit(evento) {
    evento.preventDefault();

    const newLivro = { titulo, autor, anoPublic, genero }
    setLivros([...livros, newLivro])

    setTitulo('')
    setAutor('')
    setAnoPublic('')
    setGenero('')
  }

  return (
    <section className="formulario-livro">
      <h1>Cadastro de Livro</h1>

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Título"
          name="titulo"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="Ex: O Senhor dos Anéis"
        />

        <CampoTexto
          label="Autor"
          name="autor"
          type="autor"
          value={autor}
          onChange={(evento) => setAutor(evento.target.value)}
          placeholder="Ex: J.R.R. Tolkien"
        />

        <CampoTexto
          label="Ano de Publicação"
          name="anoPublic"
          value={anoPublic}
          onChange={(evento) => setAnoPublic(evento.target.value)}
          placeholder="Ex: 1954"
        />

        <CampoTexto
          label="Gênero"
          name="genero"
          value={genero}
          onChange={(evento) => setGenero(evento.target.value)}
          placeholder="Ex: Fantasia"
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="formulario-livro-lista">
        <h2>Livros cadastrados</h2>

        {livros.length === 0 && <p>Nenhum livro cadastrado ainda.</p>}

        <ul>
          {livros.map((livro) => (
            <Livro key={livro.titulo} livro={livro} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FormularioLivro;
