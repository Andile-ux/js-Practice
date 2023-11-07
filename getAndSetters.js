function Person(name, age) 
{
    this.name = name;
    this.age = age;
}


function student(name, age, course, module) 
{
    this.name = name;
    this.age = age;
    this.course = course;
    this.module = module;

}

const Student ={

    name : 'Andile',
    age : 5,
    course : 'Dip in ICT',
    module : 'Communications and Media',
    set setName(name)
    {
        return this.name = name;
    },
    get getName()
    {
        return this.name;
    },

    set setAge(age)
    {
        return this.age = 5;
    },
    get getAge()
    {
        return this.age;
    },

    set setCourse(course)
    {
        return this.course = course;
    },
    get getCourse()
    {
        return this.course;
    },

    set setModule(module)
    {
        return this.module = module;
    },
    get getModule()
    {
        return this.module;
    },
    
    

    get getDetails()
    {
        return [this.getName,this.getAge,this.getCourse,this.getModule];
    }

};
 

let hlelwa = new Person("Lwahlelwa", 3);
let nana = new Person("Olwethu", 4);

let myPeople = [hlelwa,nana]


let penguin = new student(hlelwa.name,hlelwa.age,'Dip in App Dev',"App Dev");
let skoqo = new student(nana.name,nana.age,'Dip in ICT',"Communications and Media");

let students = [penguin,skoqo];

// console.log(students);
console.log(Student.getDetails);
// console.log(myPeople);
