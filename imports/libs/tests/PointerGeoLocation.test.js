/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
jest.dontMock('../../components/PointerGeoLocation/PointerGeoLocation.react');

import React                            from 'react';
import ReactDOM                         from 'react-dom';
import TestUtils                        from 'react-addons-test-utils';

const PointerGeoLocation = require('../../components/PointerGeoLocation/PointerGeoLocation.react');

describe('PointerGeoLocation', () => {
  it('can render examples', () => {
    jest.dontMock('../../components/PointerGeoLocation/PointerGeoLocation.example');
    const example = require('../../components/PointerGeoLocation/PointerGeoLocation.example');
    example.demos.forEach((example, i) => {
      example.render();
    });
  });
  // test suite goes here
});
