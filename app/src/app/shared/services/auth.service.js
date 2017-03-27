"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ng2_cookies_1 = require('ng2-cookies');
require('rxjs/add/operator/map');
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    // Get all posts from the API
    AuthService.prototype.signIn = function (username, password) {
        return this.http.post('/api/user/signin', { username: username, password: password })
            .map(function (response) { return response.json(); });
    };
    AuthService.prototype.setUser = function (username) {
        this.router.navigate(['/home']);
    };
    AuthService.prototype.isLoggedIn = function () {
        if (ng2_cookies_1.Cookie.get('username'))
            return true;
        return false;
    };
    AuthService.prototype.signOut = function () {
        return this.http.get('/api/user/signout')
            .map(function (response) { return response.json(); });
    };
    AuthService.prototype.processSignOut = function () {
        this.router.navigate(['/login']);
    };
    AuthService.prototype.signUp = function (username, password) {
        return this.http.put('/api/user', { username: username, password: password })
            .map(function (response) { return response.json(); });
    };
    AuthService.prototype.processSignUp = function () {
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
