import { useState } from "react";
import API from "../services/api";

function StudentForm({ fetchStudents }) {

    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        phoneNumber: "",
        course: "",
        yearOfPassout: ""
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await API.post("", student);

        alert("Student Added Successfully");

        setStudent({
            studentName: "",
            email: "",
            phoneNumber: "",
            course: "",
            yearOfPassout: ""
        });

        fetchStudents();
    };

    return (
        <div className="card p-4 shadow">

            <h3>Add Student</h3>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="studentName"
                    className="form-control mb-3"
                    placeholder="Student Name"
                    value={student.studentName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={student.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phoneNumber"
                    className="form-control mb-3"
                    placeholder="Phone Number"
                    value={student.phoneNumber}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="course"
                    className="form-control mb-3"
                    placeholder="Course"
                    value={student.course}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="yearOfPassout"
                    className="form-control mb-3"
                    placeholder="Passout Year"
                    value={student.yearOfPassout}
                    onChange={handleChange}
                    required
                />

                <button className="btn btn-primary w-100">
                    Add Student
                </button>

            </form>
        </div>
    );
}

export default StudentForm;



// import { useEffect, useState } from "react";
// import API from "../services/api";

// function StudentForm({
//     fetchStudents,
//     selectedStudent,
//     setSelectedStudent
// }) {

//     const [student, setStudent] = useState({
//         studentName: "",
//         email: "",
//         phoneNumber: "",
//         course: "",
//         yearOfPassout: ""
//     });

//     useEffect(() => {

//         if (selectedStudent) {
//             setStudent(selectedStudent);
//         }

//     }, [selectedStudent]);

//     const handleChange = (e) => {
//         setStudent({
//             ...student,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {

//         e.preventDefault();

//         if (selectedStudent) {

//             await API.put(
//                 `/${selectedStudent.id}`,
//                 student
//             );

//             alert("Student Updated Successfully");

//         } else {

//             await API.post("/", student);

//             alert("Student Added Successfully");
//         }

//         setStudent({
//             studentName: "",
//             email: "",
//             phoneNumber: "",
//             course: "",
//             yearOfPassout: ""
//         });

//         setSelectedStudent(null);

//         fetchStudents();
//     };

//     return (
//         <div className="card p-4 shadow">

//             <h3>
//                 {selectedStudent
//                     ? "Update Student"
//                     : "Add Student"}
//             </h3>

//             <form onSubmit={handleSubmit}>

//                 <input
//                     type="text"
//                     name="studentName"
//                     className="form-control mb-3"
//                     placeholder="Student Name"
//                     value={student.studentName}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="email"
//                     name="email"
//                     className="form-control mb-3"
//                     placeholder="Email"
//                     value={student.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="text"
//                     name="phoneNumber"
//                     className="form-control mb-3"
//                     placeholder="Phone Number"
//                     value={student.phoneNumber}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="text"
//                     name="course"
//                     className="form-control mb-3"
//                     placeholder="Course"
//                     value={student.course}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="number"
//                     name="yearOfPassout"
//                     className="form-control mb-3"
//                     placeholder="Passout Year"
//                     value={student.yearOfPassout}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button className="btn btn-primary w-100">

//                     {selectedStudent
//                         ? "Update Student"
//                         : "Add Student"}

//                 </button>

//             </form>
//         </div>
//     );
// }

// export default StudentForm;