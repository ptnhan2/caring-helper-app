import './App.css';
import InputForm from './components/Form/InputForm'; 
import ToggleThemeButton from './components/ToggleThemeButton/ToggleThemeButton';
import UserProfile from './components/UserProfile/UserProfile';
import { ThemeProvider } from './contexts/ThemeContext';
import Login from './pages/Login/Login';
import ProductList from './pages/Products/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Stopwatch from './components/StopWatch/StopWatch';
import IncreaseQuantityButton from './components/Button/IncreaseQuantityButton/IncreaseQuantityButton';
import BasicFormWithReducer from './components/Form/BasicFormWithReducer';
import Counter from './components/Button/Counter/CounterToTestUseCallback/Counter';

function App() {
  return (
    // <IncreaseQuantityButton />
      // <Stopwatch />
      <>
      <Counter />
      {/* <BasicFormWithReducer /> */}
        {/* <h1>My Shop</h1>
        <ProductList />
        <Cart /> */}
      </>

    );
}

export default App;
