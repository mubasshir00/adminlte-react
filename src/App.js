import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Menu/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
