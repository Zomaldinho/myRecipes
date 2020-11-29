import './App.css';
import Recipes from './components/recipes/recipes'

function App() {
  const [route, setRoute] = useState();

  return (
    <div className="App container">
      <h1>Hello</h1>
      <Recipes></Recipes>
    </div>
  );
}

export default App;
