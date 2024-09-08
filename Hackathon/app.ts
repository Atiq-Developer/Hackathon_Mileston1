// Select the skill list element with type casting to HTMLElement
let skilllist = document.querySelector(".skills") as HTMLElement | null;

function HideSkills(): void {
  if (skilllist) {
    // Toggle the 'hide' class on the skill list
    skilllist.classList.toggle("hide");
  } else {
    console.error("Skill list element not found");
  }
}
