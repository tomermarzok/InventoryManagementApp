import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { taskService } from "../task.service";
@Component({
  selector: 'app-withdraw-item',
  templateUrl: './withdraw-item.component.html',
  styleUrls: ['./withdraw-item.component.scss']
})
export class WithdrawItemComponent implements OnInit {

  id:number;
  name:string;
  description:string;
  count:number;
  idSub=new FormGroup({
      getId:new FormControl('')
  });
  updateItemData= new FormGroup({
      name: new FormControl(''),
      description:new FormControl(''),
      count:new FormControl('')
    });
  withdraw=new FormGroup({
      countNew: new FormControl('')
    });
  visableTable: boolean = false;
  constructor(private items: taskService) { }
  collection: any=[];

  ngOnInit(): void { 
    
   }    

  subId(){
      this.items.getList().subscribe((result)=>{
            console.log(result)
            this.collection=result
            })
      this.items.getItemById(this.idSub.get('getId').value).subscribe((result:any)=>{
      //console.log(this.idSub.get('getId').value);
      this.id=this.idSub.get('getId').value;
      this.name=result.name;
      this.description=result.description;
      this.count=result.count;
      
      })
  }
  updateCount(){
    this.items.withdrawItem(this.id,this.withdraw.get('countNew').value).subscribe((result:any)=>{})
      this.id=null;
      this.name="";
      this.description="";
      this.count=null;
      this.visableTable=false;
  }
}