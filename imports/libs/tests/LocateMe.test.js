/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
jest.dontMock('../../components/LocateMe/LocateMe.react');

import React                            from 'react';
import ReactDOM                         from 'react-dom';
import TestUtils                        from 'react-addons-test-utils';

const LocateMe = require('../../components/LocateMe/LocateMe.react');

describe('LocateMe', () => {
  it('can render examples', () => {
    jest.dontMock('../../components/LocateMe/LocateMe.example');
    const example = require('../../components/LocateMe/LocateMe.example');
    example.demos.forEach((example, i) => {
      example.render();
    });
  });
  // test suite goes here
});
