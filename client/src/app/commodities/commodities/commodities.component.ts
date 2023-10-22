import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AllModulesService } from 'src/app/all-modules.service';
import { ToastrService } from 'ngx-toastr';
declare const $: any;
@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit{
  public allCrops: any[] = [];
  public editCrops: FormGroup;
  editId: any;

  constructor(
    private formBuilder: FormBuilder,
    private allModulesService: AllModulesService,
    private toastr: ToastrService
  ){}

  ngOnInit(){
    this.getCrops();

    this.editCrops = this.formBuilder.group({
      editCropName: ["", [Validators.required]],
      editMSP: ["", [Validators.required]],
      editUnitOfMeasure: ["", [Validators.required]],
    });
  }


  getCrops() {
    this.allModulesService
      .get("/getcrop")
      .subscribe((data) => {
        this.allCrops = data.data;
      });
  }

  editCropSubmit(){
    $("#edit_crops").modal("hide");

    console.log(this.editId);
    if (this.editCrops.valid) {
      let obj = {
        _id: this.editId,
        cropName: this.editCrops.value.editCropName,
        MSP: this.editCrops.value.editMSP,
        Unit: this.editCrops.value.editUnitOfMeasure,
      };

      this.allModulesService
        .update(obj, "/updatecrop")
        .subscribe((data1) => {
          this.getCrops();
          this.toastr.success("Crop is edited", "Success");
        });
    } else {
      this.toastr.warning("Mandatory fields required", "");
    }
  }

  edit(value) {
    this.editId = value;
    const index = this.allCrops.findIndex((item) => {
      return item._id === value;
    });
    let toSetValues = this.allCrops[index];
    this.editCrops.patchValue({
      editCropName: toSetValues.CropName,
      editMSP: toSetValues.MSP,
      editUnitOfMeasure: toSetValues.Unit,
    });
  }

}
