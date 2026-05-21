import { useEffect, useState } from "react";
import API from "../services/api";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

function Home() {

    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        const response = await API.get("");
        setStudents(response.data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="container mt-5">

            <StudentForm
                fetchStudents={fetchStudents}
            />

            <StudentTable
                students={students}
                fetchStudents={fetchStudents}
            />

        </div>
    );
}

export default Home;





// import { useEffect, useState } from "react";
// import API from "../services/api";
// import StudentForm from "../components/StudentForm";
// import StudentTable from "../components/StudentTable";

// function Home() {

//     const [students, setStudents] = useState([]);
//     const [selectedStudent, setSelectedStudent] = useState(null);

//     const fetchStudents = async () => {
//         const response = await API.get("/");
//         setStudents(response.data);
//     };

//     useEffect(() => {
//         fetchStudents();
//     }, []);

//     return (
//         <div className="container mt-5">

//             <StudentForm
//                 fetchStudents={fetchStudents}
//                 selectedStudent={selectedStudent}
//                 setSelectedStudent={setSelectedStudent}
//             />

//             <StudentTable
//                 students={students}
//                 fetchStudents={fetchStudents}
//                 setSelectedStudent={setSelectedStudent}
//             />

//         </div>
//     );
// }

// export default Home;