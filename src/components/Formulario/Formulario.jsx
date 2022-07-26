
import "./formu.css"


const Formulario = (props) => {
    
    const { label, error, onChange, id, ...inputProps } = props;
      return (
      <div className="formInput">
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
        
        />
        <span>{error}</span>
      </div>
    );
  };
export default Formulario