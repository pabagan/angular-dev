import { AppNewCLIPage } from './app.po';

describe('app-new-cli App', () => {
  let page: AppNewCLIPage;

  beforeEach(() => {
    page = new AppNewCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
