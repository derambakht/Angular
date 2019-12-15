import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private permissionsService: NgxPermissionsService) {}

ngOnInit(): void {
  const userPermissions = ["ADMIN", "EDITOR"];
  this.permissionsService.loadPermissions(userPermissions);
}

  title = 'MaterialSampleApp';
  showFiller = false;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1024) + 'mb';
    }

    return value;
  }

}
