window.addEventListener('DOMContentLoaded', (event) => { window.alert("Welcome To Your Travel Destination"); });
// for( let i = 0; i < 1000000000; i++)
// {}

const locationContainer = document.getElementById("container-location");



fetch("http://localhost:3000/Destinations")
    .then(resp => resp.json())
    .then(destinationSeperator)

    function destinationSeperator(destinations){
        // console.log(destinations)
        destinations.forEach(renderDestination)
    }

// destinations.forEach(function (destinations) {
//   renderDestination(destinations)
// })

function renderDestination(location) {
    // console.log(location)
    const locationCard = document.createElement('div')
    locationCard.id = `location-card`;
    locationCard.className = 'location-card';
    // console.log(locationCard)

    const locationImage = document.createElement('img')
    locationImage.src = location.image
    // console.log(locationImage)
    
    const locationName = document.createElement('h3')
    locationName.textContent = location.name;
    // console.log(locationName)

    const locationLikes = document.createElement('h3')
    locationLikes.textContent = "Likes: "
    // console.log(locationLikes)

    const likesNum = document.createElement('h5')
    likesNum.className = "likes-num"
    likesNum.textContent = location.likes
    console.log(location.likesNum)
    // console.log(likesNum)

    const likesButton = document.createElement('button')
    likesButton.className = "likes-button"
    likesButton.textContent = "like"
    likesButton.addEventListener("click", function(e) {
        e.stopPropagation
      ++location.likes
      likesNum.textContent = location.likes
      })

    //   commentsForm(location);
    locationCard.append(locationImage, locationName, locationLikes, likesNum, likesButton);
    console.log(locationCard)
    locationContainer.append(locationCard)

    
    
    document.getElementById('destination-form').addEventListener('submit', renderNewDestination)
}

// function commentsForm() {
//     let form = document.createElement("form");
//     form.id = "comment-form";
  
//     let commentInput = document.createElement("input");
//     commentInput.type = "text";
//     commentInput.id = "comment-input";
  
//     let label = document.createElement("label");
//     label.className = "form-label";
//     label.textContent = "Leave a comment: ";
//     form.appendChild(label);
  
//     let submit = document.createElement("input");
//     submit.type = "submit";
//     submit.id = "submit";
  
//     form.append(commentInput, submit);
  
//     return form;
//   }
  

function renderNewDestination(e){
    e.preventDefault();
    const name = document.querySelector("#name-input").value;
    const img = document.querySelector("#img-input").value;
  
    let newDestination = {
      name: name,
      image: img,
      likes: 0,
    };

    renderDestination(newDestination)
   document.getElementById('destination-form').reset()
}