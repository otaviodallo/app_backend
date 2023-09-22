import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/usuario/user.module';
import { UserService } from 'src/usuario/user.service';

@Module({
    imports: [UserModule],
    providers: [AuthService, UserService]
})
export class AuthModule {}
