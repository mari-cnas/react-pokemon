import { memo } from 'react';

import logo from 'assets/pokemon_logo.jpg';

interface IBaseComponentProps {
  children?: React.ReactNode;
}

const Footer: React.FC<IBaseComponentProps> = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5 px-5">
      <img
        className="img-fluid "
        src={logo}
        alt="logo"
        style={{ width: 250 }}
      />
    </div>
  );
};

export default memo(Footer);
