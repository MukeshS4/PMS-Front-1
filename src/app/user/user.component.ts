import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userSideNavigationItem } from '../app-common/data/user.navigation.data';
import { SideNavigationItem } from '../app-common/models/navigation.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userSideNavigationdata : SideNavigationItem[] = userSideNavigationItem;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
