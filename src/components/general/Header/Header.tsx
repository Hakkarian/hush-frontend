import React, { FC } from 'react'
import { HeaderCss } from './Header.styled';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
      <HeaderCss>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
    </HeaderCss>
  )
}

export default Header;