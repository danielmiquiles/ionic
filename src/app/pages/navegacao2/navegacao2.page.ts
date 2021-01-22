import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-navegacao2",
  templateUrl: "./navegacao2.page.html",
  styleUrls: ["./navegacao2.page.scss"],
})
export class Navegacao2Page implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  goto() {
    this.route.navigate(['/navegacao']);
  }
}
