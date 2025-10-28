// ! Smell: Bad Indentation and lack of Spacing
// const sum =(a,b)=>{
// return a+b;
// };

// * Clean Code: Better Indentation and Spacing
const sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 10));

// ! Smell: Unclear Variable Names
let x = 10;
let y = 20;
let z = x * y;
console.log(z);

// * Clean Code: Clear Variable Names
let length = 10;
let width = 20;
let area = length * width;
console.log(area);

// ! Smell: Inconsistent Syntaxes

// once written arrow function
const double = (input) => input * 2;

// once written function declaration
function triple(input) {
  return input * 3;
}

// * Clean Code: Consistent Syntaxes
// const double = (input) => input * 2;
// const triple = (input) => input * 3;

// ! Smell: InConsistent naming Conventions
const contactNumber = "123-456-7890"; // camelCase
const Contact_Email = "example@example.com"; // Snake_Case
const ContactId = "C001"; // PascalCase

// * Clean Code: Consistent naming Conventions(choose one style)
const contactNumberClean = "123-456-7890"; // camelCase
const contactEmailClean = "example@example.com"; // camelCase
const contactIdClean = "C001"; // camelCase

// ! Smell: Duplicated Code
function printUserInfo(user) {
  console.log("User ID:", user.id);
  console.log("User Name:", user.name);
  console.log("User Email:", user.email);
}

function printAdminInfo(admin) {
  console.log("Admin ID:", admin.id);
  console.log("Admin Name:", admin.name);
  console.log("Admin Email:", admin.email);
}

// * Clean Code: Removed Duplicated Code
function printInfo(user) {
  console.log("User ID:", user.id);
  console.log("User Name:", user.name);
  console.log("User Email:", user.email);
}

// ! Smell: Too many Parameters
// function createUser(name, age, email, address, phoneNumber) {
//   // Function logic here
// }

// * Clean Code: Using Object as Parameter
function createUser(userInfo) {
  const { name, age, email, address, phoneNumber } = userInfo;
  // Function logic here
}

// ! Smell: Magic Numbers//Strings
if (user.age > 18) {
  console.log("Adult");
}
if (user.age < 13) {
  console.log("Child");
}
// * Clean Code: Using Named Constants
const ADULT_AGE = 18;
const CHILD_AGE = 13;

if (user.age > ADULT_AGE) {
  console.log("Adult");
}
if (user.age < CHILD_AGE) {
  console.log("Child");
}

// ! Smell: Long Conditional Statements
if (user && user.role && user.role == "admin" && super.isActive) {
  console.log("Admin user is active");
}

// if (status === "active" || status === "pending" || status === "in-progress") {
//   console.log("User is active");
// }

// * Clean Code: Using Helper Function

function isAdminUser(user) {
  return user && user?.role === "admin" && user?.isActive;
}

if (isAdminUser(user)) {
  console.log("Admin user is active");
}

function isActiveStatus(status) {
  const activeStatuses = ["active", "pending", "in-progress"];
  return activeStatuses.includes(status);
}

if (isActiveStatus(status)) {
  console.log("User is active");
}

// ! Smell: Deeply Nested Code
if (user) {
  if (user.profile) {
    if (user.profile.address) {
      console.log(user.profile.address.city);
    }
  }
}
// * Clean Code: Early Return
if (!user) return;
if (!user.profile) return;
if (!user.profile.address) return;

// or
if (!user?.profile?.address) return;

// Smell: Ignoring Errors
try {
  externalFunction();
} catch (error) {
  // ignored
}

// * Clean Code: Proper Error Handling
try {
  externalFunction();
} catch (error) {
  console.error("An error occurred:", error);
}
