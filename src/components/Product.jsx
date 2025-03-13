import PropTypes from "prop-types";

function Product({ product, deleteProduct }) {
  const deleteProductFunc = (id) => {
    deleteProduct(id);
  };

  return (
    <li className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={product.imageAlt}
          src={product.image}
          className="size-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={product.href}>{product.title}</a>
            </h3>
            <p className="ml-4">€{product.price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => deleteProductFunc(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

Product.propTypes = {
  product: PropTypes.object,
  deleteProduct: PropTypes.func,
};

export default Product;
