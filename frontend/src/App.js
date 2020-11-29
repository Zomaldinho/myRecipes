import './App.css';
import Recipes from './components/recipes/recipes';
import oneRecipe from './components/oneRecipe/oneRecipe';

function App() {
  const [route, setRoute] = useState();

  Routing = (newRoute) => {
    setRoute(newRoute);
  };

  return (
    <div className="App container">
      <h1>Hello</h1>
      {route == 'one' ? <oneRecipe></oneRecipe> : <Recipes></Recipes>}
    </div>
  );
}

export default App;
