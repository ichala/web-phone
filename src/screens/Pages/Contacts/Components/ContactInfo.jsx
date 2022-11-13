import React, { useContext } from 'react';
import { AiOutlineLeft, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { UserDataContext } from '../../../../config/UserData/storage';

function ContactInfo() {
  const { id } = useParams();
  const { UserData } = useContext(UserDataContext);
  const contact = UserData.contacts.find((obj) => obj.id === id);
  return (
    <>
      <div className="flex justify-start mt-7 p-3 text-gray-400 items-center">
        <Link to="/contacts/all">
          <AiOutlineLeft size={30} />
        </Link>
      </div>
      <div className="flex bg-transparent justify-center h-full items-center">
        <div className=" flex  h-100 justify-center rounded-xl flex-col  items-center  p-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl">
          <div className="avatar ">
            <div className="bg-pink-500 important-flex w-20 text-white rounded-full w-full h-full justify-center items-center font-semibold text-3xl">
              <span>{contact.fullname[0]}</span>
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{contact.fullname}</h2>
            { contact.email && (
            <p className="flex items-center gap-2">
              <AiOutlineMail />
              {contact.email}
            </p>
            )}
            { contact.mobile && (
            <p className="flex items-center gap-2">
              <AiOutlinePhone />
              {contact.mobile}
            </p>
            )}

          </div>
        </div>
      </div>

    </>
  );
}

export default ContactInfo;
