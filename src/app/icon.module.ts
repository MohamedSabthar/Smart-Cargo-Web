import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Package, User, Trash2,Inbox,MapPin,Clock,PlusSquare,Navigation,LogOut,Loader,Search,CheckCircle,XCircle } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Package, User, Trash2,Inbox,MapPin,Clock,PlusSquare,Navigation,LogOut,Loader,Search,CheckCircle,XCircle
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
