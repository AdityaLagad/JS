const bankSbi = {
    bankName: 'State Bank of India',
    accountType: 'Savings',
    branchCode: '33665',
    ifscCode: 'SBIN0003797'
  };
  const bankLocation = {
    street: 'Main Road',
    city: 'SAILU',
    pinCode: '431503'
  };
const clonedBankSbi = { ...bankSbi };
const clonedBankLocation = { ...bankLocation };
console.log(`SBI: ${JSON.stringify(clonedBankSbi)}`);
console.log(`SBI LOCATION: ${JSON.stringify(clonedBankLocation)}`);

console.log("********************STEP 1 ********************");
  const rateOfInterest = {
    homeLoanInterest: 8.5,
    personalLoanInterest: 12.5,
    duelInterest: 10.0
  };
  const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
  console.log(`Merged object sbiDetails: ${JSON.stringify(sbiDetails)}`);
  console.log("********************STEP 2 ********************");

  for (const key in sbiDetails) {
    console.log(`${key}: ${sbiDetails[key]}`);
  }
  