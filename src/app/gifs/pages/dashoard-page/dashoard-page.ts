import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from "../../components/side-menu/side-menu";

@Component({
  selector: 'app-dashoard-page',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashoard-page.html',
})
export default class DashoardPage {}
