import React, { useContext, useState } from 'react';
import {
  AiOutlineCloseCircle, AiOutlineLeft, AiOutlinePlusCircle, AiOutlineSearch,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../../../../config/UserData/storage';

function AllContacts() {
  const { UserData } = useContext(UserDataContext);
  const ContactList = UserData.contacts;
  const [Filter, setFilter] = useState('');
  return (
    <div>
      <div className="flex justify-between mt-7 p-3 text-gray-400 items-center">
        <AiOutlineLeft size={30} />
        <div className="text-2xl text-center italic  subpixel-antialiased  text-black font-light">My Contacts</div>
        <Link to="/contacts/new">
          <AiOutlinePlusCircle size={30} />
        </Link>
      </div>
      <p className="text-center text-sm text-gray-400 subpixel-antialiased p-3">Search and find your contacts or simply add a new one </p>
      <div className="flex justify-center ">
        <div className="flex justify-center w-[340px] bg-white bg-white text-gray-400 shadow-lg rounded-full p-2">
          <AiOutlineSearch size={30} />
          <input type="text" name="search-contact" id="search-contact" value={Filter} className="input w-full input-sm focus:outline-0 bg-transparent border-0" onChange={(e) => setFilter(e.target.value)} />
          {Filter && <AiOutlineCloseCircle className="cursor-pointer" onClick={() => setFilter('')} size={30} /> }
        </div>
      </div>
      <div className="h-[475px]  overflow-y-scroll no-scrollbar bg-white shadow-2xl rounded-lg mt-5 m-2">
        <ul className="menu font w-full  text-black divide-y">
          {ContactList.map((contact) => (
            <li key={contact.id} className="hover-bordered font-normal italic subpixel-antialiased">
              <Link to={`/contacts/${contact.id}`}>
                <div className="avatar ">
                  <div className="bg-pink-500 important-flex w-9 text-white rounded-full w-full h-full justify-center items-center font-semibold">
                    <span>{contact.fullname[0]}</span>
                  </div>
                </div>
                {contact.fullname}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllContacts;
