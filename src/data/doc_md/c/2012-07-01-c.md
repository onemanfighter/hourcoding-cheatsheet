---
layout: more
title: C Cheat Sheet
updated: 2023-12-27
---

<img src="https://cdn.worldvectorlogo.com/logos/c-1.svg" alt="C language icon" style="width:100px;"/>

<div class="content content-400">
    <div class="board board-326">
        <h2 class="board-title">Resource</h2>
        <div class="board-card">
            <h3 class="board-card-title">Online</h3>
            <ul>
                <li><a href="http://en.wikipedia.org/wiki/C_%28programming_language%29">Wikipedia C</a></li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Download</h3>
            <ul>
                <li><a href="http://www.digilife.be/quickreferences/QRC/C%20Reference%20Card%20%28ANSI%29%202.2.pdf">ANSI C Quick Reference Card [.pdf]</a></li>
                <li><a href="http://refcards.com/refcard/ansi-c-silvermanj">ANSI C Quick Reference Card</a></li>
                <li><a href="/static/cs/cs/C.Reference.Card.ANSI.2.2.pdf">ANSI C Quick Reference Card [backup]</a></li>
                <li><a href="/static/cs/cs/ansi-c-refcard-a4.pdf">ANSI C Quick Reference Card [backup]</a></li>
                <li><a href="http://faculty.olin.edu/~jcristatic/cs/Teaching/SigSysWeb/Embedded/c_cheat_sheet.htm">ANSI C Quick Reference Card [backup]</a></li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Related</h3>
            <ul>
                <li><a href="/csharp" title="C# Cheat Sheet">C#</a></li>
                <li><a href="/cpp" title="C++ Cheat Sheet">C++</a></li>
                <li><a href="/gdb" title="GDB Cheat Sheet">GDB</a></li>
                <li><a href="/objective-c" title="Objective-C Cheat Sheet">Objective-C</a></li>
                <li><a href="/openmp" title="OpenMP Cheat Sheet">OpenMP</a></li>
            </ul>
        </div>
    </div>
</div>

### main() Function

- The main() function is the starting point of the program: int main `(int argc, char \*argv[])`
- The return type of the `main()` function is an integer (`type int`) and it is known as the return value of the program.
- As a rule of thumb, value `0` means success while non-zero means an error conditions.

### Include Files

- The purpose of these files is to tell the compiler about the existence of external functions which the source code will make use of.

### Preprocessor directives:

```C
#include "mine.h" // search current working directory first
#include <stdio.h> // search command line directory then system
#define TRUE 1 macro // substitution, usually use capitals
#define min(a,b) (a<b)?(a):(b) // macro substitution with parameters
#define abs(a) (a<0)?(-(a)):(a) // macro substitution
#define note /_ comment _/ /* this comment gets inserted every time note appears
backslash \ at end of a line means continue */
#undef TRUE // undefines a previously defined macroname
#error stop compiling at this point
#if  // expression conditional compilation, start if structure
#elif // expression else if expression != 0 compile following code
#else // else compile following code
#endif // end of conditional compiling
#ifdef // macroname like #if, compiles if macroname defined
#ifndef // like #if, compiles if macroname undefined
#line number [filename] // set origin for **LINE** and **FILE**
#pragma //gives the compiler commands
```

### Create and execute a program

1. Open up a terminal
2. Create the program: `nano nameProgram.c `
3. Write the program and save it
4. `gcc -o nameExecutable nameProgram.c`

### 32 Reserved words

| Term     |                            Description                             |
| -------- | :----------------------------------------------------------------: |
| auto     |                     optional local declaration                     |
| break    |             used to exit loop and used to exit switch              |
| case     |                         choice in a switch                         |
| char     |               basic declaration of a type character                |
| const    |       prefix declaration meaning variable can not be changed       |
| continue |          go to bottom of loop in for, while and do loops           |
| default  |                   optional last case of a switch                   |
| do       |                executable statement, do-while loop                 |
| double   |         basic declaration double precision floating point          |
| else     |            executable statement, part of "if" structure            |
| enum     |               basic declaration of enumeration type                |
| extern   |     prefix declaration meaning variable is defined externally      |
| float    |                basic declaration of floating point                 |
| for      |                   executable statement, for loop                   |
| goto     |                  jump within function to a label                   |
| if       |                        executable statement                        |
| int      |                    basic declaration of integer                    |
| long     |             prefix declaration applying to many types              |
| register |        prefix declaration meaning keep variable in register        |
| return   |            executable statement with or without a value            |
| short    |             prefix declaration applying to many types              |
| signed   |             prefix declaration applying to some types              |
| sizeof   |   operator applying to variables and types, gives size in bytes    |
| static   |          prefix declaration to make local variable static          |
| struct   |             declaration of a structure, like a record              |
| switch   |                   executable statement for cases                   |
| typedef  |            creates a new type name for an existing type            |
| union    |   declaration of variables that are in the same memory locations   |
| unsigned |             prefix declaration applying to some types              |
| void     |                 declaration of a typeless variable                 |
| volatile | prefix declaration meaning the variable can be changed at any time |
| while    |         executable statement, while loop or do-while loop          |

### Basic types

| Type   |                          Description                           |
| ------ | :------------------------------------------------------------: |
| char   | character type, usually one byte ( a string is array of char ) |
| int    |         integer type, usually 2 or 4 bytes ( default )         |
| float  |              floating point type, usually 4 bytes              |
| double |              floating point type, usually 8 bytes              |
| void   |                       no type, typeless                        |
| enum   |        enumeration type ( user defines the type name )         |

### Type modifiers, prefix for basic types

