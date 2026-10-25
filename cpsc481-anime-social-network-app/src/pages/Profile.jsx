import React from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Profile.css";

// Horizontal prototype: controls are visual examples.

function Profile() {
  return (
    <>
      {" "}
      <div className="heading">
        <div>
          <div className="eyebrow">The anime community</div>
          <h1>Your profile</h1>
          <p className="subtitle">
            A little more about the person behind the posts.
          </p>
        </div>
      </div>
      <div className="profile-banner"></div>
      <span className="avatar profile-avatar">JD</span>
      <div style={{ padding: "15px 0 20px" }}>
        <h1>Jane Doe</h1>
        <p className="quiet">
          Here for good stories, thoughtful reviews, and a little magic.
        </p>
        <div className="row wrap">
          <span className="tag">24 posts</span>
          <span className="tag">12 reviews</span>
          <span className="tag">3 collections</span>
          <a className="btn " href="#settings">
            Edit Profile
          </a>
        </div>
      </div>
      <div className="tabs">
        <a href="#posts">Posts</a>
        <a href="#reviews">Reviews</a>
        <a href="#collections">Collections</a>
      </div>
      <div className="grid three">
        <article className="card">
          <div className="cover blue">
            <strong>Gojo figure</strong>
            <span className="caption">Concept artwork</span>
          </div>
          <h3>Gojo figure</h3>
          <span className="tag">Jujutsu Kaisen</span>
          <span className="tag">Figure</span>
          <p className="quiet small" style={{ marginTop: "10px" }}>
            Owned by Marcus Delgado
          </p>
          <div className="row between">
            <span>
              <span className="quiet small">Purchase price</span>
              <br />
              <span className="price">CA$85</span>
            </span>
            <a className="btn " href="#item">
              View Item
            </a>
          </div>
        </article>
        <article className="card">
          <div className="cover pink">
            <strong>Anya figure</strong>
            <span className="caption">Concept artwork</span>
          </div>
          <h3>Anya figure</h3>
          <span className="tag">Spy × Family</span>
          <span className="tag">Figure</span>
          <p className="quiet small" style={{ marginTop: "10px" }}>
            Owned by Marcus Delgado
          </p>
          <div className="row between">
            <span>
              <span className="quiet small">Purchase price</span>
              <br />
              <span className="price">CA$32</span>
            </span>
            <a className="btn " href="#item">
              View Item
            </a>
          </div>
        </article>
        <article className="card">
          <div className="cover ">
            <strong>Totoro collectible</strong>
            <span className="caption">Concept artwork</span>
          </div>
          <h3>Totoro collectible</h3>
          <span className="tag">My Neighbor Totoro</span>
          <span className="tag">Figure</span>
          <p className="quiet small" style={{ marginTop: "10px" }}>
            Owned by Marcus Delgado
          </p>
          <div className="row between">
            <span>
              <span className="quiet small">Purchase price</span>
              <br />
              <span className="price">CA$45</span>
            </span>
            <a className="btn " href="#item">
              View Item
            </a>
          </div>
        </article>
      </div>{" "}
    </>
  );
}

export default Profile;
