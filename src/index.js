// https://github.com/learn-co-curriculum/phase-1-practice-dog-ceo


console.log('%c HI', 'color: firebrick')

const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const breedURL = 'https://dog.ceo/api/breeds/list/all'
const showTheDawgz = document.getElementById('dog-image-container')
const showMeBreeds = document.querySelector("#dog-breeds")
const breedDrop = document.querySelector('#breed-dropdown')
let breedsArray = []


showMeBreeds.addEventListener('click', handleClick)
breedDrop.addEventListener('change', handleChange)




function getIMG () {

    fetch(imgURL)
    .then(res => res.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImgElement(imgs)
        renderElement(imgsArray)
    })
    
}
function createImgElement(imgs) {
    return imgs.map((img)=>{
        let i = `<img src=${img}>`
        return i
    })
        
}
function renderImg(imgsArray){
    imgsArray.forEach(element => {
        renderEl(element)
    })
}

function renderElement(element){
    showTheDawgz.innerHTML += element
}

function getBreeds() {
    fetch(breedURL)
    .then(res => res.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiEl(breedsArray)
        renderLis(breedsLis)
        // const imgs = images.message
        // let imgsArray = createImgElement(imgs)
        // renderImg(imgsArray)
    })
    
}

function createLiEl(breedsArray){
    return breedsArray.map((breed)=>{
        let li = `<li>${breed}</li>`
        return li
    })
        
}

function renderEl(element){
    showMeBreeds.innerHTML += element
}

function renderLis(breedLis){
    breedLis.forEach(element => {
        renderEl(element)
    })
}


function handleClick(e){
    if (e.target.nodeName === 'LI'){
        if (e.target.style.color === 'orange'){
            e.target.style.color = 'black'
        } else {
            e.target.style.color = 'orange'
        }
    }
}

function handleChange(e) {
    const letter = e.target.value
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredBreedsLis = createLiEl(filteredBreeds)
    showMeBreeds.innerHTML = ''
    renderLis(filteredBreedsLis)

}


getIMG()
getBreeds()


// function showTheDawgz () {
//     doggies.forEach
// }
// function appendIMG(doggies)
//     const image = document.createElement('img');
//     doggies.array.forEach(element => {
//         dogContainer.innerHTML +=
        
//     });

// function showTheDawgz()
// }


// const dogBreed = document.getElementById('dog-breeds'


// function getBreeds() {
//     fetch(breedUrl)
//     .then(resp => resp.json())
//     .then(breeds => {
//         debugger;
//         // const imgs = images.message
//         // let imgsArray = createImgElement(imgs)
//         // renderImg(imgsArray)
//      })
//