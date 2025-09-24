const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Filters
createCourseDisplay(courses); // Default display

const all = document.querySelector("#all") // All Courses
all.addEventListener("click", () => {
    createCourseDisplay(courses);
});
const cse = document.querySelector("#cse") // CSE Courses
cse.addEventListener("click", () => {
    createCourseDisplay(courses.filter(course => course.subject == "CSE"));
});
const wdd = document.querySelector("#wdd") // WDD Courses
wdd.addEventListener("click", () => {
    createCourseDisplay(courses.filter(course => course.subject == "WDD"));
});

// CARDS
function createCourseDisplay(courseChoice) {
    document.querySelector(".two").innerHTML = ""; // Cleans output

    courseChoice.forEach(course => {
        // Variables & Elements
        let card = document.createElement("div");

        // Display Content
        card.setAttribute("class", "card");
        //card.setAttribute("id", course.number);
        card.textContent = `${course.subject} ${course.number}`;

        if (course.completed == true) {
            card.setAttribute("class", "completed");
            card.textContent = `${course.subject} ${course.number} ✔`;
        };

        card.addEventListener("click", () => {
            displayDetails(course);
            dialog.showModal();
        });

        // Add Display to HTML
        document.querySelector(".two").appendChild(card);
    });

    // Calculate & display total credits
    const totalCredits = courseChoice.reduce((sum, course) => sum + course.credits, 0);

    document.querySelector("#total-credits").textContent = `The total credits of the courses listed above is ${totalCredits}`;
}

// Change the display of row one course groups
document.querySelector("#all").classList.add("displaying");

const courseGroups = document.querySelectorAll(".group");

courseGroups.forEach(group => {
    group.addEventListener("click", () => {

        courseGroups.forEach(group => group.classList.remove("displaying"));

        group.classList.add("displaying");
    });
});

//-----------------DIALOG BOX-----------------//
const courseName = document.querySelector('.two');
const dialog = document.querySelector('#course-details');
const courseDetails = document.querySelector('#dialog-container');
const closeDialog = document.querySelector('#course-details button');

closeDialog.addEventListener('click', () => dialog.close());

function displayDialog(courses) {
    courses.forEach(course => {
        courseName.addEventListener('click', () => displayDetails(course));
    })
};

displayDialog(courses)

function displayDetails(course) {
    courseDetails.innerHTML = `
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;

    dialog.showModal();
};