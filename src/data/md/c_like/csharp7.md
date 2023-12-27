---
title: C# 7
category: C-like
updated: 2023-13-27
layout: 2017/sheet
prism_languages: [csharp]
description: |
  A quick overview of C# 7
---

<img src="https://cdn.worldvectorlogo.com/logos/c--4.svg" alt="C language icon" style="width:100px;"/>

### Out Variables

```csharp
public void PrintCoordinates(Point p)
{
    p.GetCoordinates(out int x, out int y);
    WriteLine($"({x}, {y})");
}
```

`out` is used to declare a variable at the point where it is passed as an argument.

### Pattern Matching

#### Is-expressions with patterns

```csharp
public void PrintStars(object o)
{
    if (o is null) return;     // constant pattern "null"
    if (!(o is int i)) return; // type pattern "int i"
    WriteLine(new string('*', i));
}
```

#### Switch statements with patterns

```csharp
switch(shape)
{
    case Circle c:
        WriteLine($"circle with radius {c.Radius}");
        break;
    case Rectangle s when (s.Length == s.Height):
        WriteLine($"{s.Length} x {s.Height} square");
        break;
    case Rectangle r:
        WriteLine($"{r.Length} x {r.Height} rectangle");
        break;
    default:
        WriteLine("<unknown shape>");
        break;
    case null:
        throw new ArgumentNullException(nameof(shape));
}
```

### Tuples

#### Tuple type

```csharp
(string, string, string) LookupName(long id) // tuple return type
{
    ... // retrieve first, middle and last from data storage
    return (first, middle, last); // tuple literal
}
```

```csharp
var names = LookupName(id);
WriteLine($"found {names.Item1} {names.Item3}.");
```

#### Tuple elements with name

```csharp
(string first, string middle, string last) LookupName(long id) // tuple elements have names
```

```csharp
var names = LookupName(id);
WriteLine($"found {names.first} {names.last}.");
```

#### Tuple Literals

```csharp
   return (first: first, middle: middle, last: last); // named tuple elements in a literal
```

#### Tuple Deconstruction

```csharp
(var first, var middle, var last) = LookupName(id1);
WriteLine($"found {first} {last}.");
```

or

```csharp
var (first, middle, last) = LookupName(id1); // var outside
```

or

```csharp
(first, middle, last) = LookupName(id2); // assign onto existing variables
```

### Local Functions

```csharp
public int Fibonacci(int x)
{
    if (x < 0) throw new ArgumentException("Less negativity please!", nameof(x));
    return Fib(x).current;

    (int current, int previous) Fib(int i)
    {
        if (i == 0) return (1, 0);
        var (p, pp) = Fib(i - 1);
        return (p + pp, p);
    }
}
```

### Literal Improvements

#### Digit Separator inside numbers literals

```csharp
var d = 123_456;
var x = 0xAB_CD_EF;
```

#### Binary Literals

```csharp
var b = 0b1010_1011_1100_1101_1110_1111;
```

### Ref Returns and Locals

```csharp
public ref int Find(int number, int[] numbers)
{
    for (int i = 0; i < numbers.Length; i++)
    {
        if (numbers[i] == number)
        {
            return ref numbers[i]; // return the storage location, not the value
        }
    }
    throw new IndexOutOfRangeException($"{nameof(number)} not found");
}

int[] array = { 1, 15, -39, 0, 7, 14, -12 };
ref int place = ref Find(7, array); // aliases 7's place in the array
place = 9; // replaces 7 with 9 in the array
WriteLine(array[4]); // prints 9
```

### More Expression Bodied Members

C# 7.0 adds accessors, constructors and finalizers to the list of things that can have expression bodies:

```csharp
class Person
{
    private static ConcurrentDictionary<int, string> names = new ConcurrentDictionary<int, string>();
    private int id = GetId();

    public Person(string name) => names.TryAdd(id, name); // constructors
    ~Person() => names.TryRemove(id, out *);              // destructors
    public string Name
    {
        get => names[id];                                 // getters
        set => names[id] = value;                         // setters
    }
}
```

### Throw Expressions

```csharp
class Person
{
    public string Name { get; }
    public Person(string name) => Name = name ?? throw new ArgumentNullException(name);
    public string GetFirstName()
    {
        var parts = Name.Split(" ");
        return (parts.Length > 0) ? parts[0] : throw new InvalidOperationException("No name!");
    }
    public string GetLastName() => throw new NotImplementedException();
}
```

## Newly added cheatsheet data

### Data Types

#### Primitive Size Example

