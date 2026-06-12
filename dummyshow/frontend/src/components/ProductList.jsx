const ProductList = ({ products, deleteProduct }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <div className="card" key={product._id}>
          <img src={product.image} alt={product.title} />

          <h3>{product.title}</h3>

          <p>₹ {product.price}</p>

          <p>{product.category}</p>

          <button
            onClick={() => deleteProduct(product._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;