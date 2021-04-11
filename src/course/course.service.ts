import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import {v4 as uuid} from 'uuid';
import { CourseRepository } from './course.repository';
@Injectable()
export class CourseService {
constructor(
    @InjectRepository(CourseRepository) private courseRepository:CourseRepository){

}
async createCourse(name ,startDate,endDate){
   return await  this.courseRepository.createCourse(name ,startDate,endDate);
}

}
