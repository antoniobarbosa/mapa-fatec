import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { LugarProvider } from "../../providers/lugar/lugar";

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  destinoSelecionado: any = {
    descricao: false,
    id: "teste"
  };
  mapaUrl = "http://lorempixel.com/731/449";
  localSelecionado = {
    descricao: false,
    id: "teste"
  };
  lugares = [];
  trajetos = [];
  trajetoSelecionado = {rota:[]};
  querSelecionarLocal = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public lugarProvider: LugarProvider, public actionSheetCtrl: ActionSheetController) {

  }

  ionViewDidLoad() {
    this.lugares = this.lugarProvider.getLugares();
    this.trajetos = this.lugarProvider.getTrajetos();
    console.log('ionViewDidLoad MapaPage');
  }
  selecionaLocal(event, lugar) {
    if (this.querSelecionarLocal || this.localSelecionado == lugar) {
      this.localSelecionado = lugar;
      this.destinoSelecionado = {};
      this.querSelecionarLocal = false;
    }
    else {
      this.destinoSelecionado = lugar;
      for (let i = 0; i < this.trajetos.length; i++) {
        if (this.trajetos[i].id == this.localSelecionado.id + '-' + this.destinoSelecionado.id) {
          this.trajetoSelecionado=this.trajetos[i]
          this.presentActionSheet();
        }
      }
      this.querSelecionarLocal = true;
    }

  }
  trajetoCss() {
    return this.localSelecionado.id + "-" + this.destinoSelecionado.id
  }

  presentActionSheet() {
    let botoes = this.trajetoSelecionado.rota.map((trajeto)=>{
        return {text:trajeto}
    })
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Trajeto',
      buttons:botoes
      
    });
    actionSheet.present();
  }
}