| Modifier |                          Description                           |
| -------- | :------------------------------------------------------------: |
| signed   |                     has a sign ( default )                     |
| unsigned |                    no sign bit in variable                     |
| long     | longer version of type (short or long alone means short int or |
| short    |  shorter version of type long int because int is the default)  |
| const    |                variable can not be stored into                 |

### Storage Types

| Prefix   |                 Description                 |
| -------- | :-----------------------------------------: |
| auto     |         local variable ( default )          |
| static   |   permanent when function exits, not auto   |
| volatile |      can change from outside influence      |
| extern   | variables are defined elsewhere, externally |
| register |         assign variable to register         |

### Operators

| Operator |                   Name/Description                   |
| -------- | :--------------------------------------------------: |
| `( )`    |         grouping parenthesis, function call          |
| `[ ]`    |           array indexing, also [ ][ ] etc.           |
| `->`     |             selector, structure pointer              |
| `.`      |               select structure element               |
| `!`      | relational not, complement, ! a yields true or false |
| `~`      |          bitwise not, ones complement, ~ a           |
| `++`     |         increment, pre or post to a variable         |
| `--`     |         decrement, pre or post to a variable         |
| `- a`    |                     unary minus                      |
| `+ a`    |                      unary plus                      |

#### Indirect

| Operator                        |                  Name/Description                   |
| ------------------------------- | :-------------------------------------------------: |
| \* p                            |                is value at pointer p                |
| p                               |            address of the memory address            |
| & b                             |         is the memory address of variable b         |
| sizeof                          |       size in bytes, sizeof a or sizeof (int)       |
| (type)                          |                       a cast                        |
| (float) i, (_fun)(a,b), (int_)x |              explicit type conversion               |
| \* multiply                     |                       a \* b                        |
| / divide                        |                        a / b                        |
| % modulo                        |                        a % b                        |
| add                             |                        a + b                        |
| subtract                        |                        a - b                        |
| << shift left                   | left operand is shifted left by right operand bits  |
| >> shift right                  | left operand is shifted right by right operand bits |
| < less than                     |          result is true or false, a %lt; b          |
| <= less than or equal           |           result is true or false, a <= b           |
| > greater than                  |           result is true or false, a > b            |
| > = greater than or equal       |           result is true or false, a >= b           |
| == equal                        |           result is true or false, a == b           |
| != not equal                    |           result is true or false, a != b           |
| & bitwise and                   |                        a & b                        |
| ^ bitwise exclusive or          |                        a ^ b                        |
| \| bitwise or                   |                       a \| b                        |
| && relational and               |      result is true or false, a < b && c >= d       |
| \|\| relational or              |     result is true or false, a < b \|\| c >= d      |
| ? exp1 ? exp2 : exp3            |  result is exp2 if exp1 != 0, else result is exp3   |
| =                               |                        store                        |
| +=                              |                    add and store                    |
| -=                              |                 subtract and store                  |
| \*=                             |                 multiply and store                  |
| /=                              |                  divide and store                   |
| %=                              |                  modulo and store                   |
| <<=                             |                shift left and store                 |
| =                               |                shift right and store                |
| &=                              |                bitwise and and store                |
| ^=                              |           bitwise exclusive or and store            |
| \|=                             |                bitwise or and store                 |
| ,                               |            separator as in ( y=x,z=++x )            |

### Operator precedence

#### More precedence

```c
LR | ( ) [ ] -> . x++ x--
RL | ! ~ - + ++x --x _ & sizeof (type)
LR | _ / %
LR | + -
LR | << >>
LR | < <= > >=
LR | == !=
LR | &
LR | ^
LR |
LR | &&
LR | ||
RL | ? :
RL | = += -= \*= /= %= >>= <<= &= ^= |=
LR | ,
```

#### Less precedence

### Conditional branching

#### If statement

```c
if ( condition ) statement ;
else statement*2 ; /* optional else clause */
```

#### Switch statement

```c
switch ( expression ) /*constants must be unique */
{
case constant*1: /* do nothing for this case */
break;
case constant_2: /* drop through and do same as constant *3 */
case constant*3:
statement_sequence /* can have but does not need { } */
break;
case constant_4:
statement_sequence /* does this and next*/
/* statement*sequence also*/
case constant*5:
statement_sequence
break;
default: /* default executes if no constant equals*/
statement_sequence /* the expression. This is optional */
}
```

#### Function definition

```c
type function_name(int a, float b, const char \* ch,...) { function_body }
/_ only parameters passed by address can are modified_/
/_ in the calling function, local copy can be modified_/
```

```c
char _ strcpy( char _ s1, const char \* s2 ) { statements }
```

### Declarations forms

#### basic_type variable;

```c
type variable[val][val]...[val]={data,data,...}; /_multidimensional array_/
```

```c
struct struct_name /* struct_name is optional */

    type variable_1; /* any declaration */
    ... /* all variable names must be unique */
.}
    variable_1, ... ; /* variables are optional */
```

```c
struct struct_name { /* structname is optional */
type variable1: length; /* any declaration : length in bits */
... /* type is int, unsigned or signed */
} variable_1, ... ; /* variables are optional, they can also be arrays and pointers */
```

```c
union union*name { /* union name is optional */
type variable1; /* variable1 overlays variable_2 */
type variable2;
...
} variable_a, ...; /* variables are optional */
```

```c
enum enum*type /* enum*name is optional */
{/{
    enumeration*name_1, /* establishes enumeration literals */
    enumeration_name_2=number,/* optional number, */
    ... /* default is 0, 1, 2, ... */
}/} variable, ...; /* variables are optional */

/* use dot notation to select a component of a struct or union */

```
