// const heading = document.getElementById('heading');
// const text = heading.textContent;
// heading.innerHTML = '';

// for (let i = 0; i < text.length; i++) {
//   const span = document.createElement('span');
//   span.textContent = text[i];
//   span.style.animationDelay = `${i * 0.1}s`;
//   heading.appendChild(span);
// }
const heading = document.getElementById('heading');
const text = heading.textContent;
heading.innerHTML = '';

const words = text.split(' ');

for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
    const span = document.createElement('span');
    span.textContent = words[i][j];
    span.style.animationDelay = `${(i * words[i].length + j) * 0.1}s`;
    heading.appendChild(span);
  }
  if (i < words.length - 1) {
    const spaceSpan = document.createElement('span');
    spaceSpan.innerHTML = '&nbsp;';
    spaceSpan.style.animationDelay = `${(i * words[i].length + words[i].length) * 0.1}s`;
    heading.appendChild(spaceSpan);
  }
}  


// ------ project section work ------- 
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const span = document.getElementsByClassName("close")[0];

document.querySelectorAll(".pro button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    const titles = [ "Swap Spot", "JS Mini-projects", "Portfolio","Inventory Management" ];
    const descriptions = [
    "Swap Spot is a dedicated platform for Banasthali Vidyapith students and staff, designed to facilitate easy buying, selling, and exchanging of items within the campus community. Currently an ongoing project, it aims to foster a seamless and secure environment for users to list items, find deals, and connect with others. With a focus on convenience and trust, Swap Spot enables members to trade everything from textbooks and stationery to gadgets and clothing, promoting a sustainable and student-friendly marketplace.",
    "Created interactive web apps using JavaScript, HTML, and CSS. Projects included tic-tac-toe, zero-cross, and a currency converter. Demonstrated skills in game logic, UI design, API integration, and problem-solving.",
    "project showcasing web development skills using HTML, CSS, JavaScript.Features responsive design, customizable theme, project showcase, skills section, contact form.Demonstrates proficiency in frontend development, problem-solving, and attention to detail.", "Developed a .NET-based application software for inventory management. Key features include item tracking, purchase/sales orders, stock alerts. Gained experience in .NET development, and user interface design."
    
    ];

    modalTitle.textContent = titles[index];
    modalDescription.textContent = descriptions[index];
  });
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ----- end of project section work ------- 
    