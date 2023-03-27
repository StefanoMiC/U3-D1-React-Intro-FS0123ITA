// come rendere dinamico il componente Heading, in modo che ci visualizzi del contenuto diverso ad ogni utilizzo?

import CustomInput from "./CustomInput";

// dovremo passarci dei dati dall'esterno.

//props è un oggetto che ogni componente riceve sempre, seppure vuoto.
const Heading = props => {
  console.log("PROPS", props);
  return (
    <>
      <h1>TITOLO DI OGGI: {props.title}</h1>
      <p>{props.subtitle}</p>
      <CustomInput id={props.inputId} label={props.inputLabel} placeholder={props.inputPlaceholder} />
    </>
  );
};

export default Heading;
