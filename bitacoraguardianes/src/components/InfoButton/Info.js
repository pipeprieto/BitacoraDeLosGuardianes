import React from 'react'
import {Link} from 'react-router-dom';

const Info = ({id}) => {
  return (
    <div className="bg-cyan-500/50 text-amber-300 text-center w-30 mr-3 hover:cursor-pointer hover:bg-cyan-600">
      <Link to={`/info/${id}`}>
        <p className="font-normal text-m">Más información</p>
      </Link>
    </div>
  );
}

export default Info