import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SelectorComponent } from './selector/selector.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private popoverCtrl: PopoverController
  ) {}

  async presentPopover(ev: MouseEvent): Promise<void> {
    const popover = await this.popoverCtrl.create({
      component: SelectorComponent,
      event: ev
    });

    // Show Modal
    await popover.present();

    // Retrieve the object back from modal
    const {data} = await popover.onWillDismiss();
    console.log(data);
    // Bye
    return;
  }
}
