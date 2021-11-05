const web3 = require("web3");
const tokens = (amt) => web3.utils.toWei(amt, "ether");
console.log(tokens("10"));

console.log(web3.utils.sha3(`setPendingAdmin(address)`).slice(0, 10));

// 0x4dd18bf5
// 0000000000000000000000004dDd337717Ae5D847462711C101F5e6E8A8548aC

console.log(
  web3.utils.padLeft("0x94B9e0097cb8744B4dCBd4a8E4b0AE43F426FC84", 64)
);
console.log(web3.utils.sha3("proposalMaxOperations()").slice(0, 10));
// deleg.propose([0xe94C4A708E4c4dc537B1A08C6C974Db89bA57433],[0],[web3.utils.sha3('setPendingAdmin(address)').slice(0,10)],[web3.utils.padLeft("0x28111888FF22F7D8A5077C969BC01dbAa3FB79Be".substring(2),64)],'Chnage timelock admin to governor')
// Cli test commands
// const creo = await Creo.deployed();
// const timelock = await Timelock.deployed();
// const bravo = await GovernorBravoDelegate.deployed();
// const delegator = await GovernorBravoDelegator.deployed();
// (await creo.getVotes(accts[0])).toString();

// truffle(development) > timelock.address;
// ("0x4dDd337717Ae5D847462711C101F5e6E8A8548aC");
// truffle(development) > delegator.address;
// ("0x88f69325c78b77E3BE913049bdF818B53B5BA023");
// truffle(development) > creo.address;
// ("0xc7aCE3d1b78e1065F45ebc790e035F3b3Ead0272");
// bravo > '0x3AF36D5D0B60F61CEA29C693cEeFCc9fBf4Ec775'
