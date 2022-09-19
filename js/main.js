// let episodeTitles = document.getElementsByClassName('episodeTitle')
// for (let i = 0; i < episodeTitles.length; i++) {
//   episodeTitles[i].addEventListener('click', function(){

//   })
  
// }








// scroll to top
mybutton = document.getElementById('myBtn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// -----------------
let sideMenu = document.getElementById('testScroll')

// window.onscroll = function(){
//   if (window.scrollY > 68) {
//     sideMenu.style.cssText = `
//     position: fixed;
//     //  top: 0;
//     left: 0;
//     `
//   }
// }