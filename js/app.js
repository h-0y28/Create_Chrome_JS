const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginBtnClick(event) {
    event.preventDefault();
    console.log(loginInput.value);
}
function handleLinkClikck(event){
        event.preventDefault(); //기본 동작 제어
    console.dir(event)
    alert("clicked!"); //기본 동작 제어, ok 누르면 기본 동작 실행
}

loginForm.addEventListener("submit", onLoginBtnClick);
link.addEventListener("click",handleLinkClikck);