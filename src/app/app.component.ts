import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'no-server-rendering';
}
