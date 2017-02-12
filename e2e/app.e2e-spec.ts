import { ImpactAnalysisPage } from './app.po';

describe('impact-analysis App', function() {
  let page: ImpactAnalysisPage;

  beforeEach(() => {
    page = new ImpactAnalysisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
