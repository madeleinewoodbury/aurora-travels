//
// GOOGLE MAP
//
// Initialize and add the map
function initMap() {
  const loc = { lat: 69.653298, lng: 18.961642 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
}

//
// SMOOTH SCROLLING
//
$("#navbar a, .btn").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Scroll to Home when click on title
$("#brand").on("click", function(e) {
  const hash = "#home";
  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top - 100
    },
    800
  );
});

//
// TRANSPARENT NAVBAR
//
window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

//
// MODAL
//
// Get the modal & modal-content
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-content");
let closeModal = document.querySelector(".close");
let bookingForm = document.getElementById("booking-form");
// Get the buttons that opens the modal
let modalBtn = document.querySelectorAll(".modal-btn");
let packNum = document.getElementById("package-number");
let packPrice = document.getElementById("package-price");
let packageInfo = document.querySelector(".package-info");

// Add event lsitener to modalBtns
for (let btn of modalBtn) {
  btn.addEventListener("click", openModal);
}

modal.addEventListener("click", function(e) {
  if (e.target.parentElement === modal) {
    modal.style.display = "none";
  }
});

function openModal(e) {
  let modalId = e.target.parentElement.id;
  if (modalId === "package-1") {
    packNum.innerHTML = "1";
    packPrice.innerHTML = "$79.00";
    packageInfo.innerHTML = `<p>1 night. Transportation provided. No Meals Included. Bring Your Own Tent</p>`;
  } else if (modalId === "package-2") {
    packNum.innerHTML = "2";
    packPrice.innerHTML = "$349.00";
    packageInfo.innerHTML = `<p>3 nights. Transportation provided. Meals Included. Tent Provided</p>`;
  } else if (modalId === "package-3") {
    packNum.innerHTML = "3";
    packPrice.innerHTML = "$579.00";
    packageInfo.innerHTML = `<p>5 nights. Transportation provided. Meals Included. Warm Cabin (sleeps 2-3)</p>`;
  }

  modal.style.display = "block";
}

closeModal.onclick = function() {
  modal.style.display = "none";
};
