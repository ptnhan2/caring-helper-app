import './App.css';
import InputForm from './components/Form/InputForm'; 
import ToggleThemeButton from './components/ToggleThemeButton/ToggleThemeButton';
import UserProfile from './components/UserProfile/UserProfile';
import { ThemeProvider } from './contexts/ThemeContext';
import Login from './pages/Login/Login';
import ProductList from './pages/Products/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Stopwatch from './components/StopWatch/StopWatch';
function App() {
  return (
      <Stopwatch />
      // <div>
      //   <h1>My Shop</h1>
      //   <ProductList />
      //   <Cart />
      // </div>

    );
}

export default App;
