const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "rajesh", age: 25, profession: "designer" },
  { name: "raman", age: 29, profession: "admin" },
  { name: "ajay", age: 26, profession: "developer" },
  { name: "rajit", age: 30, profession: "manager" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((element) => {
    if (element.profession == 'developer') {
      console.log(element);
    } else {
      null;
    }
  });
}

// 2. Add Data
function addData() {
  const name = prompt('Enter name- ');
  const age = prompt('Enter age- ');
  const profession = prompt('Enter profession-');
  data.push({ name, age, profession });
  console.log(data);
}

  // 3. Remove Admins
  function removeAdmin() {
    removeData = data.filter((element) => element.profession !== 'admin');
    console.log(removeData);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const origArray = [
      { name: 'Sheetal', age: 20, profession: 'developer' },
      { name: 'Rahaiya', age: 21, profession: 'manager' },
      { name: 'Satish', age: 22, profession: 'graphic designer' },
      { name: 'Jimmy', age: 23, profession: 'Sr. manager' },
    ];
    let concatArray = data.concat(origArray);
    console.log(concatArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = 0;
    let finalLength=data.length;
    data.forEach((element) => {
      sum =sum+element.age;
    });
    console.log(`Average age is ${sum}`);
    console.log(sum / finalLength);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].age > 25) {
        console.log('Array has at least one person in the array who is older than 25');
        break;
      }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let uniqueProfessionArr = [];
    data.forEach((element) => {
      if (!uniqueProfessionArr.includes(element.profession)) {
        uniqueProfessionArr.push(element.profession);
      }
    });
    console.log(uniqueProfessionArr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => {
      return a.age - b.age;
    });
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((element) => {
      if (element.name == 'john') {
        element.profession = 'Manager';
      }
    });
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let count = 0;
    data.forEach((element) => {
      if (element.profession == 'developer') {
        count += 1;
      }
    });
    console.log(`We have ${count} developers in our system`);
  }
