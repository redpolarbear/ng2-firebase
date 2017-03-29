import { BookStackAppPage } from './app.po';

describe('book-stack-app App', () => {
  let page: BookStackAppPage;

  beforeEach(() => {
    page = new BookStackAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
