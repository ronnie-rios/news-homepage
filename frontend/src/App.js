import './App.css';
import HomePage from './page/HomePage';
import Navbar from './ui/Navbar';

function App() {
  return (
    <div className='w-9/12 mx-auto'>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
