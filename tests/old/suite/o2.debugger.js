/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*global o2, Demo*/
( function(o2, window, UNDEFINED) {

    /*
     * Aliases.
     */
    var add = o2.Unit.add;
    var run = o2.Unit.run;
    var assertStrictEqual = o2.Unit.assertStrictEqual;
    var assertEqual = o2.Unit.assertEqual;
    var assert = o2.Unit.assert;

    /**
     *
     */
    var Suite = {

        /**
         *
         */
        init : function() {

            add('debugger SHOULD work', {
                count : 1,
                test : function() {

                    var me = this;

                    assert(me, true, 'o2.Debugger is assumed to work properly since all "Test Suite"s depend on it.');

                }

            });

            run(parent && parent.Runner && parent.Runner.processCompletedSuite);

        }

    };

    Suite.init();

}(o2, this));
