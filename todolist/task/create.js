"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const view_js_1 = __importDefault(require("./view.js"));
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
async function createTask(data) {
    try {
        if (data) {
            const taskContent = (0, view_js_1.default)();
            taskContent.push(data);
            fs.writeFileSync('./taskData.json', JSON.stringify(taskContent, null, 2));
            return ('done');
        }
        let taskInfo = await inquirer_1.default.prompt([
            {
                name: "title",
                type: "string",
                message: "Enter task title: "
            },
            {
                name: "description",
                type: "string",
                message: "Enter task description: "
            }
        ]);
        let newTask = {
            title: taskInfo.title,
            description: taskInfo.description,
            status: 'Pending',
            date: new Date(Date.now()),
        };
        const taskContent = (0, view_js_1.default)();
        taskContent.push(newTask);
        fs.writeFileSync('./taskData.json', JSON.stringify(taskContent, null, 2));
        console.log(chalk_1.default.green('Task has been saved!'));
    }
    catch (error) {
        console.log(chalk_1.default.red('Failed to create Task!'));
        console.log(error);
    }
}
exports.default = createTask;
