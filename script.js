const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
let language="en";
const langToggle=document.getElementById("langToggle");
langToggle.addEventListener("click",()=>{
  language=language==="en"?"bn":"en";
  document.documentElement.lang=language;
  document.body.classList.toggle("bn",language==="bn");
  document.querySelectorAll("[data-en][data-bn]").forEach(el=>{
    el.textContent=el.dataset[language];
  });
  langToggle.textContent=language==="en"?"বাংলা":"English";
});
document.getElementById("year").textContent=new Date().getFullYear();
