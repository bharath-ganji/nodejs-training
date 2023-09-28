
const categoryList = document.getElementById("categoryList");
const baseURL = "http://localhost:3000/api";

fetch(`${baseURL}/categories`)
  .then((response) => response.json())
  .then((data) => {
    data.categories.forEach((category) => {
      const listItem = document.createElement("li");
      listItem.textContent = category;
      categoryList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching categories:", error));

const productForm = document.getElementById("productForm");
const productTitle = document.getElementById("productTitle");
const productResult = document.getElementById("productResult");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = productTitle.value;

  fetch(`${baseURL}/addProduct`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  })
    .then((response) => response.json())
    .then((data) => {
      productResult.textContent = `Product added: ${data.title}`;
      productTitle.value = "";
    })
    .catch((error) => console.error("Error adding product:", error));
});



const updateProductButton = document.getElementById("updateProductButton");
const updateResult = document.getElementById("updateResult");

updateProductButton.addEventListener("click", () => {
  const productId = 1; 
  const newTitle = "iPhone Galaxy +1";

  fetch(`${baseURL}/updateProduct/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle }),
  })
    .then((response) => response.json())
    .then((data) => {
      updateResult.textContent = `Product updated: ${JSON.stringify(data)}`;
      console.log("Product updated:", data);
    })
    .catch((error) => {
      updateResult.textContent = `Error updating product: ${error.message}`;
      console.error("Error updating product:", error);
    });
});
