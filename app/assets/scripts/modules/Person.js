'use strict';

class Person {

    constructor(name) {
        this.name = name;
    }

    greet () {
        console.log('Hello, ' + this.name);
    }
};

export default Person;
