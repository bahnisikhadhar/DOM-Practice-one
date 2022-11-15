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
    // checks whether it has reveal_btn in css. if present tht means the hidden text is displayed so we will remove reveal_btn to make it display none again
    {
        hiddenContent.classList.remove("reveal_btn");
    }
    else
    // if reveal_btn not present in css then its hidden_content only and that means it is display none,so,will add reveal_btn in this section so that it becomes display block and we can see the text which is hidden
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