import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  toggleButton:any = document.getElementsByClassName('toggle-button')[0];
  navbarLinks = document.getElementsByClassName('navbar-links')[0];
  mobile: boolean;



  constructor(private breakpointObserver: BreakpointObserver,) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 1000px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
          this.mobile=true;
      } else {
        this.mobile=false;
      }
    });
  }

  ngOnInit(): void {

  }

}
