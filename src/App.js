import "./App.css";
import { Button } from "./components/Button/Button";
import { Welcome } from "./components/Message/Message";

function App() {
  return (
    <div>
      <h2 className={App}> Hello World</h2>
      <Button />
      <Welcome name="Алиса" />
      <Welcome name="Базилио" />
      <Welcome name="Буратино" />
    </div>
  );
}

export default App;
