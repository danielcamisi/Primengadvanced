import { Component, OnInit } from '@angular/core';
import { OfsService } from '../ofs-service/ofs.service';

@Component({
  selector: 'app-of-component',
  templateUrl: './of-component.component.html',
  styleUrl: './of-component.component.css'
})
export class OfComponentComponent implements OnInit{

    tarefas!: any[];
    searchedTarefa: any;
    showtable = false;

  constructor(private service: OfsService) { }

  ngOnInit(): void {
    this.loadTarefas();
  }

  loadTarefas() {
    this.tarefas = [
      {
        "tarefa": {
          "id": "5.10.1",
          "desc": "Criação de tela HTML, XHTML, JSP, XML, VTL, XSL, Swing, AWT, XUI, PHP",
          "complexidade": null,
          "unidade_de_medida": "Por arquivo",
          "USTIBB": 10
        }
      },
      {
        "tarefa": {
          "id": "5.10.2",
          "desc": "Alteração de tela HTML, XHTML, JSP, XML, VTL, XSL, Swing, AWT, XUI, PHP",
          "complexidade": null,
          "unidade_de_medida": "Por arquivo",
          "USTIBB": 5
        }
      },
      {
        "tarefa": {
          "id": "5.10.3",
          "desc": "Criação de CSS ou SCSS",
          "unidade_de_medida": "Por arquivo",
          "complexidade_baixa_desc": "Até 30 diretivas/blocos implementados.",
          "complexidade_baixa_USTIBB": 8,
          "complexidade_media_desc": "De 31 até 60 diretivas/blocos implementados.",
          "complexidade_media_USTIBB": 16,
          "complexidade_Alta_desc": "Acima de 60 diretivas/blocos implementados",
          "complexidade_Alta_USTIBB": 24
        }
      },
      {
        "tarefa": {
          "id": "5.10.4",
          "desc": "Alteração de CSS ou SCSS",
          "unidade_de_medida": "Por arquivo",
          "complexidade_baixa_desc": "Até 30 diretivas/blocos implementados.",
          "complexidade_baixa_USTIBB": 8,
          "complexidade_media_desc": "De 31 até 60 diretivas/blocos implementados.",
          "complexidade_media_USTIBB": 16,
          "complexidade_Alta_desc": "Acima de 60 diretivas/blocos implementados",
          "complexidade_Alta_USTIBB": 24
        }
      },
      {
        "tarefa": {
          "id": "5.10.5",
          "desc": "Criação JavaScript",
          "complexidade": null,
          "unidade_de_medida": "Por arquivo",
          "USTIBB": 10
        }
      },
      {
        "tarefa": {
          "id": "5.10.6",
          "desc": "Alteração JavaScript",
          "complexidade": null,
          "unidade_de_medida": "Por arquivo",
          "USTIBB": 5
        }
      },
      {
        "tarefa":{
            "id": "imaginario",
            "desc": "Criação TypeScript",
            "complexidade": null,
            "unidade_de_medida": "Por arquivo",
            "USTIBB": 10
        }
    },{
        "tarefa":{
            "id": "imaginario",
            "desc": "Alteração TypeScript",
            "complexidade": null,
            "unidade_de_medida": "Por arquivo",
            "USTIBB": 5
        }
      }
    ];
  }

  searchTarefasByKeyword(keyword: string) {
    return this.tarefas.filter(tarefa => tarefa.tarefa.desc.toLowerCase().includes(keyword.toLowerCase()));
  }


  onSearch(taskKeyword: string) {
    this.searchedTarefa = this.searchTarefasByKeyword(taskKeyword);
    this.showtable = this.searchedTarefa.length > 0; // Exibe a tabela apenas se houver tarefas encontradas
  }
}