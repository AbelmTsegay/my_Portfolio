const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const project1info =  document.getElementById("project1info");
const project2info =  document.getElementById("project2info");

function toggle(project){
    const projectinfo = document.getElementById(project);
    if (projectinfo.style.display === "none"){
        projectinfo.style.display ="block";
    }else{
        projectinfo.style.display = "none";
    }
}

button1.addEventListener("click", function(){
    toggle("project1info");
});

button2.addEventListener("click", function(){
    toggle("project2info");
}); 

const toggleButton = document.getElementById("toggle-theme");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
