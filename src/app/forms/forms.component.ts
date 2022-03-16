import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  nameForm!: FormGroup;
  showMsg = false;
  checkVisible = true;
  showString: string = '';

  ngOnInit() {
    this.nameForm = this.fb.group({
      first: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      middle: ['', [Validators.maxLength(30)]],
      last: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  constructor(private fb: FormBuilder) {}

  addName() {
    this.showString = this.nameForm.status;
    if (this.nameForm.valid) {
      this.showMsg = true;
      this.nameForm.disable();
      // this.nameForm.reset();
    }

    console.log(this.nameForm.value);
  }

  checkClick() {
    this.checkVisible = !this.checkVisible;
  }
}
