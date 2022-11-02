import React from 'react';
import { motion } from 'framer-motion';
import { ImArrowLeft } from 'react-icons/im';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Note() {
  const note = {
    id: 1,
    title: 'Hello World',
    content: 'this is a long description for testing',
    date: 'October 28',
  };
  return (
    <motion.div
      className="absolute top-0 left-0 bg-gradient-to-t from-slate-900 to-zinc-900 h-full w-full"
      transition={{
        duration: 0.2,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="mt-10 p-3 flex items-center text-orange-400">
        <div className="flex w-full justify-between items-center">
          <Link to="/notes">
            <ImArrowLeft size={25} />
          </Link>
          <div><AiFillDelete size={25} /></div>
        </div>
      </div>
      <div className="flex flex-col h-full">
        <input type="text" maxLength={25} className="input bg-transparent text-2xl text-white" defaultValue={note.title} />
        <div className="form-control h-full">
          <label className="label">
            <span className="label-text text-orange-500 ml-3">{note.date}</span>
          </label>
          <textarea className="textarea  bg-transparent text-white h-full no-scrollbar" placeholder="Add notes" defaultValue={note.content} />
        </div>
      </div>
    </motion.div>
  );
}

export default Note;
