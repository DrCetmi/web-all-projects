
const heading = document.querySelector('.heading');

const header = heading.closest('header');

if(header){
    header.style.border = "5px solid black";
}

//////////////////////

const infoSection = document.querySelector('.info'); 
const packageTitle = infoSection.querySelectorAll('.package-title');

packageTitle.forEach(title =>{
    const preSibling = title.previousElementSibling;
    preSibling.style.border = "2px solid black";
});

//////////////////////////

const infoLabels = document.querySelectorAll('.info label');
infoLabels.forEach(label => {
    if(label.matches('.mild')){
        label.style.borderBottom = "2px solid yellow";
    }else if(label.matches('.intense')){
        label.style.borderBottom = "2px solid orange";
    }else {
        label.style.borderBottom = "2px solid red";
    }
});

//////////////////////////

const siteMap = document.querySelector('.site-map');
const navList = document.querySelector('.nav-list');

for(let i = 0; i <= navList.children.length; i++){
    const child = navList.children[i].cloneNode(true);
    siteMap.appendChild(child);
};
