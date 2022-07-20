import { React } from '../../../deps.tsx';



const CodePreview: any = (props: any) => {
const {elementsArr, setElementsArr} = props;
// const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;
console.log("elementsArr inside code preview", elementsArr);
const htmlTags = elementsArr.map((elements: any, index: any) =>{
  let eleFirst:any;
  let eleSecond:any;
  let midText: any;
  let endBr: any;
  if(elementsArr[index].element === 'div') {
    eleFirst = `<div `
    endBr = '>'
    midText = 'This is your div'
    eleSecond = `</div>`
    
  }
  if(elementsArr[index].element === 'paragraph') {
    eleFirst = `<p `
    endBr = '>'
    midText = 'This is your paragraph'
    eleSecond = `</p>`
  }
  if(elementsArr[index].element === 'image') {
    eleFirst = `<img `
    endBr = ''
    midText = 'src=""'
    eleSecond = `/>`
  }
  if(elementsArr[index].element === 'button') {
    eleFirst = `<button `
    endBr = '>'
    midText = 'This is your button'
    eleSecond = `</button>`
  }
  if(elementsArr[index].element === 'form') {
    eleFirst = `<form `
    endBr = '>'
    midText = 'This is your form'
    eleSecond= `</form>`
  }
  if(elementsArr[index].element === 'ordered list') {
    eleFirst = `<ol `
    endBr = '>'
    midText = 'This is your Ordered List'
    eleSecond = `</ol>`
  }
  if(elementsArr[index].element === 'unordered list') {
    eleFirst = `<ul `
    endBr = '>'
    midText = 'This is your Unordered List'
    eleSecond = `</ul>`
  }
  if(elementsArr[index].element === 'header 1') {
    eleFirst = `<h1 `
    endBr = '>'
    midText = 'This is your header 1'
    eleSecond =`</h1>`
  }
  if(elementsArr[index].element === 'header 2') {
    eleFirst = `<h2 `
    endBr = '>'
    midText = 'This is your header 2'
    eleSecond =`</h2>`
  }
  if(elementsArr[index].element === 'header 3') {
    eleFirst = `<h3 `
    endBr = '>'
    midText = 'This is your header 3'
    eleSecond =`</h3>`
  }
  if(elementsArr[index].element === 'footer') {
    eleFirst = `<footer `
    endBr = '>'
    midText = 'This is your footer'
    eleSecond =`</footer>`
  }
  if(elementsArr[index].element === 'span') {
    eleFirst = `<span `
    endBr = '>'
    midText = 'This is your span'
    eleSecond =`</span>`
  }
  if(elementsArr[index].element === 'menu') {
    eleFirst = `<menu `
    endBr = '>'
    midText = 'This is your menu'
    eleSecond =`</menu>`
  }
  if(elementsArr[index].element === 'input') {
    eleFirst = `<input `
    endBr = '>'
    midText = 'This is your input'
    eleSecond =`</input>`
  }
  if(elementsArr[index].element === 'label') {
    eleFirst = `<label `
    endBr = '>'
    midText = 'This is your label'
    eleSecond =`</label>`
  }
  if(elementsArr[index].element === 'link') {
    eleFirst = `<link `
    endBr = ''
    midText = 'This is your link'
   eleSecond = `/>`
  }
  return (
    <div id={index}><span style={{color: '#3DA2A7'}}>{eleFirst}</span><span style={{color:'#FCC981'}}>class= {'{'} <span style={{color: '#ffff76'}}> {elementsArr[index].textAlign} {elementsArr[index].textDecoration} {elementsArr[index].backgroundColor} {elementsArr[index].color} {elementsArr[index].margin}  {elementsArr[index].width} {elementsArr[index].height} {elementsArr[index].padding} </span>  {'}'} id={index}</span><span style={{color: '#3DA2A7'}}>{endBr}</span><span style={{color: 'white'}}> {elementsArr[index].text}</span> <span style={{color: '#3DA2A7'}}>{eleSecond}</span></div>
    )
  })
  return (
    <div id='codePreview'>
      <link rel={'stylesheet'} href={'./static/css/codePreview.css'} />
      <p id='import'><span style={{color: '#6C95B3'}}>import</span> <span style={{color:'#FCC981'}}>{'{'} h {'}'}</span> <span style={{color: '#6C95B3'}}> from</span> <span style={{color:'#FCC981'}}>"preact";</span></p>
      <p id='import'><span style={{color: '#6C95B3'}}>import</span> <span style={{color:'#FCC981'}}>{'{'} PageProps {'}'}</span> <span style={{color: '#6C95B3'}}> from</span> <span style={{color:'#FCC981'}}>"$fresh/server.ts";</span></p>
      <p id='import'><span style={{color: '#6C95B3'}}>import</span> <span style={{color:'#FCC981'}}>{'{'} useEffect, useState {'}'}</span> <span style={{color: '#6C95B3'}}> from</span> <span style={{color:'#FCC981'}}>"preact/hooks";</span></p>
      <p id='import'><span style={{color: '#6C95B3'}}>import</span> <span style={{color:'#FCC981'}}>{'{'} tw {'}'}</span> <span style={{color: '#6C95B3'}}> from</span> <span style={{color:'#FCC981'}}>"twind";</span></p>

      <p id='export'><span style={{color: '#6C95B3'}}>export default function </span> <span style={{color: '#3DA2A7'}}>App</span>(props: PageProps) {'{'}</p>
      <p id= 'return'><span style={{color: '#6C95B3'}}>return </span>(</p>
      <p id='mainOpeningTag'><span style={{color: '#ffff76'}}>{'<main>'}</span></p>
      <div id='htmlTags'> <span style={{color: 'pink'}}>{htmlTags}</span></div>
      <p id='mainClosingTag'><span style={{color: '#ffff76'}}>{'</main>'}</span></p>
      <p id='paren'>);</p>
      <p id='endingCurly'>{"}"}</p>
      </div>
  )
}

export default CodePreview;

