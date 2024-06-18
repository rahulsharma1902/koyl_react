// src/Home.js
import React from 'react';

const MyDashboard = () => {
  return (
    <div className="Dashboard_wrap">
      <aside className="sidebar">
        <div className="my_sidebar">
          <nav>
            <ul>
              <li>Dashboard</li>
              <li>Patients</li>
              <li>Account</li>
              <li>Support</li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="main-content">
        <header className="header">
          <span>Welcome, Dr. Bright!</span>
          <span className="profile-icon">👤</span>
        </header>
        <section className="search-section">
          <h2>Search Symptoms and Diseases</h2>
          <input type="text" placeholder="Search..." className="search-input" />
          <p>Press enter or add a comma between each symptom or disease</p>
        </section>
        <section className="recommendations-section">
          <h2>Saved Recommendations</h2>
          <table className="recommendations-table">
            <thead>
              <tr>
                <th>Disease</th>
                <th>Symptoms</th>
                <th>Recommendations</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acid Reflux Disease, GERD</td>
                <td>Heartburn, Gas</td>
                <td>Root vegetables</td>
                <td>
                  <a href="#view">View</a> | <a href="#share">Share</a> | <a href="#remove" className="remove">Remove</a>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>Heartburn, Gas, Indigestion, Constipation</td>
                <td>Whole grains, root vegetables...</td>
                <td>
                  <a href="#view">View</a> | <a href="#share">Share</a> | <a href="#remove" className="remove">Remove</a>
                </td>
              </tr>
              <tr>
                <td>Irritable Bowel Syndrome (IBS)</td>
                <td>Diarrhea</td>
                <td>Whole grains, root vegetables...</td>
                <td>
                  <a href="#view">View</a> | <a href="#share">Share</a> | <a href="#remove" className="remove">Remove</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default MyDashboard;
