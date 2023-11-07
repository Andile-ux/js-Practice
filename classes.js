class person 
{
    // constructor(){};
    constructor(name, age) 
    {
        this.name = name;
        this.age = age;
    }




    // function getName() {
    //     this.name = prompt("please enter your name: ")
        
    // }
    
}


class learner 
{
    constructor(name, age, grade, subjects) 
    {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.subjects = subjects;

    }
    // if(this.age >= 4){
    //     this.grade ='RR';
    // }
    // else{
    //     grade = "R"
    // }
}

let hlelwa = new person("Lwahlelwa", 3);
let nana = new person("Olwethu", 4);
let ngwane = new person("Senzelw", 2);
let roro = new person("Major", 3);
let nka = new person("Nkanyezi", 1);
let vee = new person("Vunokuhle", 0);
let myPeople = [hlelwa,nana,ngwane,roro,nka,vee]

let penguin = new learner(hlelwa.name,hlelwa.age,'RR',"singing skills");
let skoqo = new learner(nana.name,nana.age,'R',"life skills");
let nzelwe = new learner(ngwane.name,ngwane.age,'RR',"singing skills");
let kinati = new learner(roro.name,roro.age,'RR',"singing skills");
let mbomvana = new learner(nka.name,nka.age,'RRR',"eating skills");
let vuno = new learner(vee.name,vee.age,'RRR',"eating skills");

let learners = [penguin,skoqo,nzelwe,kinati,mbomvana,vuno];

console.log(learners);
console.log(myPeople);
