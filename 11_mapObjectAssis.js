class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate) {
      this.bankName = bankName;
      this.location = location;
      this.accountNo = accountNo;
      this.ifsc = ifsc;
      this.interestRate = interestRate;
    }
  }
  const axisBank = new Bank("Axis Bank", "Mumbai", "024512233", "AXIS0053261", 4.5);
const sbiBank = new Bank("SBI Bank", "Jalna", "2545826548", "SBIN039696", 3.5);
const icicBank = new Bank("ICICI Bank", "Nagpur", "63926299", "ICIC005529", 5);
const kotakBank = new Bank("Kotak Bank", "solapur", "365481818", "kotak553636", 4);
const hdfcBank = new Bank("HDFC Bank", "sambhajinagar", "92929292958", "HDFC069691", 4.25);
const punjabBank = new Bank("Punjab National Bank", "nashik", "186151818", "PUNB05587", 3.75);

const bankMap = new Map();
bankMap.set(axisBank.accountNo, axisBank);
bankMap.set(sbiBank.accountNo, sbiBank);
bankMap.set(icicBank.accountNo, icicBank);
bankMap.set(kotakBank.accountNo, kotakBank);
bankMap.set(hdfcBank.accountNo, hdfcBank);
bankMap.set(punjabBank.accountNo, punjabBank);

bankMap.forEach((bank) => {
    console.log(`Bank Name: ${bank.bankName}, Account Number: ${bank.accountNo}, Interest Rate: ${bank.interestRate}`);
  });
  