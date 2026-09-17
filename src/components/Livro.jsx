function Livro({ livro }) {
  return (
    <li className="Livro">
      <strong>{livro.titulo}</strong> — {livro.autor} — {livro.anoPublic} —{' '}
      {livro.genero}
    </li>
  )
}

export default Livro;
