import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  randsperhectore: string;
  rands: string;
  costperc: string;
  drawdown: string;
  variance: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Production',randsperhectore:'2000',rands: '1110350', costperc: '9%', drawdown: '496101', variance: '(614249)'},
  { name: 'Development',randsperhectore:'2000',rands: '1110350', costperc: '9%', drawdown: '496101', variance: '(614249)'},
  { name: 'Funding',randsperhectore:'2000',rands: '1110350', costperc: '9%', drawdown: '496101', variance: '(614249)'},


];
@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.scss']
})
export class RequisitionComponent implements OnInit {
  displayedColumns: string[] = ['name','randsperhectore', 'rands', 'variance','drawdown','costperc',];
  dataSource = ELEMENT_DATA;
  @Input() bgClass: string;
  srcResultsrcResult: any;
  selected!: string;
  toggleViewRequisition: boolean
  toggleNewRequisition: boolean
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      this.bgClass = ""
    
      this.toggleViewRequisition = false
      this.toggleNewRequisition = false
  }

  ngOnInit(): void {
  }
  viewRequisitions(){
    this.toggleViewRequisition = true
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        // this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
}
