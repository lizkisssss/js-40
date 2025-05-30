        const myButton = document.getElementById('myButton');
        const myInput = document.getElementById('myInput');

        myButton.addEventListener('click', () => {
            myButton.textContent = myInput.value;
        });

        const myImage = document.getElementById('myImage');
        const newImageUrl = '';
        myImage.src = newImageUrl;

        const myLink = document.getElementById('myLink');
        const imageWithAlt = document.getElementById('imageWithAlt');

        imageWithAlt.alt = 'Image with added atributs'; 

        const myList = document.getElementById('myList');
        const firstListItem = myList.firstElementChild; 
        if (firstListItem) {
            firstListItem.textContent = 'This text was changed JavaScript';
        }