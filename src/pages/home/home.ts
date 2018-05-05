import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Carro } from '../../models/carro';
import { HttpErrorResponse } from '@angular/common/http';
import { CarroServiceProvider } from '../../providers/carro-service/carro-service';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';
import { DetalhePage } from '../detalhe/detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {

  public carros: Carro[];

  constructor(public navCtrl: NavController, 
    private _loadingCtrl: LoadingController, 
    private _alertCtrl: AlertController,
    private _carroService: CarroServiceProvider) {}
  
  ionViewDidLoad(){

    let load = this._loadingCtrl.create({content:'Aguarde o carregamento...'});

      load.present();

      this._carroService
      .lista()
      .subscribe(
        (carros)=>{
          this.carros = carros;
          load.dismiss();
        },
        (err:HttpErrorResponse)=>{
          console.log(err);
          load.dismiss();
          this._alertCtrl.create({
            title:'Problemas',
            subTitle:'Problemas foram encontrados ao solicitar a listagem de carros. Tente novamente.',
            buttons:[{
              text:'Ok'
            }]
          }).present();
        });
  }

  selecionarCarro(carro: Carro){
    console.log(carro); 
    this.navCtrl.push(DetalhePage.name, {
      carro:carro
    });
  }

}
