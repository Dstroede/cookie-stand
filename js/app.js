'use strict';


// // Title Image
// // const title = document.querySelector('salesPage');
// const header = document.createElement('header');
// title.appendChild(header);
// const titleText= document.createElement('h1');
// titleText.textContent = ('Salmon Cookie Sales');
// title.append(titleText);
// const img = document.createElement('img');
// img.setAttribute('src', 'img/salmon.png');
// // title.append(img);

let hours= ['6Am', '7Am','8Am', '9Am', '10Am', '11Am', '12Pm', '1Pm', '2Pm', '3Pm', '4Pm', '5Pm', '6Pm', '7Pm'];

function Location(location, min, max, avgCookies){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.hrlyCustomer = [];
  this.hrlyCookies = [];
  this.dailyCookies = 0;
}

Location.prototype.getHrlyCustomer = function(){
  for (let i = 0; i < hours.length; i++){
    this.hrlyCustomer.push(Math.floor(Math.random() * (this.max - this.min) + this.min));
  }
};

Location.prototype.getHrlyCookies = function(){
  for (let i = 0; i < hours.length; i++){
    this.hrlyCookies.push(Math.round(this.hrlyCustomer[i] * this.avgCookies));
  }
};

Location.prototype.getDailyCookies = function(){
  let dailyCookies = 0;
  for (let i = 0; i < this.hrlyCookies.length; i++){
    console.log(typeof(this.hrlyCookies[i]));
    this.dailyCookies +=  this.hrlyCookies[i];
  }
  console.log(this.dailyCookies)
};


const seattle = new Location('Seattle','23','65','6.3');
const tokyo = new Location('Tokyo','3','24','1.2');
const dubai = new Location('Dubai','11','38','3.7');
const paris = new Location('Paris','20','38','2.3');
const lima = new Location('Lima','2','16','4.6');

let locations = [seattle,tokyo,dubai,paris,lima];


const tableOne = document.querySelector('table');

function startTable(){
  let row = document.createElement('tr');
  tableOne.appendChild(row);
  const tableTop = document.createElement ('th');
  tableTop.textContent = 'Location';
  row.append(tableTop);

  for(let i=0; i< hours.length; i++){
    const hourCell  = document.createElement('th');
    hourCell.textContent = hours[i];
    row.append(hourCell);
  }
  let dT= document.createElement('th');
  row.appendChild(dT);
  dT.textContent = 'Daily Total';
}
startTable();

Location.prototype.render =function(){
// creating basic tables
  const tableOne = document.querySelector('table');

  let rowOne = document.createElement('tr');
  tableOne.append(rowOne);
  const locationName = document.createElement ('td');
  locationName.textContent = this.location;
  console.log(locationName);
  rowOne.append(locationName);



  for(let i=0; i< this.hrlyCookies.length; i++){
    const cookieCell  = document.createElement('td');
    cookieCell.textContent = this.hrlyCookies[i];
    rowOne.append(cookieCell);
  }


  const cookiesDay = document.createElement ('td');
  cookiesDay.textContent =this.dailyCookies;
  rowOne.append(cookiesDay);
};

function getTotal(){
  const tableOne = document.querySelector('table');
  const tableRow = document.createElement('tr');
  const tableHeader=document.createElement('th');
  tableHeader.textContent= 'Hourly Total';
  tableRow.append(tableHeader);

  let totals=0;
  for(let i=0; i<hours.length; i++){
    let hrlyTotals = 0;
    for(let j= 0; j<locations.length; j++){
      hrlyTotals = hrlyTotals + locations[j].hrlyCookies[i];
      totals = totals + locations[j].hrlyCookies[i];

    }
    const tableCell =document.createElement('td');
    tableCell.textContent = hrlyTotals;
    tableRow.append(tableCell);
    tableOne.append(tableRow);
  }
  const totalCell = document.createElement('td');
  totalCell.textContent = totals;
  tableRow.append(totalCell);
}



for(let i=0; i<locations.length; i++){
  locations[i].getHrlyCustomer();
  locations[i].getHrlyCookies();
  locations[i].getDailyCookies();
  locations[i].render();
}
// seattle.getHrlyCustomer();
// seattle.getHrlyCookies();
// seattle.getDailyCookies();
// seattle.render();
// console.log(seattle);


// tokyo.getHrlyCustomer();
// tokyo.getHrlyCookies();
// tokyo.getDailyCookies();
// tokyo.render();
// console.log(tokyo);


// dubai.getHrlyCustomer();
// dubai.getHrlyCookies();
// dubai.getDailyCookies();
// dubai.render();
// console.log(dubai);


// paris.getHrlyCustomer();
// paris.getHrlyCookies();
// paris.getDailyCookies();
// paris.render();
// console.log(paris);


// lima.getHrlyCustomer();
// lima.getHrlyCookies();
// lima.getDailyCookies();
// lima.render();
// console.log(lima);

getTotal();

// // Render List
// const storeList = document.querySelector('StoreProfile');

// const article = document.createElement('article');
// storeList.appendChild(article);

// const heading= document.createElement('h2');
// heading.textContent = locationOne.location;
// article.append(heading);

// const list = document.createElement('ul');
// article.appendChild(list);

// for(let i=0; i< hours.length; i++){
//   const li = document.create('li');
//   li.textContent = locationOne.hrlyCookies[i], locationOne.dailyCookies;
//   list.append(li);
// }


// const locationTwo = {
//   location: 'Tokyo',
//   minCustomer: '3',
//   maxCustomer: '24',
//   avgCookies: '1.2',
//   hrlyCustomer: [],
//   hrlyCookies: [],
//   dailyCookies: 0,

//   getHrlyCustomer:function(){
//     console.log(this.location);
//     for (let i = 0; i < hours.length; i++){
//       this.hrlyCustomer.push = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//     }

//   },

//   getHrlyCookies:function(){
//     for (let i = 0; i < hours.length; i++){
//       this.hrlyCookies.push = Math.round(this.hrlyCustomer[i] * this.avgCookies);
//     }
//   },

//   getDailyCookies:function(){
//     for (let i = 0; i < hours.length; i++){
//       this.dailyCookies += this.hrlyCookies[i];
//     }
//   }
// };
const cookieStandForm = document.querySelector('form');

cookieStandForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let location = event.target.city.value;
  console.log(location);
  let min = parseInt(event.target.min.value);
  console.log (min);
  let max = parseInt(event.target.max.value);
  console.log (max);
  let avgCookies = parseFloat(event.target.avgCookies.value);
  console.log (avgCookies);

 

  let userLocation = new Location(location, min, max, avgCookies);
  locations.push(userLocation);



  function renderSalesReport() {
    tableOne.innerHTML = '';
    startTable();
    for(let i = 0; i< locations.length; i++){
      locations[i].getHrlyCustomer();
      locations[i].getHrlyCookies();
      locations[i].getDailyCookies();
      locations[i].render();
    }
    getTotal();
  }
  renderSalesReport();

});
console.log(locations);



