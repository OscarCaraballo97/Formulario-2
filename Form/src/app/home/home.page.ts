import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  get title()
  {
    return this.Form.get('Title');
    }
    get description()
    {
      return this.Form.get('Description');
      }

      public errorMessages= {
        'title': [
          { type: 'required', message: 'Title is required' },
          { type: 'minlength', message: 'Title must be at least 3 characters' },
        ],
        'description': [
          { type: 'required', message: 'Description is required' },
          { type: 'minlength', message: 'Description must be at least 10 characters'
            }
            ]}


  Form = this.FormBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],

    Description : this.FormBuilder.group({
      Description: ['', Validators.required, Validators.minLength(10)]
    })

    });

  constructor(private FormBuilder: FormBuilder) {}

  public submit() {
    console.log(this.Form.value);
  }


}
