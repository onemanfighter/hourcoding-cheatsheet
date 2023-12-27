---
layout: default
title: Php Cheat Sheet (v2)
updated: 2023-12-27
---

## Php Cheat Sheet (v2s)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" width="200" />

```php
// Exit the file, string inside get's echo'ed
die("This file is not ment to be ran. ¯\_(ツ)_/¯");
exit("This file is not ment to be ran. ¯\_(ツ)_/¯");
```

### Printing

```php
  echo ""; // Print a string or type that can be made into a string(I.E int, float).
  print_r($arr); // Print anything, with type hints for array's and object's
var_dump($arr); // Print anything, with type hints for any value and sizes
```

### Useful string manipulation methods

```php
  $string = 'Awesome cheatsheets';

str_contains($string, 'cheat'); // Find if the string contains the specified string (PHP >= 8.0)
str_replace('Awesome', 'Bonjour', $string); // Replace all occurence
strcmp($string, 'Awesome cheatsheets'); // Compare two strings
strpos($string, 'a', 0); // Get position in the string
str_split($string, 2); // Split the string
strrev($string); // Reverse a string
trim($string); // Strip whitespace from the beginning and end of a string
ucfirst($string); // Make a string's first character uppercase
lcfirst($string); // Make a string's first character lowercase
substr($string, 0, 4); // Return part of a string
```

### Declaring an Array

#### Indexed Array

```php
  $arr = array("John", "Doe", "Lorem", "Ipsum");
```

#### Associative Array

```php
  $arr = array("John"=>"10", "Doe"=>"200", "Doe"=>"3000", "Ipsum"=>"40000");
```

#### Multidimensional Arrays

```php
  $arr = array (
  array("John",100,180),
  array("Doe",150,130),
  array("Lorem",500,200),
  array("Ipsum",170,150)
  );
```

#### Declaring array with short syntax

```php
  $arr = ["John", "Doe", "Lorem", "Ipsum"]; // Indexed Array
  $arr = ["John"=>"10", "Doe"=>"200", "Doe"=>"3000", "Ipsum"=>"40000"]; // Associative Array
  $arr = [
  ["John",100,180],
  ["Doe",150,130],
  ["Lorem",500,200],
  ["Ipsum",170,150], // You can have a "," at the end without throwing syntax errors
  ];
```

### Useful array manipulation methods

#### Sorting an Array

```php
  $arr = array("John", "Doe", "Lorem", "Ipsum");
sort($arr); // Sort arrays in ascending order.
rsort($arr); // Sort arrays in descending order.
asort($arr); // Sort associative arrays in ascending order, according to the value.
ksort($arr); // Sort associative arrays in ascending order, according to the key.
arsort($arr); // Sort associative arrays in descending order, according to the value.
krsort($arr); // Sort associative arrays in descending order, according to the key.
```

#### Adding/Removing Elements

```php
  $arr = array("John", "Doe", "Lorem", "Ipsum");
array_push($arr, "Dolor"); // Add one or more elements to the end of an array.
array_pop($arr); // Remove the last element from an array.
array_unshift($arr, "Dolor"); // Add one or more elements to the beginning of an array.
array_shift($arr); // Remove the first element from an array.
```

#### Merging Arrays

```php
  $arr1 = array("John", "Doe", "Lorem", "Ipsum");
$arr2 = array("Dolor", "Sit", "Amet");
array_merge($arr1, $arr2); // Merge one or more arrays.
```

#### Filtering Arrays

```php
  $arr = array("John", "Doe", "Lorem", "Ipsum");
array_filter($arr, fn($value) => $value == "John"); // Filter the values of an array using a callback function.
array_map(fn($value) => $value == "John", $arr); // Applies the callback to the elements of the given arrays.
array_reduce($arr, fn($value) => $value == "John"); // Iteratively reduce the array to a single value using a callback function.
```

#### Searching Arrays

```php
  $arr = array("John", "Doe", "Lorem", "Ipsum");
array_search("John", $arr); // Search an array for the value and returns the key.
array_key_exists("John", $arr); // Checks if the given key or index exists in the array.
in_array("John", $arr); // Checks if a value exists in an array.
```

### Conditions

#### If/Elseif/Else

```php
  $i = 10;  // Declare a variable
if($i > 10) {
echo "Greater than 10";
} elseif($i < 10) {
echo "Less than 10";
} else {
echo "Equal to 10";
}
```

#### Ternary

```php
$string = $state == 'Running' ? 'He is running' : 'I don\'t know';
```

#### Null coalescing

```php
$string = $startDate ?? '';
```

