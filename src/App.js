import "./App.css";
import { Button } from "./components/Button/Button";
import { Welcome } from "./components/Message/Message";

function App() {
  return (
    <div className='App'>
      <h1 className='App-geating'> Hello World</h1>
      
      {/* Передаем props для копмонента Welcome с иминем */}
      <Welcome name="Алиса" info='Любит зеленый свет'/>
      <Welcome name="Базилио" info='Страна Бразилия'/>
      <Welcome name="Буратино"  info='Возрост 23'/>
      <Button />
    </div>
  );
}

export default App;
