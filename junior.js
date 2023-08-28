// Save as junior.js

//Coded by Anh- junior explorer page
//filter by bar / shows filtered section
const checkboxes = document.querySelectorAll('input[name="type"]')
// const filterBy = document.getElementById('type');
const sections = document.querySelectorAll(".junior-resources > div");

function applyFilters() {
    const selectedTypes = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    sections.forEach(section => {
      const sectionType = section.getAttribute("data-type");
      const shouldShow = selectedTypes.length === 0 || selectedTypes.includes(sectionType);
  
      section.style.display = shouldShow ? "block" : "none";
    });
  }
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", applyFilters);
  });

//toggle filters
const filterDropdown = document.querySelector('.filter-dropdown')
const customFilters = document.querySelector('.custom-filter');

customFilters.addEventListener('click', function () {
    filterDropdown.classList.toggle('active')
})

//favourite/heart toggle

const heartIcons = document.querySelectorAll('.heart-icon');

    heartIcons.forEach(heart => {
        heart.addEventListener('click', function () {
            heart.classList.toggle('red');
        });
    });


//bookmarks toggle
// const bookmarks = document.querySelectorAll('.fa-bookmark');

//     bookmarks.forEach(bookmark => {
//         bookmark.addEventListener('click', function () {
//             bookmark.classList.toggle('black');
//         });
//     });
