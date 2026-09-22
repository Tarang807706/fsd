const student1 = {
    name: "tarang",
};

function show() {
    console.log("student:", this.name);
}

const newfun = show.bind(student1);

newfun();