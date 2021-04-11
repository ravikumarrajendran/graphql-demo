import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CourseType } from "./course.type";
import {CourseService} from "./course.service";
@Resolver(of => CourseType)
export class CourseResolver {
constructor(private courseService:CourseService){

}
    @Query(returns => CourseType)
    course() {
        this.staticCreateCourse();
        return {
            id: '404678',
            name: 'ravikumar',
            startDate: (new Date().toISOString()),
            endDate: (new Date().toISOString())
        };
    }

    @Mutation((returns) => CourseType)
    async createCourse(
        @Args('name') name:string,
        @Args('startDate')startDate :string,
        @Args('endDate')endDate : string
        ){
      console.log('entered into createCourse-resolver-Mutation');
        return await this.courseService.createCourse(name,startDate,endDate);

    }
    staticCreateCourse( ){
        console.log('entered into createCourse-resolver');
          return this.courseService.createCourse('404678',new Date().toISOString(),new Date().toISOString());
  
      }
}