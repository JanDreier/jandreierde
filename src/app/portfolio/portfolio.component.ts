import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',

  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  btnAll(){
    document.getElementById('all')?.classList.add('isSelected');
    document.getElementById('containerJS')?.classList.remove('d-none');
    document.getElementById('containerJavaScript')?.classList.remove('d-none');
    document.getElementById('containerAngular')?.classList.remove('d-none');
    document.getElementById('containerC')?.classList.remove('d-none');
    document.getElementById('containerJS')?.classList.add('container-picture');
    document.getElementById('containerJavaScript')?.classList.add('container-picture');
    document.getElementById('containerAngular')?.classList.add('container-picture');
    document.getElementById('containerC')?.classList.add('container-picture');
    document.getElementById('angular')?.classList.remove('isSelected');
    document.getElementById('javaScript')?.classList.remove('isSelected');
    document.getElementById('cSharp')?.classList.remove('isSelected');
  }

  btnAngular(){
    document.getElementById('angular')?.classList.add('isSelected');
    document.getElementById('containerJS')?.classList.add('d-none');
    document.getElementById('containerJavaScript')?.classList.add('d-none');
    document.getElementById('containerC')?.classList.add('d-none');
    document.getElementById('containerAngular')?.classList.remove('d-none');
    document.getElementById('containerJS')?.classList.remove('container-picture');
    document.getElementById('containerJavaScript')?.classList.remove('container-picture');
    document.getElementById('containerC')?.classList.remove('container-picture');
    document.getElementById('containerAngular')?.classList.add('container-picture');
    document.getElementById('all')?.classList.remove('isSelected');
    document.getElementById('javaScript')?.classList.remove('isSelected');
    document.getElementById('cSharp')?.classList.remove('isSelected');
  }

  btnJavaScript(){
    document.getElementById('all')?.classList.remove('isSelected');
    document.getElementById('containerJS')?.classList.remove('d-none');
    document.getElementById('containerJavaScript')?.classList.remove('d-none');
    document.getElementById('containerAngular')?.classList.add('d-none');
    document.getElementById('containerC')?.classList.add('d-none');
    document.getElementById('containerJS')?.classList.add('container-picture');
    document.getElementById('containerJavaScript')?.classList.add('container-picture');
    document.getElementById('containerAngular')?.classList.remove('container-picture');
    document.getElementById('containerC')?.classList.remove('container-picture');
    document.getElementById('angular')?.classList.remove('isSelected');
    document.getElementById('javaScript')?.classList.add('isSelected');
    document.getElementById('cSharp')?.classList.remove('isSelected');
  }

  btnC(){
    document.getElementById('all')?.classList.remove('isSelected');
    document.getElementById('containerJS')?.classList.add('d-none');
    document.getElementById('containerJavaScript')?.classList.add('d-none');
    document.getElementById('containerAngular')?.classList.add('d-none');
    document.getElementById('containerC')?.classList.remove('d-none');
    document.getElementById('containerJS')?.classList.remove('container-picture');
    document.getElementById('containerJavaScript')?.classList.remove('container-picture');
    document.getElementById('containerAngular')?.classList.remove('container-picture');
    document.getElementById('containerC')?.classList.add('container-picture');
    document.getElementById('angular')?.classList.remove('isSelected');
    document.getElementById('javaScript')?.classList.remove('isSelected');
    document.getElementById('cSharp')?.classList.add('isSelected');
  }

//   filterSelection(c) {
//     var x, i;
//     x = document.getElementsByClassName("column");
//     if (c == "all") c = "";
//     // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//     for (i = 0; i < x.length; i++) {
//       this.w3RemoveClass(x[i], "show");
//       if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
//     }
//   }

//   // Show filtered elements
//   w3AddClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//       if (arr1.indexOf(arr2[i]) == -1) {
//         element.className += " " + arr2[i];
//       }
//     }
//   }

//   // Hide elements that are not selected
//   w3RemoveClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//       while (arr1.indexOf(arr2[i]) > -1) {
//         arr1.splice(arr1.indexOf(arr2[i]), 1);
//       }
//     }
//     element.className = arr1.join(" ");
//   }

//   // Add active class to the current button (highlight it)
//   AddClassbtn(){
//   var btnContainer = document.getElementById("myBtnContainer");
//   var btns = btnContainer.getElementsByClassName("btn");
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function(){
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }
// }

}
