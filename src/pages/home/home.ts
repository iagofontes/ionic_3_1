import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;

  constructor(public navCtrl: NavController) {
    this.carros = [
      {nome:'Fusca', preco:2000},
      {nome:'Fox', preco:15000},
      {nome:'Gol G6', preco:20000},
      {nome:'Onix', preco:35000},
      {nome:'Pajeto TR4', preco:46250},
      {nome:'Doblo', preco:21850},
      {nome:'HB20', preco:39000},
      {nome:'Polo Sedan', preco:24500},
      {nome:'Voyage', preco:14200},
      {nome:'Celta', preco:15632},
      {nome:'Maseratti', preco:1250000},
    ];
  }

}
