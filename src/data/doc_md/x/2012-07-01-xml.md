---
layout: more
title: XML Cheat Sheet
updated: 2023-12-27
---

<div class="content content-400">
    <div class="board board-326">
        <h2 class="board-title">Resource</h2>
        <div class="board-card">
            <h3 class="board-card-title">Online</h3>
            <ul>
                <li><a href="http://www.w3.org/XML/">Official Website</a></li>
                <li><a href="http://en.wikipedia.org/wiki/XML">Wikipedia XML</a></li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Download</h3>
            <ul>
                <li><a href="http://www.xml.su/">XML in one page</a></li>
                <li><a href="http://www.mulberrytech.com/quickref/XMLquickref.pdf">XML 1.0 Syntax Quick Reference [.pdf]</a></li>
                <li><a href="/static/cs/XMLquickref.pdf">XML 1.0 Syntax Quick Reference [backup]</a></li>
                <li><a href="http://refcardz.dzone.com/refcardz/using-xml-java">Using XML in Java [.pdf]</a></li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Related</h3>
            <ul>
                <li><a href="/feed/" title="Feed Cheat Sheet">Feed</a></li>
                <li><a href="/mathml" title="MathML Cheat Sheet">MathML</a></li>
                <li><a href="/voicexml" title="VoiceXML Cheat Sheet">VoiceXML</a></li>
                <li><a href="/xhtml" title="XHTML Cheat Sheet">XHTML</a></li>
                <li><a href="/xml-schema/" title="XML Schema Cheat Sheet">XML Schema</a></li>
                <li><a href="/xpath" title="XPath Cheat Sheet">XPath</a></li>
                <li><a href="/xsl" title="XSL Cheat Sheet">XSL</a></li>
                <li><a href="/xslt" title="XSLT Cheat Sheet">XSLT</a></li>
            </ul>
        </div>
    </div>
</div>

# XML Cheat Sheet (v2)content

# What is XML

XML stands for eXtensible Markup Language, XML was designed to store and transport data. XML is often used for distributing data over the Internet(especial in web development).

# Then how can XML store data

XML uses a DTD to describe the data.

# The relation with HTML

- XML: is used to store or transport data.
  So the XML is a **Complement** to HTML.
- HTML: is used to format and display the same data.

XML does not carry any information about how to be displayed. The same XML data can be used in many different presentation scenarios.
Because of this, with XML, there is a full separation between data and presentation.

# What is XML Schema/DTD

The purpose of a DTD is to define the structure of an XML document. It defines the structure with a list of legal elements:

# When Not to Use a XML DTD/Sschema

XML does not require a DTD/Schema.

When you are experimenting with XML, or when you are working with small XML files, creating DTDs may be a waste of time.

If you develop applications, wait until the specification is stable before you add a document definition. Otherwise, your software might stop working because of validation errors.

# XML Syntax

The XML language has no predefined tags, but the syntax is rather logic and easy to learn. XML documents must contain one root element that is the parent of all other elements.

```
<bookstore>
  <book category="children">
    <title>Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
  <book category="web">
    <title>Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>
```

1. XML Tags are Case Sensitive
2. All XML Elements Must Have a Closeing Tag

```
<p>This is a paragraph.</p>
<br />  <!-- This is a self closing -->
```

3. XML Attribute Values Must Always be Quoted
4. Pay attention to the name rules.

# Reference

1. (W3School) [https://www.w3schools.com/xml/]
2. [cheat sheet in German](https://www.i-d-e.de/wp-content/uploads/2015/02/ide-xml-kurzreferenz.pdf)
3. [cheat sheet in English](http://www.xml.su/)
