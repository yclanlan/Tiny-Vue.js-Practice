function greeting(obj) {
    obj.logMessage = function() {
        console.log( `${this.name}  is ${this.age} years old!`);
    }
};

const tom = {
    name: 'Tom',
    age: 7
};

const jerry = {
    name: 'jerry',
    age: 3
};

greeting(tom);
greeting(jerry);

tom.logMessage ();
jerry.logMessage ();