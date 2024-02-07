import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  user: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl(''),
      skills: new FormArray([]),
    });

    this.http.get('assets/data.json').subscribe((skills: any) => {
      for (const skill of skills) {
        this.skills.push(new FormControl(skill.hotel, Validators.required));
        this.skills.push(new FormControl(skill.date, Validators.required));
        this.skills.push(
          new FormControl(skill.occupancyRate, Validators.required)
        );
      }
    });
  }

  get skills(): FormArray {
    return this.user.get('skills') as FormArray;
  }

  onSubmit(): void {
    if (this.user.valid) {
      console.log(this.user.value);
    }
  }
}
