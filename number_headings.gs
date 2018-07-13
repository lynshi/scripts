function addHeaderNumbering () {
  var pars = DocumentApp.getActiveDocument().getBody().getParagraphs();
  var counterHeader = [0, 0, 0, 0, 0, 0];
  for(var i=0; i<pars.length; i++) {
    var par = pars[i];
    var hdg = par.getHeading();
    if (hdg == DocumentApp.ParagraphHeading.HEADING1) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING1, par, 0, counterHeader);
    } else if (hdg == DocumentApp.ParagraphHeading.HEADING2) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING2, par, 1, counterHeader);
    } else if (hdg == DocumentApp.ParagraphHeading.HEADING3) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING3, par, 2, counterHeader);
    } else if (hdg == DocumentApp.ParagraphHeading.HEADING4) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING4, par, 3, counterHeader);
    } else if (hdg == DocumentApp.ParagraphHeading.HEADING5) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING5, par, 4, counterHeader);
    } else if (hdg == DocumentApp.ParagraphHeading.HEADING6) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING6, par, 5, counterHeader);
    }
  }
}

function _addNumberingForHeaderType(headerType, paragraph, initIndex, counterHeader) {
  counterHeader[initIndex] = counterHeader[initIndex] + 1;
  var currCounter = _getCurrenNumbering(initIndex, counterHeader);
  for(var ii = initIndex + 1; ii < counterHeader.length; ii++) {
    counterHeader[ii] = 0;
  }
  
  var content = paragraph.getText();
  var chunks = content.split('.\t');
  var result = 'ok';
  if(chunks.length > 1) {
    paragraph.setText(currCounter+'.\t'+chunks[1]);
  } else {
    paragraph.setText(currCounter+'.\t'+chunks[0]);
  }
}


function _getCurrenNumbering(initIndex, counterHeader) {
  var value = '';
  for ( var i = 0; i <= initIndex; i++) {
    if (value) {
      value += '.';
    }
    
    value += counterHeader[i];
  }
  return value;
}