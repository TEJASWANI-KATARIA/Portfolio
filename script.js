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