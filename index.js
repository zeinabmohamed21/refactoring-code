// Get the button  
const backToTopButton = document.getElementById('backToTop');  

// Show the button when scrolling down  
window.onscroll = function() {  
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {  
        backToTopButton.style.display = "block";  
    } else {  
        backToTopButton.style.display = "none";  
    }  
};  

// Scroll to top when the button is clicked  
backToTopButton.onclick = function() {  
    window.scrollTo({  
        top: 0,  
        behavior: 'smooth'    
    });  
};  