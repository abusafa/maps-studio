/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
jest.dontMock('../../components/AddBasemaps/AddBasemaps.react');

import React                            from 'react';
import ReactDOM                         from 'react-dom';
import TestUtils                        from 'react-addons-test-utils';

const AddBasemaps = require('../../components/AddBasemaps/AddBasemaps.react');

describe('AddBasemaps', () => {
  it('can render examples', () => {
    jest.dontMock('../../components/AddBasemaps/AddBasemaps.example');
    const example = require('../../components/AddBasemaps/AddBasemaps.example');
    example.demos.forEach((example, i) => {
      example.render();
    });
  });
  // test suite goes here
});
