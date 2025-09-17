// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
//   },
//   {
//     path: 'page1',
//     loadComponent: () => import('./pages/page1/page1.page').then( m => m.Page1Page)
//   },
//   {
//     path: 'page2',
//     loadComponent: () => import('./pages/page2/page2.page').then( m => m.Page2Page)
//   },
// ];
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('./tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () => import('./tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () => import('./tab3/tab3.page').then((m) => m.Tab3Page),
      },
      // {
      //   path: 'tab4',
      //   loadComponent: () => import('./tab4/tab4.page').then((m) => m.Tab4Page),
      // },
      // Add your new page1 tab here
      {
        path: 'page1',
        loadComponent: () => import('./pages/page1/page1.page').then((m) => m.Page1Page),
        data: { title: 'Static Data Sharing' },
      },
      {
        path: 'page2',
        loadComponent: () => import('./pages/page2/page2.page').then((m) => m.Page2Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },

    ],
  },
  // Add standalone routes for page2 (not as a tab)
  // {
  //   path: 'pages/page2',
  //   loadComponent: () => import('./pages/page2/page2.page').then((m) => m.Page2Page),
  // },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'page3/:id',
    loadComponent: () => import('./pages/page3/page3.page').then( m => m.Page3Page)
  },
];
