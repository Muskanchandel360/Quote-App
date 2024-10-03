let container = document.querySelector("#container")
let h1 = document.querySelector("h1")
let h5 = document.querySelector("h5")
let button = document.querySelector("button")
let h6 = document.querySelector("h6")

const colors = ["#640D5F", "#D91656", "#EE66A6", "#B8001F", "#FF8A8A","#131842", "#ECCEAE"]
let count = 0

const getQuote = async () => {
    const response = await fetch("http://quotable.io/random");
    const data =  await response.json()
    h1.innerText = data.content
    
    h5.innerText =   "Author:"+ " " +data.author
    h6.innerText = data.tags
    container.style.backgroundColor = colors[count]
    if(count>=colors.length){
        count=0;
    }
    count++
    

    
}
button.addEventListener("click", getQuote)
getQuote();
setInterval(() => {
    getQuote()
},10000)