import React, { FC } from 'react'
import { HeaderCss } from './Header.styled';

const Header: FC = () => {
  return (
      <HeaderCss>

          <ul>
            <li>Home</li>
            <li>Gallery</li>
          </ul>
    </HeaderCss>
  )
}

export default Header;