import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/createUser.dto";

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService){}
    @Mutation(() => User)
    createUser(@Args('createUserDto') body: CreateUserDto) {
        const user = this.userService.create(body)
        return user;
  }
}