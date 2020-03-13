import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { punkApiService } from "./services/punkapi.service";
import { BeerFilterPipe } from "./beer-filter.pipe";

@NgModule({
  declarations: [AppComponent, BeerFilterPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [punkApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
