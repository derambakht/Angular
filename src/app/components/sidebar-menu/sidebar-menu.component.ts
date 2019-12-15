import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface MenuItem {
  name: string;
  path: string;
  children?: MenuItem[];
}

const TREE_DATA: MenuItem[] = [
  {
    name: 'داشبورد',
    path: '/'
  },
  {
    name: 'اطلاعات پایه',
    path: '',
    children: [
      { name: 'گروه محصول', path: '/categories' },
      { name: 'استان / شهر', path: '/provinces' },
      { name: 'پارامترهای سیستمی', path: '/params' },
    ]
  }, {
    name: 'مدیریت محصول',
    path: '',
    children: [
      {
        name: 'لیست محصولات',
        path: '/products'
      }, {
        name: 'افزودن محصول جدید',
        path: '/products/add'
      },
    ]
  },
  {
    name: 'مدیریت فروش',
    path: '',
    children: [
      {
        name: 'لیست مشتریان',
        path: '/sale'
      }
    ]
  },
  {
    name: 'حسابداری',
    path: '',
    children: [
      {
        name: 'لیست اسناد',
        path: '/vouchers'
      },
      {
        name: 'افزودن سند',
        path: '/vouchers/add'
      },
      {
        name: 'افزودن سند - 2',
        path: '/vouchers/addReactive'
      }
    ]
  },
  {
    name: 'فرم داینامیک',
    path: '/dynamicform'
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
  }

  private _transformer = (node: MenuItem, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path: node.path,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
