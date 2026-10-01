const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const s = scripts[16].replace(/<\/?script[^>]*>/g, '');
const lines = s.split('\n');

// Proper lexer
function tokenize(str) {
  let i = 0;
  const tokens = [];
  while (i < str.length) {
    // Line comment
    if (str[i] === '/' && str[i+1] === '/') {
      let end = str.indexOf('\n', i);
      if (end === -1) end = str.length;
      tokens.push({ type: 'comment', value: str.substring(i, end), start: i, end: end });
      i = end;
      continue;
    }
    // Block comment
    if (str[i] === '/' && str[i+1] === '*') {
      let end = str.indexOf('*/', i + 2);
      if (end === -1) end = str.length - 2;
      tokens.push({ type: 'comment', value: str.substring(i, end + 2), start: i, end: end + 2 });
      i = end + 2;
      continue;
    }
    // String
    if (str[i] === '"' || str[i] === "'") {
      let end = i + 1;
      while (end < str.length && str[end] !== str[i]) {
        if (str[end] === '\\') end++;
        end++;
      }
      tokens.push({ type: 'string', value: str.substring(i, end + 1), start: i, end: end + 1 });
      i = end + 1;
      continue;
    }
    // Template literal
    if (str[i] === '`') {
      let end = i + 1;
      let depth = 0;
      while (end < str.length) {
        if (str[end] === '\\') { end += 2; continue; }
        if (str[end] === '$' && str[end+1] === '{') { depth++; end += 2; continue; }
        if (depth > 0 && str[end] === '}') { depth--; end++; continue; }
        if (depth === 0 && str[end] === '`') break;
        end++;
      }
      tokens.push({ type: 'template', value: str.substring(i, end + 1), start: i, end: end + 1 });
      i = end + 1;
      continue;
    }
    // Parens, braces, semicolons
    if (str[i] === '(' || str[i] === ')' || str[i] === '{' || str[i] === '}' || str[i] === ';') {
      tokens.push({ type: 'punct', value: str[i], start: i, end: i + 1 });
      i++;
      continue;
    }
    i++;
  }
  return tokens;
}

const tokens = tokenize(s);

// Count parens and braces from tokens
let parens = 0;
let braces = 0;
let openInfo = [];
let lineNum = 1;

for (const t of tokens) {
  if (t.type === 'punct') {
    // Track line numbers
    const tokenLine = s.substring(0, t.start).split('\n').length;
    
    if (t.value === '(') {
      parens++;
      openInfo.push({ line: tokenLine, type: 'paren' });
    } else if (t.value === ')') {
      parens--;
      if (openInfo.length > 0 && openInfo[openInfo.length - 1].type === 'paren') openInfo.pop();
    } else if (t.value === '{') {
      braces++;
      openInfo.push({ line: tokenLine, type: 'brace' });
    } else if (t.value === '}') {
      braces--;
      if (openInfo.length > 0 && openInfo[openInfo.length - 1].type === 'brace') {
        const opened = openInfo.pop();
        // Show when we close the problematic block
        if (tokenLine >= 2580 && tokenLine <= 2585) {
          console.log('Close at line ' + tokenLine + ' balances ' + opened.type + ' opened at line ' + opened.line + ' (state: parens=' + parens + ' braces=' + braces + ')');
        }
      } else {
        console.log('UNBALANCED } at line ' + tokenLine);
      }
    }
  }
}
console.log('\nFinal: parens=' + parens + ' braces=' + braces);
