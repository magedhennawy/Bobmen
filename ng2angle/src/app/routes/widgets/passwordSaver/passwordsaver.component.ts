import { Component, OnInit } from '@angular/core';
import { passwordSaverService } from '../../../shared/services/passwordsaver.service';
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
    todo: any = {};
    current = {};


    constructor(private passwordSaverService: passwordSaverService) { }


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
        if (this.todo.title === '') return;
        if (!this.todo.description) this.todo.description = '';
        if (this.editingTodo) {
            var current = {index: this.current, item:this.todo};
            this.passwordSaverService.editItem(current);
            this.todo = {};
            this.editingTodo = false;
        }
        else {
            this.passwordSaverService.addItem(this.todo).subscribe(data => {
                this.items.push({todo: $.extend({}, this.todo), complete: false});
                this.todo.title = '';
                this.todo.description = '';
            })
        }
    };

    editTodo(index, $event) {
        this.current = index;
        $event.preventDefault();
        $event.stopPropagation();
        this.todo = this.items[index].todo;
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
