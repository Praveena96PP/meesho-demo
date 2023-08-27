
import './App.css';
import Banner from './Component/Banner';
import Catalogue from './Component/Catalogue';
import Nav from './Component/Nav';
import Products from './Component/Products';
import Subnave from './Component/Subnave';

function App() {
  return (
    <div>
      <div id="main">
      <Nav/>
      <Subnave/>
      <Banner/>
       <div id="menu">
        <div id="menu-left"> 
        <Products/>
        </div>
        <div id="menu-right">
        <Catalogue/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
