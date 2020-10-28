import { Component } from '@angular/core';
import { taskService } from "./task.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular ';
  constructor(private item: taskService){
    this.item.getList().subscribe(data=>{
      console.log(data)
    })

    console.log(item);
  }





}
