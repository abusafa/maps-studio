import React , { Component } from 'react';
import SearchResultItem from '/imports/ui/components/SearchResultItem/SearchResultItem.jsx';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './SearchResultsList.scss';

export default class SearchResultsList extends Component{

  renderResults() {
    return this.props.items.map((result) => (
      <SearchResultItem key={result._id} result={result} />
    ));
  }


  render()
  {
    var inlineStyles={
      scrollY:
      {
        overflowY: "auto",
        height: "350px",
        overflowX: "hidden"
      }
    };

    return (
      <div style={inlineStyles.scrollY}>
        <Scrollbars className={styles.scrollFix}>
          {this.renderResults()}
        </Scrollbars>
      </div>
    );
  }
}
