import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../../shared/colors/colors.service';

@Component({
    selector: 'app-extended',
    templateUrl: './extended.component.html',
    styleUrls: ['./extended.component.scss']
})
export class ExtendedComponent implements OnInit {

    constructor(private colors: ColorsService) { }

    ngOnInit() {
    }

    colorByName(name) {
        return this.colors.byName(name);
    }

}
