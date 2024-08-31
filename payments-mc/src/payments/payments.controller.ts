import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
@Controller()
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @EventPattern({ cmd: 'createPayment', service: 'payments' })
  createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    this.natsClient.emit(
      { cmd: 'paymentCreated', service: 'users' },
      createPaymentDto,
    );
  }
}
