import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {


  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Perfil',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Exibir Perfil',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Configurações de Privacidade',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                   
                ]
            },
 
            {
                label: 'Sair',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}