```csharp
string 2 bytes/char s = "reference";
bool b = true;
char 2 bytes ch = 'a';
byte 1 byte b = 0x78;
short 2 bytes val = 70;
int 4 bytes val = 700;
long 8 bytes val = 70;
float 4 bytes val = 70.0F;
double 8 bytes val = 70.0D;
decimal 16 bytes val = 70.0M;
```

#### Arrays

**_Declaration_**

```csharp
//Initiliazed using a list defined with curly braces
int[] nameArray = {100, 101, 102};

//Define an empty array
int[] nameArray = new int[3]; // 3 rows and 2 columns

//To access a specific item in the array
int[] nameArray = new int[10];
int firstNumber = nameArray[0];
nameArray[1] = 20;

//Multidimensional arrays
int [,] matrix = new int [2,2]
matrix[0,0] = 1;
matrix[0,1] = 2;
matrix[1,0] = 3;
matrix[1,1] = 4;

int[,] predefinedMatrix = new int[2,2] { { 1, 2 }, { 3, 4 } };
```

#### Array Operations

```csharp
//Sort ascending
Array.Sort(nameArray);

//Sort begins at element 6 and sorts 20 elements
Array.Sort(nameArray,6,20);

//Use 1 array as a key & sort 2 arrays
string[] values = {"Juan", "Victor", "Elena"};
string[] keys = {"Jimenez", "Martin", "Ortiz"};
Array.Sort(keys, values);

//Clear elements in array (array, first element, # elements)
Array.Clear(nameArray, 0, nameArray.Length);

//Copy elements from one array to another
Array.Copy(scr, target, numOfElements);
```

#### String Operations

```csharp
//To concatenate between strings, use the plus operator:
string firstName = "Erin";
string lastName = "Roger";
string fullName = firstName + " " + lastName;

//To add one string to another, use the += operator:
string secondLastName = "Green";
string fullName += secondLastName;

//ToString function
//It converts an object to its string representation so that it is suitable for display
Object.ToString();

//String formatting
//Each additional argument to the function can be referred to in the string using the brackets operator with the index number.
String.Format(String format, Object arg0);
format - A composite format string that includes one or more format items
arg0 - The first or only object to format

//Substring
//Returns a part of the string, beginning from the index specified as the argument. Substring also accepts a maximum length for the substring
String.Substring(beginAt);
String.Substring(beginAt, maximum);

//Replace
string newStr = oldStr.Replace("old","new");

//IndexOf
//Finds the first ocurrence of a string in a larger string
//Returns -1 if the string is not found
String.IndexOf(val, start, num)
val - string to search for
start - where to begin in string

//LastIndexOf
//Search from end of string

//Split
//Split is used to break delimited string into substrings
String.Split(Char[]);

//ToCharArray
//Places selected characteres in a string in a char array
String str = "AaBbCcDd";
//create array of 8 vowels
var chars = str.ToCharArray();
//create array of 'B' and 'C'
var chars = str.ToCharArray(2,2);
```

#### System.Text.StringBuilder

**_ Constructor_**

```csharp
StringBuilder sb = new StringBuilder();
StringBuilder sb = new StringBuilder(myString);
StringBuilder sb = new StringBuilder(myString, capacity);

myString - Initial value of StringBuilder object
capacity - Initial size of buffer
```

#### DateTime

**_ DateTime Constructor_**

```csharp

DateTime(year, month, day)
DateTime(year, month, day, hour, minute, second)

DateTime newYear = DateTime.Parse("1/1/2018"):
DateTime currentDate = DateTime.Now;
DateTime nextYear = DateTime.AddYears(1);
```

#### TimeSpan

**_ TimeSpan Constructor_**

```csharp

TimpeSpan(hour, minute, sec)

TimeSpan timeS = new TimeSpan(10, 14, 50);
TimeSpan timeS_Hours = TimeSpan.FromDays(3640);

```

#### Formatting Values

```csharp
Format item syntax: {index[,alignment][:format string]}
index - Specifies element in list of values to which format is applied
aligment - Indicates minimun width (in characters) to display value
format string - Contains the code which specififes the format of the displayed value
```

#### Numeric

```csharp
Format Name Pattern Value Result
C or c Currency {0:C2}, 1000.1 $ 1000.1 A currency value
D or d Decimal {0:D5}, 30 00030 Integer digits with optional negative sign
E or e Exponential {0,9:E2}, 120.2 1.20+E002 Exponential notation
F or f Fixed-point {0,9:F2}, 120.2 120.2 Integral and decimal digits with optional negative sign
G or g General {0,9:G2}, 120.2 120.2 The more compact of either fixed-point or scientific notation
N or n Number {0,9:N1}, 1300.5 1,300,5 Integral and decimal digits, group separators, and a decimal separator with optional negative sign
P or p Percent {0,9:P3}, .0903 9.03% Number multiplied by 100 and displayed with a percent symbol
R or r Round-trip {0,9:R}, 3.1416 3.1316 A string that can round-trip to an identical number
X or x Hexadecimal {0,9:X4}, 31 001f A hexadecimal string
```

