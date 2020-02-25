//idea: "build up" each account as we go through the account list array
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  //copy first account
  //remember JavaScript is pass by reference so we need to clone the array
  let foundAccounts = [];
  foundAccounts[0] = [...accounts[0]];
  let addingSiblings = false;
  let whichAccount = -1;
  for (let account of accounts) {
    console.log("current account");
    console.log(account);
    console.log("account length is " + account.length);
    for (let x = 1; x < account.length; x++) {
      if (addingSiblings && whichAccount != -1) {
        foundAccounts[whichAccount].push(account[x]);
      }
      //check if the email has already been discovered
      //if it has been, add its sibling emails to that account
      foundEmail(account[x], foundAccounts);
      if (whichAccount != -1) {
        console.log(`Found email ${account[x]} in account #${whichAccount}`);
        foundAccounts[whichAccount].push(account[x]);
        foundAccounts[whichAccount].push("poop");
      }
    }

    console.log("\n");
  }

  console.log("found accounts");
  console.dir(foundAccounts);
};

//return the account that the email belongs to
//return -1 otherwise
let foundEmail = (email, accounts) => {
  for (let x = 0; x < accounts.length; x++) {
    if (accounts[x].includes(email)) {
      return x;
    }
  }

  return -1;
};

let removeDuplicates = arr => {
  let uniques = [];

  for (let item of arr) {
    if (!uniques.includes(item)) {
      uniques.push(item);
    }
  }

  return uniques;
};
