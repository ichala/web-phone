import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import { v4 as uuidv4 } from 'uuid';
import NoteMin from './components/NoteMin';
import { UserDataContext } from '../../../config/UserData/storage';

function Notes() {
  const [Loading, setLoading] = useState(true);
  const { UserData, setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();
  const CreateNote = () => {
    const date = moment().format('MMM DD');
    const id = uuidv4();
    if (UserData.notes) {
      setUserData({
        ...UserData,
        notes: [...UserData.notes, {
          id,
          title: 'title',
          content: 'Add notes ...',
          date,
        }],
      });
      navigate(id);
    } else {
      setUserData({
        ...UserData,
        notes: [{
          id,
          title: 'title',
          content: 'Add notes ...',
          date,
        }],
      });
      navigate(id);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <motion.div
      className="absolute top-0 left-0 bg-gradient-to-t from-slate-900 to-zinc-900 h-full w-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {Loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <div className="animate-pulse text-4xl text-white">
            <div className="avatar">
              <div className="w-16 mask mask-squircle">
                <img src="/assets/images/notes.jpg" alt="weather-app" />
              </div>
            </div>
          </div>
        </div>
      )
        : (
          <>
            <div className="relative h-full">
              <div className="mt-10 p-3 flex items-center text-orange-400">
                <input type="text" className="input input-sm w-full bg-transparent border-1 rounded-full border-orange-400 " placeholder="🔍 Search Notes" />
              </div>
              <div className="flex flex-wrap justify-center max-h-full items-center gap-4 overflow-y-scroll no-scrollbar">
                {UserData.notes ? UserData.notes.map((note) => (
                  <Link key={note.id} to={`${note.id}`}>
                    <NoteMin data={note} />
                  </Link>
                )) : <p className="text-gray-400">Create your first note !</p>}
              </div>
              <div className="absolute bottom-[130px] z-10 right-[10px] ">
                <button type="button" className="btn bg-orange-400 hover:bg-orange-600  btn-circle text-white">
                  <AiOutlinePlus size={30} onClick={CreateNote} />
                </button>
              </div>
            </div>
          </>
        )}
    </motion.div>
  );
}

export default Notes;
