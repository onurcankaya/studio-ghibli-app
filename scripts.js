const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// create a request variable and assign a new XMLHttpRequest object to it
var request = new XMLHttpRequest()

// open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
  // begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(film => {
      // create a div with a card class
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      // create an h1 and set the text content to the film's title
      const title = document.createElement('h1')
      title.textContent = film.title

      // create a p and set the text content to the film's description
      const description = document.createElement('p')
      description.textContent = `${film.description.substring(0, 300)}...`

      // append the cards to the container element
      container.appendChild(card)
      card.appendChild(title)
      card.appendChild(description)

      console.log(film.title)
    })
  } else {
    console.log('error')
  }
}

// send request
request.send()
