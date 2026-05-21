package com.student.student_management.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String studentName;

    private String email;

    private String phoneNumber;

    private String course;

    private Integer yearOfPassout;
}