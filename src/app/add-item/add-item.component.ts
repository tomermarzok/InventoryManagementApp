import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { taskService } from "../task.service";
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
    alert : boolean = false;
    addItem=new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      count: new FormControl(''),
  })
  constructor(private item: taskService ) { }
  ngOnInit(): void {
  }
  subItem(){
    this.item.addItem(this.addItem.value).subscribe((result)=>{    
    })
    this.alert=true;
    this.addItem.reset({});
  }
  closeAlert(){
    this.alert=false;
  }
}

