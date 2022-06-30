
import './App.css';
import Card from './components/Card'
function App() {
  return (
    <div className="container">
      <div className="App">
          <Card 
          logo="./cocacola_logo.png"
          nombre="coca-cola"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, beatae magnam!"
          logo2="./cocacola.png"
          color="red"
          />
      </div>
    </div>
  );
}

export default App;
