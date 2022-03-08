window.addEventListener('DOMContentLoaded', (event) => { window.alert("Welcome To Your Travel Destination") })

const URL = 'http://localhost:3000/Destinations'
const locationContainer = document.getElementById('location-container')

fetch(URL)
    .then(resp => resp.json)
    .then(renderDestination)

destinations.forEach(function (location) {
        renderDestination(location)
    })

function renderDestination(destination) {
    const destinationCard = document.createElement('div')
    destinationCard.id = `destination-${destination.id}`;
    destinationCard.className = 'destination-card';

    const destinationImage = document.createElement('img')
    destinationImage.src = destination.image
    
    const destinationName = document.createElement('h3')
    destinationName.textContent = destination.name;

    const destinationLikes = document.createElement('h3')
    destinationLikes.textContent = "Likes: "

    const likesNum = document.createElement('h5')
    likesNum.className = "likes-num"
    likesNum.textContent = destination.likesNum

    const likesButton = document.createElement('button')
    likesButton.className = "likes-button"
    likesButton.textContent = "♥"
    likesButton.addEventListener("click", function(e) {
      ++destination.likes
      likesNum.textContent = destination.likes
    })
}