import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Heading from "./components/Heading";
import CustomInput from "./components/CustomInput";
import ClassComponent from "./components/ClassComponent";

//JSX è HTML in JavaScript, accetta contenuto dinamico delimitato da graffe {}, la particolarità principale è l'utilizzo di className invece di class nel tag.
function App() {
  console.log("HEY SONO UN COMPONENTE");
  return (
    // un componente DEVE ritornare uno ed un solo elemento alla volta, incapsula i tuoi elementi in un unico div (o fragment)

    // react fragment è un elemento che raggruppa altri elementi figli, ma non viene rispecchiato nella struttura HTML generata
    // un react fragment può anche avere la forma <React.Fragment>
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ClassComponent content="Epicode" />
          <ClassComponent content="Ragazzi!" />

          {/* Sto passando informazioni (stringhe) da questo contesto fino ad arrivare all'iterno dei componenti Heading */}
          <Heading
            title="Intro a ReactJS"
            subtitle="Giornata introduttiva"
            inputId="heading-input-1"
            inputLabel="Nome"
            inputPlaceholder="Inserisci il tuo nome in breve"
          />
          <Heading
            title="STATE, map() & Bootstrap"
            subtitle="React comincia a ricordarsi le cose"
            inputId="heading-input-2"
            inputLabel="Indirizzo"
            inputPlaceholder="Inserisci il tuo indirizzo"
          />
          <Heading
            title="Controlled Inputs & Form"
            subtitle="Lavoriamo coi form"
            inputId="heading-input-3"
            inputLabel="Regione"
            inputPlaceholder="FVG"
          />

          <CustomInput id="input-2" label="Email" placeholder="Tua e-mail" />

          <MyComponent content="Titolo componente" bgColor="red" textSize="20" />
          <MyComponent content="Titolo" bgColor="green" textSize="28" />
          <MyComponent content="Titolo del componente1" bgColor="blue" textSize="46" />
          <MyComponent content="Titolo del componente2" bgColor="#ff9210" textSize="10" />
          <MyComponent content="Titolo del componente3" bgColor="#ff2910" textSize="50" />
        </header>
      </div>

      <div className="container"></div>
    </>
  );
}

export default App;
