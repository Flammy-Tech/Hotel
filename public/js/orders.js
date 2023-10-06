// // JavaScript to handle the room reservation functionality
// const roomList = document.querySelector('.room-list');
// const roomDetails = document.querySelector('.room-details');

// // Sample room data (you can replace this with your actual data)
// const rooms = [
//     { name: 'Room 101', description: 'This is a cozy single room with a view of the garden.' },
//     { name: 'Room 202', description: 'A spacious double room with a private balcony.' },
//     { name: 'Room 303', description: 'A luxurious suite with a separate living area.' },
//     // Add more room data as needed
// ];

// // Function to update the room list
// function updateRoomList() {
//     roomList.innerHTML = '';
//     rooms.forEach((room, index) => {
//         const listItem = document.createElement('div');
//         listItem.classList.add('room-item');
//         listItem.textContent = room.name;
//         listItem.addEventListener('click', () => displayRoomDetails(index));
//         roomList.appendChild(listItem);
//     });
// }

// // Function to display room details
// function displayRoomDetails(index) {
//     const room = rooms[index];
//     roomDetails.innerHTML = `
//         <h2>${room.name}</h2>
//         <p>${room.description}</p>
//     `;
// }

// // Initial setup
// updateRoomList();


//Carousell

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".room-description .carousel");
    const slides = document.querySelectorAll(".room-description .slide");
    const prevBtn = document.querySelector(".room-description #prevBtn");
    const nextBtn = document.querySelector(".room-description #nextBtn");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    function updateButtons() {
        prevBtn.style.display = currentIndex === 0 ? "none" : "block";
        nextBtn.style.display = currentIndex === slides.length - 1 ? "none" : "block";
    }

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
            updateButtons();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
            updateButtons();
        }
    });

    // Initialize
    showSlide(currentIndex);
    updateButtons();
});
