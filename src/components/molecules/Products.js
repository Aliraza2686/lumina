import { useNavigate } from "react-router-dom"
import { products } from "../../global_variables"

import one from "../../files/one.jpeg"
import two from "../../files/two.jpeg"
import three from "../../files/three.jpeg"
import four from "../../files/four.jpeg"
import five from "../../files/five.jpeg"
import ball from "../../files/ball.jpeg"
import bigJar from  "../../files/bigJar.jpeg"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

  
  export default function Products() {
    const navigate = useNavigate()
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="aspect-h-10  aspect-w-4 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                  <img
                    src={index === 0 ? ball : index === 1 ? bigJar : index ===  2 ? three  : index === 3 ? four : index === 4 ? five : bigJar}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <p >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </p>
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">{product.options}</p>
                    <p className="text-base font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  