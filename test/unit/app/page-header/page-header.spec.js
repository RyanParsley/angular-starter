describe('PageHeaderCtrl', function () {
    'use strict';

    var links, scope;

    beforeEach(module('page-header'));

    beforeEach(module(function($provide){
        links = {
            message: 'Testing testing'
        };
    }));

    beforeEach(inject(function($controller) {
        scope = {};
        $controller('PageHeaderCtrl', {$scope:scope});
    }));

    it('should change data', function() {
        expect(links.message).toEqual('Testing testing');
    });
});
