import React, { lazy } from "react";

const Dashboard = lazy(() => import("./main/dashboard/Company"));
const Company_Product = lazy(() => import("./Company/Product"))
const Company_Stores = lazy(() => import("./Company/Stores"))
const Company_Settings = lazy(() => import("./Company/Setttings"))

const company = [
  {
    path: '/company/dashboard',
    name: 'Dashboard',
    icon: 'icon icon-dasbhoard',
    source: 'company',
    component: Dashboard,
  },

  {
    path: '/company/products',
    name: 'products',
    icon: 'icon icon-folder-o',
    source: 'company',
    component: Company_Product,
  },
  {
    path: '/company/stores',
    name: 'stores',
    icon: 'icon icon-inbuilt-apps',
    source: 'company',
    component: Company_Stores,
  },
  {
    path: '/company/settings',
    name: 'settings',
    icon: 'icon icon-setting',
    menu: 'store',
    component: Company_Settings,
  }
];

export  {company}
