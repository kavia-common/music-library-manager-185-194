import React from "react";
import "./Thumbnail.css";

// NOTE: This file is auto-generated from Figma for the 'Thumbnail' screen.
// Tokens and style variables are located in the CSS.

export default function Thumbnail() {
  return (
    <main className="thumbnail-root">
      {/* Preview section background */}
      <section className="thumbnail-preview">
        {/* Logo Block */}
        <div className="thumbnail-logo-block">
          <div className="thumbnail-logo-img" />
          <h1 className="thumbnail-logo-text">Spotify</h1>
        </div>
        {/* Top bar - e.g. Free badge */}
        <div className="thumbnail-topbar">
          <div className="thumbnail-topbar-badge">Free</div>
        </div>
        {/* Main titles */}
        <div className="thumbnail-main-titles">
          <h2 className="thumbnail-title-ui">UI</h2>
          <h3 className="thumbnail-title-source">Source files</h3>
          <div className="thumbnail-device-label">Desktop / Tablet</div>
          <div className="thumbnail-by">
            Recreated by: figr.design
          </div>
          <div className="thumbnail-files-bar">
            <div className="thumbnail-files-bar-bg" />
            <div className="thumbnail-files-bar-content">
              <div className="thumbnail-files-bar-icon">
                {/* Figma logo icon */}
                <div className="thumbnail-figma-logo">
                  <div className="figma-vector-blue" />
                  <div className="figma-vector-green" />
                  <div className="figma-vector-corail" />
                  <div className="figma-vector-orange" />
                  <div className="figma-vector-purple" />
                </div>
              </div>
              <span className="thumbnail-files-bar-label">+10 Screens</span>
            </div>
          </div>
        </div>
      </section>
      {/* Visual splash vector for illustration */}
      <div className="thumbnail-vectorsplash" />
      {/* Optionally: Preview images for devices, players, UI sections, etc. */}
      {/* ... further layout, such as preview cards, as per design */}
    </main>
  );
}
