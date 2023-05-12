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
let hours= ('6Am', '7Am','8Am', '9Am', '10Am', '11Am', '12Pm', '1Pm', '2Pm', '3Pm', '4Pm', '5Pm', '6Pm', '7Pm');

const locationOne = {
  location: 'Seattle',
  minCustomer: '23',
  maxCustomer: '65',
  avgCookies: '6.3',
  totalTime: '14',
  hrlyCustomer: '',
  hrlyCookies: '',
  dailyCookies: '',

  getHrlyCustomer:function(){
    console.log(this.location);
    this.hrlyCustomer = Math.floor(Math.random() * (this.minCustomer - this.maxCustomer) + 1);
  },

  getHrlyCookies:function(){
    for (let i = 0; i < this.totalTime; i++)
      this.hrlyCookies = Math.round(this.hrlyCustomer * this.avgCookies);
  },
  
  getDailyCookies:function(){
    for (let i = 0; i < this.totalTime; i++)
      this.dailyCookies += this.hrlyCookies[i] * this.totalTime;
  }

};
console.log(locationOne);

const locationTwo = {
  location: 'Tokyo',
  minCustomer: '3',
  maxCustomer: '24',
  avgCookies: '1.2',
  totalTime: '14',
  hrlyCookies: '',
  dailyCookies: '',


};
const locationThree = {
  location: 'Dubai',
  minCustomer: '11',
  maxCustomer: '38',
  avgCookies: '3.7',
  totalTime: '14',
  hrlyCookies: '',
  dailyCookies: '',

};

const locationFour = {
  location: 'Paris',
  minCustomer: '20',
  maxCustomer: '38',
  avgCookies: '2.3',
  totalTime: '14',
  hrlyCookies: '',
  dailyCookies: '',


};
const locationFive = {
  location: 'Lima',
  minCustomer: '2',
  maxCustomer: '16',
  avgCookies: '4.6',
  totalTime: '14',
  hrlyCookies: '',
  dailyCookies: '',

};



