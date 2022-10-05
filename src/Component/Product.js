import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

export default function Products() {
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setProduct(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="bg-white sticky">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative shadow-md p-5 ">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full  overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[50%] w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div>
                <h3 className="text-sm text-gray-700 text-[16px] my-5 ">
                  <span aria-hidden="true" className="" />
                  {product.title}
                </h3>
              </div>
              <div className="flex justify-around items-center  mt-10">
                <p className="text-sm font-medium text-gray-900 text-[18px]">
                  ${product.price}
                </p>
                <button
                  onClick={() => handleAdd(product)}
                  className="px-4 text-[10px] py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none cursor-pointer"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
