import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { GetItemsComponent } from './get-items/get-items.component';
import { GetItemByIdComponent } from './get-item-by-id/get-item-by-id.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { WithdrawItemComponent } from './withdraw-item/withdraw-item.component';
import { DepositItemComponent } from './deposit-item/deposit-item.component';
import { RemoveItemComponent } from './remove-item/remove-item.component';
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    GetItemsComponent,
    GetItemByIdComponent,
    UpdateItemComponent,
    AddItemComponent,
    WithdrawItemComponent,
    DepositItemComponent,
    RemoveItemComponent
  ],
  providers:[],
  bootstrap: [ AppComponent ]
})
export class AppModule {}