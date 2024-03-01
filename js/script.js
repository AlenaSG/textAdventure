
        
        function greeting(){
          alert("Whatch Out!");
       }
          
          let d =new Date().toUTCString();
          
          var i = 0;
          var txt = `Today ${d}, you are trying to escape... from LWTech parking lot!`; /* The text */
          var speed = 50; /* The speed/duration of the effect in milliseconds */
          
          window.onload = function typeWriter() {
              if (i < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
              }
            }


    function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode");
    }