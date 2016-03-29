var expect = require('chai').expect;
var utils = require('../');

describe('liburl',function(){

  describe('parser', function(){

    it('should keep slash as default', function(){
        expect(utils.quote('god/help?me')).equal('god/help%3Fme')
        expect(utils.quote('god/help?me', '?')).equal('god%2Fhelp?me')
    })

    it('should keep space as plus', function(){
        expect(utils.quote_plus('12 AA')).equal('12+AA')
    })

    it('should escape to clean string via unquote', function(){
        expect(utils.unquote('12%20AA')).equal('12 AA')
    })

    it('should escape to clean string via unquote_plus', function(){
        expect(utils.unquote_plus('12+AA')).equal('12 AA')
    })

  });

})
