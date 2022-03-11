const cardArray = [
  {
    name: 'sdec',
    img: 'images/sdec.png', 
  },
  {
    name: 'havardex',
    img: 'images/harvardex.png', 
  },
  {
    name: 'huskies',
    img: 'images/huskies.png', 
  },
  {
    name: 'mfa',
    img: 'images/mfa.png', 
  },
  {
    name: 'pdf-logo',
    img: 'pdf-logo.jpg', 
  },
  {
    name: 'UofW',
    img: 'images/UofW.png', 
  },
  {
    name: 'sunset',
    img: 'images/sunset.jpg', 
  },
  {
    name: 'pencils',
    img: 'images/pencils.jpg', 
  },
  {
    name: 'sdec',
    img: 'images/sdec.png', 
  },
  {
    name: 'havardex',
    img: 'images/harvardex.png', 
  },
  {
    name: 'huskies',
    img: 'images/huskies.png', 
  },
  {
    name: 'mfa',
    img: 'images/mfa.png', 
  },
  {
    name: 'pdf-logo',
    img: 'pdf-logo.jpg', 
  },
  {
    name: 'UofW',
    img: 'images/UofW.png', 
  },
  {
    name: 'sunset',
    img: 'images/sunset.jpg', 
  },
  {
    name: 'pencils',
    img: 'images/pencils.jpg', 
  },

]

// An advanced 'trick' for creating a random selection Remember this!
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

console.log(gridDisplay)

function createBoard () {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/octocat.png')
    gridDisplay.appendChild(card)

  }
}

createBoard()







