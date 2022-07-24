import { sahil_navbar, products,usecases,features,resources } from "./navbar.js";
document.getElementById("sahil_navbar").innerHTML = sahil_navbar();

/////////////
document.getElementById("leftimg").addEventListener("click", () => {
window.location.href = "index.html"
})

document.getElementById("navbar-display-board").innerHTML = null;
let p = 0;
let u=0;
let f=0;
let r=0;

document.getElementById("products").addEventListener("click", () => {
  if (p == 0) {
    document.getElementById("navbar-display-board").innerHTML = products();
    p++;

    document.getElementById("l_top2").addEventListener("click",()=>{
      window.location.href = "./monday work management/monday-product.html"
    })

  } else {
    document.getElementById("navbar-display-board").innerHTML = null;
    p = 0;
  }
});

document.getElementById("usecase").addEventListener("click", () => {
  if (u == 0) {
    document.getElementById("navbar-display-board").innerHTML = usecases();
    u++;
  } else {
    document.getElementById("navbar-display-board").innerHTML = null;
    u = 0;
  }
});

document.getElementById("features").addEventListener("click", () => {
  if (f == 0) {
    document.getElementById("navbar-display-board").innerHTML = features();
    f++;
  } else {
    document.getElementById("navbar-display-board").innerHTML = null;
    f = 0;
  }
});

document.getElementById("resources").addEventListener("click", () => {
  if (r == 0) {
    document.getElementById("navbar-display-board").innerHTML = resources();
    r++;
  } else {
    document.getElementById("navbar-display-board").innerHTML = null;
    r = 0;
  }
});

