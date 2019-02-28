
let newUser = {  
  name: "Fletcher",
  phone: "3334446666",
  email: "email@gmail.com",
  linkedin: "asdFletcher",
  twitter: "asdFletch",
  tiktok: "exampletiktoker",
  snapchat: "snapper",
  instagram: "inster",
  facebook: "facebooker",
  pinterest: "interesting"
};

let anotherNewUser = {
    name: "Fletcher1",
    phone: "3334446666",
};

let thirdNewUser = {
  "name":"Fletcher1",
  "phone":"3334446666",
  "email":"email@gmail.com",
  "linkedIn":"asdFletcher",
  "twitter":"asdFletch",
  "tiktok":"exampletiktoker",
  "snapchat":"snapper",
  "instagram":"inster",
  "facebook":"facebooker",
  "pinterest":"interesting"
};

let duplicate =  {  
  "name":"Fletcher1",
  "phone":"3334446666",
  "email":"email@gmail.com",
  "linkedIn":"asdFletcher",
  "twitter":"asdFletch",
  "tiktok":"exampletiktoker",
  "snapchat":"snapper",
  "instagram":"inster",
  "facebook":"facebooker",
  "pinterest":"interesting"
};

let contacts = [
  {  
    "name":"Fletcher1",
    "phone":"3334446666",
    "email":"email@gmail.com",
    "linkedIn":"asdFletcher",
    "twitter":"asdFletch",
    "tiktok":"exampletiktoker",
    "snapchat":"snapper",
  },
  {  
    "name":"Fletcher2",
    "phone":"3334446666",
    "email":"email@gmail.com",
    "linkedIn":"asdFletcher",
    "twitter":"asdFletch",
    "tiktok":"exampletiktoker",
    "snapchat":"snapper",
    "instagram":"inster",
    "facebook":"facebooker",
    "pinterest":"interesting"
  },
  {  
    "name":"Fletcher3",
    "phone":"3334446666",
    "email":"email@gmail.com",
    "linkedIn":"asdFletcher",
    "twitter":"asdFletch",
    "tiktok":"exampletiktoker",
    "snapchat":"snapper",
    "instagram":"inster",
    "facebook":"facebooker",
    "pinterest":"interesting"
  }
];

const userAlreadyExists = (newUser, contacts) => {
  for( let i = 0; i < contacts.length; i++){
    let matches = compareTwoPeople(newUser, contacts[i]);
    if(matches) {
      return true;
    }
  }
  return false;
}

const compareTwoPeople = (personA, personB) => {
  for( let field in personA){
    if(personA[field] !== personB[field]){
      return false;
    }
  }
  return true;
}

console.log(userAlreadyExists(newUser, contacts))
console.log(userAlreadyExists(duplicate, contacts))
console.log(userAlreadyExists(anotherNewUser, contacts))
console.log(userAlreadyExists(thirdNewUser, contacts))



