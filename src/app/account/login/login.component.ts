import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../card.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;


  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      saveLogin: new FormControl(null)
    })
  }

  onSubmit() {

  }

}

