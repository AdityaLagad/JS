class Bank {
    constructor(bankName,location,account,ifsc,intrestRate){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.intrestRate = intrestRate;
    }
}
const axis_bank = {
    name: 'Axis Bank',
    location: 'Mumbai',
    account: '00245563',
    ifsc: 'AXIS02569',
    intrestRate: '7%'
  };

  const sbi_bank = {
    name: 'SBI Bank',
    location: 'Pune',
    account: '220036684882',
    ifsc: 'SBIN00088446',
    intrestRate: '6.7%'
  };

  const icici_bank = {
    name: 'ICICI Bank',
    location: 'Parbhani',
    account: '02366987422',
    ifsc: 'ICIC0578963',
    intrestRate: '7.6%'
  };

  const kotak_bank = {
    name: 'Kotak Bank',
    location: 'nanded',
    account: '25796688746',
    ifsc: 'KOT7589658742',
    intrestRate: '12%'
  };

  const HDFC_bank = {
    name: 'Axis Bank',
    location: 'HYD',                                                   
    account: '36985214789',
    ifsc: 'HDFC114485',
    intrestRate: '14%'
  };

  const bankSet = new Set([axis_bank, sbi_bank, icici_bank, kotak_bank, HDFC_bank]);

// Traverse the Set using a for-of loop and log bank name and location
for (const bank of bankSet) {
  console.log(`${bank.name} - ${bank.location}`);
}