import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'inusrance-app';
  myForm: FormGroup;
  constructor(
    private router: Router
  ) {
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      'Email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    let email = this.myForm.get('Email').value;
    alert("Email Entered :: "+email)
    let password = this.myForm.get('password').value;
    alert("Password Entered :: "+password)

    if (email === 'abc' && password === 'abc') {
      this.router.navigate(['/insurancepage']);
    }
  }
}
