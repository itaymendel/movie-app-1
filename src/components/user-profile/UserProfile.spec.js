import { expect } from 'chai';
import TestUtils from 'react-dom/test-utils';
import jsdom from 'mocha-jsdom';
import React from 'react';

const MyComponent = require(__impl__);
mockDom('<html><body></body></html>');

describe('#MyComponent', () => {
  jsdom({ skipWindowCheck: true });
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = TestUtils.renderIntoDocument(
      <MyComponent />
    );
  });

  it('should do something cool...', () => {
    expect(true).to.equal(true);
  });
});
