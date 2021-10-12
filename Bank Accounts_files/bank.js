class Bank {
	
	static nextNumber = 1;
	
	constructor() {
		this._accounts = [];
	}
	
	addAccount() {
		const newaccount = new Account(Bank.nextNumber);
		Bank.nextNumber += 1;
		
		this._accounts.push(newaccount);
		return newaccount.getNumber();
	}
	
	addSavingsAccount(interest) {
		const newSaccount = new SavingsAccount(Bank.nextNumber);
		Bank.nextNumber += 1;
		
		this._accounts.push(newSaccount);
		return newSaccount.getNumber();
	}
	
	addCheckingAccount(overdraft) {
		const newCaccount = new CheckingAccount(Bank.nextNumber);
		Bank.nextNumber += 1;
		
		this._accounts.push(newCaccount);
		return newCaccount.getNumber();
	}
	
	closeAccount(number) {
		for(var i = 1; i <= this._accounts.length; i++) {
			if(this._accounts[i] === number) {
				this._accounts[i].splice(i, 1);
			}
		}
	}
	
	accountReport() {
		return this._accounts.map((account) => account.toString()).join(" ");
	}
	
	endOfMonth() {
		return this._accounts.map((account) => account.endOfMonth()).join(" ");
	}
}