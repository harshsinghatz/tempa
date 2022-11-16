import tokenize from "../packages/tempa-parser/src/tokenize";

const parsedTemplateStr=`
  # Harsh 1
  ## Harsh 2
  ### Harsh 3

  This is a paragraph 123
    > blockquote
  

  This is a very imp topic
`;


const tokens=tokenize(parsedTemplateStr);

console.log(tokens);