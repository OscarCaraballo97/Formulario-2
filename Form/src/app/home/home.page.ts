import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Form: FormGroup;
  tasks: any[] = [];
  showEmptyMessage: boolean = false;

  public errorMessages = {
    'title': [
      { type: 'required', message: 'Title is required' },
      { type: 'minlength', message: 'Title must be at least 3 characters' },
    ],
    'description': [
      { type: 'required', message: 'Description is required' },
      { type: 'minlength', message: 'Description must be at least 10 characters' }
    ]
  };

  constructor(private formBuilder: FormBuilder) {
    this.Form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  public submit() {
    if (this.Form.valid) {
      this.tasks.push(this.Form.value);
      this.Form.reset();
      this.showEmptyMessage = this.tasks.length === 0;
    } else {
      console.log('Form is not valid');
    }
  }

  get isTasksEmpty(): boolean {
    return this.tasks.length === 0;
  }
}
