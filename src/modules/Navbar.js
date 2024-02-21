import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* IMG Logo */}
        </IconButton>
        
        {/* Barra de búsqueda */}
        <div style={{ flexGrow: 1 }}>
          <InputBase
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'buscar' }}
            fullWidth
            style={{ display: isSearchVisible ? 'block' : 'none' }}
          />
        </div>

        {/* Botón de búsqueda */}
        <IconButton color="inherit" onClick={toggleSearch}>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
