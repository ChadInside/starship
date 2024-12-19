import { Body, Controller, Post } from '@nestjs/common';
import { InputCommandDto } from './dtos/input-command-dto';
import { TextService } from './text.service';

@Controller('text')
export class TextController {
  constructor(private readonly textService: TextService) {}

  @Post('process-text')
  async handleCommand(@Body() inputCommand: InputCommandDto) {
    try {
      const response = await this.textService.handleCommand(
        inputCommand.command.toLowerCase(),
      );
      return {
        command: inputCommand.command,
        timestamp: new Date().toISOString(),
        response,
      };
    } catch (error) {
      return {
        command: inputCommand.command,
        timestamp: new Date().toISOString(),
        error: error.message,
      };
    }
  }
}
