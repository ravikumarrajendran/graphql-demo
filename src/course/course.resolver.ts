import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CourseType } from "./course.type";
import {CourseService} from "./course.service";
import { CourseDto } from "./course.dto";
@Resolver(of => CourseType)
export class CourseResolver {
constructor(private courseService:CourseService){

}
/**
 * 
 * @param name 
 * @param startDate 
 * @param endDate 
 */
@Mutation((returns) => CourseType)
    async createCourse(
        @Args('courseDto') courseDto:CourseDto
        ){
      console.log('entered into createCourse-resolver-Mutation');
        return await this.courseService.createCourse(courseDto);

    }/**
     * 
     */
    

    
    @Query(returns => [CourseType])
    course() {
        
        return this.courseService.getAllCourse();
        
    }
}