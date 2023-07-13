type CrushType = {
    name: string,
    age: number,
    profession: string,
    address: string,
}
type CrushMarriedType = boolean;
type CourseLevelType = string;

const crush1: CrushType = {
    name: 'Moina Bird',
    age: 18,
    profession: 'Js Developer',
    address: 'Ghana'
}

const crush2: CrushType = {
    name: 'Kawa Bird',
    age: 16,
    profession: 'TS Developer',
    address: 'Uganda'
}
const phCourse: CourseLevelType = 'Next Level Web Development'
console.log(phCourse)
// Function Calculate
type OperationType = (x: number, y: number) => number;
const calculate = (
    number1: number,
    number2: number,
    operation: OperationType
) => {
    return operation(number1, number2)
}
calculate(32, 33, (x, y) => (x - y))

const isCrushMarried: CrushMarriedType = false