#### C# compiler at the Command Line

```csharp
   csc File.cs -> Compiles File.cs producing File.exe
   csc -target:library File.cs -> Compiles File.cs producing File.dll
   csc -out:My.exe File.cs -> Compiles File.cs and creates My.exe
   csc -define:DEBUG -optimize -out:File2.exe _.cs -> Compiles all the C# files in the current directory with optimizations enabled and defines the DEBUG symbol. The output is File2.exe
   csc -target:library -out:File2.dll -warn:0 -nologo -debug _.cs -> Compiles all the C# files in the current directory producing a debug version of File2.dll. No logo and no warnings are displayed
   csc -target:library -out:Something.xyz \*.cs -> Compiles all the C# files in the current directory to Something.xyz (a DLL)
```

#### Compiler Options Listed

Option : Purpose

- **@** : Reads a response file for more options.
- **?** : Displays a usage message to stdout.
- **additionalfile** : Names additional files that don't directly affect code generation but may be used by analyzers for producing errors or warnings.
- **addmodule** : Links the specified modules into this assembly
- **analyzer** : Run the analyzers from this assembly (Short form: -a)
- **appconfig** : Specifies the location of app.config at assembly binding time.
- **baseaddress** Specifies the base address for the library to be built.
- **bugreport** : Creates a 'Bug Report' file. This file will be sent together with any crash information if it is used with errorreport prompt or errorreport:send.
- **checked** : Causes the compiler to generate overflow checks.
- **checksumalgorithm** : <alg> Specifies the algorithm for calculating the source file checksum stored in PDB. Supported values are: SHA1 (default) or SHA256.
- **codepage**: Specifies the codepage to use when opening source files.
- **debug** : Emits debugging information.
- **define** : Defines conditional compilation symbols.
- **delaysign** : Delay-signs the assembly by using only the public part of the strong name key.
- **deterministic** : Causes the compiler to output an assembly whose binary content is identical across compilations if inputs are identical.
- **doc**: Specifies an XML Documentation file to generate.
- **errorreport** : Specifies how to handle internal compiler errors: prompt, send, or none. The default is none.
- **filealign** : Specifies the alignment used for output file sections.
- **fullpaths** : Causes the compiler to generate fully qualified paths.
- **help** : Displays a usage message to stdout.
- **highentropyva** Specifies that high entropy ASLR is supported.
- **incremental** Enables incremental compilation [obsolete].
- **keycontainer** Specifies a strong name key container.
- **keyfile** Specifies a strong name key file.
- **langversion**:<string> Specify language version: Default, ISO-1, ISO-2, 3, 4, 5, 6, 7, 7.1, 7.2, 7.3, or Latest
- **lib** Specifies additional directories in which to search for references.
- **link** Makes COM type information in specified assemblies available to the project.
- **linkresource**: Links the specified resource to this assembly.
- **main**: Specifies the type that contains the entry point (ignore all other possible entry points).
- **moduleassemblyname**: Specifies an assembly whose non-public types a .netmodule can access.
- **modulename** :<string> Specify the name of the source module.
- **noconfig** : Instructs the compiler not to auto include CSC.RSP file.
- **nologo** : Suppresses compiler copyright message.
- **nostdlib** : Instructs the compiler not to reference standard library (mscorlib.dll).
- **nowarn** : Disables specific warning messages
- **nowin32manifest** : Instructs the compiler not to embed an application manifest in the executable file.
- **optimize** : Enables/disables optimizations.
- **out** : Specifies the output file name (default: base name of file with main class or first file).
- **parallel**[+|-] : Specifies whether to use concurrent build (+).
- **pathmap** : Specifies a mapping for source path names output by the compiler.
- **pdb** : Specifies the file name and location of the .pdb file.
- **platform** : Limits which platforms this code can run on: x86, Itanium, x64, anycpu, or anycpu32bitpreferred. The default is anycpu.
- **preferreduilang** : Specifies the language to be used for compiler output.
- **publicsign** : Apply a public key without signing the assembly, but set the bit in the assembly indicating the assembly is signed.
- **recurse** : Includes all files in the current directory and subdirectories according to the wildcard specifications.
- **reference** : References metadata from the specified assembly files.
- **refout** : Generate a reference assembly in addition to the primary assembly.
- **refonly** : Generate a reference assembly instead of a primary assembly.
- **resource** : Embeds the specified resource.
- **ruleset** : <file> Specify a ruleset file that disables specific diagnostics.
- **subsystemversion** : Specifies the minimum version of the subsystem that the executable file can use.
- **target** : Specifies the format of the output file by using one of four options:
  - **target** : appcontainerexe,
  - **target** : exe,
  - **target** : library,
  - **target** : module,
  - **target** : winexe,
  - **target** : winmdobj.
