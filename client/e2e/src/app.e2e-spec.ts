import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display toolbar name', () => {
    page.navigateTo();
    page.getToolbarText().then((text) => {
      expect(text).toContain('NgRx Auth App');
    })
  });
});
