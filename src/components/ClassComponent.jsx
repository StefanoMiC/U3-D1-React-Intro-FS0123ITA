import { Component } from "react";

// Il componente a classe storicamente è l'unico che potrà far uso innazitutto dello STATE (che vedremo)
// oltre a i lifecylce methods

// class ClassComponent extends React.Component {}
class ClassComponent extends Component {
  // render è obbligatorio per poter ritornare del JSX come ogni altro componente! (ricorda il return!)
  render() {
    console.log(this);
    return <div>Ciao {this.props.content}</div>;
  }
}

export default ClassComponent;
