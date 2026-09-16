import './style_comp/CampoTexto.css'

function CampoTexto({ label, name, ...inputProps }) {
  return (
    <div className="campo-texto">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...inputProps} />
    </div>
  )
}

export default CampoTexto;
