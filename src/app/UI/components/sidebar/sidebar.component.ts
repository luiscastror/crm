import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  list: any[] = [
    {
      icon: 'home',
      url: 'home',
      name: 'Dashboard'
    },
    {
      icon: 'invoice',
      url: 'invoices',
      name: 'Invoices'
    }
    ,
    {
      icon: 'rocket',
      url: 'invoices',
      name: 'Landpage'
    }
    ,
    {
      icon: 'settings',
      url: 'invoices',
      name: 'Settings'
    }
    ,
    {
      icon: 'share',
      url: 'invoices',
      name: 'Share'
    }
    ,
    {
      icon: 'shop',
      url: 'invoices',
      name: 'Shop'
    }
    ,
    {
      icon: 'users',
      url: 'invoices',
      name: 'Accounts'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
