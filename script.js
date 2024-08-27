// ===============================nav=========================
// var tl=gsap.timeline()

// tl.from(".nav__items li",{
//   y:-30,
//   opacity:0,
//   duration:1,
//   delay:0.5,
//   stagger:0.3,
// })

// tl.from(".content h1",{
//   x:5,
//   duration:3,
//   delay:1,
//   scale:0.8,
  
// })
// tl.from(".content a",{
//   x:5,
//   duration:3,
//   delay:1,
//   scale:0.9,
  
  
// })

// Function to check if the screen width is for laptops or larger
function isLaptopOrLarger() {
  return window.matchMedia("(min-width: 769px)").matches;
}

// Function to initialize GSAP animations
function initializeAnimations() {
  var tl = gsap.timeline();


  tl.from(".nav__items li", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
  });

  tl.from(".content h1", {
    x: 5,
    duration: 3,
    delay: 1,
    scale: 0.8,

    
   
  });
  tl.to(".content h1",{
    opacity: 0,
    duration:1,
  })

  tl.from(".content a", {
    x: 5,
    duration: 3,
    delay: 1,
    scale: 0.9,
  });
}

// Apply animations only if the screen size matches
if (isLaptopOrLarger()) {
  initializeAnimations();
}

// Re-check on window resize
window.addEventListener('resize', function() {
  if (isLaptopOrLarger()) {
    initializeAnimations();
  }
});


// ===============================nav end=========================
// =====================elastic=============================================
var path=`M 10 100 Q 500 100 990 100`
var finalpath=`M 10 100 Q 500 100 990 100`
var string=document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
  path=`M 10 100 Q ${dets.x} ${dets.y} 900 100`
  gsap.to("svg path",{
    attr:{d:path},
    duration:0.2,
    ease:"power3.out",
  })
})
string.addEventListener("mouseleave",function(){
  gsap.to("svg path",{
    attr:{d:finalpath},
    duration:1.5,
    ease: "elastic.out(1,0.2)",
  })
})

// =====================elastic end=============================================
// =====================illu=============================================
gsap.from(".illu img",{
  y:500,
  
  delay:2,
  duration:2,
  // scrub:true,
  yoyo:true,
  repeat:2,
 
  scrub:true,
  ease:"elastic.out(1,0.3)",
  scrollTrigger:{
    trigger:".illu img",
    
    
  }
  
})
// =====================illu end=============================================

// ======================hamburger===============================


const navItems = document.querySelector(".nav__items");
const navOpenbtn = document.querySelector("#open__nav-btn");
const navClosebtn = document.querySelector("#close__nav-btn");

const openNav = () => {
  navItems.style.display = "flex";
  navOpenbtn.style.display = "none";
  navClosebtn.style.display = "inline-block";
}

const closeNav = () => {
  navItems.style.display = "none";
  navOpenbtn.style.display = "inline-block";
  navClosebtn.style.display = "none";
}

navOpenbtn.addEventListener("click", openNav);
navClosebtn.addEventListener("click", closeNav);



// ======================hamburger ends ===============================
// ====================category==============
var category=document.querySelector(".category")
var cursor=document.querySelector(".category img")
category.addEventListener("mouseenter", function(){
  cursor.style.opacity=1;
})
category.addEventListener("mouseleave", function(){
  cursor.style.opacity=0;
})
category.addEventListener("mousemove",function(dets){
  
  gsap.to(cursor,{
    x:dets.x+"px", 
    y:dets.y+"px",
   
    ease: "power3.out",
    
  })
})




// =========================================post================


gsap.from(".post__thumbnail", {
  x:300,
  stagger:0.3,
  delay:2,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".post__thumbnail",
    start:"+=2",
    end: "+=10",
    
    ease:"elastic.out(1,0.3)",
  }
})

