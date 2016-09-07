'use strict';

const fs = require('fs');
const path =require('path');

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

const requireWeexModule = require('../lib/index.js').default;

describe('require weex module', () => {
    const components = {};
    let __weex_require__;

    before(() => {
        global.__weex_define__ = function(component, fn) {
            if (components[component]) {
                throw new Error(`${component} is defined repeatly!`);
            }

            fn(__weex_require__);
        }
    });

    beforeEach(() => {
        __weex_require__ = sinon.spy(function(name) {
            return name;
        });
    });

    it('with one module', () => {
        requireWeexModule('@weex-module/a');
        expect(__weex_require__.callCount).eql(1);
        expect(__weex_require__.firstCall.args).eql(['@weex-module/a']);
    });

    it('with more modules', () => {
        requireWeexModule('@weex-module/b');
        requireWeexModule('@weex-module/b');
        requireWeexModule('@weex-module/c');
        expect(__weex_require__.callCount).eql(2);
        expect(__weex_require__.args).eql([
            ['@weex-module/b'],
            ['@weex-module/c']
        ]);
    });
});