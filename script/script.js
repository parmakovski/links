const giphyBackgrounds = [
    'https://media.giphy.com/media/qrRPqdtDCEFKEK5Img/giphy.gif',
    'https://media.giphy.com/media/jlcuaCZFL3UIqGnXDA/giphy.gif',
    'https://media.giphy.com/media/xIaMNpNRO1I921opR9/giphy.gif',
    'https://media.giphy.com/media/CPSywg1B4bB4OrX1cN/giphy.gif',
    'https://media.giphy.com/media/pEbI4W8jgOlJp4aT8u/giphy.gif',
    'https://media.giphy.com/media/QOoVR0fp5ABLz6A0Sm/giphy.gif',
    'https://media.giphy.com/media/oPzdNHzvFbD49McBI1/giphy.gif'
  ];
  
function pickGiphyBackround () {
    const randomNumber = Math.random();
  
    let randomIndex = '';
  
    if (randomNumber >= 0 && randomNumber < 1 / 7) {
        randomIndex = 0;
    } else if (randomNumber >= 1/7 && randomNumber < 2/7) {
        randomIndex = 1;
    } else if (randomNumber >= 2/7 && randomNumber < 3/7) {
        randomIndex = 2;
    } else if (randomNumber >= 3/7 && randomNumber < 4/7) {
        randomIndex = 3;
    } else if (randomNumber >= 4/7 && randomNumber < 5/7) {
        randomIndex = 4;
    } else if (randomNumber >= 5/7 && randomNumber < 6/7) {
        randomIndex = 5;
    } else if (randomNumber >= 6/7 && randomNumber < 1) {
        randomIndex = 6;
    } 
    return randomIndex;
  }
  
  const theChosen = pickGiphyBackround ();
  const theUrl = giphyBackgrounds [theChosen];
  document.querySelector('.page').style.background = `url('${theUrl}')`;