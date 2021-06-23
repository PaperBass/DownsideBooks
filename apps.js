
// toggle navigation burger links

function topLinks() {
    let y = document.getElementById('topNavBurger');
    let x = document.getElementById('topLinks');
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.style.display = "flex";
    } else {
        x.style.display = "flex";
        y.style.display = "none";
    }
}

function bottomLinks() {
    let y = document.getElementById('bottomNavMenu');
    let x = document.getElementById('bottomLinks');
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

// end navigation burger link toggle


// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFunction()};

// Get the navbar
let navbar = document.getElementById("titleRow");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("DOMContentLoaded" , function(e) {
  console.log("Page Loaded")

  const findForm = document.forms['name'];
  if (findForm) {
      findForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const submitValue = findForm.querySelector('input[type="text"]').value;
          if (submitValue === "") {
              document.getElementsByClassName("errorMessage")[0].style.display = "block"
          } else {
              console.log(submitValue);

              const saveToLocalStorage = () => {
                  localStorage.setItem('nameInput', submitValue)
              }

              saveToLocalStorage();

              const userName = localStorage.getItem('nameInput');

              replaceName();
                  function replaceName() {
                      let name = document.getElementsByClassName("spanName");
                      for (var i = 0; i < name.length; i++) {
                          name[i].innerHTML = userName;
                      }
                  }
              displayText();
                  function displayText() {
                      let texts = document.getElementsByClassName("hidden");
                      for (var i = 0; i < texts.length; i++) {
                          texts[i].style.display = "block";
                      }
                  }

              hideIntro();
              function hideIntro() {
                      let intro = document.querySelectorAll(".intro,.errorMessage");
                      for (var i = 0; i < intro.length; i++) {
                          intro[i].style.display = "none";
                      }
                  }
              }

          });
      }
  }); 

// replaces name across all instances
const userName = localStorage.getItem('nameInput');

replaceName();
              function replaceName() {
                  let name = document.getElementsByClassName("spanName");
                  for (var i = 0; i < name.length; i++) {
                      name[i].innerHTML = userName;
                  }
              }


  



// document.getElementsByClassName("spanName").item(0).innerHTML = localStorage.getItem("nameInput");

// function toggleMenu() {
//     var x = document.getElementById('bottomNavMenu');
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }