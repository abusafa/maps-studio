import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import styles1 from '/imports/ui/components/SearchBar/SearchBar.less';
import { GeoJsonToList } from '/imports/utils/GeoUtils.js';
import Globals from '/imports/common/global.js';
import styles from './SearchBar.scss';

export  default class SearchBar extends Component
{

  doSearch(event){

    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.searchInput).value.trim();

    let {layer} = this.props;
    Globals.SearchBoxIsOpen.set(true);

    // close details box
    Globals.ResultItemDetailsBox.set('isOppend', false);

    Meteor.call('es.search', text, layer.name, layer.property, (error, geojson)=>{

      Globals.SearchResults.set(GeoJsonToList( geojson, {property:layer.property}));

    });

  }



  toggleSidebar(){
    let _isOppened = Globals.sidebareState.get('isOppend');
    Globals.sidebareState.set('isOppend', !_isOppened);
  }

  render()
  {





    let loading = false;
    let loadingBtn = '';

    if(loading)
      loadingBtn = <a className="button is-loading is-warning">Loading</a>;


    return(
      <article className={"search-bar is-child notification " + styles.container}>
        <div className={styles.content}>
          <nav className="">

            <div className="">
              <div className="">
                {loadingBtn}
              <a className={"button " + styles.menuButton}   onClick={this.toggleSidebar.bind(this)}><i className="ion-more" /></a>
              </div>
            </div>

            <form onSubmit={this.doSearch.bind(this)}>

            <div className={styles.searchInput}>
              <div className="">
                <p className="control has-addons">
                  <input className="input" type="text" placeholder={this.props.placeholder} ref="searchInput" ></input>
                  <button className="button search-button"  type="submit">
                    <i className="ion-ios-search"></i>
                  </button>
                </p>
              </div>

            </div>
          </form>


          </nav>
        </div>
      </article>

    );
  }
}
