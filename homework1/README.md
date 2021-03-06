# Homework 1

##1.
We saw in the course notes, on the page entitled "[Syntax](http://cs.lmu.edu/~ray/notes/syntax/)", an example of an abstract syntax tree with five concrete syntaxes. Show a sixth version of this "same" program, this time using a concrete syntax that also passes for a JSON object.

###Solution
```
{
  "program": {
    "declare": { "vars": "x y" },
    "while": {
      "minus": {
        "varref": { "ref": "y" },
        "intlit": { "value": "5" }
      },
      "declare": { "vars": "y" },
      "read": { "vars": "x y" },
      "assign": {
        "varref": "x",
        "times": {
          "intlit": { "value": "2" },
          "plus": {
            "intlit": { "value": "3" },
            "varref": { "ref": "y" }
          }
        }
      }
    },
    "write": {
      "intlit": { "value": "5" }
    }
  }
}
```

##2.
In the Ada language comments are started with "--" and go to the end of the line. Therefore the designers decided not to make the unary negation operator have the highest precedence. Instead, expressions are defined as follows:
```
Exp  → Exp1 ('and' Exp1)*  |  Exp1 ('or' Exp1)*
Exp1 → Exp2 (relop Exp2)?
Exp2 → '-'? EXP3 (addop Exp3)*
Exp3 → Exp4 (mulop Exp4)*
Exp4 → Exp5 ('**'  Exp5)?  |  'not' Exp5  |  'abs' Exp5
```
Explain why this choice was made. Also, give an abstract syntax tree for the expression -8 * 5 and explain how this is similar to and how it is different from the alternative of dropping the negation from Exp2 and adding - Exp5 to Exp4.

###Solution
The negative sign is optional so adding negatives is the same as subtraction. This allows for comments to not be treated as expressions. If negation is required, it can be done using an addop. Dropping the negation from Exp2 and adding - Exp5 to Exp4 just multiplies by -1.

<img src="https://github.com/mwflickner/cmsi488/blob/master/homework1/problem2ast.png" width="200">

##3.
Here is a description of a language. Programs in this language are made up of a non-empty sequence of function declarations, followed by a single expression. Each function declaration starts with the keyword fun followed by the function's name (an identifier), then a parenthesized list of zero or more parameters (also identifiers) separated by commas, then the body, which is a sequence of one or more expressions terminated by semicolons with the sequence enclosed in curly braces. Expressions can be numeric literals, string literals, identifiers, function calls, or can be made up of other expressions with the usual binary arithmetic operators (plus, minus, times, divide) and a unary prefix negation and a unary postfix factorial (!). There's a conditional expression with the syntax ```x if y else z```. Factorial has the highest precedence, followed by negation, the multiplicative operators, the additive operators, and finally the conditional. Parentheses are used, as in most other languages, to group subexpressions. Numeric literals are non-empty sequences of decimal digits with an optional fractional part and an optional exponent part. String literals delimited with double quotes with the escape sequences \', \", \r, \n, \\, and \u followed by four hexadecimal digits. Identifiers are non-empty sequences of letters, decimal digits, underscores, at-signs, and dollar signs, beginning with a letter or dollar sign, that are not also reserved words. Function calls are formed with an identifier followed by a comma-separated list of expressions bracketed by parentheses. There are no comments in this language, and whitespace can be used liberally between tokens.
Write the micro and macrosyntax of this language.

###Solution

### Macrosyntax
```
PROGRAM     → BLOCK EOF
BLOCK       → (SKIP)* (FUNDEC (SKIP)* EXP+ (SKIP))*
FUNDEC      → 'FUN' ID ‘(‘ ( ( ID ‘,’ )* ID )? ‘)’ ‘{‘ BODY ‘}’
BODY        → (EXP  SEMI)+ 
FUNCALL     → ID ‘(‘ ( ( EXP ‘,’ )* EXP)? ‘)’

EXP     → EXP2 | CONDITIONAL
CONDITIONAL → EXP2 'IF' EXP2 ‘ELSE' EXP2
EXP2   → EXP3 (ADDOP EXP3)* | CONDITION
EXP3   → EXP4 (MULOP EXP4 )*
EXP4   → (NEGOP)? EXP5
EXP5   → EXP6  | NUMLIT (FACT)?
EXP6   → NUMLIT | FUNCALL | ID | ‘(‘ EXP ’)’ | (SKIP* EXP SKIP*) | STRLIT
```
### Microsyntax
```
SKIP    → (p{Zs})+
MULOP  → (‘*’ | ‘/’)
ADDOP → (‘+’ | ‘-’)
NEGOP   → '-'
FACT    → '!'
KEYWORDS → (‘IF’ | ‘THEN’ | ‘FUN’)
STRLIT  → "[\"\'\r\n\\\uDIGIT{4}]*" - KEYWORDS
NUMLIT  → (NEGOP)? DIGIT+ ([Ee] NEGOP? DIGIT+)?
ID      → (LETTER | $)+ (LETTER | DIGIT | '_' | '$' | '@')*
DIGIT   → '[\p{Nd}]'
LETTER  → [\p{L}]
EOF     → '@EOF'
```
##4.
Give an abstract syntax tree for the following Java code fragment:
```
if (x > 2 || !String.matches(f(x))) {
    write(- 3*q);
} else if (! here || there) {
    do {
        while (close) tryHarder();
        x = x >>> 3 & 2 * x;
    } while (false);
    q[4].g(6) = person.list[2];
} else {
    throw up;
}
```
Please note that the question asked for an abstract syntax tree and not a parse tree. If you give a parse tree, you will get a zero on the problem.

###Solution
<img src="https://github.com/mwflickner/cmsi488/blob/master/homework1/problem4ast.png" width="1000">

