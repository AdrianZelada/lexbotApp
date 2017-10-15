/**
 * Created by iZel on 10/12/17.
 */

(function (window) {
  'use strict';
  window.eventConversation={};
  window.eventConversation.emit=function (evt,data) {
    let nameEvt={
      initialConv:'onInitialConversation',
      Initial:'onInitial',
      Listening:'onListening',
      Sending:'onSending',
      Speaking:'onResponseConversation',
      StopConv:'stopConversation'
    };
    // console.log(evt)

    let customEvt = new CustomEvent(nameEvt[evt],{
      detail:data,
      bubbles: true,
      cancelable: true
    });

    document.dispatchEvent(customEvt);
  }


})(window);
