// /client/App.js
import React, { Component } from 'react';

// MongoClient
const { MongoClient } = require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'process.env.MONGODB_URI';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

class MongoDB extends Component {
  connect = (err) => {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    client.close();
  };

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    return (
      <div className="mongodb">
        {}
        <h1>UNDER CONSTRUCTION</h1>
        <h2>
          <span className="color-me">MongoDB</span>
          {' '}
          database interface
        </h2>
        <p>
          The database has been implemented by utilizing Heroku
          {"'"}
          s MongoDB addon. It creates a free sandbox level database environment through the services of
          {' '}
          <a className="color-me" href="https://mlab.com/" target="_blank" rel="noopener noreferrer">mLab</a>
          .
        </p>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            placeholder="add something in the database"
            style={{ width: '200px' }}
          />
          <button type="button">
            ADD
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            placeholder="put id of item to delete here"
          />
          <button type="button">
            DELETE
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: '200px' }}
            placeholder="put new value of the item here"
          />
          <button type="button">
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

export { MongoDB };
