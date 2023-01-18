let bubble = document.querySelector(".bubbles")
let body = screen.width;

console.log(body);

const bubblesCreator = () =>{
    for(let i=0; i<20;i++)
    {
        bubble.innerHTML+=`
        <span class="bubble" style = "--i:${Math.random()*50+10}"></span>
        `
        bubble.classList.add("bubbles")
    }
}
bubblesCreator();
