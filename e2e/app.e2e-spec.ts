import { Sealedproduct.ComPage } from './app.po';

describe('sealedproduct.com App', () => {
  let page: Sealedproduct.ComPage;

  beforeEach(() => {
    page = new Sealedproduct.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
