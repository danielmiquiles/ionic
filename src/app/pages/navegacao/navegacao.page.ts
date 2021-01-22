import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-navegacao",
  templateUrl: "./navegacao.page.html",
  styleUrls: ["./navegacao.page.scss"],
})
export class NavegacaoPage implements OnInit {
  constructor(private router: NavController) {}

  ngOnInit() {}

  goto() {
    // this.router.navigate(["/navegacao2"]);
    this.router.navigateForward('navegacao2')
  }
}
