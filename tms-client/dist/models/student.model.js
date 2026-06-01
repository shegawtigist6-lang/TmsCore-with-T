"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStudent = isStudent;
function isStudent(value) {
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "name" in value &&
        typeof value.id === "string" &&
        typeof value.name === "string");
}
