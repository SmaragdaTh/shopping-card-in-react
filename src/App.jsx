"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import SvgX from "./ui/SvgX";
import Product from "./components/Product";

export default function Example() {
  const [open, setOpen] = useState(true);
  const [products, setProducts] = useState([]);

  let total = 0;

  useEffect(function runOnlyOnceFetchProducts() {
    // fetch("http://localhost:3001/products")
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const arrayData = data.slice(0, 4);
        setProducts(arrayData);
      });
  }, []);

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => id !== product.id);
    setProducts(newProducts);
  };

  for (const key in products) {
    total += parseFloat(products[key].price);
  }

  return (
    <>
      <button
        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 mt-6 ml-6 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 relative"
        onClick={() => setOpen(true)}
      >
        Open Shopping cart
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
          aria-hidden="true"
          data-headlessui-state="open"
          data-open=""
        ></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700 z-[11]"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        data-headlessui-state="open"
                        data-open=""
                      >
                        Shopping cart
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <SvgX />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {products.map((product) => (
                            <Product
                              key={product.id}
                              product={product}
                              deleteProduct={deleteProduct}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>€{total.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
