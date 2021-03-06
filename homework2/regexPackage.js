'use strict';

class Regex {
    static isCanadianPostalCode(postalCode) {
        return /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/.test(postalCode);
    }

    static isVisaCreditCardNumber(creditCardNumber) {
        return /^4[0-9]{12}(?:[0-9]{3})?$/.test(creditCardNumber);
    }

    static isMastercardCreditCardNumber(creditCardNumber) {
        return /^5[1-5][0-9]{14}$/.test(creditCardNumber);
    }

    static isAda95NumericLiteral(string) {
        return /^d+(_\d+)*#[\dA-F](_[\dA-F]+)*(\.[\dA-F]+(_[\dA-F]+)*)?#(E[\+\-]?\d+(_\d)*)?|\d+(_\d+)*(\.\d(_\d+)*)?(E[\+\-]?\d+(_\d)*)?/.test(string);
    }

    static isAllBasicLatinLetters(letterString) {
        return /^([a-zA-Z]{1,2}|[a-zA-Z][oO][^oO]|[a-zA-Z][^oO][a-zA-Z]|[a-zA-Z]{4,})$/.test(letterString);
    }

    static isBinaryNumberDivisibleBy16(binaryString) {
        return /^([0-1]*0000)$/.test(binaryString);
    }

    static isDecimal2Through36(number) {
        return /^([2-9]|[1-2]\d|3[0-6])$/.test(number);
    }

    static isMlStyleComment(string) {
        return /^(\(\*.*\*\))$/.test(string);
    }

    static isLatinLetterStringWithoutFileFindOrForWithLookarounds(letterString) {
        return /^((?!file$|find$|for$)[a-zA-Z]*)$/.test(letterString);
    }

    static isLatinLetterStringWithoutFileFindOrForNoLookarounds(letterString) {
        
    }
}

var assert = (exp) => {
  console.assert(exp);
}

var testRegexes = () => {
    var ohCanada1 = "A0A 0A5";
    var winnipeg = "R3M 3K2";
    var notOhCanada = "1A1 B4C";
    var visa1 = "4042433464929277";
    var visa2 = "4539172189352619";
    var masterCard1 = "5322548477306334";
    var masterCard2 = "5165825595889262"
    var discover1 = "6011676854519601";
    var americanExpress1 = "378445367881951";

    assert(Regex.isCanadianPostalCode(ohCanada1));
    assert(Regex.isCanadianPostalCode(winnipeg));
    assert(!Regex.isCanadianPostalCode(notOhCanada));

    assert(Regex.isVisaCreditCardNumber(visa1));
    assert(Regex.isVisaCreditCardNumber(visa2));
    assert(!Regex.isVisaCreditCardNumber(masterCard1));
    assert(!Regex.isVisaCreditCardNumber(masterCard2));
    assert(!Regex.isVisaCreditCardNumber(discover1));
    assert(!Regex.isVisaCreditCardNumber(americanExpress1));
    
    assert(Regex.isMastercardCreditCardNumber(masterCard1));
    assert(Regex.isMastercardCreditCardNumber(masterCard2));
    assert(!Regex.isMastercardCreditCardNumber(visa1));
    assert(!Regex.isMastercardCreditCardNumber(visa2));
    assert(!Regex.isMastercardCreditCardNumber(discover1));
    assert(!Regex.isMastercardCreditCardNumber(americanExpress1));

    assert(Regex.isAda95NumericLiteral("2#101#"));
    assert(Regex.isAda95NumericLiteral("9.84E1"));
    assert(Regex.isAda95NumericLiteral("9.84E-1"));
    assert(Regex.isAda95NumericLiteral("984.0e-1"));
    assert(Regex.isAda95NumericLiteral("1_900E+0"));
    assert(Regex.isAda95NumericLiteral("_1900E+0"));
    assert(Regex.isAda95NumericLiteral("1_900_E+0"));
    assert(Regex.isAda95NumericLiteral("1_900__E+0"));
    assert(Regex.isAda95NumericLiteral("16#B#E2"));
    assert(!Regex.isAda95NumericLiteral("hello"));
    assert(!Regex.isAda95NumericLiteral(" "));
    assert(!Regex.isAda95NumericLiteral("*"));

    assert(Regex.isAllBasicLatinLetters("hello"));
    assert(Regex.isAllBasicLatinLetters("HELLO"));
    assert(Regex.isAllBasicLatinLetters("Hello"));
    assert(!Regex.isAllBasicLatinLetters("Hello!"));
    assert(!Regex.isAllBasicLatinLetters("Boo"));
    assert(!Regex.isAllBasicLatinLetters("roo"));
    assert(Regex.isAllBasicLatinLetters("root"));

    assert(Regex.isDecimal2Through36("2"));
    assert(Regex.isDecimal2Through36("36"));
    assert(Regex.isDecimal2Through36("7"));
    assert(!Regex.isDecimal2Through36("0"));
    assert(!Regex.isDecimal2Through36("37"));

    assert(Regex.isBinaryNumberDivisibleBy16("10000"));
    assert(!Regex.isBinaryNumberDivisibleBy16("12000"))
    assert(!Regex.isBinaryNumberDivisibleBy16("1000"));

    assert(!Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("find"));
    assert(!Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("file"));
    assert(!Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("for"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("finda"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("findA"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("afind"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("Afind"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("fora"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("forA"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("afor"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("Afor"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("filea"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("fileA"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("afile"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("Afile"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("hello"));
    assert(Regex.isLatinLetterStringWithoutFileFindOrForWithLookarounds("world"));

    console.log("All tests passed.")
}();