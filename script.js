// Save as script.js

// Sandhiya
// Function for search button to hide and display the hidden container for Homepage. STILL IN PROGRESS..

const searchtext = document.getElementById("searchtext");
function hideshow() {
	// pompt("clicked")

	if (searchtext.style.display != "none") {
		searchtext.style.display = "none";
	} else {
		searchtext.style.display = "block";
	}
}

// Camelia- Updated search bar for toggling the search bar visibility
// document.addEventListener("DOMContentLoaded", function () {
//   const searchButton = document.getElementById("searchbutton");
//   const searchContainer = document.querySelector(".search-container");

//   searchButton.addEventListener("click", function () {
//     searchContainer.classList.toggle("active");
//   });
// });

//Camelia- event listner for the sign up form in Homepage
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modalForm");
openModalButton.addEventListener("click", () => {
	modal.style.display = "flex";
});
closeModalButton.addEventListener("click", () => {
	modal.style.display = "none";
});
