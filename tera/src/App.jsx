import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer welcome='Bienvenido a AirCaption' />
    </div>
  );
}

export default App;
