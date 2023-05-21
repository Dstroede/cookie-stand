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

function Location(location, min, max, avgCookies, hrlyCustomer,hrlyCookies, dailyCookies){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.hrlyCustomer = hrlyCustomer;
  this.hrlyCookies = hrlyCookies;
  this.dailyCookies = dailyCookies;
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
  for (let i = 0; i < hours.length; i++){
    this.dailyCookies += this.hrlyCookies[i];
  }
};


const seattle = new Location('Seattle','23','65','6.3',[],[],0);
const tokyo = new Location('Tokyo','3','24','1.2',[],[],0);
const dubai = new Location('Dubai','11','38','3.7',[],[],0);
const paris = new Location('Paris','20','38','2.3',[],[],0);
const lima = new Location('Lima','2','16','4.6',[],[],0);

let locations = [seattle,tokyo,dubai,paris,lima];


Location.prototype.render =function(){
// creating basic tables
  const tableOne = document.querySelector('table');

  let rowOne = document.createElement('tr');
  tableOne.append(rowOne);
  const locationName = document.createElement ('td');
  locationName.textContent = this.location;
  console.log(locationName);
  rowOne.append(locationName);

  let cookieString = '';

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



seattle;
seattle.getHrlyCustomer();
seattle.getHrlyCookies();
seattle.getDailyCookies();
seattle.render();
console.log(seattle);

tokyo;
tokyo.getHrlyCustomer();
tokyo.getHrlyCookies();
tokyo.getDailyCookies();
tokyo.render();
console.log(tokyo);

dubai;
dubai.getHrlyCustomer();
dubai.getHrlyCookies();
dubai.getDailyCookies();
dubai.render();
console.log(dubai);

paris;
paris.getHrlyCustomer();
paris.getHrlyCookies();
paris.getDailyCookies();
paris.render();
console.log(paris);

lima;
lima.getHrlyCustomer();
lima.getHrlyCookies();
lima.getDailyCookies();
lima.render();
console.log(lima);

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

function handleSubmit(event) {
  event.preventDefault();

  let location = event.target.city.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avgCookies = event.target.avgCookies.value;

  userLocation.getHrlyCustomer();
  userLocation.getHrlyCookies();
  userLocation.getDailyCookies();

  let userLocation = new Location(location, min, max, avgCookies, this.hrlyCustomer,this.hrlyCookies, this.dailyCookies);


  userLocation.render();
}

cookieStandForm.addEventListener('submit',handleSubmit);
