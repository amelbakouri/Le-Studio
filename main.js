//  Javascript Slider


let btn = document.querySelectorAll('.btn')
let img = document.querySelectorAll('.image ul li')
let calc 

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{

    const imgActive = document.querySelector('.active')
    const curentIndex = [...img].indexOf(imgActive)
    if (btn[i].id=='next') {
        calc = 1 
    }
    else {
        calc = -1
    }

    let index = curentIndex + calc

    if (curentIndex == 0 && btn[i].id == 'prev') {
        index = img.length - 1 
    }
    else if (curentIndex == img.length - 1 && btn[i].id == 'next') {
        index = 0 
    }

    img[index].classList.add('active')
    imgActive.classList.remove('active')
    })
    
    
}


//  Javascript dropdown 

  function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
    // bonus
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
      }); 
    })
     
  }
  toggleMenu();