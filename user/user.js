document.addEventListener('DOMContentLoaded', function() {
    // Select the button element
    var colorButton = document.getElementById('colorButton');

    // Add a click event listener to the button
    colorButton.addEventListener('click', function() {
        // Change the background color of the body to a random color
        document.body.style.backgroundColor = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
