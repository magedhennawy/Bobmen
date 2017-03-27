"use strict";
var Observable_1 = require('rxjs/Observable');
var io = require('socket.io-client');
var SocketService = (function () {
    function SocketService() {
        this.url = 'https://localhost:3000';
    }
    SocketService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    SocketService.prototype.getMessages = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket = io.connect(_this.url, { secure: true });
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketService;
}());
exports.SocketService = SocketService;
