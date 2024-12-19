import { Injectable } from '@nestjs/common';

const possibleResponses = [
  { keyword: 'hello', response: 'Hello!' },
  { keyword: 'ship status', response: 'Ship status is OK' },
];

@Injectable()
export class TextService {
  async handleCommand(input: string) {
    for (const possibleResponse of possibleResponses) {
      if (input.includes(possibleResponse.keyword))
        return possibleResponse.response;
    }
    throw new Error('No keywords found');
  }
}
