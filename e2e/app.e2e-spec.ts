import { DexPfPage } from './app.po';

describe('dex-pf App', () => {
  let page: DexPfPage;

  beforeEach(() => {
    page = new DexPfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
