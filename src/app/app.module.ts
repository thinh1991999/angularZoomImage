import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailModule } from './components/detail/detail.module';
import { HeaderComponent } from './components/header/header.component';
import { GlobalService } from './services/global.service';
import { CartComponent } from './components/cart/cart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CartComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, DetailModule, FormsModule],
  providers: [GlobalService],
  bootstrap: [AppComponent],
  exports: [FormsModule],
})
export class AppModule {}
