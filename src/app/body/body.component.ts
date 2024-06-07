import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { DialogErrorComponent } from './dialog-error/dialog-error.component';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogSucessComponent } from './dialog-sucess/dialog-sucess.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService]
})
export class BodyComponent implements OnInit{


  visible: boolean = false;
  name!: string;
  pword!: string;

ngOnInit(): void {}

  constructor(
    public dialog:DialogService
  ){};
  showDialog():void {
    if(this.name !== '123t' || this.pword !=='123t'){
      this.dialog.open(DialogErrorComponent,{})
        console.log("Um dos dois campos obrigatórios não foram preenchidos!")
    } else{
      this.dialog.open(DialogSucessComponent, {})
        console.log("Login Efetuado com sucesso!")
    }
  }
};

