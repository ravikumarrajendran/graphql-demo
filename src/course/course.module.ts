import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepository } from './course.repository';

@Module({
    imports: [TypeOrmModule.forFeature([CourseRepository])],

    providers: [CourseResolver, CourseService]
})
export class CourseModule {


}
