//resources arr
const resources = [
    {
      id: 1,
      img: 'https://media.istockphoto.com/id/1156108277/photo/history-of-science-concept-isaac-newton-and-physics.jpg?b=1&s=612x612&w=0&k=20&c=M5j84xwv-7A2Jw7MpvNlM1VQFMxqbyFWS8yHAh6sJkI=',
      name: 'KS2 Science Trivia',
      category: 'Quizzes',
      text: "Test your knowledge on Newton's forces, energy, DNA, human body, and ecosystem",
      link: 'https://www.sciencefun.org/5th-grade-trivia/'
  
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'KS3 Science Quizzes',
      category: 'Quizzes',
      text: "Unleash your inner scientist with fun and engaging quizzes on EducationQuizzes",
      link: 'https://www.educationquizzes.com/ks3/science/'
  
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/6256258/pexels-photo-6256258.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Practical Maths Situations',
      category: 'Quizzes',
      text: "Unlock the excitement of numbers and puzzles with BBC's Teach Math Challenge Quiz",
      link: 'https://www.bbc.co.uk/teach/school-radio/maths-maths-challenge-quiz-home/zb6dd6f'
  
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/6958502/pexels-photo-6958502.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: '10-Min Maths Quiz',
      category: 'Quizzes',
      text: "Quick-fire 10 min Maths practice on CGPBooks website. You snooze, you lose!",
      link: 'https://www.cgpbooks.co.uk/resources/cgp-s-free-online-10-minute-tests/free-ks3-maths-online-10-minute-tests'
  
    }
  ]
  
  
  // search function
  function performSearch() {
    //case-sensitive so have to make search queries lowercase 
    let searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
  
    const filteredResources = resources.filter(resource => resource.name.includes(searchQuery));
  
    window.location.href = `results.html?q=${encodeURIComponent(searchQuery)}`
  
    renderResources(filteredResources);
  }


document.addEventListener('DOMContentLoaded', function() {
    let submitSearch = document.querySelector('.search-btn');
    let searchInput = document.querySelector('.searchLine-container input[type="text"]');
    
    submitSearch.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
})
  
  function renderResources(resourcesList, targetElementId="search-results") {
    const targetElement = document.getElementById(targetElementId);
    targetElement.innerHTML = '';

    resourcesList.forEach((resource) => {
        const figure = document.createElement('figure');
        figure.className = 'resource-listing';
  
        const resourceImage = document.createElement('img');
        resourceImage.src = resource.img;
        resourceImage.alt = resource.name;
  
        const resourceName = document.createElement('figcaption');
        resourceName.className = 'resource-name';
        resourceName.textContent = resource.name;
  
        const resourceText = document.createElement('p');
        resourceText.className = 'resource-text';
        resourceText.textContent = resource.text;
  
        const resourceButton = document.createElement('button');
        resourceButton.href = resource.link;
        resourceButton.className = 'explore-here';
        resourceButton.textContent = 'Explore Here';

        figure.appendChild(resourceImage);
        figure.appendChild(resourceName);
        figure.appendChild(resourceText);
        figure.appendChild(resourceButton);
  
        targetElement.appendChild(figure)
  
    })
  }
  
  //a way to get the user input from the URL into a variable that we can use
  const currentURL = new URL(window.location.href);
  if (currentURL?.searchParams) {
      const userInput = currentURL.searchParams.get('q');
      console.log('User Input:', userInput);
      if (userInput != null) {
          //need to use this variable to filter the resources arr for matching resources titles
          const filteredResources = resources.filter((resource) => {
              return resource.name.toLowerCase().includes(userInput)
          })
          //pass the filtered arr we just made into the renderSearch function to display the filtered resources
          renderResources(filteredResources);
  
      }
  }
  