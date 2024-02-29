const cardProductPlaceholder =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";

export const cardProduct = (product) => {
  return `
    <div class="max-w-sm w-84 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#" class="flex justify-center items-center ">
            <img
                class="rounded-t-lg w-84"
                src="${product.image || cardProductPlaceholder}"
                alt="image product"
                onclick="handleImageClick('${product.title}', '${
    product.description
  }', '${product.price}')"
            />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                ${product.title || "unknown"}
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${product.description}
            </p>
            <div class="flex items-center justify-between">
            <span class="font-bold text-lg">${product.price}$</span>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Buy Now
            </button>
        </div>
        </div>
    </div>
`;
};
