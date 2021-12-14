"use strict";

$(document).ready(() => {
    let settings = gamesApp.settings;
    let scores = gamesApp.scores;
    let cards = gamesApp.cards;    
    $("#tabs").tabs();

    let name = "";
    let numberOfCards = "";

    //get the player name and the number of images from the session storage 
    name = settings.getPlayerName();
    numberOfCards = settings.getNumberOfImages();
    
    //display player name and number of images in the game 
    $("#player_name").val(name);
    $("#num_cards").val(parseInt(numberOfCards) * 2);
    
    //when the user clicks on save button, the user's name and the number of cards is saved in session storage
    $("#save_settings").click(() => {
        const playerName = $("#player_name").val();
        const numberOfImages = $("#num_cards").val();

        settings.setPlayerName(playerName);
        settings.setNumOfImages(numberOfImages/2);
        window.location.reload();
    });
    $("ul[role='tablist'] li").click( function(){
        if($(this).find('a').text() == 'Play Game'){
            $('#player').html(name+'<br/>'+numberOfCards)
        }
    })
    var CheckImages = [];
    $(document).on('click','.back', function(){
        $(this).addClass('selected')
        var SelectFlip = $(this).siblings().attr('src');
        CheckImages.push(SelectFlip);
        if($('.selected').length == 2){
            // setTimeout(()=>{
                if(CheckImages[0] === CheckImages[1]){

                    var getScore = $('#high_score').text();

                    if(getScore == ''){
                        $('#high_score').text(scores.score(0))
                    }else{
                        $('#high_score').html(scores.score(parseInt(getScore)))
                    }
                    if(settings.getNumberOfImages() == parseInt($('#high_score').text())){
                     alert('you win')   
                    }
                    setTimeout(()=>{
                        $('.selected').parents().addClass('matched')
                    },400)
                    $('.selected').parents().addClass('hide');
                    setTimeout(()=>{
                        $('.selected').removeClass('selected')
                    },500)

                    CheckImages = [];
                }else{
                    setTimeout(()=>{
                        $('.selected').removeClass('selected')
                    },500)
                    CheckImages = [];
                }
                // 
            // })

 
        }
    })


});