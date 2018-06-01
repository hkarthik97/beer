const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = '';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


var request = new XMLHttpRequest();
request.open('GET', 'http://starlord.hackerearth.com/beercraft', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = beer.style;
      const h2 = document.createElement('h2');
      h2.textContent = beer.abv*100 ;

      const p = document.createElement('p');
      beer.description = beer.name.substring(0, 300);
      p.textContent = `${beer.name}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
