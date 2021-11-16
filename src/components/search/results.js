import React from 'react';
import moment from "moment";

const Results = ({ page, pageSize, lists, totalResult }) => {
  const now = moment();
  const date = now.format('D MMM YYYY');

  const formatExcerpt = (DocumentExcerpt) => {
    const highlights = DocumentExcerpt.Highlights;
    if (highlights) {
      const text = DocumentExcerpt.Text.split('');
      let temp = [];
      let start = 3;
      let open = ` <b>`;
      let close = `</b> `;
      for (let i = 0; i < highlights.length; i++) {
        const { BeginOffset, EndOffset } = highlights[i];
        if (temp.length > 1) {
          temp.push(close);
        }
        const textStart = text.slice(start,BeginOffset - 1);
        temp.push(textStart.join(''));
        temp.push(open);
        temp.push(text.slice(BeginOffset, EndOffset).join(''));
        start = EndOffset + 1;
      }
      temp.push(close);
      const word = temp.join('');
      return word;
    } else {
      const text = DocumentExcerpt.Text.split('');
      text.splice(0,3);
      return text.join('');
    }
  }
  return (
    <>
      <div className="container mx-auto my-8 px-4 lg:px-20 flex items-center">
        <h1 className="text-xl">Showing {page} - {pageSize} of {totalResult} results</h1>
      </div>
      <div className="container mx-auto my-4 px-4 lg:px-20">
      {lists.map(result => (
        <div className="py-2" key={result.DocumentId}>
          <h1 className="text-xl text-blue-400 py-2"><a href={result.DocumentURI} target="_blank" rel="noopener noreferrer">{result.DocumentTitle.Text}</a></h1>
          <div className="text-sm text-black py-2">{date} - {result.DocumentExcerpt.Text}</div>
          <div className="text-xs text-gray-500 py-2">{result.DocumentURI}</div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Results;
