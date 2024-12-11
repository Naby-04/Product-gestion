//---------------- Declaration des variables ------------------
//---------------- variables de la fonction pour ajouter un produit dans le panier ------------------
const addCartBtn = document.getElementById("addCartBtn"); // btn pour ajouter un produit dans le panier
const QuantityBtn = document.getElementById("QuantityBtn"); // nombre de produit ajouté au panier
const decrementProduct = document.getElementById("decrementProduct"); //btn pour diminuer le nombre de produit ajouté au panier
const incrementProduct = document.getElementById("incrementProduct"); //btn pour augmenter le nombre de produit ajouté au panier
// Tableau de la liste des produits
const dessertslist = JSON.parse(localStorage.getItem("ListDesserts") || "[]");
dessertslist.push(
  { DishName: "Waffle with Berries", Price: "6.50" },
  { DishName: "Vanilla Bean Crème Brûlée", Price: "7.00" },
  { DishName: "Macaron Mix of Five", Price: "8.00" },
  { DishName: "Classic Tiramisu", Price: "5.50" },
  { DishName: "Pistachio Baklava", Price: "4.00" },
  { DishName: "Lemon Meringue Pie", Price: "5.00" },
  { DishName: "Red Velvet Cake", Price: "4.50" },
  { DishName: "Salted Caramel Brownie", Price: "4.50" },
  { DishName: "Vanilla Panna Cotta,", Price: "6.50" }
);
console.table(dessertslist);
//---------------------------- zone des fonctions -----------------------
//------------ 1- Function pour ajouter dans le panier-------------------
if (addCartBtn && QuantityBtn) {
  addCartBtn.addEventListener("click", function () {});
}
