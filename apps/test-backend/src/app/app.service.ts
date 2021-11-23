import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getData(): { message: string } {
    const response = { message: 'Welcome to test-backend!' }
    return { message: '' }
  }
}
