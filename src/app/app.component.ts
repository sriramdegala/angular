import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type WorkstationStatus = 'In Use' | 'Available' | 'Maintenance';

interface Workstation {
  name: string;
  status: WorkstationStatus;
  loggedIn: number;
  arcMap: number;
  arcScene: number;
  arcGlobe: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly environment = signal('Cloud Production');
  readonly lastUpdated = new Date();
  readonly workstations = signal<Workstation[]>([
    { name: 'PWAWEWSWK16741', status: 'In Use', loggedIn: 2, arcMap: 0, arcScene: 0, arcGlobe: 0 },
    { name: 'PWAWEWSWK16742', status: 'Available', loggedIn: 0, arcMap: 0, arcScene: 0, arcGlobe: 0 },
    { name: 'PWAWEWSWK16743', status: 'In Use', loggedIn: 1, arcMap: 0, arcScene: 0, arcGlobe: 0 },
    { name: 'PWAWEWSWK16744', status: 'Available', loggedIn: 0, arcMap: 0, arcScene: 0, arcGlobe: 0 },
    { name: 'PWAWEWSWK16745', status: 'Available', loggedIn: 0, arcMap: 0, arcScene: 0, arcGlobe: 0 },
    { name: 'PWAWEWSWK16746', status: 'Available', loggedIn: 0, arcMap: 0, arcScene: 0, arcGlobe: 0 }
  ]);

  readonly total = computed(() => this.workstations().length);
  readonly inUse = computed(() => this.workstations().filter(x => x.status === 'In Use').length);
  readonly available = computed(() => this.workstations().filter(x => x.status === 'Available').length);
  readonly sessions = computed(() => this.workstations().reduce((sum, x) => sum + x.loggedIn, 0));

  trackByName(_: number, item: Workstation): string { return item.name; }
}