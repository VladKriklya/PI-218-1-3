import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { EditItemPageComponent } from './edit-item-page/edit-item-page.component';





@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    RouterModule.forChild([
      { path: '', component: AdminLayoutComponent, children:[
        //{ path: '', redirectTo: '/admin/login', pathMatch: 'full' },
        { path: '', redirectTo: '/admin/add', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardPageComponent },
        { path: 'add', component: AddPageComponent },
        { path: 'product/:id/edit', component: EditPageComponent },
        { path:'edit', component: EditPageComponent },
        { path: 'edititem', component: EditItemPageComponent },
        { path: '**', redirectTo: '/' }
      ]}
    ])
  ],
  exports:[
    RouterModule
  ],
  declarations: [
    AdminLayoutComponent,
    AddPageComponent,
    DashboardPageComponent, 
    EditPageComponent,
    EditItemPageComponent,
  ]
})
export class AdminModule{}