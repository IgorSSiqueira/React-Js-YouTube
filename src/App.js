import './App.css';

function App() {
  const name = 'Igor'

  const newName = name.toUpperCase()

  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <p>Olá {name}</p>
      <p>Olá {newName}</p>
    </div>
  );
}

export default App;
