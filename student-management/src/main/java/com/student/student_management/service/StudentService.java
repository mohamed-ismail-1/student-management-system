package com.student.student_management.service;

import com.student.student_management.model.Student;
import com.student.student_management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    // CREATE
    public Student addStudent(Student student) {
        return repository.save(student);
    }

    // READ ALL
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // READ BY ID
    public Student getStudentById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    // UPDATE
    public Student updateStudent(Long id, Student updatedStudent) {

        Student existingStudent = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        existingStudent.setStudentName(updatedStudent.getStudentName());
        existingStudent.setEmail(updatedStudent.getEmail());
        existingStudent.setPhoneNumber(updatedStudent.getPhoneNumber());
        existingStudent.setCourse(updatedStudent.getCourse());
        existingStudent.setYearOfPassout(updatedStudent.getYearOfPassout());

        return repository.save(existingStudent);
    }

    // DELETE
    public String deleteStudent(Long id) {

        repository.deleteById(id);

        return "Student deleted successfully";
    }
}