import React from 'react';
import Page from '../components/page/page';
import Title from '../components/title/title';
import List from '../components/list/list';

import base from '../base';

class index extends React.Component {
  static async getInitialProps() {
    const entries = await base.fetch('/entries', {
      context: this,
      asArray: true,
    });
    return { entries };
  }

  constructor(props) {
    super(props);
    this.state = { entries: props.entries };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.ref = base.syncState('/entries', {
      context: this,
      state: 'entries',
    });
  }

  componentWillUnMount() {
    base.removeBinding(this.ref);
  }

  handleChange(e) {
    const id = parseInt(e.target.id, 10);
    const entries = this.state.entries.map(entry => {
      if (entry.id !== id) {
        return entry;
      }
      return { ...entry, done: e.target.checked };
    });
    this.setState({
      entries,
    });
  }

  render() {
    return (
      <Page>
        <Title>Cleanhaus</Title>
        <List entries={this.state.entries} handleChange={this.handleChange} />
      </Page>
    );
  }
}

export default index;
