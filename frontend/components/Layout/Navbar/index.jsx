import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';
import NavLink from './NavLink/';

import actions from '../../../redux/actions/';
import { height } from '@mui/system';

import UserProfile from '../../Profile/UserProfile';

import { Avatar, IconButton } from '@mui/material';
import UploadMenu from './UploadMenu';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  const handleSearch = value => {
    setSearchText(value);
    setShowClearButton(value !== '');
    onSearch(value);
  };

  return (
    <>
      <div className="tabs is-centered">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item is-flex">
                <img
                  src="/img/logo_light.png"
                  alt="Logo"
                  style={{ width: '150px', maxHeight: '250px' }}
                />
              </a>
            </Link>
          </div>
        </nav>
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <NavLink href="/register" privateRoute={false}>
            Register
          </NavLink>
          <NavLink href="/login" privateRoute={false}>
            Login
          </NavLink>
          <Link href="/user">
            <a>Profile</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/upload">
            <a>Upload</a>
          
          </Link>
          <Link href="/artipage">
            <a>ArtiPage</a>
          </Link>
          {isAuthenticated && (
            <li onClick={() => dispatch(actions.deauthenticate())}>
              <a>Log Out</a>
            </li>
          )}
          {isAuthenticated && (
            <div
              style={{
                position: 'fixed',
                top: '10px',
                left: '10px',
                zIndex: 1000,
              }}
            ></div>
          )}
          <div className="column is-narrow">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="level-item">
                  <UploadMenu />
                </div>
                <IconButton color="primary">
                  <NotificationsIcon />
                </IconButton>
                <Link href="/user">
                  <Avatar
                    alt="Profile Picture"
                    src="/static/images/avatar/1.jpg"
                    style={{ cursor: 'pointer' }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
