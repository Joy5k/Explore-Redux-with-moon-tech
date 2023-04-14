import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";
import { useDispatch } from "react-redux";
import filterSlice, { toggle, toggleBrands } from "../features/filter/filterSlice";

const Home = () => {
  const dispatch=useDispatch()
  const {
    state: { products, loading, error },
  } = useProducts();
  const activeClass = "text-white bg-indigo-500 border-white";
  const { brands,stock } = filterSlice;

  let content;

  if (loading) {
    content = <p>Loading</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!loading && !error && products.length) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }
  if (products && (stock || brands)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
    <div className='mb-10 flex justify-end gap-5'>
      <button
        onClick={() => dispatch(toggle())}
        className={`border px-3 py-2 rounded-full font-semibold ${
          stock ? activeClass : null
        } `}
      >
        In Stock
      </button>
      <button
        onClick={() => dispatch(toggleBrands("amd"))}
        className={`border px-3 py-2 rounded-full font-semibold `}
      >
        AMD
      </button>
      <button
        onClick={() => dispatch(toggleBrands("intel"))}
        className={`border px-3 py-2 rounded-full font-semibold `}
      >
        Intel
      </button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
      {content}
    </div>
  </div>
  );
};

export default Home;
