/*import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

}
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page  implements OnInit {
comprado:any;
recebido:any;
troco:any;
status:any;
  constructor(public modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
  }
  async enviaDados(){
    //console.log(this.peso);
    //console.log(this.altura);
    this.troco= this.recebido-this.comprado;
    this.troco=this.troco.toFixed(2);
    //console.log(this.imc);

    const alert = await this.alertController.create({
      header: 'Seu troco é:',
      subHeader: this.troco,
      message: "Volte Sempre",
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

