import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphiqueComponent } from './components/graphique/graphique.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GraphiqueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'graph';
}
