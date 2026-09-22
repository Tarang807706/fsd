class Student {

    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    display() {
        console.log("name", this.name);
        console.log("marks", this.marks);
    }
}

const s1 = new Student("tarang", 19);

s1.display();