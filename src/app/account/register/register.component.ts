import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface Data {
  name: string;
  code: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../card.scss']
})

export class RegisterComponent implements OnInit {
  form!: FormGroup;
  countries: Data[]
  fields: Data[]

  ngOnInit(): void {
    this.form = new FormGroup({
      lastName: new FormControl(null),
      firstName: new FormControl(null),
      email: new FormControl(null),
      company: new FormControl(null),
      country: new FormControl(null),
      field: new FormControl(null),
      position: new FormControl(null),
      purpose: new FormControl(null),
    })

    this.countries = [
      { name: "Vietnam", code: "VN" },
      { name: "US", code: "US" },
      { name: "Japan", code: "JP" },
    ]


    this.fields = [

      { name: "Bán lẻ", code: "wholesale" },
      { name: "Xây dựng", code: "construction" },
      { name: "Xuất nhập khẩu", code: "logistic" },

    ]
  }

  onSubmit() {

  }

}




