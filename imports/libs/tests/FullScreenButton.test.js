/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
jest.dontMock('../../components/FullScreenButton/FullScreenButton.react');

import React                            from 'react';
import ReactDOM                         from 'react-dom';
import TestUtils                        from 'react-addons-test-utils';

const FullScreenButton = require('../../components/FullScreenButton/FullScreenButton.react');

describe('FullScreenButton', () => {
  it('can render examples', () => {
    jest.dontMock('../../components/FullScreenButton/FullScreenButton.example');
    const example = require('../../components/FullScreenButton/FullScreenButton.example');
    example.demos.forEach((example, i) => {
      example.render();
    });
  });
  // test suite goes here
});
