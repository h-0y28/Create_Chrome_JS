// const titke = document.querySelector("div.hello:first =<child h1");
// function handleTitleClick(){
//     handleTitleClick.style.color = "blue";
// }

// function handleMouseEnter(){
//     handleTitleClick.innerText = "Mouse is here!";
// }

// function  handleMouseLeave(){
//     handleTitleClick.innerText = "Mouse is gone!";
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

const title = document.querySelector("div.Hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked !");
    // title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);