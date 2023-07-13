type NovDeveloper = {
    name: string;
};

type JuniorDeveloper = {
    name: string,
    experience: string,
    expertise: number
};

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience : number;
    level: string
}

const newDeveloper : NovDeveloper | JuniorDeveloper = {
    name : 'Kawsar Ahmed',
    experience: 'Javascript',
    expertise: 3,
};

const developer : NextLevelDeveloper = {
    name: 'kawsar',
    leadershipExperience: 2,
    experience: 'TypeScript',
    expertise: 4,
    level: 'Mid Level'
}

