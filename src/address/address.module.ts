import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressContoller } from './address.controller';
import { ContactModule } from '../contact/contact.module';

@Module({
  imports: [ContactModule],
  providers: [AddressService],
  controllers: [AddressContoller],
})
export class AddressModule {}
