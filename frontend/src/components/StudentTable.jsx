import API from "../services/api";

function StudentTable({ students, fetchStudents }) {

    const deleteStudent = async (id) => {

        await API.delete(`/${id}`);

        alert("Deleted Successfully");

        fetchStudents();
    };

    return (
        <div className="card p-4 shadow mt-4">

            <h3>Student List</h3>

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {students.map((student) => (

                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.studentName}</td>
                            <td>{student.email}</td>
                            <td>{student.course}</td>

                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        deleteStudent(student.id)
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>

            </table>
        </div>
    );
}

export default StudentTable;





// import API from "../services/api";

// function StudentTable({
//     students,
//     fetchStudents,
//     setSelectedStudent
// }) {

//     const deleteStudent = async (id) => {

//         await API.delete(`/${id}`);

//         alert("Deleted Successfully");

//         fetchStudents();
//     };

//     return (
//         <div className="card p-4 shadow mt-4">

//             <h3>Student List</h3>

//             <table className="table table-bordered">

//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Course</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>

//                 <tbody>

//                     {students.map((student) => (

//                         <tr key={student.id}>

//                             <td>{student.id}</td>
//                             <td>{student.studentName}</td>
//                             <td>{student.email}</td>
//                             <td>{student.course}</td>

//                             <td>

//                                 <button
//                                     className="btn btn-warning me-2"
//                                     onClick={() =>
//                                         setSelectedStudent(student)
//                                     }
//                                 >
//                                     Edit
//                                 </button>

//                                 <button
//                                     className="btn btn-danger"
//                                     onClick={() =>
//                                         deleteStudent(student.id)
//                                     }
//                                 >
//                                     Delete
//                                 </button>

//                             </td>

//                         </tr>

//                     ))}

//                 </tbody>

//             </table>
//         </div>
//     );
// }

// export default StudentTable;