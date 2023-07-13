const myFriend = ['kasem', 'hasem']
const newFriend = ['joshim', 'nasim']

const greatFriends = (...friends: string[]): void => friends.forEach(friend => console.log(`Hi \n ${friend}`))
greatFriends("hase", "kasem", "joshim", 'josih');
