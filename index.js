// window.addEventListener('DOMContentLoaded', (event) => { window.alert("Welcome To Your Travel Destination") })

const locationContainer = document.getElementById('location-container')


fetch("http://localhost:3000/Destinations")
    .then(resp => resp.json())
    .then(destinationsForEach)

    function destinationsForEach(destinations){
        destinations.forEach(renderDestination)
    }

// destinations.forEach(function (destinations) {
//   renderDestination(destinations)
// })

function renderDestination(location) {
    const locationCard = document.createElement('div')
    locationCard.id = `location-card`;
    locationCard.className = 'location-card';

    const locationImage = document.createElement('img')
    locationImage.src = location.image
    
    const locationName = document.createElement('h3')
    locationName.textContent = location.name;

    const locationLikes = document.createElement('h3')
    locationLikes.textContent = "Likes: "

    const likesNum = document.createElement('h5')
    likesNum.className = "likes-num"
    likesNum.textContent = location.likesNum

    const likesButton = document.createElement('button')
    likesButton.className = "likes-button"
    likesButton.textContent = "✈"
    likesButton.addEventListener("click", function(e) {
      ++destinations.likes
      likesNum.textContent = destinations.likes

        locationCard.append(locationImage, locationName,
            locationLikes, likesNum);
            locationContainer.appendChild(locationCard);
            return locationCard
    })
}