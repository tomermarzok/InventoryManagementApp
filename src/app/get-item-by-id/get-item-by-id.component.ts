import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { taskService } from "../task.service";

@Component({
  selector: 'app-get-item-by-id',
  templateUrl: './get-item-by-id.component.html',
  styleUrls: ['./get-item-by-id.component.scss']
})
export class GetItemByIdComponent implements OnInit {

  id:number;
  name:string;
  description:string;
  count:number;
  flag:boolean=false;
  idSub=new FormGroup({
      getId:new FormControl('')
  })
  visableTable: boolean = false;
  constructor(private items: taskService) { }


  ngOnInit(): void {}   
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
}