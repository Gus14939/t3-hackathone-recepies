import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Details from './pages/Details';

function App() {
  return (
    <div>
    <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
      <Navbar />
      <Routes>

        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/favourites'
          element={<Favourites />}
        />
        <Route
          path='/recipe/:id'
          element={<Details />}
        />

      </Routes>
    </div>

    </div>
  );
}

export default App;
