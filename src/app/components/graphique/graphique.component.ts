import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Pays } from '../../models/pays';

@Component({
  selector: 'app-graphique',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './graphique.component.html',
  styleUrl: './graphique.component.css'
})
export class GraphiqueComponent {
    data: Pays[] = [
      { "name": "France", "value": 67413000 },
      { "name": "Allemagne", "value": 83155000 },
      { "name": "Italie", "value": 60360000 },
      { "name": "Espagne", "value": 47351500 },
      { "name": "Pologne", "value": 37970000 },
      { "name": "Royaume-Uni", "value": 66800000 },
      { "name": "Canada", "value": 38005238 },
      { "name": "Brésil", "value": 212559417 },
      { "name": "Inde", "value": 1380004385 },
      { "name": "Chine", "value": 1439323776 },
      { "name": "États-Unis", "value": 331002651 },
      { "name": "Indonésie", "value": 273523615 },
      { "name": "Pakistan", "value": 220892340 },
      { "name": "Nigéria", "value": 206139589 },
      { "name": "Bangladesh", "value": 164689383 }
    ];

}
