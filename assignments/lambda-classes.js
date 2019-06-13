// // CODE here for your Lambda Classes

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

// #### Instructor

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student} recieves a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listSubjects() {
        this.favSubjects.map(item => console.log(item))
    }

    PRAssignment(subject) {
        return `${this.name} has turned in a PR for ${subject}`

    }

    sprintChallenge(subject) {
        return `${this.name} has begun the Sprint Challenge on ${subject}.`
    }

}

class ProgjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }

    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }

}

const sara = new Instructor({
    name: 'Sara',
    location: 'Paris, France',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Less is more!`
});

const jack = new Instructor({
    name: 'Jack',
    location: 'Barcelona, Spain',
    age: 30,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `I like turtles.`
});

console.log(sara.location);
console.log(sara.location);
console.log(sara.name);
console.log(sara.age)
console.log(sara.favLanguage);
console.log(sara.specialty);
console.log(sara.catchPhrase)
console.log(sara.demo('Less'));
console.log(sara.speak())

const lilia = new Student({
    name: "Lilia",
    location: "Amsterdam, Netherlands",
    age: 33,
    previousBackground: "911 Operator",
    className: "Full Stack Web Development",
    favSubjects: ['CSS', 'Less', 'JavaScript', 'Python'],
})

const arnaud = new Student({
    name: "Arnaud",
    location: "Tahoe, Nevada",
    age: 40,
    previousBackground: "Journalist",
    className: "Full Stack Web Development",
    favSubjects: ['Less', 'JavaScript', 'React'],
})

console.log(arnaud.name)
console.log(arnaud.location)
console.log(arnaud.age)
console.log(arnaud.previousBackground)
console.log(arnaud.className)
console.log(arnaud.favSubjects)
console.log(arnaud.speak())
console.log(arnaud.listSubjects())
console.log(arnaud.PRAssignment('Node.js'))
console.log(arnaud.sprintChallenge('Python'))

const antra = new ProgjectManager({
    name: 'Antra',
    location: 'Barcelona, Spain',
    age: 30,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `I like turtles.`,
    gradClassName: 'Web17',
    favInstructor: 'Neil Armstrong'
})

const mitzi = new ProgjectManager({
    name: 'Mitzi',
    location: 'Barcelona, Spain',
    age: 30,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `I like turtles.`,
    gradClassName: 'Web5',
    favInstructor: 'Batman'
})



console.log(antra.name)
console.log(antra.location)
console.log(antra.age)
console.log(antra.favLanguage)
console.log(antra.specialty)
console.log(antra.catchPhrase)
console.log(antra.gradClassName)
console.log(antra.favInstructor)
console.log(antra.speak())
console.log(antra.demo('Cats!'))
console.log(antra.standup('@web21'))
console.log(antra.debugsCode(lilia, 'JavaScript'))