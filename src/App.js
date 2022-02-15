import "./App.css";
import { Button } from "./components/Button/Button";
import { PersonInfo } from "./components/Message/Message";

function App() {
  return (
    <div className='App'>
      <h1 className='App-geating'> Hello World</h1>
      <PersonInfo name="Алиса" info='Любит зеленый свет'/>
      <PersonInfo name="Базилио" info='Страна Бразилия'/>
      <PersonInfo name="Буратино"  info='Возрост 23'/>
      <Button />
    </div>
  );
}

export default App;
