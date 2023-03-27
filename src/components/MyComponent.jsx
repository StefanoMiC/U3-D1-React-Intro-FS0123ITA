// un componente React può essere veramente semplice, o diventare molto complesso.
// nella sua forma più basilare sarà una funzione che ritorna del JSX

// è buona prassi chiamare il componente con lo stesso nome del suo file.

//Versione abbreviata con RETURN IMPLICITO

// nomenclatura dei componenti sarà PascalCase (prima lettera maiuscola e le altre in maiuscolo)
const MyComponent = props => (
  <div className="myComponent">
    {/* le prime parentesi graffe dentro a style delimitano un valore dinamico di JSX (l'oggetto), mentre quelle interne rappresentano l'oggetto style */}
    <h2 style={{ backgroundColor: props.bgColor, fontSize: props.textSize + "px" }}>{props.content}</h2>
    <ul>
      <li>item-1</li>
      <li>item-2</li>
      <li>item-3</li>
      <li>item-4</li>
      <li>item-5</li>
    </ul>
  </div>
);

// singola linea con return implicito
// const MyComponent = () => <h2>Lista elementi</h2>;

// const MyComponent = () => {
//   return (
//     <>
//       <h2>Lista elementi</h2>
//       <ul>
//         <li>item-1</li>
//         <li>item-2</li>
//         <li>item-3</li>
//         <li>item-4</li>
//         <li>item-5</li>
//       </ul>
//     </>
//   );
// };

export default MyComponent;
