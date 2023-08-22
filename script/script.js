// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

//email validation

      function validateEmail(email) {
        let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return res.test(email);
      }
      function validate() {
        let result = $("#result");
        let email = $("#email").val();
        result.text("");
        if(validateEmail(email)) {
          result.text(email + " is valid");
          result.css("color", "blue");
        } else {
          result.text(email + " is not valid");
          result.css("color", "red");
        }
        return false;
      }
      $("#validate").on("click", validate);
 

   