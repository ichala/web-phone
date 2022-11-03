import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ImArrowLeft } from 'react-icons/im';
import { AiFillDelete } from 'react-icons/ai';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserDataContext } from '../../../../config/UserData/storage';

function Note() {
  const { id } = useParams();
  const { UserData, setUserData } = useContext(UserDataContext);
  const CurrentNote = UserData.notes?.filter((n) => n.id === id);
  const navigate = useNavigate();
  function updateNote(e) {
    setUserData((prevState) => ({
      ...prevState,
      notes: UserData.notes.map((note) => {
        if (note.id === id) {
          return { ...note, [e.target.name]: e.target.value };
        }
        return note;
      }),
    }));
  }
  function DeleteNote(id) {
    navigate('/notes');
    setUserData((prevState) => ({
      ...prevState,
      notes: UserData.notes.filter((note) => note.id !== id),
    }));
  }

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
          <div><AiFillDelete size={25} onClick={() => DeleteNote(id)} className="cursor-pointer" /></div>
        </div>
      </div>
      <div className="flex flex-col h-full">
        <input name="title" type="text" maxLength={25} className="input bg-transparent text-2xl text-white" onChange={(e) => updateNote(e)} placeholder="Title" defaultValue={CurrentNote[0].title} />
        <div className="form-control h-full">
          <label className="label">
            <span className="label-text text-orange-500 ml-3">{CurrentNote[0].date}</span>
          </label>
          <textarea name="content" className="textarea  bg-transparent text-white h-full no-scrollbar" onChange={(e) => updateNote(e)} placeholder="Add notes" defaultValue={CurrentNote[0].content} />
        </div>
      </div>
    </motion.div>
  );
}

export default Note;
