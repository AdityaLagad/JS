let sbiBank = {
    bankName: "State Bank of India",
    location: "Mumbai",
    accountNo: "112233",
    ifsc: "SBIN0010234",
    interestRate: "6.5%",
    showDetails: function() {
      console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No.: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
  };
  console.log(sbiBank);

let axisBank = {
    bankName: "AXIS BANK",
    location: "Parbhani",
    accountNo: "02451222",
    ifsc: "AXIS002365",
    interestRate : "7.21%",
    showDetails: function () {
        console.log(`Bank Name: ${this.bankName},Location:${this.location},accountNo :${this.accountNo},IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
};
console.log(axisBank);

let hdfcBank = {
    bankName: "HDFC BANK",
    location: "Selu",
    accountNo: "002451235",
    ifsc: "HDFC002665",
    interestRate : "8%",
    showDetails: function () {
        console.log(`Bank Name: ${this.bankName},Location:${this.location},accountNo :${this.accountNo},IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
};
console.log(hdfcBank);

let yesBank = {
    bankName: "YES BANK",
    location: "PUNE",
    accountNo: "00245933589",
    ifsc: "YES002365",
    interestRate : "10%",
    showDetails: function () {
        console.log(`Bank Name: ${this.bankName},Location:${this.location},accountNo :${this.accountNo},IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
};
console.log(yesBank);