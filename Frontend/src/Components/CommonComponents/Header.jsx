import React from "react";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      {/* Left side: Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>

      {/* Middle: Menu items */}
      <div className="flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      {/* Right side: Button */}
      <div className="flex-none">
        <button className="btn btn-primary">Button</button>
      </div>
    </div>
  );
}
