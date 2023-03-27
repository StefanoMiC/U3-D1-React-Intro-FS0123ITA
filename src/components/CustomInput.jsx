const CustomInput = props => (
  <>
    <label htmlFor={props.id}>{props.label}</label>
    <input id={props.id} type="text" placeholder={props.placeholder} />
  </>
);

export default CustomInput;
