// import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/NavBar.js';
import ItemCounter from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <ItemCounter/>
      {/* <Input
        placeholder="password"
        endDecorator={<IconButton size="sm"><Visibility /></IconButton>}
      />
      <Input
        size="lg"
        placeholder="password"
        endDecorator={<IconButton><Visibility /></IconButton>}
        sx={{ '--Input-radius': '24px' }}
      /> */}
    </div>
  );
}

export default App;
