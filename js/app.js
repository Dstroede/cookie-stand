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
const img = document.createElement('img');
img.setAttribute('src', 'images/salmon.png');
article.append(img);
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

  getSalesNumbers:function(){
    const article = document.createElement('article');
    section.appendChild(article);

    const heading = document.createElement('h2');
    heading.textContent =this.location;

    const list = document.createElement('ul');
    article.appendChild(list);
  },
};


locationOne.getHrlyCustomer;
locationOne.getHrlyCookies;
locationOne.getDailyCookies;
locationOne.getSalesNumbers;
console.log ('# of cookies after 14 hours: ', locationOne.hrlyCustomer, locationOne.hrlycookies,locationOne.dailycookies);

const storeList= document.querySelector('StoreProfile')

const article = document.createElement('article');
    storeList.appendChild(article);

    const heading = document.createElement('h2');
    h2.textContent = locationOne.location;
    article.append(h2)

    const list = document.createElement('ul');
    article.appendChild(list);
    
for(let i=0; i< hours.length; i++){
    const li = document.create('li')
    li.textContent = locationOne.hrlyCookies[i], locationOne.dailyCookies
    list.append(li)
}
const img = document.createElement('img');
img.setAttribute('src', 'images/salmon.png');
article.append(img);




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


locationTwo.getHrlyCustomer;
locationTwo.getHrlyCookies;
locationTwo.getDailyCookies;
console.log ('# of cookies after 14 hours: ', locationTwo.hrlyCustomer, locationTwo.hrlycookies,locationTwo.dailycookies);
const storeList= document.querySelector('StoreProfile')

const article = document.createElement('article');
    storeList.appendChild(article);

    const heading = document.createElement('h2');
    h2.textContent = locationTwo.location;
    article.append(h2)

    const list = document.createElement('ul');
    article.appendChild(list);
    
for(let i=0; i< hours.length; i++){
    const li = document.create('li')
    li.textContent = locationOne.hrlyCookies[i], locationTwo.dailyCookies
    list.append(li)
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

const storeList= document.querySelector('StoreProfile')

const article = document.createElement('article');
    storeList.appendChild(article);

    const heading = document.createElement('h2');
    h2.textContent = locationThree.location;
    article.append(h2)

    const list = document.createElement('ul');
    article.appendChild(list);
    
for(let i=0; i< hours.length; i++){
    const li = document.create('li')
    li.textContent = locationThree.hrlyCookies[i], locationThree.dailyCookies
    list.append(li)
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

const storeList= document.querySelector('StoreProfile')

const article = document.createElement('article');
    storeList.appendChild(article);

    const heading = document.createElement('h2');
    h2.textContent = locationFour.location;
    article.append(h2)

    const list = document.createElement('ul');
    article.appendChild(list);
    
for(let i=0; i< hours.length; i++){
    const li = document.create('li')
    li.textContent = locationFour.hrlyCookies[i], locationFour.dailyCookies
    list.append(li)
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

const storeList= document.querySelector('StoreProfile')

const article = document.createElement('article');
    storeList.appendChild(article);

    const heading = document.createElement('h2');
    h2.textContent = locationFive.location;
    article.append(h2)

    const list = document.createElement('ul');
    article.appendChild(list);
    
for(let i=0; i< hours.length; i++){
    const li = document.create('li')
    li.textContent = locationFive.hrlyCookies[i], locationFive.dailyCookies
    list.append(li)
}