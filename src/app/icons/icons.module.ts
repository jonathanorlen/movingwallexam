import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { Users, 
        Award, 
        CreditCard, 
        Eye, Home, 
        ChevronUp, Package, 
        Edit2, Trash2, 
        Edit, Search, 
        Menu} from 'angular-feather/icons';

const icons = {
  Users,
  Award,
  CreditCard,
  Eye,
  Home,
  ChevronUp,
  Package,
  Edit2,
  Trash2,
  Edit,
  Search,
  Menu
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
