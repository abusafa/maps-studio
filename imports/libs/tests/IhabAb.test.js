/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
jest.dontMock('../../components/IhabAb/IhabAb.react');

import React                            from 'react';
import ReactDOM                         from 'react-dom';
import TestUtils                        from 'react-addons-test-utils';

const IhabAb = require('../../components/IhabAb/IhabAb.react');

describe('IhabAb', () => {
  it('can render examples', () => {
    jest.dontMock('../../components/IhabAb/IhabAb.example');
    const example = require('../../components/IhabAb/IhabAb.example');
    example.demos.forEach((example, i) => {
      example.render();
    });
  });
  // test suite goes here
});
