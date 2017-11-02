import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  private usNm: string;
  private sm: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:comment-format
    //this.usNm = this.activatedRoute.snapshot.params['usNm'];
    this.activatedRoute.params.subscribe(
      rtPrm => this.usNm = rtPrm['usNm']
    );

    this.router.routerState.root.queryParams.subscribe(
      quPrm => this.sm = quPrm['smApp']
    );
  }
  upUs(uN: string) {
    this.router.navigate(['/dash', uN]);
  }
}
