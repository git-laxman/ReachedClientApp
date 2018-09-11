import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalApi } from './global-api';
import { Class } from '../Common/Class';

@Injectable()
export class CommondataService {

  constructor(private http: HttpClient, private global: GlobalApi) { }
  classData = [
    {
      ClassID:1,Class:'L.K.G'
    }
    ,{
      ClassID:2,Class:'U.K.G'
    },
    {
      ClassID:3,Class:'1st'
    }
    ,{
      ClassID:4,Class:'2nd'
    },
    {
      ClassID:5,Class:'3rd'
    }
    ,{
      ClassID:6,Class:'4th'
    },
];
Sectionsdata=[
  {
    SectionID:1,ClassID:1,SectionName:'A',
  },
  {
    SectionID:2,ClassID:1,SectionName:'B'
  },
  {
    SectionID:3,ClassID:2,SectionName:'A'
  },
  {
    SectionID:4,ClassID:2,SectionName:'B'
  }

]

courseList = [
  { CourseId: '1', CourseName: 'Yoga' },
  { CourseId: '2', CourseName: 'Tution Fee' },
  { CourseId: '3', CourseName: 'Bus Fee' },
 

];

GetClasses()
{

  return this.classData;
}

GetSections(id:number)
{

return this.Sectionsdata.filter(c=>c.ClassID==id);
}

GetCourse()
{
  return this.courseList;
}

}
