import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-live-support',
  templateUrl: './live-support.component.html',
  styleUrls: ['./live-support.component.scss']
})
export class LiveSupportComponent implements OnInit {
  longText = `If you are experiencing problems, We are here to help so get in touch with us`;
  contacts = [
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
    {
      name: 'Lindiwe Dladla',
      organization: "Redberry Farm",
    },
  ];
  constructor(    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  contactClick(contact: any){
    
  }
  liveSupportChat(){
    this.router.navigate(['/live-support-chat']);
  }
}
