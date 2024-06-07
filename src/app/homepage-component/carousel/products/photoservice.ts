import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    
    getData() {
        return [
            {
                itemImageSrc: 'https://ctrlplay.com.br/wp-content/uploads/2023/01/profissional-de-tecnologia-da-informacao-trabalhando.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
                alt: 'Formatação de Computadores',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://s1.nlocker.app/media/1.416.0/images/locker/blog/what-is-cybersecurity.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
                alt: 'Recuperação e quebra de senha de usuário',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
                alt: 'Desenvolvimento de Software e aplicações Web',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia2655/notebook-tecnico-conserto-cursos-cpt-manutencao.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
                alt: 'Manutenção e Montagem de Hardware',
                title: 'Title 4'
            },
            {
                itemImageSrc: '../assets/img/orusfixtech.png',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
                alt: 'Description for Image 5',
                title: 'Suporte em tecnologia empresarial'
            },
  
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};