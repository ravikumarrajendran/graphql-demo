import { EntityRepository ,Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Course } from './course.entity';
import {v4 as uuid} from 'uuid';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course>{

    async createCourse(name ,startDate,endDate){
        const course=this.create({
            id:uuid(),
            name,
            startDate,
            endDate
        });
        return this.save(course);
    }

    async getCourses(){
        return this.find();
    }
}
