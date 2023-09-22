import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dtos/createUser.dto";
import { AuthService } from "src/auth/auth.service";

@Resolver(() => User)
export class UserResolver {
    constructor(
      private readonly authService: AuthService
      ){}
    @Mutation(() => User)
    createUser(@Args('createUser') body: CreateUserDto) {
        const user = this.authService.signUp(body)
        return user;
  }
}