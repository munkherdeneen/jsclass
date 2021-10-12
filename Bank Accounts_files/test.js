var expect = chai.expect;

//------Account test starts from here.
var accNew = new Account("51516262");
describe("Bank Account get number test", function () {
  it("51516262", function () {
        
    expect(accNew.getNumber()).to.equal(
      "51516262"
    );
  });
});

describe("Bank Account get balance test", function () {
  it("0.0", function () {    
    expect(accNew.getBalance()).to.equal(
      0.0
    );
  });
});

var accDep = new Account("52526363");
accDep.deposit(550.5);
describe("Bank Account deposit test", function () {
  it("550.5", function () {    
    expect(accDep.getBalance()).to.equal(
      550.5
    );
  });
});

var accWith = new Account("53536464");
accWith.deposit(1000);
accWith.withdraw(150);
describe("Bank Account withdraw test", function () {
	it("850", function () {
		expect(accWith.getBalance()).to.equal(
			850
		);
	});
});

describe("Bank Accunt toString test", function() {
	it("Account 53536464: balance 850", function () {
		expect(accWith.toString()).to.equal(
			"Account 53536464: balance 850"
		);
	});
});

//------Savings account test starts from here.
var savingsAcc = new SavingsAccount("57576868",5);
describe("Bank SavingsAccunt getInterest test", function() {
	it("5", function () {
		expect(savingsAcc.getInterest()).to.equal(
			5
		);
	});
});

var savingsAccIn = new SavingsAccount("58586666",5);
savingsAccIn.setInterest(9);
describe("Bank SavingsAccunt setInterest test", function() {
	it("9", function () {
		expect(savingsAccIn.getInterest()).to.equal(
			9
		);
	});
});

savingsAcc.deposit(500);
describe("Bank SavingsAccunt toString test", function() {
	it("Account 57576868: balance 500", function () {
		expect(savingsAcc.toString()).to.equal(
			"SavingsAccount 57576868: balance 500"
		);
	});
});

var savingsAccAdd = new SavingsAccount("59596565",10);
savingsAccAdd.deposit(1000);
savingsAccAdd.addInterest();
describe("Bank SavingsAccunt AddInterest test", function() {
	it("1100", function () {
		expect(savingsAccAdd.getBalance()).to.equal(
			1100
		);
	});
});

//------Checking account test starts from here.
var checkingAcc = new CheckingAccount("17172828",250);
describe("Bank CheckingAccount getOverDraftlimit test", function() {
	it("250", function () {
		expect(checkingAcc.getOverdraftlimit()).to.equal(
			250
		);
	});
});

var checkingAccLi = new CheckingAccount("12122424",250);
checkingAccLi.setOverdraftlimit(500);
describe("Bank CheckingAccount setOverDraftlimit test", function() {
	it("500", function () {
		expect(checkingAccLi.getOverdraftlimit()).to.equal(
			500
		);
	});
});

checkingAcc.deposit(25000);
describe("Bank CheckingAccount toString test", function() {
	it("Account 17172828: balance 25000", function () {
		expect(checkingAcc.toString()).to.equal(
			"CheckingAccount 17172828: balance 25000"
		);
	});
});

var checkingAccW = new CheckingAccount("22228484",250);
checkingAccW.deposit(500);
checkingAccW.withdraw(650);
describe("Bank SavingsAccunt withdraw test", function() {
	it("-150", function () {
		expect(checkingAccW.getBalance()).to.equal(
			-150
		);
	});
});

//------Checking Bank class test starts from here.
describe("Bank class test", () => {
it("Bank addAccount test", () => {
	let bank = new Bank();
	bank.addAccount();
	assert.strictEqual(new Account(1).toString(), bank.accountReport());
});

it("Bank addSavingsAccount test", () => {
	let bank = new Bank();
	bank.addSavingsAccount(1);
	assert.strictEqual(
		new SavingsAccount(2, 1).toString(),
		bank.accountReport().split("\n")[0]
	);
});

it("Bank addCheckingAccount test", () => {
	let bank = new Bank();
	bank.addCheckingAccount(1);
	assert.strictEqual(
		new CheckingAccount(3, 1).toString(),
		bank.accountReport().split("\n")[0]
	);
});

it("Bank closeAccount test", () => {
	let bank = new Bank();
	bank.addAccount();
	bank.closeAccount(1);
	bank.closeAccount(1);
	bank.closeAccount(1);
	assert.strictEqual(undefined, bank.accountReport().split("\n")[3]);
});

it("Bank accountReport test", () => {
    let bank = new Bank();
    bank.addAccount(1);
    bank.addSavingsAccount(3);
    bank.addCheckingAccount(4);

    assert.strictEqual(
      [new Account(5), new SavingsAccount(6, 3), new CheckingAccount(7, 4)]
        .map((item) => item.toString())
        .join(" "),
      bank.accountReport()
    );
  });
})