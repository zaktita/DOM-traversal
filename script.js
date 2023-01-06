let gparent = document.getElementById('grandparent')
let parent = document.getElementById('parent')
let btn = document.getElementById('btn')


let i = 0;

btn.addEventListener('click', () => {  
  if (i > parent.children.length-1) {
      i = 0;
      Array.from(parent.children).forEach(element => {
          element.style.backgroundColor = 'aqua';
        });        
    } 
    else {
      parent.children[i].style.backgroundColor = 'red';
    i++;
  }
});



