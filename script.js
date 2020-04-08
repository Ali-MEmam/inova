document.querySelector(".navbar-ellipsis").addEventListener("click",function(event){
    let navbar = document.querySelector(".navbar-list")
    console.log(navbar.style.display)
    if (document.querySelector(".navbar-list").style.display === "none") {
        document.querySelector(".navbar-list").style.display = "block";
      } else {
        document.querySelector(".navbar-list").style.display = "none";
    }
})