import { highlight, languages } from 'prismjs/components/prism-core';

const highlightFn = (code) => highlight(code, languages.js);

export default highlightFn;
