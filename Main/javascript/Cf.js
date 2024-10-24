let Topsearches = ["Cricket", "Marvel", "Spiderman" , "Javascript" , "Cyber Security"];
let Imagelist = ["../images/cricket.webp", "../images/Marvel.webp", "../images/spiderman.webp", "../images/Javascript.webp", "../images/Cyber security.webp"]
var searchlist = document.querySelector(".topsearches");
var searchBar = document.getElementById("cfsearchbar");

function showTopSearch(){
    let length = Topsearches.length;
    searchlist.innerHTML = `
    <p>Top ${length} Searches: </p>
    <ul id="Searchlist"></ul>
    `;

    const listElement = document.getElementById("Searchlist");
    Topsearches.forEach(item => {
        const listitem = document.createElement("li");
        listitem.textContent = item;
        listElement.appendChild(listitem);
        listitem.addEventListener("click",function(){
            searchBar.textContent = listitem;
        })
    })
}

let i = 0;
var slideShow = document.querySelector(".cflpsright");
function ImageSlide(){
    let length = Imagelist.length;
    slideShow.style.background = `url('${Imagelist[i]}')`;
    i = (i + 1)%length;
    setTimeout(ImageSlide, 3000);
}
ImageSlide();