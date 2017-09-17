import { VindaPelisterPage } from './app.po';

describe('vinda-pelister App', function() {
  let page: VindaPelisterPage;

  beforeEach(() => {
    page = new VindaPelisterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
