import { Component, OnInit } from '@angular/core';
import { DialogNextComponent } from '../../../body/dialog-next/dialog-next.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-header-second',
  templateUrl: './header-second.component.html',
  styleUrl: './header-second.component.css',
  providers: [DialogService]
})
export class HeaderSecondComponent implements OnInit {

  ngOnInit(): void {}
  
  constructor(public dialog:DialogService){}

showdialognext(){
  this.dialog.open(DialogNextComponent,{})
}



}
