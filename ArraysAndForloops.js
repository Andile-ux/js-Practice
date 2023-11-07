let courses = ['maths','science','history','drama']

for (let i = 0; i < courses.length; i++) {
    const element = courses[i];
    console.log(element)
}
courses.push("programming")

let learners = new Array(3);
learners[0]=1;
learners[1]=2;
learners[2]=3;
// console.log( learners.fill(1,2));
learners.push(4);  //adding to arrays expected index out of bound error
let space =" ";
let x = courses.length;
let i;

console.log("number of learners is "+learners.length);
// console.log(learners)

for (i = 0; i < x;) {
   space = space+=courses[i] + ' ';
   i++;
}
console.log(space);
console.log("courses available: "+space.toString());
let p =  Array.isArray(courses);

//checking data type
if(p==true){
    console.log("this is an Array");
}
else{
    console.log("this is "+ typeof(p));
}

