import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registration-failed',
  templateUrl: './registration-failed.component.html',
  styleUrls: ['./registration-failed.component.scss']
})
export class RegistrationFailedComponent implements OnInit {
  public FailedInfo = false;
  public title = 'CrossLab Connect';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe((data) => {
    //   this.FailedInfo = data.aid;
    //   console.log(data.aid);
    //   switch (data.aid) {
    //     case 1:
    //       this.FailedInfo = false;
    //       break;
    //     case 2:
    //       this.FailedInfo = true;
    //       break;
    //   }
    // });
  }


}
