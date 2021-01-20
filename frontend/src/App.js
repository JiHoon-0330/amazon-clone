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
            const { id, name, image, price, rating } = data.products[key];
            return (
              <div key={id} className="card">
                <a href={`/product/${id}`}>
                  <img className="medium" src={image} alt={name} />
                </a>
                <div className="card-body">
                  <a href={`/product/${id}`}>
                    <h2>{name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div className="price">${price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
