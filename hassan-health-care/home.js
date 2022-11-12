let medData = [
  {
    image_url:
      "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/olktgznfpdbnm3cbarfb.jpg",
    name: "Dettol Original Instant Hand Sanitizer",
    price: 779,
    strikedoffprice: 1299,
  },
  {
    image_url:
      "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/yv3rqqcmdyjlycajye7d.jpg",
    name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Isolate  ",
    price: 2099,
    strikedoffprice: 2499,
  },
  {
    image_url:
      "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/nbrq3ciikm0fgphiyujz.jpg",
    name: "Inlife Curcumin C3 Complex 500 mg Turmeric with BioPerine",
    price: 650,
    strikedoffprice: 1799,
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1666336637.jpg?dim=1440x0",
    name: "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels",
    price: 207,
    strikedoffprice: 400,
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/Z07796/supradyn-immuno-multivitamin-natural-immunity-booster-with-vit-c-vit-d-zinc-30-tablets-2-1665045164.jpg?dim=1440x0",
    name: "Supradyn Immuno+, Multivitamin, Natural Tablet",
    price: 135,
    strikedoffprice: 200,
  },
  {
    image_url: "./images/livespray.jpg",
    name: "Liveasy Wellness Pain Relief Spray 55gm",
    price: 279,
    strikedoffprice: 1299,
  },
  {
    image_url: "./images/inlife-fish-oil (1).jpg",
    name: "Inlife Fish Oil 100mg",
    price: 1200,
    strikedoffprice: 1299,
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/I33946/gelusil-mps-mint-flavour-sugar-free-bottle-of-400ml-liquid-2-1641787977.jpg",
    name: "Gelusil Mps Mint Flavour Sugar Free Syrup",
    price: 600,
    strikedoffprice: 2499,
  },
  {
    image_url: "./images/vicks1 (1).jpg",
    name: "Vicks Vapo Rub 100gm",
    price: 650,
    strikedoffprice: 1799,
  },
  {
    image_url: "./images/him (1).jpg",
    name: "Himalya Ashwagandha 120pcs (New Pack Arrival)",
    price: 650,
    strikedoffprice: 1799,
  },
  {
    image_url:
      "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/4a9ea3e4485e4bb3970489f406ec2223.jpg",
    name: "Tata Go Fit Plant Protein for Women Rich Chocolate",
    price: 7599,
    strikedoffprice: 9999,
  },
  {
    image_url: "./images/saridon (1).jpg",
    name: "Saridon Advance Severe Headache Relief Tablet",
    price: 909,
    strikedoffprice: 1299,
  },
];

let cartsArr = JSON.parse(localStorage.getItem("cartspage")) || [];

function search() {
  //  console.log("hello")
  let x = document.querySelector("#searchm").value;
  let newData = medData.filter(function (abc) {
    return abc.name.toLowerCase().includes(x.toLowerCase());
  });
  document.querySelector("#productstack1").innerHTML = "";
  displayTable(newData);
  console.log(newData);
}

medData.forEach((elem, i) => {
  displayTable(elem, i);
});
function displayTable(elem) {
  let card = document.createElement("div");
  // card.style.border="1px solid orange"
  card.style.padding = "5% 4%";
  card.style.paddingBottom = "12px";
  card.style.width = "91%";
  card.style.height = "auto";
  card.style.boxShadow =
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px";

  let imgdiv = document.createElement("div");
  //   imgdiv.style.border = "1px solid green";
  imgdiv.style.height = "300px";
  imgdiv.style.display = "flex";
  imgdiv.style.justifyContent = "center";

  let image = document.createElement("img");
  image.setAttribute("src", elem.image_url);
  image.style.width = "80%";

  image.style.height = "auto";

  imgdiv.append(image);

  let datadiv = document.createElement("div");
  //    datadiv.style.border = "1px solid black";
  datadiv.style.textAlign = "Center";
  datadiv.style.marginTop = "5%";
  //  datadiv.style.height = "50%";

  let head = document.createElement("h4");
  head.innerText = elem.name;
  head.style.width = "100%";
  head.style.fontSize = "15px";

  let price1 = document.createElement("p");
  price1.innerText = "Our Price-₹" + elem.price;
  price1.style.margin = "-1%";

  let price2 = document.createElement("p");
  price2.innerText = "MRP-" + elem.strikedoffprice;
  price2.style.fontSize = "1px";

  let button = document.createElement("button");
  button.innerText = "Add To Cart";
  button.style.border = "none";
  button.style.backgroundColor = "#ff6f61";
  button.style.borderRadius = "4px";
  button.style.color = "white";
  button.style.cursor = "pointer";

  button.addEventListener("click", function () {
    cartsArr.push(elem);
    console.log("clicked");
    localStorage.setItem("cartspage", JSON.stringify(cartsArr));
  });
  datadiv.append(head, price1, price2, button);
  card.append(imgdiv, datadiv);

  document.querySelector("#productstack1").append(card);
}

function productspage() {
  window.location.href = "/products.html";
}
