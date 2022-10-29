import React from 'react'
import {Link} from 'react-router-dom';

const Info = () => {
  return (
    <div className="bg-cyan-500/50 text-amber-300 text-center w-30 mr-3 hover:cursor-pointer hover:bg-cyan-600">
      <Link to="/info">
        <p className="font-normal text-m">Más información</p>
      </Link>
    </div>
  );
}

export default Info