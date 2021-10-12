class CheckingAccount extends Account {
	constructor(number, overdraftlimit) {
		super(number);
		this._overdraftlimit = overdraftlimit;
	}
	
	getOverdraftlimit() {
		return this._overdraftlimit;
	}
	
	setOverdraftlimit(limit) {
		this._overdraftlimit = limit;
	}
	
	withdraw(amount) {
		if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this._overdraftlimit) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
	}
	
	toString() {
		return "CheckingAccount " + this._number + ": balance " + this._balance;
	}
}