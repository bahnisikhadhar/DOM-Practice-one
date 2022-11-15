const buttonTwo=document.querySelector(".btn--2");

function alertBtn ()
{
    alert("I love JS");
};
buttonTwo.addEventListener("click",alertBtn);

// MouseOver

const newBackgroundColor=document.querySelector(".box--3");

function changeBgColor()
{
    newBackgroundColor.style.backgroundColor= "green";
};
newBackgroundColor.addEventListener("mouseover",changeBgColor);

//------------------------------------2nd implementation------------------------------------------

const revealBtn=document.querySelector(".reveal_btn");
const hiddenContent=document.querySelector(".hidden_content");

function revealContent()
{
    if(hiddenContent.classList.contains("reveal_btn"))
    {
        hiddenContent.classList.remove("reveal_btn");
    }
    else
    {
        hiddenContent.classList.add("reveal_btn");
    }
};

revealBtn.addEventListener("click",revealContent);

//-----------------------------------3rd IMPLEMENTATION------------------------------------------------

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}