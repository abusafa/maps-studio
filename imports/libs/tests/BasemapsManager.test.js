/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
jest.dontMock('../../components/BasemapsManager/BasemapsManager.react');

import React                            from 'react';
import ReactDOM                         from 'react-dom';
import TestUtils                        from 'react-addons-test-utils';

const BasemapsManager = require('../../components/BasemapsManager/BasemapsManager.react');

describe('BasemapsManager', () => {
  it('can render examples', () => {
    jest.dontMock('../../components/BasemapsManager/BasemapsManager.example');
    const example = require('../../components/BasemapsManager/BasemapsManager.example');
    example.demos.forEach((example, i) => {
      example.render();
    });
  });
  // test suite goes here
});
