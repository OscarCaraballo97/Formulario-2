import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Form = this.FormBuilder.group({
    Title: [''],

    Description : this.FormBuilder.group({})

    });

  constructor(private FormBuilder: FormBuilder) {}

  public submit() {
    console.log(this.Form.value);
  }


}
