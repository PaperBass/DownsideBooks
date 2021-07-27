
 


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


// scrolling script
window.onscroll = function () { scrollFunction() };


let navbar = document.getElementById("burger");

let burger = document.getElementById('topNavBurger');


let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
    console.log(sticky)
    console.log(window.pageYOffset)
   console.log(window.pageYOffset > sticky ? 'true' : 'false')
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
        burger.style.opacity = "0.5";
        let y = document.getElementById('topNavBurger');
        let x = document.getElementById('topLinks');
            
                x.style.display = "none";
                y.style.display = "flex";
            

    } else {
        navbar.classList.remove("sticky");
        burger.style.opacity = "1";
        let y = document.getElementById('topNavBurger');
        let x = document.getElementById('topLinks');
    
            x.style.display = "flex";
            y.style.display = "none";
            
    }
}

window.addEventListener("DOMContentLoaded", function (e) {
    console.log("Page Loaded")

    const findForm = document.forms['takeName']; // finds the 'name' form in index.html

    if (findForm) { // if the form is found, this function operates
        findForm.addEventListener('submit', function (e) { // the function includes an event listener for the submit button
            e.preventDefault(); // prevents the page's attempt to save to server which loads a 404
            const submitValue = findForm.querySelector('input[type="text"]').value; //creates a constant with the value of the text field in the name form
            if (submitValue === "") {
                return false;
                // document.getElementsByClassName("errorMessage")[0].style.display = "block" // if the value is empty, an error message is displayed
            } else {
                console.log(submitValue);

                const saveToLocalStorage = () => {
                    localStorage.setItem('nameInput', submitValue)
                } // if value="" is false, console log the value and create save to local storage function which saves value in local storage

                saveToLocalStorage(); //use local storage function

                const userName = localStorage.getItem('nameInput'); //assign a constant for the local storage element

                
                function replaceName() {
                    let name = document.getElementsByClassName("spanName");
                    for (var i = 0; i < name.length; i++) {
                        name[i].innerHTML = userName;
                    }
                } // use local storage element to replace text within spanName class
                replaceName();

                
                function displayText() {
                    let texts = document.getElementsByClassName("hidden");
                    for (var i = 0; i < texts.length; i++) {
                        texts[i].style.display = "block";
                    }
                } // display website
                displayText();

                
                function hideIntro() {
                    let intro = document.querySelectorAll(".intro,.errorMessage");
                    for (var i = 0; i < intro.length; i++) {
                        intro[i].style.display = "none";
                    }
                }// hide introduction
                hideIntro();
            } 

            
            function removeCover() {
                document.body.style.backgroundImage = "none";
                document.body.style.backgroundImageSize = "none";
            }
            removeCover();

            function welcomeMessage() {
                document.getElementById('welcome').style.display = "flex";
                document.getElementById('welcomeBack').style.display = "none";
            }
            welcomeMessage();

        });
    }
});

// replaces name across all instances outside of intro javascript funtion
const userName = localStorage.getItem('nameInput');


function replaceName() {
    let spanName = document.getElementsByClassName("spanName");
    for (var i = 0; i < spanName.length; i++) {
        spanName[i].innerHTML = userName;
        // spanName[i].value = userName; //if a name has been saved in local storage, the name will appear in intro submit field
    }
}

replaceName();


function rememberUser() {
    if (userName) {

        function displayText() {
            let texts = document.getElementsByClassName("hidden");
            for (var i = 0; i < texts.length; i++) {
                texts[i].style.display = "block";
            }
        } // display website
        displayText();

        function welcomeBackMessage() {
            document.getElementById('welcome').style.display = "none";
            document.getElementById('welcomeBack').style.display = "flex";
        }
        welcomeBackMessage();
        

        function hideIntro() {
            let intro = document.querySelectorAll(".intro");
            for (var i = 0; i < intro.length; i++) {
                intro[i].style.display = "none";
            }
        }
        hideIntro();


        function removeCover() {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundImageSize = "none";
        }
        removeCover();
    } // hide introduction
  
};
rememberUser();










// document.getElementsByClassName("spanName").item(0).innerHTML = localStorage.getItem("nameInput");

// function toggleMenu() {
//     var x = document.getElementById('bottomNavMenu');
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }