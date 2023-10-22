import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AllModulesService } from './all-modules.service';
import { ToastrService } from 'ngx-toastr';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Farmer_Project';
  public multipleDropdownSettings: any = {};
  public registrationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private allModulesService: AllModulesService,
    private toastr: ToastrService
  ) {}
  selectedItems: string[] = [];
  allCereals: any[];
  allPulses: any[];
  oilSeeds: any[];
  others: string[] = [];
  ngOnInit() {
    this.allCereals = [
      'Paddy',
      'Wheat',
      'Barley',
      'Jowar',
      'Bajra',
      'Maize',
      'Ragi',
    ];
    this.allPulses = ['Gram', 'Arhar/Tur', 'Moong', 'Urad', 'Lentil'];
    this.oilSeeds = [
      'Ground Nut',
      'Rape Seed/Mustard',
      'Toria',
      'Soyabean',
      'Sunflower Seed',
      'Sesamum',
      'Safflower Seed',
      'Niger Seed',
    ];
    this.others = [
      'Raw Cotton',
      'Raw Jute',
      'Copra',
      'De-Husked Coconut',
      'Sugarcane',
      'Virginia Flu Cured',
    ];
    this.multipleDropdownSettings = {
      defaultOpen: false,
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      state: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      cereals: [''],
      pulses: [''],
      oilSeeds: [''],
      others: [''],
    });
  }

  onSubmit() {
    $("#add_user").modal("hide");
    if (this.registrationForm.valid) {
      let obj = {
        firstName: this.registrationForm.value.firstName,
        lastName: this.registrationForm.value.lastName,
        state: this.registrationForm.value.state,
        phoneNumber: this.registrationForm.value.phoneNumber,
        cereals: this.registrationForm.value.cereals ?? '',
        pulses: this.registrationForm.value.pulses ?? '',
        oilSeeds: this.registrationForm.value.oilSeeds ?? '',
        others: this.registrationForm.value.others ?? '',
        cropPreference: [],
      };
      obj.cropPreference = obj.cereals.concat(
        obj.pulses,
        obj.oilSeeds,
        obj.others
      );

      delete obj.cereals;
      delete obj.pulses;
      delete obj.oilSeeds;
      delete obj.others;
      console.log(obj);
      this.allModulesService.add(obj, '/user').subscribe((data) => {
        this.toastr.success('User is registered', 'Success');
        this.registrationForm.reset();
      });
    } else {
      this.toastr.warning('Mandatory fields required', '');
    }
  }
}
