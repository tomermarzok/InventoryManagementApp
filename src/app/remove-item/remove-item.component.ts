import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { taskService } from "../task.service";

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.scss']
})
export class RemoveItemComponent implements OnInit {

  id:number;
  name:string;
  description:string;
  count:number;
  idSub=new FormGroup({
      getId:new FormControl('')
  })
  visableTable: boolean = false;
  constructor(private items: taskService) { }
  collection: any=[];

  ngOnInit(): void {//checkid
      this.items.getList().subscribe((result)=>{
      console.log(result)
      this.collection=result})
     }    
  subId(){
    
      this.items.getItemById(this.idSub.get('getId').value).subscribe((result:any)=>{
      console.log(this.idSub.get('getId').value);
      this.id=this.idSub.get('getId').value;
      this.name=result.name;
      this.description=result.description;
      this.count=result.count;
      this.visableTable=true;
      })
    
  
  }
  removeItem(item){
    this.collection.splice(item-1,1)
    this.items.removeItem(item).subscribe((result)=>
    console.log("delete",result));
    this.id=null
    this.name="";
    this.description="";
    this.count=null;
  }
}


