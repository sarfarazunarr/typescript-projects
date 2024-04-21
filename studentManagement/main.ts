#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk'

class studentManagement {
    students: any[];
    courses: any[];
    enrollments: number;
    balance: number;

    constructor() {
        this.students = [];
        this.courses = [];
        this.enrollments = 0;
        this.balance = 0;
    }

    payTuitionFee(studentId: number, amount: number) {
        const student = this.students.find(student => student.id === studentId);
        if (!student) {
            console.log("Student not found");
            return;
        }
        student.balance -= amount;
        this.balance += amount;
        console.log("Tuition Fee Paid Successfully!");
    }
    generateStudentId() {
        return this.students.length + 1;
    }

    async enroll() {
        let studentInfo = await inquirer.prompt([
            {
                name: "studentName",
                type: "string",
                message: "Enter student name: "
            },
            {
                name: "courseName",
                type: "string",
                message: "Enter course name: "
            },
            {
                name: "balance",
                type: "number",
                message: "Enter balance: "
            }

        ]);
        let student = {
            name: studentInfo.studentName,
            courseName: studentInfo.courseName,
            balance: studentInfo.balance,
            id: this.generateStudentId()
        }
        this.students.push(student);
        this.enrollments++;

        console.log("Student added successfully with ID: " + student.id);
    }

    viewStudent(studentId: number) {
        const student = this.students.find(student => student.id === studentId);
        if (!student) {
            console.log("Student not found");
            return;
        }

        console.log(chalk.yellow("Student Details: "));
        console.log(chalk.yellow("Student Name: ") + student.name);
        console.log(chalk.yellow("Student ID: ") + student.id);
        console.log(chalk.yellow("Course Name: ") + student.courseName);
        console.log(chalk.yellow(student.balance ? `Student Balance (Fee to Paid): ${student.balance}` : "All Tution Fee Paid!"));
    }

    viewBalance() {
        console.log(chalk.yellow("Total Balance: ") + this.balance)
    }
}

async function main() {
    let student = new studentManagement();

    while (true) {
        let performOperations = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                choices: ["Enroll", "Pay Tution Fee", "View Student", "View Balance", "Exit"],
                message: "Select Operation: "
            }
        ])
        switch (performOperations.operation) {
            case 'Enroll':
                await student.enroll();
                break;
            case "Pay Tution Fee":
                let data = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter student ID: "
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter amount to pay: "
                    }
                ]);
                student.payTuitionFee(data.id, data.amount);
                break;
            case 'View Student':
                let studentIdInput = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter student ID: "
                    }
                ]);
                student.viewStudent(studentIdInput.id);
                break;

            case 'View Balance':
                student.viewBalance();
                break;
            case 'Exit':
                break;
        }

        let { exit } = await inquirer.prompt([
            {
                name: "exit",
                type: "confirm",
                message: "Do you want to exit? "
            }
        ]);
        if (exit) {
            break
        }
    }
}
main()