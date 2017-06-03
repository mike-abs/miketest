import { MiketestPage } from './app.po';

describe('miketest App', () => {
  let page: MiketestPage;

  beforeEach(() => {
    page = new MiketestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
