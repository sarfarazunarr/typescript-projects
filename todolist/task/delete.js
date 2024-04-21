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
const inquirer_1 = __importDefault(require("inquirer"));
const view_js_1 = __importDefault(require("./view.js"));
async function deleteTask() {
    const tasks = await (0, view_js_1.default)();
    let task = await inquirer_1.default.prompt([
        {
            name: "name",
            type: "list",
            choices: tasks.map((item) => item.title),
            message: "Select task to delete: "
        }
    ]);
    const taskIndex = tasks.findIndex((taskdata) => taskdata.title === task.name);
    if (taskIndex !== -1) {
        tasks.splice(tasks[taskIndex], 1);
        try {
            fs.writeFileSync('./taskData.json', JSON.stringify(tasks, null, 2));
            console.log('Task deleted successfully!');
        }
        catch (error) {
            console.error('Error deleting to file:', error);
        }
    }
    else {
        console.log('Task not found!');
    }
}
exports.default = deleteTask;
