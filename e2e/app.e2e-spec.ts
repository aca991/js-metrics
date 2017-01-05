import { JsTestPage } from './app.po';

describe('js-test App', function() {
  let page: JsTestPage;

  beforeEach(() => {
    page = new JsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
