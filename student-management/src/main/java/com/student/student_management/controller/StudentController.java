package com.student.student_management.controller;

import com.student.student_management.model.Student;
import com.student.student_management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService service;

    // CREATE
    @PostMapping
    public Student addStudent(
            @RequestBody Student student) {

        return service.addStudent(student);
    }

    // READ ALL
    @GetMapping
    public List<Student> getAllStudents() {

        return service.getAllStudents();
    }

    // READ BY ID
    @GetMapping("/{id}")
    public Student getStudentById(
            @PathVariable Long id) {

        return service.getStudentById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Student updateStudent(
            @PathVariable Long id,
            @RequestBody Student student) {

        return service.updateStudent(id, student);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteStudent(
            @PathVariable Long id) {

        return service.deleteStudent(id);
    }
}