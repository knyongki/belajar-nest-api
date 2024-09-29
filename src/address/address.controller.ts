import {
  Body,
  Controller,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { WebResponse } from '../model/web.model';
import { AddressResponse, CreateAddressRequest } from '../model/address.model';
import { User } from '@prisma/client';
import { Auth } from '../common/auth.decorator';

@Controller('/api/contacts/:contactId/addresses')
export class AddressContoller {
  constructor(private addressService: AddressService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() user: User,
    @Param('contactId', ParseIntPipe) contatcId: number,
    @Body() request: CreateAddressRequest,
  ): Promise<WebResponse<AddressResponse>> {
    request.contact_id = contatcId;
    const result = await this.addressService.create(user, request);
    return {
      data: result,
    };
  }
}
