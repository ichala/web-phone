import React from 'react';

function NoteMin({ data }) {
  return (
    <div className="note text-white  w-[170px] h-[100px] p-3 bg-zinc-900 glass rounded-lg flex flex-col">
      <div className="title text-bold uppercase truncate">{data.title}</div>
      <div className="description text-zinc-300 truncate text-semibold  text-md">{data.content}</div>
      <div className="text-zinc-400 mt-3 text-semibold text-sm">{data.date}</div>
    </div>
  );
}

export default NoteMin;
