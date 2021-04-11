
import{ ObjectType,Field,ID} from '@nestjs/graphql';
@ObjectType('Course')
export class CourseType{
    @Field(type=>ID)
    id:string;
    @Field()
    name:string;
    @Field()
    startDate:string;
    @Field()
    endDate:string;
}