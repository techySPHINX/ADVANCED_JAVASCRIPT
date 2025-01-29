import { loginFailure } from "./redux/userSlice";

const person = {
    alive: true
}

const musician = {
    plays: true
}

musician.__proto__ = person;
console.log(musician.plays);
console.log(musician.alive);

