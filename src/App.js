import './App.css';
import PetInfo from './components/Petinfo';


function App() {
  /* родительский компонент передает в дочерний свойсво (props) */
  return (
    <div className="App">
      <PetInfo animal='cat' age='11' hasPet={true} />
    </div>
  );
}

export default App;
