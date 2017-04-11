import { DotcomPage } from './app.po';

describe('dotcom App', () => {
  let page: DotcomPage;

  beforeEach(() => {
    page = new DotcomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
