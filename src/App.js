
import boldIcon from './icons/bold.svg';
import italicIcon from './icons/italic.svg';
import paragraphIcon from './icons/paragraph.svg';
import alignCenterIcon from './icons/align-center.svg';
import alignLeftIcon from './icons/align-left.svg';
import alignRightIcon from './icons/align-right.svg';
import blockQuoteIcon from './icons/block-quote.svg';
import codeIcon from './icons/code.svg';
import h1Icon from './icons/h1.svg';
import h2Icon from './icons/h2.svg';
import h3Icon from './icons/h3.svg';
import h4Icon from './icons/h4.svg';
import h5Icon from './icons/h5.svg';
import h6Icon from './icons/h6.svg';
import horizontalRuleIcon from './icons/horizontal-rule.svg'; 
import penIcon from './icons/pen.svg';
import strikethroughIcon from './icons/strikethrough.svg';
import justifyIcon from './icons/justify.svg'; 
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';

function App() { 

  const [textList,setTextList] = useState(localStorage.getItem('textList') ? JSON.parse(localStorage.getItem('textList')) : [])
  const [modalShow,setModalShow] = useState(false)
  const [text,setText] = useState('')

  const setHtml = (elem) => {
    
    elem = document.createElement(elem);
    var sel = window.getSelection();
    if (sel.rangeCount) {
        var range = sel.getRangeAt(0).cloneRange();
        range.surroundContents(elem);
        sel.removeAllRanges();
        sel.addRange(range);
    }

  }

  const setType = (type, event) => { 
    let elem = '';
    if (type === 'bold') elem = 'b';
    else if (type === 'italic') elem = 'i';
    else if (type === 'paragraph') elem = 'p';
    else if (type === 'heading1') elem = 'h1';
    else if (type === 'heading2') elem = 'h2';
    else if (type === 'heading3') elem = 'h3';
    else if (type === 'heading4') elem = 'h4';
    else if (type === 'heading5') elem = 'h5';
    else if (type === 'heading6') elem = 'h6';
    else if (type === 'code') elem = 'code'; 
    else if (type === 'strike') elem = 's'; 
    else if (type === 'blockquote') elem = 'blockquote'; 
    else if (type === 'horizontalrule') elem = 'hr'; 
    setHtml(elem)
  };
  const setAlign = (type, event) => {
    let style = ''
    if (type === 'left') style = 'text-align:left';
    else if (type === 'center') style = 'text-align:center';
    else if (type === 'right') style = 'text-align:right';
    else if (type === 'justify') style = 'text-align:justify';

    window.getSelection().focusNode.parentElement.style = style
  };

  const saveText = () => {
    
    textList.push({id : textList.length + 1 , text : document.getElementById('editableContent').innerHTML});
    localStorage.setItem("textList", JSON.stringify(textList))
    setTextList(JSON.parse(localStorage.getItem('textList')))
  }

  const setModalDetail = (text, event) => { 
    setText(text)
    setModalShow(true)
  }
  
  const modalCloser = (val) => {
    setModalShow(false)
  }

  return (
    <div className="App">
      <div className="container my-5 py-5">
        <ul className='row px-2'>
          {textList.map((x,y) => {
            return (
              <li key={y} className='col-lg-2 d-block'><button className='btn btn-primary w-100' onClick={setModalDetail.bind(this,x.text)}>text {y + 1}</button> </li>
            )
          })}
        </ul>
        <div className='textEditor'>
          <div className='topContent'>
            <div className='group'>
              <button type="button" name="" id="" className="btn" title="Bold" onClick={setType.bind(this,'bold')}><img src={boldIcon} alt="Bold" /></button>
              <button type="button" name="" id="" className="btn" title="Italic" onClick={setType.bind(this,'italic')}><img src={italicIcon} alt="Italic" /></button>
              <button type="button" name="" id="" className="btn" title="Paragraph" onClick={setType.bind(this,'paragraph')}><img src={paragraphIcon} alt="Paragraph" /></button>
              <button type="button" name="" id="" className="btn" title="Block Quote" onClick={setType.bind(this,'blockquote')}><img src={blockQuoteIcon} alt="Block Quote" /></button>
              <button type="button" name="" id="" className="btn" title="Code" onClick={setType.bind(this,'code')}><img src={codeIcon} alt="Code" /></button>
              <button type="button" name="" id="" className="btn" title="Horizontal Rule" onClick={setType.bind(this,'horizontalrule')}><img src={horizontalRuleIcon} alt="Horizontal Rule" /></button>
              <button type="button" name="" id="" className="btn" title="Strike Through" onClick={setType.bind(this,'strike')}><img src={strikethroughIcon} alt="Strike Through" /></button>
            </div>
            <div className='group'>
              <button type="button" name="" id="" className="btn" title="Align Left" onClick={setAlign.bind(this,'left')}><img src={alignLeftIcon} alt="Align Left" /></button>
              <button type="button" name="" id="" className="btn" title="Align Center" onClick={setAlign.bind(this,'center')}><img src={alignCenterIcon} alt="Align Center" /></button>
              <button type="button" name="" id="" className="btn" title="Align Right" onClick={setAlign.bind(this,'right')}><img src={alignRightIcon} alt="Align Right" /></button>
              <button type="button" name="" id="" className="btn" title="Align Justify" onClick={setAlign.bind(this,'justify')}><img src={justifyIcon} alt="Align Justify" /></button>
            </div>
            <div className='group'>
              <button type="button" name="" id="" className="btn" title="Heading 1" onClick={setType.bind(this,'heading1')}><img src={h1Icon} height="20" alt="H1" /></button>
              <button type="button" name="" id="" className="btn" title="Heading 2" onClick={setType.bind(this,'heading2')}><img src={h2Icon} height="20" alt="H2" /></button>
              <button type="button" name="" id="" className="btn" title="Heading 3" onClick={setType.bind(this,'heading3')}><img src={h3Icon} height="20" alt="H3" /></button>
              <button type="button" name="" id="" className="btn" title="Heading 4" onClick={setType.bind(this,'heading4')}><img src={h4Icon} height="20" alt="H4" /></button>
              <button type="button" name="" id="" className="btn" title="Heading 5" onClick={setType.bind(this,'heading5')}><img src={h5Icon} height="20" alt="H5" /></button>
              <button type="button" name="" id="" className="btn" title="Heading 6" onClick={setType.bind(this,'heading6')}><img src={h6Icon} height="20" alt="H6" /></button>
            </div>
          </div>
          <div contentEditable="true" suppressContentEditableWarning={true} id="editableContent" className='bottomContent'> </div>
        </div>
        <div className='d-block mt-4 text-end'>
          <button type='button' className='btn btn-primary' onClick={saveText}>Save</button>
        </div>
      </div>

      <Modal show={modalShow} id="detailModal" className="modal-xl mt-0">
        <Modal.Header>
          <Modal.Title>My Text</Modal.Title>
          <button type="button" className="btn-close" onClick={e => modalCloser()}></button>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <div className="row g-0">
              <div className='col-12' dangerouslySetInnerHTML={{__html: text}}> 
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> 

    </div>
  );
}

export default App;
