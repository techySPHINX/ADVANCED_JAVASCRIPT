// Create a User class to create objects for both teachers and students. The constructor should take the user data (name, surname, email, role), but be sure to create the appropriate properties.

// Additionally, create the following methods:

// addCourse(course, level) - which will allow you to add course (e.g. math) and level (e.g. 2 - the higher the number, the higher the level); in the case of a student, it will mean that they are looking for help on this level, and in case of a teacher, it will mean that they can help up to this level;
// removeCourse(course) - which will allow you to remove the course (e.g. if the student is no longer interested in learning math)
// editCourse(course, level) - which will allow you to change the level associated with the course;
// sendMessage(from, message) - which will allow you to send a 'message' message from user 'from' to the user described in the object; complete information about the sent message should be stored in the local cache (hint: use an array for this); the sending of the message itself will only be simulated, declare the function sendEmail(from, to, message) {} beforehand and use it in the appropriate place;
// showMessagesHistory() - which will display the history of all messages sent to the user in the console.


function sendEmail(from, to, message) {}

class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.messages = [];
        this.courses = [];
    }

    addCourse(course, level) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                return;
            }
        }
        this.courses.push({course, level});
    }

    removeCourse(course) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses.splice(i,1);
                break;
            }
        }
    }

    editCourse(course, level) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses[i].level = level;
                break;
            }
        }
    }

    sendMessage(from, message) {
        this.messages.push({from: from.email, to: this.email, content: message});
        sendEmail(from.email, this.email, message);
    }

    showMessagesHistory() {
        for(let message of this.messages) {
            console.log(`${message.from} -> ${message.to}: ${message.content}`)
        }
    }
};