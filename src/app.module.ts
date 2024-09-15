import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModul } from './user/user.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [CommonModule, UserModul, ContactModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
