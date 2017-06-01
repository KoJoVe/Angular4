import { MelhorMedicoPage } from './app.po';

describe('melhor-medico App', function() {
  let page: MelhorMedicoPage;

  beforeEach(() => {
    page = new MelhorMedicoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
