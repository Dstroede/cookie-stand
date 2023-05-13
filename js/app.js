


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
    this.hrlyCustomer.push = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  }
};

Location.prototype.getHrlyCookies = function(){
  for (let i = 0; i < hours.length; i++){
    this.hrlyCookies.push = Math.round(this.hrlyCustomer[i] * this.avgCookies);
  }
};

Location.prototype.getDailyCookies = function(){
  for (let i = 0; i < hours.length; i++){
    this.dailyCookies += this.hrlyCookies[i];
  }
};

Location.prototype.render =function(){
  let tableRow= document.createElement('tr');

  const locationName = document.createElement ('td');
  locationName.textContent =this.name;
  tableRow.append(locationName);
  
  let hoursString = [];

  for(let i=0; i< this.hrlyCookies.length; i++){
    hourString += this.hrlyCookies[i];

  }
  const
}

const seattle = new Location('Seattle','23','65','6.3',[],[],0,)
const tokyo = new Location('Tokyo','3','24','1.2',[],[],0,)
const dubai = new Location('Dubai','11','38','3.7',[],[],0)
const paris = new Location('Paris','20','38','2.3',[],[],0)
const lima = new Location('Lima','2','16','4.6',[],[],0)



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


