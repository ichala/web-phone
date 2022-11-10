import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { UserDataContext } from '../../../../config/UserData/storage';

function NewContact() {
  const navigate = useNavigate();

  const { UserData, setUserData } = useContext(UserDataContext);
  const [FormData, setFormData] = useState({
    fullname: '',
    email: '',
    mobile: '',
  });
  const addContact = () => {
    const id = uuidv4();
    const NewContact = { ...FormData, id };
    setUserData({ ...UserData, contacts: [...UserData.contacts, NewContact] });
    navigate('/contacts/all');
  };
  return (
    <>
      <div className="text-2xl text-center mt-10 italic subpixel-antialiased font-bold text-black">New Contact</div>
      <div className="flex flex-col gap-4  mt-20 justify-center items-center">
        <div className="avatar ">
          <div className="bg-pink-500 important-flex w-20 text-white rounded-full w-full h-full justify-center items-center font-semibold">
            <span className="uppercase text-4xl">{FormData.fullname[0] || 'F'}</span>
          </div>
        </div>
        <div className="form-control  w-full  flex flex-col justify-center items-center">
          <input maxLength={30} onChange={(e) => setFormData({ ...FormData, fullname: e.target.value.slice(0, 30) })} type="text" placeholder="Full Name" className="input capitalize input-bordered w-full max-w-xs rounded" />
        </div>
        <div className="form-control w-full  flex flex-col justify-center items-center">
          <input type="text" maxLength={40} onChange={(e) => setFormData({ ...FormData, email: e.target.value.slice(0, 40) })} placeholder="Email" className="input input-bordered w-full max-w-xs rounded" />
        </div>
        <div className="form-control w-full  flex flex-col justify-center items-center">
          <input type="tel" maxLength={20} onChange={(e) => setFormData({ ...FormData, mobile: e.target.value.slice(0, 20) })} placeholder="Phone Number" className="input input-bordered w-full max-w-xs rounded" />
        </div>
        <button type="button" onClick={addContact} className="btn rounded-xl text-white bg-gray-800 hover:bg-gray-700 uppercase w-[100px]">Add</button>
        <Link to="/contacts/all">
          <button type="button" className="btn btn-error text-white uppercase rounded-xl w-[100px]">Cancel</button>
        </Link>
      </div>
    </>
  );
}

export default NewContact;
