#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const create_js_1 = __importDefault(require("./task/create.js"));
const view_js_1 = __importDefault(require("./task/view.js"));
const update_js_1 = __importDefault(require("./task/update.js"));
const delete_js_1 = __importDefault(require("./task/delete.js"));
console.log(chalk_1.default.yellow("Welcome to Task Manager!"));
let run = true;
while (run) {
    let menu = await inquirer_1.default.prompt([
        {
            name: 'item',
            type: "list",
            choices: [
                "Create Task",
                "View Task",
                "Update Status",
                "Delete Task",
                "Exit"
            ],
            message: "Which action do you wants perform: "
        }
    ]);
    switch (menu.item) {
        case 'Create Task':
            await (0, create_js_1.default)();
            break;
        case 'View Task':
            console.table((0, view_js_1.default)());
            break;
        case 'Update Status':
            await (0, update_js_1.default)();
            break;
        case 'Delete Task':
            await (0, delete_js_1.default)();
            break;
        case 'Exit':
            run = false;
            console.log(chalk_1.default.green('Thanks for using task manager!'));
            break;
    }
}
