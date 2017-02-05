import React , { Component , PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import '/imports/styles/SearchResultsBox.less';

import SearchResultItem from '/imports/ui/components/SearchResultItem/SearchResultItem.jsx';
import SearchResultsList from '/imports/ui/components/SearchResultsList/SearchResultsList.jsx';
import ResultItemDetailsBox from '/imports/ui/components/ResultItemDetailsBox/ResultItemDetailsBox.jsx';
import Globals from '/imports/common/global.js';
import classnames from 'classnames';

import styles from './SearchResultsBox.scss';

export default class SearchResultsBox extends Component{


  constructor(){
    super();
    this.state = {
      layerTitle: ''
    };

  }

  close(){
      Globals.SearchBoxIsOpen.set(false);
  }




  componentWillReceiveProps(nextProps) {
    //console.log("nextProps.leaflet");
    if(nextProps.layer != this.props.layer)
    {
        this.setState({layerTitle:nextProps.layer.title});
        Globals.SearchResults.set([]);
    }

  }


  render(){

    let _classNames = {
      "notification":false,
      "animated": true,
      "slideInUp":this.props.searchBoxIsOpen,
      "slideOutDown": !this.props.searchBoxIsOpen
    };

    _classNames[styles.container] = true;

    var classNames = classnames(_classNames);



    return (
      <article className={classNames}>
        <div className={styles.backgroundShadow} onClick={this.close.bind(this)}></div>
        <div className={styles.content} >
          <button className="button is-warning close-btn" onClick={this.close.bind(this)}>x</button>
          <div className="content">
            <p className="title"> نتائج البحث في {this.state.layerTitle}</p>

          <p className="subtitle"><strong>{this.props.items.length}</strong> نتيجة</p>
            <div className="content">
            </div>
          </div>

          <SearchResultsList items={this.props.items}></SearchResultsList>
          <ResultItemDetailsBox></ResultItemDetailsBox>

        </div>

      </article>
    );
  }


}



SearchResultsBox.propTypes = {
  items: PropTypes.array.isRequired,
  searchBoxIsOpen: PropTypes.bool.isRequired
};


export default createContainer(() => {

  return {
    items: Globals.SearchResults.get(),
    searchBoxIsOpen: Globals.SearchBoxIsOpen.get(),
  };
}, SearchResultsBox);