- **unsafe** : Allows unsafe code.
- **utf8output** : Outputs compiler messages in UTF-8 encoding.
- **warn** : Sets the warning level (0-4).
- **warnaserror** : Reports specific warnings as errors.
- **win32icon** : Uses this icon for the output.
- **win32manifest** : Specifies a custom win32 manifest file.
- **win32res** : Specifies the win32 resource file (.res).

#### Control flow statements

**_Switch_**

```csharp
switch (expression) {
//expression may be integer, string or enum
case expression:
//statements
break/ goto / return()

case ..
default
//statements
break/ goto / return()
}
```

**_If_**

```csharp

if (condition) {
//statements
} else {
//statements
}
```

### Loop

#### While

    while (condition) {body}

#### Do while

    do {body} while condition;

#### For

```csharp
    for (initializer; termination condition; iteration;) {
    //statements
    }
```

#### For each

```csharp
    foreach (type identifier in collection) {
    //statements
    }
```

### Class Definition

#### Class

```csharp
    public | protected | internal | private
    abstract | sealed | static

    class className [:class/interfaces inherited from]
```

#### Constructor

```csharp
    [access modifier] className (parameters) [:initializer]

    initializer -base calls constructor in base class.
    this calls constuctor within class.

    public class nameClass : Initializer {
    public className(dataType param1 , dataType param2, ...) : base(param1, param2)
    { constructor body }
    }
```

#### Method

```csharp
    [access modifier]
    static | virtual | override | new | sealed | abstract
    methodName (parameter list) { body }
```

```
    virtual – method can be overridden in subclass
    override – overrides virtual method in base class
    new – hides non-virtual method in base class
    sealed – prevents derived class from inheriting
    abstract – must be implemented by subclass

    Passing parameters:
        1. By default, parametres are passed by value
        2. Passing by reference: ref, in and out modifers

    To pass a parameter by reference with the intent of changing the value,
    use the ref, or out keyword. To pass by reference with the intent of
    avoiding copying but not changing the value, use the in modifier
```

#### Property

```csharp
    [modifier] <dataType> property name{
    public string BrandName
    {
    get { return brandName; }
    set { brandName = value; }
    }
    }
```

### Struct

#### Defining a structure

```csharp
    [attribute][modifier] struct name [:interfaces] { struct-body }
```

#### Class vs Structure

    -> Classes are reference types and structs are value types
    -> Structures do not support inheritance
    -> Structures cannot have default constructor

### Enum

#### Declaring enum variable

```csharp
    enum <enumName> {
    enumeration list
    };
```

```
    enumName - Specifies the enumeration type name
    enumeration list is a comma-separated list of identifiers

    //Each of the symbols in the enumeration list stands for an
    integer value, one greater than the symbol that precedes it.
```

### Delegates

A delegate is a reference type variable that holds the reference to a method. The reference can be changed at runtime.

#### Declaring delegates

Delegate declaration determines the methods that can be referenced by the delegate.

    delegate <return type> <delegate-name> <parameter list>

#### Instantiating delegates

When creating a delegate, the argument passed to the new expression is written similar to a method call, but without the arguments to the method

```csharp
    public delegate void printString(string s);
    printString ps1 = new printString(WriteToScreen);
    printString ps2 = new printString(WriteToFile);
```

### Events

#### Declaring events

To declare an event inside a class, first a delegate type for the event must be declared.

    public delegate string MyDelegate(string str);

The event itself is declared by using the event keyword

    event MyDelegate MyEvent;

#### Commonly used Control Events

Event Delegate

```csharp
    Click, MouseEnter, DoubleClick, MouseLeave EventHandler( object sender, EventArgs e)
    MouseDown, Mouseup, MouseMove MouseEventHandler(object sender, MouseEventArgs e)
    e.X, e.Y – x and y coordinates
    e.Button – MouseButton.Left, Middle, Right
    KeyUp, KeyDown KeyEventHandler(object sndr, KeyEventArgs e)
    e.Handled – Indicates whether event is handled.
    e.KeyCode – Keys enumeration, e.g., Keys.V
    e.Modifiers – Indicates if Alt, Ctrl, or Shift key.
    KeyPress KeyPressEventHandler(object sender, KeyPressEventArgs e)

```
