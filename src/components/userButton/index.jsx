import React from 'react';

const UserButton = ({ title, icon, customStyle, onClick }) => {
  return (
    <div style={{ margin: '2px', padding: '4px' }}>
      <button className={`px-2 py-2 outline outline-[1px] flex items-center gap-2 ${customStyle}`} onClick={onClick}>
        {icon}
        {title}
      </button>
    </div>
  );
};

export default UserButton;
