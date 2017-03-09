import { BobboardPage } from './app.po';

describe('bobboard App', () => {
  let page: BobboardPage;

  beforeEach(() => {
    page = new BobboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
