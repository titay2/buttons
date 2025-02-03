import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ITile } from '../../Interface/ITile';

@Component({
  selector: 'app-grid',
  imports: [CommonModule, MatGridListModule, ButtonComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  public cols: number = 3;
  public rowHeight: string = '5em';
  @Input() tiles: ITile[] = [];
}
