 // Destructore
 const course={
    name: "JS",
    price:999,
    courseInstructor: "Hitesh"
 }
// Access value witout destructor
console.log(course.courseInstructor);
 
//By using Destructor we access value without using Dot(.) or we also store on it temVariable
const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor :instructor} = course
console.log(instructor);


/*  
    JSON :- JSON Stands for Java ScriptObject Notation those are basically used to transfer the object .
    Object Can be transfer from one software to another sofware . 
    eg. Transfer data from frontend technology to backend Technology.
 */

// {
//     'name': 'Ajay',
//     'sal':50000,
//     'course':'JS'

// }

// Arrays of JSON
[
    {},
    {},
    {},
    {}
]