import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './Sidebar';

const SidebarContainer = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const sidebar = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return function cleanup() {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  }

  const handleClickOutside = (e) => {
    if (sidebar && !sidebar.current.contains(e.target)) {
      setMenuOpen(false);
    }
  }

  return (
    <Sidebar sidebar={sidebar} toggleNav={toggleNav} menuOpen={menuOpen} />
  );
}

export { SidebarContainer };
