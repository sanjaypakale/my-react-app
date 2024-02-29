import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import AppRouter from './Router';

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
     
        <AppRouter></AppRouter>
    

    </div>
  );
}

export default App;
