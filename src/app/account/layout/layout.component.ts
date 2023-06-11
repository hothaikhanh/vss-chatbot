import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface Data {
  name: string;
  code: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  form!: FormGroup;
  languages: Data[]
  banners: any[];

  ngOnInit(): void {
    this.form = new FormGroup({
      languages: new FormControl(null),

    })
    this.languages = [
      { name: "Tiếng Việt", code: "VN" },
      { name: "English", code: "US" },
      { name: "Japanese", code: "JP" },
    ]

    this.banners = [0, 0, 0]
  }





}
