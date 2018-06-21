// SAM is a async and state management pattern created by Jean-Jacques Dubray
// http://sam.js.org/
import {html, render} from 'lit-html';
import lodash from 'lodash';

var model = {
  // default values
};
var state = '';
var actions = {
  action: function(x) {
    present({x});
  },
};
var present = function(proposal) {
  // ancillary

  if (proposal.x) {
    model.x = proposal.x;
  }

  state();
};
var state = function() {
  if (model.x) {
    render(html`<div class="sam">Tesla ${model.x}</div>`, document.body);
  }

  nap();
};
var nap = function() {

};

export default Object.assign({}, actions, {model: model});