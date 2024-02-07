import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent implements OnInit {

  revenueManagerForm: FormGroup;
  days = new FormArray([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get('assets/data.json').subscribe((products: any) => {
      console.log(products);
      //
      this.revenueManagerForm = new FormGroup({
        days: new FormArray([])
      });

      //

      for (let day = 0; day < 3; day++) {
        const group = new FormGroup({
          date: new FormControl('')
          /*
          revenue: new FormControl(""),
          coefficientPonderation: new FormControl(""),
          types: new FormControl(""),
          occupancyRate: new FormControl(""),
          prixMax: new FormControl(""),
          prixMin: new FormControl(""),
          nbOfRooms: new FormControl("")
          */
        });
        this.days.push(group);
      }


      for (const product of products) {
        for (let day = 0; day < 3; day++) {
          //
          this.days.controls[day].get('date').setValue(product.date);
          //
          //group.get("date").setValue(product.date);
          //group.get("occupancyRate").setValue(product.occupancyRate);
        }
      }
      console.log(this.days);

      console.log(this.revenueManagerForm.controls['days']);
      //this.revenueManagerForm.get('days').setValue({days: this.days});

      this.days.controls.forEach((item, idx) => {
        this.revenueManagerForm.setControl(idx.toString(), item)
      });

      //days = this.revenueManagerForm.get('days') as FormArray;
      this.revenueManagerForm.valueChanges.subscribe((values: any) => {
        console.log(values);
      });

      console.log(this.revenueManagerForm);
    });
  }
}

/*

<form [formGroup]="user">
  <input formControlName="name" />

  <ng-container formArrayName="skills">
    <div *ngFor="let _ of skills.controls; index as i">
      <ng-container [formGroupName]="i">
        <input formControlName="name" />
      </ng-container>
    </div>
  </ng-container>
</form>

export class UserComponent {
  user = new FormGroup({
    name: new FormControl(''),
    skills: new FormArray([
      new FormGroup({
        name: new FormControl(''),
        level: new FormControl('')
      })
    ])
  });

  skills = this.user.get('skills') as FormArray;
}


-------------------------------------------------------------
FormArray Validation
-------------------------------------------------------------

export class UserComponent {
  user = new FormGroup({
    name: new FormControl(''),
    skills: new FormArray([])
  });

  skills = this.user.get("skills") as FormArray;

  addSkill() {
    cost control = new FormControl('', Validators.required);
    this.skills.push(control);
  }
}

function validateSize(arr: FormArray) {
  return arr.length > 3 ? {
    invalidSize: true
  } : null;
}

export class UserComponent {
  user = new FormGroup({
    name: new FormControl(''),
    skills: new FormArray([], validateSize)
  });

  skills = this.user.get('skills') as FormArray;

  addSkill() {
    cost control = new FormControl('', Validators.required);
    this.skills.push(control);
  }
}

-------------------------------------------------------------
Populating FormArrays with Server Data
-------------------------------------------------------------
// remplir les FormArraycontrôles avec des données qui arrivent du serveur

export class UserComponent {
  user = new FormGroup({
    name: new FormControl('')
  });

  skills = this.user.get('skills') as FormArray;

  ngOnInit() {
    store.select('skills').subscribe(skills => {
      const controls = skills.map(skill => {
        return new FormControl(skill, Validators.required);
      });

      this.user.registerControl('skills', new FormArray(controls));
    })
  }
}


// Dans le cas où nous avons déjà des contrôles existants dans notre FormArray, nous pouvons simplement créer les contrôles
// que nous devons ajouter et les pousser dans le tableau:

export class UserComponent {
  user = new FormGroup({
    name: new FormControl(''),
    skills: new FormArray([])
  });

  skills = this.user.get('skills') as FormArray;

  ngOnInit() {
    store.select('skills').subscribe(skills => {
      for(const skill of skills) {
        this.skills.push(new FormControl(skill, Validators.required));
      }
    })
  }
}













*/
