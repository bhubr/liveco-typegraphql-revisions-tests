import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Book {
  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  author: string;
}