let cardsData=[
    {id:1,title:"womens wear",img:"womens-wear.jpeg",price:"1400",rating:4},
    {id:2,title:"bridal gold ear rings",img:"Chandbali.webp ",price:"300",rating:"5-stars"},
    {id:3,title:"ladies plat wear",img:"images.jpeg",price:"400",rating:"5"},
    {id:4,title:"pencil heel for women",img:"download.jpeg",price:"500",rating:"5"},
    {id:5,title:"half saree",img:"womenhalfsaree.jpeg",price:"4000",rating:"4"},
    {id:6,title:"women lehanga",img:"image.jpeg",price:"2000",rating:"5"},
    {id:7,title:"kids pattu langa",img:"downloa(1).jpeg",price:"",rating:""},
    {id:8,title:"women watch",img:"images(3).jpeg",price:"",rating:""},
    {id:9,title:"women stylish clutches",img:"images(1).jpeg",price:"300",rating:"5"},
    {id:10,title:"kids suits",img:"images(2).jpeg",price:"2000",rating:"5"},

];


let data="";
cardsData.map(function myFunction(items){
    data +=`
    <div class = "col-lg-4">
    <div class="cards-data " >
            <h6>id:-${items.id}</h6>
            <img src=${items.img} alt="">
            <h4>Title:- ${items.title}</h4>
            <h6>Price:- ${items.price}</h6>
            <h6>rating:- ${items.rating}</h6>
            <button onclick ="deleteButton(${items.id})">delete </button>

        </div>
        </div>
    
    `
    document.querySelector(".cards-data").innerHTML = data; 
});
function deleteButton(id){
    const deleteItems = document.querySelector(`[data-id="${id.items}"]`);
    deleteItems.style.display = "none";
    const filterArray = cardsData.filter(function filterFunction(items){
        return items.id !== id;
    });
    cardsData = filterArray;
    console.log(cardsData);
};