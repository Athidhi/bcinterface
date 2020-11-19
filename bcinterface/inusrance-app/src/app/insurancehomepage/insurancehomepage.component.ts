import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { EmailValidator, FormControl } from '@angular/forms';

@Component({
  selector: 'app-insurancehomepage',
  templateUrl: './insurancehomepage.component.html',
  styleUrls: ['./insurancehomepage.component.css']
})
export class InsurancehomepageComponent implements OnInit {

  course = "Angular";
  constructor(
    
  ) {
  }

  ngOnInit(): void {
   
  }

  onSubmit() {


  }

}
