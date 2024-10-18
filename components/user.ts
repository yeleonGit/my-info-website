


class User {
    constructor(
        public name: string,
        public age: number,
        public email: string
    ) {}

    displayInfo(): void {
        console.log(`User Information:`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }
}

const user = new User('', 23, '@.com');
user.displayInfo();
