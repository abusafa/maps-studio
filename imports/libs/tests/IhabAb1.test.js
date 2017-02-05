/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
jest.dontMock('../../components/IhabAb1/IhabAb1.react');

import React                            from 'react';
import ReactDOM                         from 'react-dom';
import TestUtils                        from 'react-addons-test-utils';

const IhabAb1 = require('../../components/IhabAb1/IhabAb1.react');

describe('IhabAb1', () => {
  it('can render examples', () => {
    jest.dontMock('../../components/IhabAb1/IhabAb1.example');
    const example = require('../../components/IhabAb1/IhabAb1.example');
    example.demos.forEach((example, i) => {
      example.render();
    });
  });
  // test suite goes here
});
