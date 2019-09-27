import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
peso:any;
altura:any;
imc:any;
status:any;
  constructor(public modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
  }
  async enviaDados(){
    //console.log(this.peso);
    //console.log(this.altura);
    this.imc= this.peso/(this.altura*this.altura);
    this.imc= this.imc.toFixed(2);
    //console.log(this.imc);

    if(this.imc<17){
      this.status= "Muito abaixo do peso!";
    }
    if(this.imc>=17 && this.imc<=18.49){
      this.status= "Abaixo do peso!";
    }
    if(this.imc>=18.5 && this.imc<=24.99){
      this.status= "Peso Norma!";
    }
    if(this.imc>=25 && this.imc<=29.99){
      this.status= "Levemente Acima do Peso!";
    }
    if(this.imc>30){
      this.status= "Obesidade!";
    }
    const alert = await this.alertController.create({
      header: 'Seu indice de massa corporal é:',
      subHeader: this.imc,
      message: this.status,
      buttons:[
        {
          text:'OK',
          handler:()=>{
            this.closeModal();
          }
        }
      ]
    });

    await alert.present();
    
  }

  closeModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  

}
