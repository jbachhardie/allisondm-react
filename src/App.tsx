import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Entry } from 'contentful';
import { kebabCase } from 'lodash';
import { Nav, Page, Footer } from './components';
import { SlideData } from './components/slide';
import contentful from './modules/contentful-client';

type PageData = {
  title: string;
  slides: SlideData[];
};

interface AppState {
  pages: PageData[];
}

// tslint:disable no-any
const processData = (page: Entry<{ title: string; slides: Entry<any>[] }>) => ({
  title: page.fields.title,
  slides: page.fields.slides.map((slide: Entry<any>) => ({
    fields: slide.fields,
    type: slide.sys.contentType.sys.id as any
  }))
});
// tslint:enable no-any

const getMatchingPage = (pages: PageData[], target: string): PageData =>
  pages.find(page => kebabCase(page.title) === target) || {
    title: target,
    slides: []
  };

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { pages: [] };
  }
  componentDidMount() {
    contentful.getEntries({ content_type: 'page' }).then(entry => {
      this.setState({
        pages: entry.items.map(processData)
      });
    });
  }
  render() {
    const { pages } = this.state;
    if (pages.length > 0) {
      return (
        <Router>
          <div>
            <Route exact path="/" render={() => <Redirect to="/main" />} />
            <Route
              path="/:page"
              render={props =>
                <Page {...getMatchingPage(pages, props.match.params.page)}>
                  <Nav pages={pages.map(page => page.title)} />
                </Page>}
            />
            <Footer />
          </div>
        </Router>
      );
    } else {
      return <div />;
    }
  }
}

export default App;
