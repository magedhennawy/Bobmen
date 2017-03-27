"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var ToDoListService = (function () {
    function ToDoListService(http) {
        this.http = http;
    }
    // Get all posts from the API
    ToDoListService.prototype.getAllPosts = function () {
        return this.http.get('/api/todolist')
            .map(function (res) { return res.json(); });
    };
    ToDoListService.prototype.addItem = function (item) {
        return this.http.post('/api/todolist', item)
            .map(function (res) { return res.json(); });
    };
    ToDoListService.prototype.editItem = function (item) {
        return this.http.patch('/api/todolist', item)
            .map(function (res) { return res.json(); });
    };
    ToDoListService.prototype.deleteItem = function (index) {
        return this.http.delete('/api/todolist/' + index)
            .map(function (res) { return res.json(); });
    };
    ToDoListService = __decorate([
        core_1.Injectable()
    ], ToDoListService);
    return ToDoListService;
}());
exports.ToDoListService = ToDoListService;
