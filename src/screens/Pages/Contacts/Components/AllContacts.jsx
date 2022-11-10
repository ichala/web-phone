import React, { useContext } from 'react';
import { AiFillPlusCircle, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../../../../config/UserData/storage';

function AllContacts() {
  const { UserData } = useContext(UserDataContext);
  const ContactList = UserData.contacts;
  return (
    <div>
      <div className="text-2xl text-center mt-10 italic subpixel-antialiased font-bold text-black">All Contacts</div>
      <div className="flex justify-end p-4">
        <AiOutlineSearch size={30} />
        <Link to="/contacts/new">
          <AiFillPlusCircle size={30} />
        </Link>
      </div>
      <div className="h-[530px]  overflow-y-scroll no-scrollbar">
        <ul className="menu font w-full p-1 text-black divide-y">
          {ContactList.map((contact) => (
            <li key={contact.id} className="hover-bordered font-normal italic subpixel-antialiased">
              <a href="#s">
                <div className="avatar ">
                  <div className="bg-pink-500 important-flex w-9 text-white rounded-full w-full h-full justify-center items-center font-semibold">
                    <span>{contact.fullname[0]}</span>
                  </div>
                </div>
                {contact.fullname}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllContacts;
