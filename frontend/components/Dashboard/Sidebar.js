import styles from './Sidebar.module.css';
import { useState } from 'react';

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <button
            className={`navbar-burger ${styles['burger-menu']} ${
              isActive ? styles['is-active'] : ''
            } ${styles['button-margin-left']}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`navbar-menu ${isActive ? styles['is-active'] : ''}`}>
          <div className="navbar-start">
            <div style={{ display: isActive ? 'block' : 'none' }}>
              <ul className="menu-list">
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Illustration</a>
                </li>
                <li>
                  <a>Manga</a>
                </li>
                <li>
                  <a>Novels</a>
                </li>
                <li>
                  <a>Follower's Works</a>
                </li>
                <li>
                  <a>Explore</a>
                </li>
                <li>
                  <a>Ranking</a>
                </li>
                <li>
                  <a>Request</a>
                </li>
                <li>
                  <a>Competition</a>
                </li>
                <li>
                  <a>Groups</a>
                </li>
                <li>
                  <a>Event</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>How to Generate AI Arts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;

// const Sidebar = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };
//   return (
//     <nav className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
//       <button
//         className={`burger-menu ${isActive ? 'is-active' : ''}`}
//         onClick={toggleMenu}
//       >
//         {' '}
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>
//       <div className={`menu-contents ${isActive ? 'is-open' : ''}`}>
//         <ul className="menu-list">
//           <li>
//             <a>Dashboard</a>
//           </li>
//           <li>
//             <a>Profile</a>
//           </li>
//           <li>
//             <a>Illustration</a>
//           </li>
//           <li>
//             <a>Manga</a>
//           </li>
//           <li>
//             <a>Novels</a>
//           </li>
//           <li>
//             <a>Follower's Works</a>
//           </li>
//           <li>
//             <a>Explore</a>
//           </li>
//           <li>
//             <a>Ranking</a>
//           </li>
//           <li>
//             <a>Request</a>
//           </li>
//           <li>
//             <a>Competition</a>
//           </li>
//           <li>
//             <a>Groups</a>
//           </li>
//           <li>
//             <a>Event</a>
//           </li>
//           <li>
//             <a>Settings</a>
//           </li>
//           <li>
//             <a>How to Generate AI Arts</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;
