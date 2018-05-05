import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CadastroPage } from '../cadastro/cadastro';
import { Carro } from '../../models/carro';
import { Acessorio } from '../../models/acessorio';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  // protected carro: Carro;
  // protected acessorios = [];
  public carro: Carro;
  public acessorios: Acessorio[];
  private _valorTotal=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = this.navParams.get('carro');
    this.acessorios = [
      {nome:'Ar-condicionado', preco:800},
      {nome:'Vidro Elétrico', preco:200},
      {nome:'Direção Hidr.', preco:1000},
      {nome:'Alarme', preco:500}
    ];
    this._valorTotal = this.carro.preco;    
  }

  atualizarValores(estado:boolean=false, acessorio:Acessorio){
    estado?
      this._valorTotal += acessorio.preco:
      this._valorTotal -= acessorio.preco;
  }

  get valorTotal(){
    return this._valorTotal;
  }

  avancarCadastro(){
    this.navCtrl.push(CadastroPage.name, {
      carroSelecionado:this.carro,
      precoFinal:this._valorTotal
    });
  }

}
