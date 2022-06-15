const students = [
  {
    name: "Martin",

    lastName: "Lant",

    marks: [9, 8, null, 7, 5],
  },

  {
    name: "Francesco",

    lastName: "Portus",

    marks: [5, 4, 2, 3, 2],
  },

  {
    name: "Bill",

    lastName: "Merdoc",

    marks: [10, null, null, null, 10],
  },

  {
    name: "John",

    lastName: "Entman",

    marks: [9, 8, 9, 7, 5],
  },
];

const studentList = document.querySelector('[data-id="student-list"]');

function createStudentCard(studentData) {
  const listItem = document.createElement("li");
  const { name, lastName, marks } = studentData;

  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = `Name: ${name}`;

  const lastNameParagraph = document.createElement("p");
  lastNameParagraph.textContent = `Last name: ${lastName}`;

  const visitedLectureParagraph = document.createElement("p");

  const numberOfVisitedLectures = marks.reduce((total, currentValue) => {
    if (currentValue) {
      return total + 1;
    }
    return total;
  }, 0);

  visitedLectureParagraph.textContent = `Lectures visited: ${numberOfVisitedLectures}`;

  const averageMarkParagraph = document.createElement("p");

  const numberOfMarks = marks.length;

  const sumOfMarks = marks.reduce((total, currentValue) => {
    const value = currentValue ? currentValue : 0;
    return total + value;
  });

  const averageMark = sumOfMarks / numberOfMarks;

  averageMarkParagraph.textContent = `Average mark: ${averageMark}`;

  listItem.appendChild(nameParagraph);
  listItem.appendChild(lastNameParagraph);
  listItem.appendChild(visitedLectureParagraph);
  listItem.appendChild(averageMarkParagraph);

  return listItem;
}

function createStudentCards(studentsData) {
  return studentsData.map((student) => createStudentCard(student));
}

const studentCards = createStudentCards(students);
studentCards.forEach((card) => studentList.appendChild(card));
