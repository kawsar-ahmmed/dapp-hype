const course: string = 'This is my course';
const rollNumber: number = 32;
const isAdmin: boolean = true;


const girlFriend: [boolean, number] = [true, 5];
console.log(girlFriend);
const school: [string, number] = ['name', 2]
console.log(school)

function add(number1: number, number2: number) {
    return number1 + number2;
}
add(2, 3);
// function 

const person: {
    person: string,
    balance: number,
    addBalance(money: number): void;
} = {
    person: 'kawsar',
    balance: 2,
    addBalance(money: number) {
        console.log(`Balance is added ${this.balance + money}`)
    }
}
console.log(person);

