// console.log('%c HI', 'color: firebrick')
　
function postDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => data['message'].forEach((el) => renderOneDog(el)))
}

function renderOneDog(el){
    let dogImageDiv = document.getElementById("dog-image-container");
    
    let dogImage = document.createElement("img");
    dogImage.src = el;
    dogImageDiv.append(dogImage);
}

postDogs();

function postAllDogs() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => Object.keys(data["message"]).forEach( el => renderDogBreed(el)))
}

function renderDogBreed(el) {
    let ul = document.getElementById("dog-breeds");
    let li = document.createElement("li");
    li.textContent = el;
    li.addEventListener("click", (e) => e.target.style.color = "blue");
    ul.append(li);
}

postAllDogs();

document.addEventListener("DOMContentLoaded", changeHandler)
function changeHandler() {
    const button = document.getElementById("breed-dropdown");
button.addEventListener("change", e => selectBreed(e));

function selectBreed(e){
    let li = document.querySelectorAll("li");
    li.forEach( el => {
        if(el.textContent[0] === e.target.value){
            el.hidden = false;
        } else{
            el.hidden = true;
        }
    }
        
    )

}


}

