import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class UserblockService {
    private userBlockVisible: boolean;
    constructor() {
        // initially visible
        this.userBlockVisible  = true;
    }

    getCurrentUser(){
      return Cookie.get('username');
    }

    getVisibility() {
        return this.userBlockVisible;
    }

    setVisibility(stat = true) {
        this.userBlockVisible = stat;
    }

    toggleVisibility() {
        this.userBlockVisible = !this.userBlockVisible;
    }

}
