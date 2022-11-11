import { Component, OnInit } from '@angular/core';

declare var require: any;
const version = require('./../../../../../package.json').version;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  version = version;
  list: any[] = [
    {
      icon: 'home',
      url: 'dashboard',
      name: 'Dashboard'
    },
    {
      icon: 'users',
      url: 'accounts',
      name: 'Accounts'
    },
    {
      icon: 'invoice',
      url: 'invoices',
      name: 'Invoices'
    },
    {
      icon: 'settings',
      url: 'invoices',
      name: 'Settings'
    },
    {
      icon: 'share',
      url: 'invoices',
      name: 'Share'
    },
    {
      icon: 'shop',
      url: 'invoices',
      name: 'Shop'
    },
    {
      icon: 'rocket',
      url: 'invoices',
      name: 'Landpage'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