gsap.from(".post__info", {
  x:300,
  stagger:0.3,
  delay:3,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".post__info",
    start:"+=2",
    end: "+=10",
    
    ease:"elastic.out(1,0.3)",
  }
})
gsap.from(".post__title", {
  x:300,
  stagger:0.3,
  delay:4,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".post__title",
    start:"+=2",
    end: "+=10",
    
    ease:"elastic.out(1,0.3)",
  }
})
gsap.from(".post__body", {
  x:300,
  stagger:0.3,
  delay:5,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".post__body",
    start:"+=2",
    end: "+=10",
    
    ease:"elastic.out(1,0.3)",
  }
})
gsap.from(".post__author", {
  x:300,
  stagger:0.3,
  delay:6,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".post__author",
    start:"+=2",
    end: "+=10",
    
    ease:"elastic.out(1,0.3)",
  }
})
// ============================================post end===================================================
// ============================================blog redirect===================================================


// ============================================blog redirect end===================================================



//  =========================category search=============================================== 
function filterPosts(category) {
  // Get all posts
  const posts = document.querySelectorAll('.post');
  
  // Loop through posts and highlight based on category
  posts.forEach(post => {
    if (post.getAttribute('data-category') === category) {
      post.classList.add('highlight');
      post.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      post.classList.remove('highlight');
    }
  });
}

//  =========================category search end=============================================== 
//  =========================search =============================================== 
document.addEventListener('DOMContentLoaded', () => {
  const phrases = ["exploring","art", "beauty", "mysteries", "wildlife","travel","food","music","science & technology",];
  const suggestionsList = document.getElementById('suggestions');
  const searchBox = document.getElementById('search-box');

  function populateSuggestions(query) {
      suggestionsList.innerHTML = '';
      if (query) {
          const filteredPhrases = phrases.filter(phrase => phrase.toLowerCase().includes(query.toLowerCase()));
          filteredPhrases.forEach(phrase => {
              const li = document.createElement('li');
              li.textContent = phrase;
              li.addEventListener('click', () => handleSuggestionClick(phrase));
              suggestionsList.appendChild(li);
          });
          suggestionsList.style.display = 'block';
      } else {
          suggestionsList.style.display = 'none';
      }
  }

  searchBox.addEventListener('input', function() {
      populateSuggestions(this.value);
  });

  function handleSuggestionClick(phrase) {
      searchBox.value = phrase;
      suggestionsList.style.display = 'none';

      document.querySelectorAll('.highlight').forEach(el => {
          el.classList.remove('highlight');
          el.innerHTML = el.innerHTML.replace(/<\/?mark>/g, '');
      });

      document.querySelectorAll('.post').forEach(content => {
          const regex = new RegExp(`(${phrase})`, 'gi');
          content.innerHTML = content.innerHTML.replace(regex, '<mark class="highlight">$1</mark>');
      });
  }

  document.addEventListener('click', function(event) {
      if (!searchBox.contains(event.target) && !suggestionsList.contains(event.target)) {
          suggestionsList.style.display = 'none';
      }
  });
});


//  =========================search end=============================================== 
//  =========================comment end=============================================== 
const userId={
  name:null,
  identity:null,
  image:null,
  Message:null,
  date:null
}
const userComment=document.querySelector(".usercomment");
const publishBtn=document.querySelector("#publish");
const comment=document.querySelector(".comments");
const userName=document.querySelector(".user");
userComment.addEventListener("input",e=>{
  if(!userComment.value){ 
    publishBtn.setAttribute("disabled","disabled");
    publishBtn.classList.remove("abled")

  }else{
    publishBtn.removeAttribute("disabled")
    publishBtn.classList.add("abled")
  }
})
function addPOst(){
  console.log("the button wirks")
 if(!userComment.value)return;
 userId.name=userName.value;
 if(userId.name==="Anonymous"){
  userId.identity=false;
  userId.image="images/user.png";
 }else{
  userId.identity=true;
  userId.image="images/user.png";
 }
}
publishBtn.addEventListener("click",addPOst())

//  =========================comment end=============================================== 


document.getElementById("explore-link").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.querySelector("#featured").scrollIntoView({
    behavior: "smooth" // Smooth scrolling
  });
});
document.getElementById("blog").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.querySelector("#featured").scrollIntoView({
    behavior: "smooth" // Smooth scrolling
  });
});

    
   
 