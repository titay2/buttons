import { Component } from '@angular/core';
import { GridComponent } from './shared/components/grid/grid.component';
import { ITile } from './shared/Interface/ITile';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buttons';
  gridData: ITile[] = [
    { text: '' },
    { text: 'Default' },
    { text: 'Negative' },
    { text: 'Active' },
    { button: { label: 'Edit', color: 'accent', icon: 'edit', disabled: false } },
    { button: { label: 'Delete', color: 'warn', icon: 'delete', disabled: false } },
    { text: 'Disabled' },
    { button: { label: 'Edit', color: 'accent', icon: 'edit', disabled: true } },
    { button: { label: 'Delete', color: 'warn', icon: 'delete', disabled: true } },
  ];
}
