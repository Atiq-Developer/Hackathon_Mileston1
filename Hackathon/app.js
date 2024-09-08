// Select the skill list element with type casting to HTMLElement
var skilllist = document.querySelector(".skills");
function HideSkills() {
  if (skilllist) {
    // Toggle the 'hide' class on the skill list
    skilllist.classList.toggle("hide");
  } else {
    console.error("Skill list element not found");
  }
}
