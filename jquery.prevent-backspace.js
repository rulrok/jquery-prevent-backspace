/*
JQuery Prevent Backspace 0.1

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function ($) {
    $.fn.preventBackspace = function (action) {

        $this = $(this);

        if (action && action === "destroy") {
            $this.unbind('keydown');
            return this;
        }
        
        $this.unbind('keydown').bind('keydown', function (event) {
            var doPrevent = false;
            if (event.keyCode === 8) {
                var d = event.srcElement || event.target;
                if ((d.tagName.toUpperCase() === 'INPUT' &&
                     (
                         d.type.toUpperCase() === 'TEXT' ||
                         d.type.toUpperCase() === 'PASSWORD' ||
                         d.type.toUpperCase() === 'FILE' ||
                         d.type.toUpperCase() === 'TEL' ||
                         d.type.toUpperCase() === 'SEARCH' ||
                         d.type.toUpperCase() === 'EMAIL' ||
                         d.type.toUpperCase() === 'NUMBER' ||
                         d.type.toUpperCase() === 'DATE')
                     ) ||
                     d.tagName.toUpperCase() === 'TEXTAREA') {
                    doPrevent = d.readOnly || d.disabled;
                }
                else {
                    doPrevent = true;
                }
            }

            if (doPrevent) {
                event.preventDefault();
            }
        });

        return this;
    };
})(jQuery);
