import { Component, OnInit } from '@angular/core';
import { taskService } from "../task.service";
@Component({
  selector: 'app-get-items',
  templateUrl: './get-items.component.html',
  styleUrls: ['./get-items.component.scss']
})
export class GetItemsComponent implements OnInit {

  constructor(private items: taskService) { }
  collection: any=[];
  ngOnInit(): void {
      this.items.getList().subscribe((result)=>{
      console.log(result)
      this.collection=result
    })
  }

}
