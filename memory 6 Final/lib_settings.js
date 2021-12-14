"use strict";

var gamesApp = gamesApp || {};

gamesApp.settings = {
    //the get functions, retrieve the player name and the number of images from the session storage
    //the set functions, save the player name and the number of images in the session storage. 
    getPlayerName: function() {
       return sessionStorage.playerName || "";
    },

    setPlayerName: function(name) {
        console.log(name, sessionStorage)
        sessionStorage.playerName = name;
        console.log(name, sessionStorage)
    },

    getNumberOfImages: function() {
        return parseInt(sessionStorage.numImages) || 24;
    },

    setNumOfImages: function(number) {
        sessionStorage.numImages = number || 24
    },

    //the shuffleArray function will shuffle the entire array of images using a Math object functions.
    //we have two array variables (suffx1 and suffx2) that will store the array after its been shuffled. 
    //We will use a for loop to iterate through every card in the array and replace
    //its placement with whatever the random number was generated. The random number can not be higher than the amount of cards in play. 
    //As the loop iterates, each position for each card is saved in temp array and then pushed into the suffx array at the end. 
    //when the first loop reaches its end, it will run through an another loop to randomly place the second set of cards. 
    shuffleArray: function(array,num){
        console.log(num)
        var suffx2 = []
        var suffx1 = []

        for (let i = 0; i < num; i++) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            suffx2.push(temp);
            if(i==(num-1)){
                for (let k = 0; k < suffx2.length; k++) {
                    var j = Math.floor(Math.random() * (k + 1));
                    var temp = array[k];
                    array[k] = array[j];
                    array[j] = temp;
                    suffx1.push(temp);
                }
            }
        }
        return [...suffx2,...suffx1]
    },
    //this function takes the array of the images that were shuffled using the shuffleArray function, it uses a for loop to iterate 
    //through every image and create an image element, then it creates a div element for every image and gives it a class "back"
    //and appends every image to the div with that class. 
    startGame: function(array){
        for (var i = 0; i < array.length; i++) { 
            var img = document.createElement("img");
            var placeholderImage = document.createElement("img");
            var placeholder = document.createElement('div');
            placeholderImage.src = './images/back.png';
            placeholderImage.classList.add('back')
            img.src = './images/'+array[i];
            placeholder.append(placeholderImage,img)
            $('#demo').append(placeholder);
        }
        
    }

}