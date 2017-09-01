import { GfwebPage } from './app.po';

describe('gfweb App', () => {
  let page: GfwebPage;

  beforeEach(() => {
    page = new GfwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
