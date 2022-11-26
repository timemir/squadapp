// GAME LOGIC //

$(() => {
  // Getting Card API to generate and shuffle a new deck of cards.
  $.ajax({
    type: 'GET',
    url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
    dataType: 'json',
    success: (data) => {
      console.log(data);
    },
    error: () => {
      console.log('bad request');
    },
  });

  // Creating the various buttons that will interact with the game/provide the user with additional information.

  // Game Start Button: generates 52 cards.
  const $clickCard = $('<button>').text('Create Cards').addClass('gameButton');
  $('.gameButtons').append($clickCard);

  // Check Rules button to display the rule for each card.
  const $checkRules = $('<button>').text('Check Rules').addClass('gameButton');
  $('.gameButtons').append($checkRules);

  // Reset Game button that will remove the current cards from the table.
  // Currently does not reshuffle the cards when they are removed.
  const $resetGame = $('<button>').text('Reset Game').addClass('gameButton');
  $('.gameButtons').append($resetGame);

  // An empty array for the card API data to be stored in for local use.
  const card = [];

  // An object of all of the listed card rules. To be drawn on later.
  const cardRules = {
    ace: 'Sip général',
    two: '2 is YOU',
    three: '3 is Me',
    four: '4 to the floor',
    five: '5: Wenn er liegt, dann liegt er',
    six: '6: Pim Pam Pum',
    seven: '7 to heaven',
    eight: '8 is MATE',
    nine: '9 is RHYME',
    ten: '10 is CATEGORIES',
    jack: 'Jack: Make a rule',
    queen: 'Queen is QUESTION MASTER',
    king: "KING: King's Cup",
  };

  // creates an empty h5 element that the rules above will be attached to when clicking on the associated card.
  const $rule = $('<h5>').addClass('cardRule');

  // The card flipping function that will activate when clicking on a single card. It will pull the data image that is linked to the 'data-id attribute' in the initial API call.
  const flipCard = () => {
    const cardId = $(event.currentTarget).attr('data-id');
    $(event.currentTarget).toggleClass('gameCard').attr('src', card[cardId].image);
    checkWin();
  };

  // Drawing a single card at random from the deck of cards.
  $.ajax({
    type: 'GET',
    url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=52',
    dataType: 'json',
    success: (data) => {
      console.log(data);
      // Creates a for loop that appends every card image to the body
      $clickCard.on('click', (event) => {
        for (let i = 0; i < data.cards.length; i++) {
          card.push(data.cards[i]);
          console.log(card[i]);
          const $newCard = $('<img>').addClass('gameCardBack');
          $newCard.attr('src', 'https://i.imgur.com/Bhzmq1P.png');
          $newCard.attr('data-id', i);
          $newCard.on('click', flipCard);
          // save for later implementation:
          // $('.flipper').append($newCard);
          $('.gameTable').append($newCard);
          // if (data.cards[i].code === "KS" && data.cards[i].code === "KH" && data.cards[i].code === "KD" && data.cards[i].code === "KC") {
          //   alert('The Game Is Now Over!')
          // }
        }
      });
      $checkRules.on('click', (event) => {
        // creating a for loop that will append images for 13 specific cards in order to display the rules for the associated cards.
        for (let i = 0; i < data.cards.length; i++) {
          const $cardInfo = $('<img>').addClass('cardInfo').attr('src', data.cards[i].image);
          let currentImage = 0;
          const numOfImages = data.cards.length - 40;
          console.log(numOfImages);
          // Carousel functionality expanded upon from exercise done in class.
          $('.next').on('click', () => {
            // removes the current rule that is displayed
            $rule.remove();
            // hide the current image:
            $('.carousel-images').children().eq(currentImage).hide();
            // increment the currentImgIndex
            if (currentImage < numOfImages) {
              currentImage++;
            } else {
              currentImage = 0;
            }
            // show the next image:
            $('.carousel-images').children().eq(currentImage).show();
          });

          // previous button:
          $('.previous').on('click', () => {
            // removes the current rule that is displayed
            $rule.remove();
            // takes the initial index image and hides it:
            $('.carousel-images').children().eq(currentImage).hide();
            // then decrements the current img
            if (currentImage > 0) {
              currentImage--;
            } else {
              currentImage = numOfImages;
            }
            // show the previous image:
            $('.carousel-images').children().eq(currentImage).show();
          });
          // conditional statement that checks for the card code of the current card index then displays the associated image if returned true.
          if (data.cards[i].code === 'AS') {
            $('.carousel-images').append($cardInfo);
            // creates an event that displays the rules for the card when you click on it.
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.ace);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === '2C') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.two);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === '3D') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.three);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === '4H') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.four);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === '5S') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.five);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === '6C') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.six);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === '7D') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.seven);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === '8H') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.eight);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === '9S') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.nine);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === '0C') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.ten);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === 'JD') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.jack);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === 'QH') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.queen);
              $('.carousel-images').append($rule);
            });
          } else if (data.cards[i].code === 'KS') {
            $('.carousel-images').append($cardInfo);
            $cardInfo.on('click', (event) => {
              $rule.text(cardRules.king);
              $('.carousel-images').append($rule);
            });
          }
        }
      });
    },
    error: () => {
      console.log('bad request');
    },
  });

  // Creating the Check Rules Modal; will eventually contain carousel.
  // Modal outline was used from the modal exercise performed in class.
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  // Handlers
  const openModal = () => {
    $modal.css('display', 'block');
  };
  const closeModal = () => {
    $modal.css('display', 'none');
  };

  // Listeners
  $checkRules.on('click', openModal);

  $closeBtn.on('click', closeModal);

  // removes all existing cards from the gameTable but does not reshuffle the deck. The page needs to be refreshed
  $resetGame.on('click', (event) => {
    $('.gameCardBack').remove();
    $('.gameCard').remove();
  });

  // checkWin function; not fully fleshed out due to randomization of cards
  const checkWin = () => {
    const cardId = $(event.currentTarget).attr('data-id');
    if (
      card[cardId].code === 'KS'
      && card[cardId].code === 'KH'
      && card[cardId].code === 'KD'
      && card[cardId].code === 'KC'
    ) {
      alert('The Game Is Now Over!');
    }
  };
});
