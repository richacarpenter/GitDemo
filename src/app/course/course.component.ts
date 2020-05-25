import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = 'My Coureses';
  courses; name;
  constructor(service: CourseService) {
    this.courses = service.getCourse();
  }

  onClick(){
    console.log('On clikc called');
  }

  onKeyUp(){
    console.log('onKeyUp called name ' + this.name);
  }

  ngOnInit(): void {
  }

}
