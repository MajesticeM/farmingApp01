import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Section {
  name: string;
  organization: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},


];
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  contacts: Section[] = [
    {
      name: 'Kedibone Lepule',
      organization: "Ludwig's Rose Farm",
    },
    {
      name: 'John Richards',
      organization: "Irene Farm",
    },
    {
      name: 'Lindiwe Dladla',
      organization: "Redberry Farm",
    },
    {
      name: 'Kedibone Lepule',
      organization: "Ludwig's Rose Farm",
    },
    {
      name: 'John Richards',
      organization: "Irene Farm",
    },
 
    
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openChat(){

    this.router.navigate(['/chat']);
  }
}
