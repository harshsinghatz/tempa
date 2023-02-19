import tokenize, { Token } from "@tempa/parser";
import path from 'path';
import fs from 'fs';

const parsedTemplateStr = `
  # Harsh 1
  ## Harsh 2
  ### Harsh 3

  This is a paragraph 123
    > blockquote
  

  This is a very imp topic
`;

interface labelTagMappingType {
  [key: string]: string;
}

const labelTagMapping: labelTagMappingType = {
  '#heading-1': 'h1',
  '#heading-2': 'h2',
  '#heading-3': 'h3',
  '#paragraph': 'p',
  '#quote': 'em',
};

const getLabelFromTokenType = (type: string) => `#${type.toLowerCase()}`;

const getTag = (label: string, content: string) => {
  return `<${labelTagMapping[label]}>${content}</${labelTagMapping[label]}>`
}

// give html body
const htmlBody = (tokens: Token[]) => {
  let body = '';

  tokens.forEach(({ type, value }) => {
    body += getTag(getLabelFromTokenType(type), value);
  })
  return body;
}

// give final html template
const getHTML = (body: string) => {
  const htmlTemplateString = fs.readFileSync(path.join(path.resolve(), 'src/template/index.html'), { encoding: 'utf-8', flag: 'r' });
  return htmlTemplateString.replace(/<!-- #body -->/g, body);
}

const generateHTML = () => {
  const tokens = tokenize(parsedTemplateStr);
  console.log(tokens);
  const body = htmlBody(tokens);
  console.log(body);
  const html = getHTML(body);
  console.log(html);
  fs.writeFileSync(path.join(path.resolve(), 'src/dist/index.html'), html);
}
// convert the template to an html file

generateHTML();