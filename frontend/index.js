fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((res) => {
    console.log(res[0]);
    displayProducts(res);
  });

function displayProducts(res) {
  const mainProduct = document.getElementById("products_list");
  res.forEach((res) => {
    const divProduct = document.createElement("div");
    divProduct.innerHTML = `
      <div class="box">
         
            <h3>${res.author}</h3>
            <h5>${res.message}</h5>
            <h5>${res.date}</h5>
                
              </div>`;

    mainProduct.appendChild(divProduct);
  });
}
