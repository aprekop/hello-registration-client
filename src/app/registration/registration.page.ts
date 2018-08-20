import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';
import {UserModel} from '../models/user.model';

@Component({
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss']
})
export class RegistrationPage implements OnInit {

  public formGroup: FormGroup;
  public states: {name: string, abbreviation: string}[];

  constructor(private router: Router,
              private appService: AppService) {}

  ngOnInit() {
    this.buildFormGroup();
    this.getStates();
  }

  getStates() {
    this.appService.getStates().subscribe((results) => {
      this.states = results;
    });
  }

  buildFormGroup() {
    const user: UserModel = <UserModel>{};
    this.formGroup = new FormGroup({
      firstName: new FormControl(user.firstName, Validators.required),
      lastName: new FormControl(user.lastName, Validators.required),
      address1: new FormControl(user.address1, Validators.required),
      address2: new FormControl(user.address2),
      city: new FormControl(user.city, Validators.required),
      state: new FormControl(user.state, Validators.required),
      zip: new FormControl(user.zip, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      country: new FormControl(user.country, Validators.required)
    });
  }

  saveForm() {
    if (this.formGroup.valid) {
      const user = this.formGroup.value;
      this.appService.saveUser(user).subscribe((result) => {
        this.router.navigate(['/confirmation']);
      }, (error) => {
        console.log(error);
      });
    } else {
      Object.keys(this.formGroup.controls).forEach(key => {
        this.formGroup.get(key).markAsTouched();
        console.log(this.formGroup);
      });
    }
  }
}
