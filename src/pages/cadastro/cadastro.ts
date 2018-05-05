import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { AgendamentoServiceProvider } from '../../providers/agendamento-service/agendamento-service';
import { Carro } from '../../models/carro';
import { Agendamento } from '../../models/agendamento';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  private carro: Carro;
  private valorTotal: number;
  private nome:string='';
  private endereco:string='';
  private email:string='';
  private data:string=new Date().toISOString();

  private _alert: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _alertCtrl: AlertController, 
    private _agendamentoService:AgendamentoServiceProvider) {
    this.carro = this.navParams.get('carroSelecionado');
    this.valorTotal = this.navParams.get('precoFinal');
  }

  agendar(){

    if(!this.nome || !this.endereco || !this.email){
      this._alertCtrl.create({
        title:'Dados Obrigatórios',
        subTitle:'Realize o preenchimento das informações.',
        buttons:[
          {text:'Ok'}
        ]
      }).present();
      return;
    }

    this._alert = this._alertCtrl.create({
      title:'Aviso', 
      buttons:[
        {
          text:'Ok',
          handler: ()=>{
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });

    let agendamento:Agendamento = {
      nomeCliente: this.nome,
      enderecoCliente: this.endereco,
      emailCliente: this.email,
      modeloCarro: this.carro.nome,
      precoTotal: this.valorTotal,
      data: this.data
    }

    let mensagem = '';

    this
      ._agendamentoService
      .agendar(agendamento)
      .finally(()=>{
        this._alert.setSubTitle(mensagem);
        this._alert.present();        
      })
      .subscribe(
        ()=>{
          // success
          mensagem = 'Agendamento realizado com sucesso.';
        },
        ()=>{
          // error
          mensagem = 'Problemas ao realizar agendamento.';
        }
      );

  }


}
