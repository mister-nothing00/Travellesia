


document.addEventListener("DOMContentLoaded", function() {
 
  window.addEventListener("load", function() {
      const loader = document.getElementById('loader');
      const content = document.getElementById('content');
      
      loader.style.display = 'none'; 
      content.style.display = 'block'; 
      document.body.style.overflow = 'auto'; 
  });


  const userSpan = document.querySelector(".user");
  const benvenutoContainer = document.getElementById("benvenuto");


  window.updateWelcomeMessage = function(event) {
     
    event.preventDefault(); 

      const userNameInput = document.getElementById("userNameInput");
      const userName = userNameInput.value.trim();
      
      if (userName) {
          userSpan.innerHTML =`<span class="title-benvenuto ">Benvenuto</span>  <span class="user"></span>  ${userName} `;
          benvenutoContainer.classList.add("visible");

          benvenutoContainer.style.padding= "80px 0 0 0"
          
      }
    }
});

const jumbotron = document.getElementById('jumbotron');
jumbotron.classList.add('show');