#### Switch

```php
  $i = 10;  // Declare a variable
switch($i) {
case 10:
echo "Equal to 10";
break;
case 11:
echo "Equal to 11";
break;
default:
echo "Not equal to 10 or 11";
}
```

### Ways of looping

#### Foreach

continue; // Skip current iter
break; // Exit loop

```php
    $arr = array("John", "Doe", "Lorem", "Ipsum");
foreach($arr as $key => $value) {
echo $key . " " . $value;
}
```

#### For

```php
  $arr = array("John", "Doe", "Lorem", "Ipsum");
for($i = 0; $i < count($arr); $i++) {
echo $i . " " . $arr[$i];
}

// Another example
for($i = 0; $i < count($arr); $i++) {
    $key = $i;
    $value = $arr[$i];
}
```

#### Do while

```php
$i = 0;
do {
    $key = $i;
    $value = $arr[$i];
} while($i < count($arr));

// Switch
switch($arr) {
case 1:
break;
case 2:
break;
case 3:
break;
default:
}
```

### Match (PHP >= 8.0)

![Doc link] (https://www.php.net/manual/fr/control-structures.match.php)

```php
  $food = 'apple';
$return_value = match($food) {
'apple', 'appel' => 'An apple',
'banana' => 'A banana',
'applepie' => 'An applepie',
default => 'A fruit'
};

//You can also use it as a conditionnal and throw exceptions
$str = 'Welcome to awesome cheatsheets';
$return_value = match(true) {
str_contains($str, 'Welcome') && str_contains($str ,'to') => 'en-EN',
str_contains($str, 'Bonjour') && str_contains($str, 'sur') => 'fr-FR',
default => throw new Exception('Not a recognized language')
};
```

### Global variables

![Doc link](http://php.net/manual/en/language.variables.superglobals.php)

```php
$_SERVER; // SERVER variables
$\_GET; // Query params
$_POST; // Post fields
$\_REQUEST; // GET and POST together
$GLOBALS; // Array of global variables
$\_SESSION; // Browser session
$_FILES; // Array of files that are sent in request
$\_COOKIE; // Array of cookies sent in request
$_ENV; // php.ini options
$argv; // Array of terminal arguments (filename included)
$argc; // Number of arguments passed into terminal
```

### Functions

#### Simple function

```php
  function name($parameter) {
  // Code to be executed
  }
```

#### Function with return type (void, int, float, string, array, object, mixed)

```php
  function name($parameter) : void {
  // Code to be executed
  }
```

#### Function with optionnal parameter

```php
  function name($parameter = '') : string {
  // Code to be executed
  }
```

#### Function with typed parameter (? means "can be null")

```php
  function name(?string $parameter) : ?string {
  // Code to be executed
  }
```

#### Function with union types (PHP >= 8.0)

```php
  function name(int|string $parameter1, array $parameter2) : int|string {
  // Code to be executed
  }
```

#### Function call

```php
  name('my_parameter');
```

#### Null safe operator (PHP >= 8.0)

```php
  $myObject?->getName()?->startWith('A');
```

### Class

! [Doc link](http://php.net/manual/en/language.oop5.basic.php)

```php
    class ClassName
    {
    // Properties
    public $property = 'value';
    private $property = 'value';
    protected $property = 'value';
    static $property = 'value';

    // Methods
    public function publicFunction($parameter) {
    // Code to be executed
    }
    private function privateFunction($parameter) {
    // Code to be executed
    }
    protected function protectedFunction($parameter) {
    // Code to be executed
    }
    static function staticFunction($parameter) {
    // Code to be executed
    }
    }
```

    class NormalClass extends AbstractClassName implements InterfaceName

#### Use of traits

      use TraitName;

#### PROPERTY TYPES

**_Public property, everyone can access this property._**

```php
      // @var Type
      public $property;
```

**_Private property, only this instance can access this property._**

```php
      // @var Type
      private $property;
```

**_Protected property, this instance and childs can access this property._**

```php
      // @var Type
      protected $property;
```

**_Static property, is the same for all instances of this class._**

```php
      // @var Type
      static $property;
```

#### FUNCTION TYPES

**_Public function, everyone can access this function._**

```php
        public function publicFunction(Type $var = null): Type
        {
        }
```

**_Private function, only this instance can access this function._**

```php
        private function privateFunction(Type $var = null): Type
        {
        }
```

**_Protected function, this instance and childs can access this function._**

```php
        protected function protectedFunction(Type $var = null): Type
        {
        }
```

**_Static function, doesn't need an instance to be executed._**

```php
        public static function staticFunction(Type $var = null): Type
        {
        }
```

#### MAGIC METHODS

**_Get Gets triggered on creating a new class instance_**
http://php.net/manual/en/language.oop5.decon.php

```php
        public function __construct(Type $var = null)
        {
        }
```

**_Gets triggered on destruction of a class instance_**
http://php.net/manual/en/language.oop5.decon.php

```php
        public function __destruct()
        {
        }
```

**_Gets triggered on cloning of a class instance_**
http://php.net/manual/en/language.oop5.cloning.php

```php
        public function __clone()
        {
        }
```

**_ Set() is run when writing data to inaccessible properties _**
http://php.net/manual/en/language.oop5.overloading.php

```php
        public function __set(string $name , mixed $value)
        {
        }
```

**_ get() is utilized for reading data from inaccessible properties._**
http://php.net/manual/en/language.oop5.overloading.php

```php
        public function __get(string $name)
        {
        }
```

**_ isset() is triggered by calling isset() or empty() on inaccessible properties._**
http://php.net/manual/en/language.oop5.overloading.php

```php
        public function __isset(string $name)
        {
        }
```

**_ unset() is invoked when unset() is used on inaccessible properties._**
http://php.net/manual/en/language.oop5.overloading.php

```php
        public function __unset(string $name)
        {
        }
```

**_ call is triggered when invoking inaccessible methods in an object context._**
http://php.net/manual/en/language.oop5.overloading.php

```php
        public function __call(string $name, array $arguments)
        {
        }
```

**_ callStatic() is triggered when invoking inaccessible methods in a static context._**
http://php.net/manual/en/language.oop5.overloading.php

```php
        public static function __callStatic(string $name, array $arguments)
        {
        }
```

**_ sleep() method serialize any object variables._**
http://php.net/manual/en/language.oop5.magic.php

```php
        public function __sleep()
        {
        }
```

**_ wakeup() method unserialize any object variables._**
http://php.net/manual/en/language.oop5.magic.php

```php
        public function __wakeup()
        {
        }
```

**_ toString() method allows a class to decide how it will react when it is treated like a string._**
http://php.net/manual/en/language.oop5.magic.php

```php
        public function __toString()
        {
        }
```

**_ invoke() method is called when a script tries to call an object as a function._**
http://php.net/manual/en/language.oop5.magic.php

```php
        public function __invoke(Type $var = null)
        {
        }
```

**_ set_state() method is called for classes exported by var_export(). _**
http://php.net/manual/en/language.oop5.magic.php

```php
        public static function __set_state(array $properties)
        {
        }
```

**_ debugInfo() method is called by var\*dump() when dumping an object to get the properties that should be shown. _**
http://php.net/manual/en/language.oop5.magic.php

```php
        public function __debugInfo()
        {
        }
```

#### Every class that has implemented this interface need to have the same functions.

**_ interface InterfaceName_**

      public function FunctionName(Type $var = null): Type;

**_Combination of class and interface._**

```php
abstract class AbstractClassName
{
      /**
       * Classes extending this abstract class need to have this function.
       * @param Type
       * @return Type
       */
      abstract function abstractFunction(Type $var = null): Type;
}
```

#### Basic Implementation of LoggerAwareInterface.

@see https://github.com/php-fig/log/blob/master/Psr/Log/LoggerAwareTrait.php

```php
trait LoggerAwareTrait
{
/*
- The logger instance. \*
- @var LoggerInterface
*/
protected $logger;
/*
- Sets a logger.
- @param LoggerInterface $logger
*/
public function setLogger(LoggerInterface $logger)
{
$this->logger = $logger;
}
}
```

#### Example with use of LoggerAwareTrait.

```php
class ClassWithLogger
{
/*
- Use the LoggerAwareTrait in this class.
*/
use LoggerAwareTrait;
}
```

### Enums (PHP >=8.1)

[Doc link](https://www.php.net/manual/fr/language.types.enumerations.php)

```php
interface StateCode {
public function stateCode() : int;
}

enum States implements StateCode {
case Running;
case Stopped;

     public function stateCode() : int {
         return match($this) {
             State::Running => '444',
             State::Stopped => '666'
         };
     }

}
```

#### You can also declare backed Enums

```php
enum States : int implements StateCode {
case Running = 1;
case Stopped = 0;

      public function stateCode() : int {
          return match($this) {
              State::Running => '444',
              State::Stopped => '666'
          };
      }

}
```

#### Enums can be use as a type

```php

function notify(State $state) {
// ...
}
notify(State::Running);

```

### PHP Regex.

#### Meta Characters.

```php
^ Start of subject (or line in multiline mode)
$ End of subject (or line in multiline mode)
[ Start character class definition
] End character class definition
| Alternates, eg (a|b) matches a or b
( Start subpattern
) End subpattern
\ Escape character
```

#### Pattern Modifiers.

```php
i Caseless - ignore case
m Multiline mode - ^ and $ match start and end of lines
s Dotall - . class includes newline
x Extended- comments & whitespace
e preg_replace only - enables evaluation of replacement as PHP code
S Extra analysis of pattern
U Pattern is ungreedy
u Pattern is treated as UTF-8
```

#### Subpattern Modifiers & Assertions.

```php
(?:) Non capturing subpattern ((?:foo|fu)bar) matches foobar or fubar without foo or fu appearing as a captured subpattern
(?=) Positive look ahead assertion foo(?=bar) matches foo when followed by bar
(?!) Negative look ahead assertion foo(?!bar) matches foo when not followed by bar
(?<=) Positive look behind assertion (?<=foo)bar matches bar when preceded by foo
(?<!) Negative look behind assertion (?<!foo)bar matches bar when not preceded by foo
(?>) Once-only subpatterns (?>\d+)bar Performance enhancing when bar not present
(?(x)) Conditional subpatterns (?(3)foo|fu)bar Matches foo if 3rd subpattern has matched, fu if not
(?&hashtag) Comment (?# Pattern does x y or z)
```

#### Base Character Classes

```php
\w Any "word" character (a-z 0-9 \_)
\W Any non "word" character
\s Whitespace (space, tab CRLF)
\S Any non whitepsace character
\d Digits (0-9)
\D Any non digit character
. (Period) - Any character except newline
```

#### Multiplicity

```php
* Zero or more of n
+ One or more of n
? Zero or one occurrences of n
{n} n occurrences exactly
{n,} At least n occurrences
{,m} At most m occurrences
{n,m} Between n and m occurrences (inclusive)
```

#### PHP Regular Expression Functions.

| Function         |                                                                         Description                                                                         |
| ---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------: |
| preg_match()     |                        The preg_match() function searches string for pattern, returning true if pattern exists, and false otherwise.                        |
| preg_match_all() |                         The preg_match_all() function matches all occurrences of pattern in string. Useful for search and replace.                          |
| preg_replace()   | The preg_replace() function operates just like ereg_replace(), except that regular expressions can be used in the pattern and replacement input parameters. |
| preg_split()     |           Preg Split (preg_split()) operates exactly like the split() function, except that regular expressions are accepted as input parameters.           |
| preg_grep()      |              The preg_grep() function searches all elements of input_array, returning all elements matching the regex pattern within a string.              |
| preg_quote()     |                                                             Quote regular expression characters                                                             |

#### Code Snippets.

```php
//A better solution for validate email syntax is using filter_var.
if (filter_var('test+email@fexample.com', FILTER_VALIDATE_EMAIL)) {
echo "Your email is ok.";
} else {
echo "Wrong email address format.";
}
```

```php
/*Validate username, consist of alpha-numeric (a-z, A-Z, 0-9),
 underscores, and has minimum 5 character and maximum 20 character.
You could change the minimum character and maximum character to any number you like.*/
$username = "user_name12";
if (preg_match('/^[a-z\d_]{5,20}$/i', $username)) {
echo "Your username is ok.";
} else {
echo "Wrong username format.";
}
```

#### Validate domain

```php
$url = "http://domain-name.com/";
if (preg*match('/^(http|https|ftp):\/\/([A-Z0-9]A-Z0-9*-]_(?:\.[A-Z0-9]A-Z0-9_-]\_)+):?(\d+)?\/?/i', $url)) {
echo "Your url is ok.";
} else {
echo "Wrong url.";
}
```

#### Extract domain name from certain URL

```php
$url = "http://domain-name.com/index.html";
preg_match('@^(?:http://)?([^/]+)@i', $url, $matches);
$host = $matches[1];
echo $host; // domain-name.com
```

#### Highlight a word in the content

```php
$text = "A regular expression (shortened as regex) is a sequence of characters that define a search pattern. Usually such patterns are used by string-searching algorithms for 'find' or 'find and replace' operations on strings, or for input validation.";
$text = preg*replace("/\b(regex)\b/i", 'replaced content', $text);
echo $text; /\_A regular expression (shortened as replaced content) is a sequence of characters that define a search pattern. Usually such patterns are used by string-searching algorithms for 'find' or 'find and replace' operations on strings, or for input validation.*/

```

```

```
