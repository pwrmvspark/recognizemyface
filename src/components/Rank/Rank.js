import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      {/* <div className='white f3'>
        {'Your current rank is...'}
      </div>
      <div className='white f1'>
        {'#1'}
      </div> */}
      {`${name} , your current entry count is...`}
      <div className='white f1 '>
        {entries}
      </div>
    </div>
  )
}

export default Rank;