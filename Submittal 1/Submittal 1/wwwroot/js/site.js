// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.





const name = document.querySelector(".name");


                // function to change the font color of button
    function changeFontColor() {
        let button = document.getElementById("btn"); // access the button by id
        let color = button.style.color;
            if (color == "red") { // if button color is red change it green otherwise change it to red.
                button.style.color = 'green';
            }
            else {
                button.style.color = 'red';
                    }
            }