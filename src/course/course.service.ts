import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import {v4 as uuid} from 'uuid';
import { CourseRepository } from './course.repository';
import { CourseDto } from './course.dto';
@Injectable()
export class CourseService {
constructor(
    @InjectRepository(CourseRepository) private courseRepository:CourseRepository){

}
async createCourse(courseDto:CourseDto){
    const {name ,startDate,endDate}=courseDto;
   return await  this.courseRepository.createCourse(name ,startDate,endDate);
}

async getAllCourse(){
    return await  this.courseRepository.getCourses();
}
}
