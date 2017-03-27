import { Component, OnInit } from '@angular/core';
import { PasswordSaverService } from '../../../shared/services/passwordsaver.service';
import {createScope} from "@angular/core/src/profile/wtf_impl";
declare var $: any;

@Component({
    selector: 'app-passwordSaver',
    templateUrl: './passwordsaver.component.html',
    styleUrls: ['./passwordsaver.component.scss']
})
export class PasswordSaverComponent implements OnInit {

    items = [
/*        {
            todo: { title: 'Meeting with Mark at 7am.', description: 'Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet. ' },
            complete: true
        },
        {
            todo: { title: 'Call Sonya. Talk about the new project.', description: '' },
            complete: false
        },
        {
            todo: { title: 'Find a new place for vacations', description: '' },
            complete: false
        }*/
    ];

    editingTodo = false;
    password: any = {};
    current = {};


    constructor(private passwordSaverService: PasswordSaverService) { }


    //constructor() { }

    ngOnInit() {
      this.passwordSaverService.getAllPosts().subscribe(data =>{
        if(data.length > 0){
          this.items = data[0].passwords;
        }else{
          this.items = [];
        }
      })
    }

    addTodo() {
        if (this.password.title === '') return;
        if (!this.password.description) this.password.description = '';
        if (this.editingTodo) {
            var current = {index: this.current, item:this.password};
            this.passwordSaverService.editItem(current);
            this.password = {};
            this.editingTodo = false;
        }
        else {
            this.passwordSaverService.addItem(this.password).subscribe(data => {
                this.items.push({password: $.extend({}, this.password), complete: false});
                this.password.title = '';
                this.password.description = '';
            })
        }
    };

    editTodo(index, $event) {
        this.current = index;
        $event.preventDefault();
        $event.stopPropagation();
        this.password = this.items[index].password;
        this.editingTodo = true;
    };

    removeTodo(index/*, $event*/) {
          this.passwordSaverService.deleteItem(index).subscribe(data =>{
          console.log(data);
        });
        this.items.splice(index, 1);


    };

    clearAll() {
        this.items = [];
    };

    totalCompleted() {
        return this.items.filter(item => {
            return item.complete;
        }).length;
    };

    totalPending() {
        return this.items.filter(item => {
            return !item.complete;
        }).length;
    };

}
