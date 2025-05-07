const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".ulcontent a");

console.log(navlinks);
console.log(sections);

function scrollevent(){
    let currentSectionId = "";

     sections.forEach((section) =>{
    const sectiontop = section.offsetTop;
    const sectionheight = section.offsetHeight;

    if(window.scrollY >= sectiontop -150 && window.scrollY < sectiontop + sectionheight - 50){
        currentSectionId = section.getAttribute("id");
    }
   });
   
   navlinks.forEach((nalink)=>{
    if(nalink.getAttribute("href") == `#${currentSectionId}`){
        nalink.classList.add("active");
    }
    else{
       nalink.classList.remove("active");
    }
   });

}
window.addEventListener("scroll",scrollevent);
