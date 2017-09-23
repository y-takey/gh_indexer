//////////////////////////////////////////////
//// Inject jquery lib to document for debug
//   FIXME: This injection don't works fine.
//////////////////////////////////////////////

// chrome.management.getSelf(self => {
//   // if (self.installType !== 'development') return;
//
//   chrome.tabs.executeScript({
//     code:
//       'var script=document.createElement("script");' +
//       'script.setAttribute("type", "text/javascript");' +
//       'script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");' +
//       'document.getElementsByTagName("head")[0].appendChild(script);'
//   });
// });
