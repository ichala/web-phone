import React from 'react';

export default function Loader() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <span className="btn btn-square rounded-full loading" />
    </div>
  );
}
