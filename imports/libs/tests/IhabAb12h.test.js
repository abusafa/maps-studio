/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
jest.dontMock('../../components/IhabAb12h/IhabAb12h.react');

import React                            from 'react';
import ReactDOM                         from 'react-dom';
import TestUtils                        from 'react-addons-test-utils';

const IhabAb12h = require('../../components/IhabAb12h/IhabAb12h.react');

describe('IhabAb12h', () => {
  it('can render examples', () => {
    jest.dontMock('../../components/IhabAb12h/IhabAb12h.example');
    const example = require('../../components/IhabAb12h/IhabAb12h.example');
    example.demos.forEach((example, i) => {
      example.render();
    });
  });
  // test suite goes here
});
