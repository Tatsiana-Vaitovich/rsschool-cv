selectors = ['article',
 'aside',
'details',
'figcaption',
'figure',
'footer',
'header',
'main',
'mark',
'nav',
'section',
'summary',
'time',
'h1',
'h2',
'h3',
'h4',
'h5',
'h6',
'ul',
'button',
];
let total=0;
selectors.forEach((selector) => {
  const count = Array.from(document.querySelectorAll(selector)).length;
  console.log(`${selector}:  ${count}`);
if(count>0) total++;
});
console.log('Total unique: ',total);
