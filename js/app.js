// let hour = []
// let seattle = {}
// starting data
// min
// max
// avg cookies


// data that we want to calculate
// cookies per hour
// customers per hour
// total for the day


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

const locationOne = {
  location: 'Seattle',
  minCustomer: '23',
  maxCustomer: '65',
  avgCookies: '6.3',
  hrlyCustomer: [],
  hrlyCookies: [],
  dailyCookies: 0,

  getHrlyCustomer:function(){
    console.log(this.location);
    for (let i = 0; i < hours.length; i++){
      this.hrlyCustomer.push = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    }

  },

  getHrlyCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.hrlyCookies.push = Math.round(this.hrlyCustomer[i] * this.avgCookies);
    }
  },

  getDailyCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.dailyCookies += this.hrlyCookies[i];
    }
  },

};


locationOne.getHrlyCustomer;
locationOne.getHrlyCookies;
locationOne.getDailyCookies;
locationOne.getSalesNumbers;
console.log ('# of cookies after 14 hours: ', locationOne.hrlyCustomer, locationOne.hrlycookies,locationOne.dailycookies);

// Render List
const storeList = document.querySelector('StoreProfile');

const article = document.createElement('article');
storeList.appendChild(article);

const heading= document.createElement('h2');
heading.textContent = locationOne.location;
article.append(heading);

const list = document.createElement('ul');
article.appendChild(list);

for(let i=0; i< hours.length; i++){
  const li = document.create('li');
  li.textContent = locationOne.hrlyCookies[i], locationOne.dailyCookies;
  list.append(li);
}


const locationTwo = {
  location: 'Tokyo',
  minCustomer: '3',
  maxCustomer: '24',
  avgCookies: '1.2',
  hrlyCustomer: [],
  hrlyCookies: [],
  dailyCookies: 0,

  getHrlyCustomer:function(){
    console.log(this.location);
    for (let i = 0; i < hours.length; i++){
      this.hrlyCustomer.push = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    }

  },

  getHrlyCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.hrlyCookies.push = Math.round(this.hrlyCustomer[i] * this.avgCookies);
    }
  },

  getDailyCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.dailyCookies += this.hrlyCookies[i];
    }
  }
};

// Render List
locationTwo.getHrlyCustomer;
locationTwo.getHrlyCookies;
locationTwo.getDailyCookies;
console.log ('# of cookies after 14 hours: ', locationTwo.hrlyCustomer, locationTwo.hrlycookies,locationTwo.dailycookies);
const storeListTwo = document.querySelector('StoreProfile');

const articleTwo = document.createElement('article');
storeListTwo.appendChild(articleTwo);

const headingTwo = document.createElement('h2');
headingTwo.textContent = locationTwo.location;
articleTwo.append(headingTwo);

const listTwo = document.createElement('ul');
articleTwo.appendChild(listTwo);

for(let i=0; i< hours.length; i++){
  const li = document.create('li');
  li.textContent = locationOne.hrlyCookies[i], locationTwo.dailyCookies;
  listTwo.append(li);
}



const locationThree = {
  location: 'Dubai',
  minCustomer: '11',
  maxCustomer: '38',
  avgCookies: '3.7',
  hrlyCustomer: [],
  hrlyCookies: [],
  dailyCookies: 0,

  getHrlyCustomer:function(){
    console.log(this.location);
    for (let i = 0; i < hours.length; i++){
      this.hrlyCustomer.push = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    }

  },

  getHrlyCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.hrlyCookies.push = Math.round(this.hrlyCustomer[i] * this.avgCookies);
    }
  },

  getDailyCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.dailyCookies += this.hrlyCookies[i];
    }
  }
};


locationThree.getHrlyCustomer;
locationThree.getHrlyCookies;
locationThree.getDailyCookies;
console.log ('# of cookies after 14 hours: ', locationThree.hrlyCustomer, locationThree.hrlycookies,locationThree.dailycookies);

// Render List
const storeListThree = document.querySelector('StoreProfile');

const articleThree = document.createElement('article');
storeListThree.appendChild(articleThree);

const headingThree = document.createElement('h2');
headingThree.textContent = locationThree.location;
articleThree.append(headingThree);

const listThree = document.createElement('ul');
articleThree.appendChild(listThree);

for(let i=0; i< hours.length; i++){
  const li = document.create('li');
  li.textContent = locationThree.hrlyCookies[i], locationThree.dailyCookies;
  listThree.append(li);
}


const locationFour = {
  location: 'Paris',
  minCustomer: '20',
  maxCustomer: '38',
  avgCookies: '2.3',
  hrlyCustomer: [],
  hrlyCookies: [],
  dailyCookies: 0,

  getHrlyCustomer:function(){
    console.log(this.location);
    for (let i = 0; i < hours.length; i++){
      this.hrlyCustomer.push = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    }

  },

  getHrlyCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.hrlyCookies.push = Math.round(this.hrlyCustomer[i] * this.avgCookies);
    }
  },

  getDailyCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.dailyCookies += this.hrlyCookies[i];
    }
  }
};


locationFour.getHrlyCustomer;
locationFour.getHrlyCookies;
locationFour.getDailyCookies;
console.log ('# of cookies after 14 hours: ', locationFour.hrlyCustomer, locationFour.hrlycookies,locationFour.dailycookies);

// Render List
const storeListFour = document.querySelector('StoreProfile');

const articleFour = document.createElement('article');
storeListFour.appendChild(articleFour);

const headingFour = document.createElement('h2');
headingFour.textContent = locationFour.location;
articleFour.append(headingFour);

const listFour = document.createElement('ul');
articleFour.appendChild(listFour);

for(let i=0; i< hours.length; i++){
  const li = document.create('li');
  li.textContent = locationFour.hrlyCookies[i], locationFour.dailyCookies;
  listFour.append(li);
}

const locationFive = {
  location: 'Lima',
  minCustomer: '2',
  maxCustomer: '16',
  avgCookies: '4.6',
  hrlyCustomer: [],
  hrlyCookies: [],
  dailyCookies: 0,

  getHrlyCustomer:function(){
    console.log(this.location);
    for (let i = 0; i < hours.length; i++){
      this.hrlyCustomer.push = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    }

  },

  getHrlyCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.hrlyCookies.push = Math.round(this.hrlyCustomer[i] * this.avgCookies);
    }
  },

  getDailyCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.dailyCookies += this.hrlyCookies[i];
    }
  }
};

locationFive.getHrlyCustomer;
locationFive.getHrlyCookies;
locationFive.getDailyCookies;

console.log ('# of cookies after 14 hours: ', locationFive.hrlyCustomer, locationFive.hrlycookies,locationFive.dailycookies);

// Render List
const storeListFive = document.querySelector('StoreProfile');

const articleFive = document.createElement('article');
storeListFive.appendChild(articleFive);

const headingFive = document.createElement('h2');
headingFive.textContent = locationFive.location;
articleFive.append(headingFive);

const listFive = document.createElement('ul');
articleFive.appendChild(listFive);

for(let i=0; i< hours.length; i++){
  const li = document.create('li');
  li.textContent = locationFive.hrlyCookies[i], locationFive.dailyCookies;
  listFive.append(li);
}
