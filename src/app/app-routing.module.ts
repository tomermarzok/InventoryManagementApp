import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AddItemComponent } from "./add-item/add-item.component";
import { DepositItemComponent } from "./deposit-item/deposit-item.component";
import { GetItemByIdComponent } from "./get-item-by-id/get-item-by-id.component";
import { GetItemsComponent } from "./get-items/get-items.component";
import { UpdateItemComponent } from "./update-item/update-item.component";
import { WithdrawItemComponent } from "./withdraw-item/withdraw-item.component";
import { RemoveItemComponent } from "./remove-item/remove-item.component";


const routes : Routes = [
  {
    component :AddItemComponent,
    path:'add'
  },
  {
    component :DepositItemComponent,
    path:'deposit'
  },
    {
    component :UpdateItemComponent,
    path:'update'
  },
    {
    component :GetItemByIdComponent,
    path:'getById'
  },
    {
    component :GetItemsComponent,
    path:'getItems'
  },
    {
    component :WithdrawItemComponent,
    path:'withdraw'
  },
    {
    component :RemoveItemComponent,
    path:'remove'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []

})
export class AppRoutingModule { }
