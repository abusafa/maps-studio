import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';

 class Globals {
  constructor()
  {
    this.SearchResults = new ReactiveVar();
    this.SearchResults.set([]);

    this.selectedFeature = new ReactiveVar();
    this.selectedFeature.set(null);

    this.sidebareState = new ReactiveDict();
    this.sidebareState.set('isOppend', false);


    this.ResultItemDetailsBox = new ReactiveDict();
    this.ResultItemDetailsBox.set('isOppend', false);


    this.selectedBasemap = new ReactiveVar();
    this.selectedBasemap.set(null);

    this.basemaps = new ReactiveVar();
    this.basemaps.set([]);


    this.layers = new ReactiveVar();
    this.layers.set([]);


    this.selectedLayer = new ReactiveVar();
    this.selectedLayer.set(null);

    this.SearchBoxIsOpen = new ReactiveVar();
    this.SearchBoxIsOpen.set(false);




  }



  CloseSidebar(){
    this.sidebareState.set('isOppend', false);
  }

  OpenSidebar(){
    this.sidebareState.set('isOppend', false);
  }


  ToggleSidebar(){
    let _isOppened = this.sidebareState.get('isOppend');
    this.sidebareState.set('isOppend', !_isOppened);
  }





}

export default (new Globals());
