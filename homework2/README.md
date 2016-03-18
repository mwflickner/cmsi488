#Homework 2

1a) Canadian Postal Codes
```
^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$
```

1b) Visa Credit Cards (without checksum)
```
^4[0-9]{12}(?:[0-9]{3})?$
```

1c) MasterCard Credit Cards (without checksum)
```
^5[1-5][0-9]{14}$ 
```
1d) Ada 95 Numeric Literals

decimal-literal 

or based literal
[\d_]+(\.[\d_]+)?[(E)\+?[\d_]+]

1g) Decimal numerals in the range 2 through 36, inclusive.
^([2-9]|[1-2]\d|3[0-6])$