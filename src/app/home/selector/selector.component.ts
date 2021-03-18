import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {

  public filterValue: string = "";
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  constructor(
    private popoverCtrl: PopoverController,
  ) { }

  ngOnInit() {}

  dismiss() {
    const labels = this.form.filter(entry => entry.isChecked).map(entry => entry.val);
    this.popoverCtrl.dismiss( labels );
  }

}
