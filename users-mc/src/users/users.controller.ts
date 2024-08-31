import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './Dto/CreateUser.dto';

@Controller('users')
export class UsersMicroserviceController {
  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    console.log(data);
    return { success: true };
  }

  @MessagePattern({ cmd: 'paymentCreated', service: 'users' })
  paymentCreated(@Payload() data: any) {
    console.log(data);
  }
}
