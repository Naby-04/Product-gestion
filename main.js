//---------------- Declaration des variables ------------------
//---------------- variables de la fonction pour ajouter un produit dans le panier ------------------
const listProduct = document.getElementById("listProduct");
const addCartBtn = document.getElementById("addCartBtn"); // btn pour ajouter un produit dans le panier
const QuantityBtn = document.getElementById("QuantityBtn"); // nombre de produit ajouté au panier
const decrementProduct = document.getElementById("decrementProduct"); //btn pour diminuer le nombre de produit ajouté au panier
const incrementProduct = document.getElementById("incrementProduct"); //btn pour augmenter le nombre de produit ajouté au panier
// Tableau de la liste des produits
const dessertslist = JSON.parse(localStorage.getItem("ListDesserts") || "[]");
dessertslist.push(
  {
    Name: "Waffle",
    DishName: "Waffle with Berries",
    Price: "6.50",
    Image: "assets/images/image-waffle-desktop.jpg",
  },
  {
    Name: "Crème Brûlée",
    DishName: "Vanilla Bean Crème Brûlée",
    Price: "7.00",
    Image: "assets/images/image-creme-brulee-desktop.jpg",
  },
  {
    Name: "Macaron",
    DishName: "Macaron Mix of Five",
    Price: "8.00",
    Image: "assets/images/image-macaron-desktop.jpg",
  },
  {
    Name: "Tiramisu",
    DishName: "Classic Tiramisu",
    Price: "5.50",
    Image: "assets/images/image-tiramisu-desktop.jpg",
  },
  {
    Name: "Baklava",
    DishName: "Pistachio Baklava",
    Price: "4.00",
    Image: "assets/images/image-baklava-desktop.jpg",
  },
  {
    Name: "Pie",
    DishName: "Lemon Meringue Pie",
    Price: "5.00",
    Image: "assets/images/image-meringue-desktop.jpg",
  },
  {
    Name: "Cake",
    DishName: "Red Velvet Cake",
    Price: "4.50",
    Image: "assets/images/image-cake-desktop.jpg",
  },
  {
    Name: "Brownie",
    DishName: "Salted Caramel Brownie",
    Price: "4.50",
    Image: "assets/images/image-brownie-desktop.jpg",
  },
  {
    Name: "Panna Cotta",
    DishName: "Vanilla Panna Cotta,",
    Price: "6.50",
    Image: "assets/images/image-panna-cotta-desktop.jpg",
  }
);
console.table(dessertslist);
// -------------------------------------------
// Appelle fonctions lorsque la page est chargée
document.addEventListener("DOMContentLoaded", createCard);
//---------------------------- zone des fonctions -----------------------
//------------ 2- Function pour creer des cartes pour les produits -------------------
function createCard() {
  dessertslist.forEach((element, index) => {
    const card = document.createElement("div");
    card.className = "col-12 col-sm-6 col-md-6 col-lg-4 p-1";
    card.setAttribute("data-index", index); // Assigne l'index comme identifiant unique
    card.innerHTML = `
    <div class="card px-0" style="width: 14rem">
                <img
                  src="${element.Image}"
                  class="card-img-top img-fluid w-100 rounded"
                  alt="..."
                />
                <button
                  id="addCartBtn"
                  onclick="changeInner(${index})"
                  id="addCartBtn"
                  class="btn btn-active mx-auto rounded-5 d-flex align-items-center px-3 position-absolute ms-5"
                >
                  <img
                    src="assets/images/icon-add-to-cart.svg"
                    alt="cart-icon"
                    class="img-fluid me-2"
                  />Add to Cart
                </button>
                <div class="card-body px-0 mt-4">
                  <h6 class="DishName">${element.Name}</h6>
                  <h5 class="card-text">${element.DishName}</h5>
                  <h5 class="Dishprice">${element.Price}</h5>
                </div>
              </div>`;
    listProduct?.appendChild(card);
  });
}
//------------ 1- Function pour ajouter dans le panier-------------------
function changeInner(index) {
  console.log(index);
}
