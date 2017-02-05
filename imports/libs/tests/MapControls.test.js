/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
jest.dontMock('../../components/MapControls/MapControls.react');

import React                            from 'react';
import ReactDOM                         from 'react-dom';
import TestUtils                        from 'react-addons-test-utils';

const MapControls = require('../../components/MapControls/MapControls.react');

describe('MapControls', () => {
  it('can render examples', () => {
    jest.dontMock('../../components/MapControls/MapControls.example');
    const example = require('../../components/MapControls/MapControls.example');
    example.demos.forEach((example, i) => {
      example.render();
    });
  });
  // test suite goes here
});
