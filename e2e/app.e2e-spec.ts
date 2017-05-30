import { AngularWebsitePersoPage } from './app.po';

describe('angular-website-perso App', () => {
  let page: AngularWebsitePersoPage;

  beforeEach(() => {
    page = new AngularWebsitePersoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
