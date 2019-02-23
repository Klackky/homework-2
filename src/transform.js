const groupAdultsByAgeRange = (people) => {
    const under20 = people.filter(person => person.age <= 20 && person.age >= 18);
    const under30 = people.filter(person => person.age > 20 && person.age <= 30);
    const under40 = people.filter(person => person.age > 30 && person.age <= 40);
    const under50 = people.filter(person => person.age > 40 && person.age <= 50);
    const olderThan50 = people.filter(person => person.age > 50);
    return people.reduce((userObj, currentPerson) => {
      if(under20.length > 0) {
        userObj[`20 and younger`] = under20;
      };
      if(under30.length > 0) {
        userObj[`21-30`] = under30;
      }
      if(under40.length > 0) {
        userObj[`31-40`] = under40;
      }
      if(under50.length > 0) {
        userObj[`41-50`] = under50;
      }
      if (olderThan50.length > 0) {
        userObj[`51 and older`] = olderThan50;
      }
      return userObj;
    },{})
  }

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;