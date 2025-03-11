const heading = document.querySelector('#main-heading');
// inline styling
//heading.style.color = 'blue';

const skills = document.querySelectorAll('.skills');

//skills.style.fontSize = '2rem';

for( i = 0; i > skills.length; i++) {
    skills.style[i].fontSize = '8rem';   
}

console.log(skills);
//