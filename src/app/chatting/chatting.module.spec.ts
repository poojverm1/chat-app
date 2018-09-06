import { ChattingModule } from './chatting.module';

describe('ChattingModule', () => {
  let chattingModule: ChattingModule;

  beforeEach(() => {
    chattingModule = new ChattingModule();
  });

  it('should create an instance', () => {
    expect(chattingModule).toBeTruthy();
  });
});
