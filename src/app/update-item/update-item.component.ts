import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { taskService } from "../task.service";
@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  id:number;
  name:string;
  description:string;
  count:number;
  idSub=new FormGroup({
      getId:new FormControl('')
  })
  updateItemData= new FormGroup({
      name: new FormControl(''),
      description:new FormControl(''),
      count:new FormControl('')
    })
  visableTable: boolean = false;
  constructor(private items: taskService) { }
  collection: any=[];

  ngOnInit(): void { 
    
   }    //checkid

  subId(){
      this.items.getList().subscribe((result)=>{
            console.log(result)
            this.collection=result
            })
      this.items.getItemById(this.idSub.get('getId').value).subscribe((result:any)=>{
      console.log(this.idSub.get('getId').value);
      this.id=this.idSub.get('getId').value;
      this.name=result.name;
      this.description=result.description;
      this.count=result.count;
      this.updateItemData= new FormGroup({
        name: new FormControl(result['name']),
        description:new FormControl(result['description']),
        count:new FormControl(result['count'])
        })
        this.visableTable=true;

      })
    
  
  }
  updateItem(item){
    this.items.updateItem(this.id,this.updateItemData.value).subscribe((result)=>{
          })
    this.id=null;
    this.name="";
    this.description="";
    this.count=null;
    this.visableTable=false;

  }
}
