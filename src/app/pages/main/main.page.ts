import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'main-page',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.css']
})
export class MainPage {

  constructor(private location: Location, private router: Router) { }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToMedic(): void {
    this.router.navigate(['/medic']);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

}
