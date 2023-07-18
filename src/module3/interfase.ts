type User = {
    name: string,
    age: number
};

interface IUser {
    name: string,
    age: number
}

interface IExtendedUser extends IUser {
    role: string,
}

const userWithTypeAlias : User = {
    name: 'Jorina',
    age: 18
};


const userWithExtendInterfaceAlias : IExtendedUser = {
    name: 'Sokina',
    age: 19,
    role: 'Admin'
}
const userWithInterfaceAlias : IUser = {
    name: 'Kamina',
    age: 19,

}
