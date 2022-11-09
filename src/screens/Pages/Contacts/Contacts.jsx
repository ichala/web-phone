import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Contacts() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('all');
  }, []);

  return (
    <motion.div
      className="absolute top-0 left-0 bg-white h-full w-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Outlet />
    </motion.div>
  );
}

export default Contacts;
