import Product from "./components/Product";
import { data } from "./data";
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            Amazon
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {Object.keys(data.products).map(key => {
            console.log(data.products[key]);
            return <Product key={key} product={data.products[key]} />;
          })}
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
