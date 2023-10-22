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

// Order Options
const selectElement = document.querySelectorAll(".selectNumber");


selectElement.forEach((select) => {
    for (let i = 1; i <= 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }


   // Room-Details Mobile view

const buyNowButton = document.querySelectorAll('#buyNowButton');
const roomDetails = document.querySelector('.room-details');
const roomList = document.querySelector('.room-list');

buyNowButton.forEach((show) => {
    if (window.innerWidth <= 768) { // Use window.innerWidth to check the viewport width
        show.addEventListener('click', () => {
            console.log('Clicked');
            roomList.style.display = 'none';
            roomDetails.style.display = 'block';
        });
    }
});


//Room Details

const roomButtons = document.querySelectorAll(".product-button");

roomButtons.forEach(button => {
    button.addEventListener("click", function () {
        const roomID = button.getAttribute("data-room");
        const roomSection = document.getElementById(roomID);

        const room1 = document.getElementById("room1");
        const room2 = document.getElementById("room2");

        // Hide all room sections
        roomDetails.querySelectorAll("section").forEach(section => {
            section.style.display = "none";
        });

        // Display the selected room section
        roomSection.style.display = "block";

        // Ensure that only one room is displayed
        if (roomID === "room1") {
            room2.style.display = "none";
        } else if (roomID === "room2") {
            room1.style.display = "none";
        }
    });
});


    
});

