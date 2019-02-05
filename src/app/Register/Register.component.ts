import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  model: any = {};

  constructor() {}

  ngOnInit() {}

  register() {
    console.log(this.model);
  }

  cancel() {
    console.log('stub for cancel method');
  }
}
