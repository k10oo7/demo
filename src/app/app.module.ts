import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { SortableColumnComponent } from './Shared/components/sortable-column/sortable-column.component';
import { SortService } from './Shared/services/sort.service';
import { SortableTableDirective } from './Shared/directives/sortable-table.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailsComponent,
    SortableColumnComponent,
    SortableTableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
