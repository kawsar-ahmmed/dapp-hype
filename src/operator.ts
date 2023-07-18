const age:number = 19;
if (age >= 18) {
    console.log('Adult')
}
else {
    console.log('Child')
}

const isAge = age >= 18 ? 'Adult' : 'child';
const fullAge = age >= 18 ?? 'Adult'
console.log(isAge)
