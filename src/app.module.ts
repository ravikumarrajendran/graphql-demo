import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CourseModule } from './course/course.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Course } from './course/course.entity';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true
    }),
    TypeOrmModule.forRoot({
      type:'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'CourseDetails',
      synchronize:true,
      useUnifiedTopology:true,
      entities:[Course]
    }),
    CourseModule
  ],
  
})
export class AppModule {}
