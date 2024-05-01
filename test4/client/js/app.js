async function coursesRender() {
    try {
        const response = await fetch("/api/all")
        const data = await response.json()
        console.log(data)
        if (!data.success) return alert(data.message)
        renderCourses(data.courses)
    } catch (error) {
        console.error("error in getting the courses", error)
    }
}

async function courseForm(event) {
    try {
        event.preventDefault()

        const name = document.getElementById("name").value
        const studentCount = document.getElementById("studentCount").value
        const startYear = document.getElementById("startYear").value
        if (name === "" || studentCount === "" || startYear === "") {
            alert("Something went wrong!😓")
            console.log("error")
            return
        } else if (name.length > 15 || studentCount > 20 || startYear.length < 4 || startYear.length > 4) {
            return
        } else {
            addCourse(name, studentCount, startYear)
        }
    } catch (error) {
        console.log('error')
    }

}
function renderCourses(courses) {
    const strHTMLSs = courses.map((course) => {
        return `<tr class="courseItem">
    <td >${course.name}</td> 
    <td >${course.studentCount}</td>
    <td>${course.startYear}</td>

    </td>
  </tr>`;

    });
    document.querySelector(".courses-body").innerHTML = strHTMLSs.join("");
}

async function addCourse(name, studentCount, startYear) {
    try {
        const newCourse = {
            name: name,
            studentCount: studentCount,
            startYear: +startYear,
        }
        console.log(newCourse)
        const response = await fetch("/api/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                studentCount: studentCount,
                startYear: +startYear,
            }),
        })
        const data = await response.json()
        console.log(data)

        if (!data.success) {
            alert(data.message)
            return
        }

        // coursesRender()


    } catch (error) {
        console.error("error in adding course", error)
    }
}

