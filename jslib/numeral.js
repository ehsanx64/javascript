window.jslib.numerals = {
    /**
     * translate given number numerals to latin
     */
    toLatin: function (number) {
        var digits = [
            '۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'

        ];

        var nstr = number.toString();
        var out = "";

        for (var i = 0; i < nstr.length; i++) {
            if (digits.indexOf(nstr.charAt(i)) == -1 || digits.indexOf(nstr.charAt(i)) > 10) {
                out += nstr.charAt(i);
                continue;
            }
            out += digits[digits.indexOf(nstr.charAt(i)) + 11];
        }

        return out;
    },

    /**
     * Translate given number numerals to Persian
     */
    toPersian: function (number) {
        var digits = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-',
            '۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰', '-'
        ];

        var nstr = number.toString();
        var out = "";

        for (var i = 0; i < nstr.length; i++) {
            if (digits.indexOf(nstr.charAt(i)) == -1) {
                out += nstr.charAt(i);
                continue;
            }

            out += digits[digits.indexOf(nstr.charAt(i)) + 12];
        }

        return out;
    }
};

