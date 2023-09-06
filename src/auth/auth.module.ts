import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/project.module';
import { AuthService } from './auth.service';

@Module({
    imports: [UserModule],
    providers: [AuthService]
})
export class AuthModule {}
