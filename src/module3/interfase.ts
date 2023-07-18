type User = {
    name: string,
    age: number
};

interface IUser {
    name: string,
    age: number
};

interface IExtendedUser extends IUser {
    role: string,
};

const userWithTypeAlias: User = {
    name: 'Jorina',
    age: 18
};

const userWithExtendInterfaceAlias: IExtendedUser = {
    name: 'Sokina',
    age: 19,
    role: 'Admin'
};
const userWithInterfaceAlias: IUser = {
    name: 'Kamina',
    age: 19,
};

type addNumberType = (num1: number, num2: number) => number;
type addNumberTypeStyle = {
    num1: number,
    num2: number
};

const addNumber: addNumberType = (num1, num2): number => num1 + num2;
