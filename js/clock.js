const clock = document.querySelector("#clock");

function getClock(){
    const clock = document.querySelector("h2#clock");
    function sayHello(){
        console.log("hello");
    }
    setInterval(sayHello, 5000);    
}

getClock();
setInterval(getClock, 1000); 