import Product from "./Product";
import AddForm from "./AddForm";

const Main = ({ products, onAddFormSubmit, onEditFormSubmit, onDelete }) => {
  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          {products.map((product) => {
            return (
              <Product
                key={product._id}
                {...product}
                onEditFormSubmit={onEditFormSubmit}
                onDelete={onDelete}
              />
            );
          })}
        </ul>
      </div>
      <AddForm onAddFormSubmit={onAddFormSubmit} />
    </main>
  );
};

export default Main;
