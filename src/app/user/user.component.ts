import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userSideNavigationItem } from '../app-common/data/user.navigation.data';
import { SideNavigationItem } from '../app-common/models/navigation.model';
import { ChartDataSets } from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userSideNavigationdata : SideNavigationItem[] = userSideNavigationItem;

  title = 'Codingvila';
  public chart_Options: ChartOptions = {
    responsive: true,
  };
  public chart_Labels: Label[] = ['Total.A', 'Upcoming.A', 'Canceled.A', 'Completed.A'];
  public chart_Type: ChartType = 'pie';
  public chart_Legend = true;
  public chart_Plugins = [];

  public chart_Data: ChartDataSets[] = [
    {
      data: [5, 44, 18, 104]
    }
  ];
  
  constructor(private route: Router) { 
  }

  ngOnInit(): void {
  }

}

