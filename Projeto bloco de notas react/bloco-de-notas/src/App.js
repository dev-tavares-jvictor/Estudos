import './App.css';
import HelloWorld from'./components/HelloWorld'

function App() {

  const name = 'joao'

  return (
    <div className='App'>
      <h2>Alterando Jsx</h2>
      <p>ola, {name}</p>
      <p>soma: {2 + 2 }</p>
      <HelloWorld/>
    </div>
  );
}

export default App;
