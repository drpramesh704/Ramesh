
const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navlinks a").forEach(a=>{
  if(a.getAttribute("href")===path) a.classList.add("active");
});
document.getElementById("year")?.replaceChildren(new Date().getFullYear());
