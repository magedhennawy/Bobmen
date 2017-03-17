import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder, private AuthService: AuthService) {

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required/*, CustomValidators.email*/])],
            'password': [null, Validators.required]
        });

    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            this.AuthService.signIn(value.email, value.password).subscribe(
              username => this.AuthService.setUser(username),
              error => console.error('Error ' + error),
              () => console.log('Completed!')
            )
        }
    }

    ngOnInit() {

    }

}
