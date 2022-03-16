import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  listData: any;
  showMessage: boolean = false;
  showString: string = '';

  constructor(private fb: FormBuilder) {
    this.listData = [];

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addContact() {
    this.listData.push(this.contactForm.value);
    this.showMessage = true;
    this.showString = this.contactForm.status;
    console.log(this.contactForm.value);
    console.log(this.listData);
    console.log(this.contactForm.valid);
    // this.contactForm.reset();
  }
}
