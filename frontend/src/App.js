import './App.css';
import HomePage from './page/HomePage';
import Navbar from './ui/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto p-10'>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
