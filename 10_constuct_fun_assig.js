class Bank {
    constructor(bankName,location,account,ifsc,branchCode){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.branchCode = branchCode;
    }
    showDetails(){
        console.log(`Bank Details: ${ this.bankName}, ${ this.location }, ${this.account}, ${this.ifsc}, ${this.branchCode}.`);
        
    }
}
console.log('********************************Step1***************************************');

const sbiBank = new Bank ("SBI Bank","selu","00225588996","SBIN0003797",4455)
sbiBank.showDetails();
const mahBank = new Bank ("Maharashtra Bank","PBN","0257844","MAHA0003797",2255)
mahBank.showDetails();

const axisBank = new Bank ("Axis Bank","Jalna","02578654544","AXIS0005157",5242)
axisBank.showDetails();
console.log('********************************Step2***************************************');
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`1)sbiBank is open from ${sbiBank.openTime} to ${sbiBank.closeTime}`);
console.log(`2)mahBank is open from ${mahBank.openTime} to ${mahBank.closeTime}`);
console.log(`3)axisBank is open from ${axisBank.openTime} to ${axisBank.closeTime}`);
