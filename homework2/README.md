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
