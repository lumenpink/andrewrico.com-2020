---
title: "Build a web component"
description: "This is the Build a web component page"
keywords: ["javascript", "webComponents "]
date: 2019-12-03
update: 2019-12-03
layout: "/page/article.njk"
tags: [ "article" ]
PagePathToBanner: "radial-gradient(ellipse closest-side, #0f0e1680, #100e17), url(/_assets/media/images/abstract-4.jpg)"
preface: "As developers, we all know that reusing code as much as possible is a good idea. This has traditionally not been so easy for custom markup structures — think of the complex HTML (and associated style and script) you've sometimes had to write to render custom UI controls, and how using them multiple times can turn your page into a mess if you are not careful.

Web Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions."

---

<!-- Excerpt Start -->
Web components are a group of web technologies that make it possible to create custom, reusable HTML elements  whose functionality is encapsulated and thus completely separate from other code.
<!-- Excerpt End -->




## # What are WebComponents? 
Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.




#### Custom elements 
A set of JavaScript APIs that allow you to define custom elements and their behaviour, which can then be used as desired in your user interface.


With Custom Elements, web developers can create new HTML tags, beef-up existing HTML tags, or extend the components other developers have authored. The API is the foundation of web components. It brings a web standards-based way to create reusable components using nothing more than vanilla JS/HTML/CSS. The result is less code, modular code, and more reuse in our apps.


Custom elements provide a way for authors to build their own fully-featured DOM elements. Although authors could always use non-standard elements in their documents, with application-specific behavior added after the fact by scripting or similar, such elements have historically been non-conforming and not very functional. By defining a custom element, authors can inform the parser how to properly construct an element and how elements of that class should react to changes.

Custom elements are part of a larger effort to "rationalise the platform", by explaining existing platform features (like the elements of HTML) in terms of lower-level author-exposed extensibility points (like custom element definition). Although today there are many limitations on the capabilities of custom elements—both functionally and semantically—that prevent them from fully explaining the behaviors of HTML's existing elements, we hope to shrink this gap over time.


#### Shadow DOM 

Shadow DOM removes the brittleness of building web apps. The brittleness comes from the global nature of HTML, CSS, and JS. Over the years we've invented an exorbitant number of tools to circumvent the issues. For example, when you use a new HTML id/class, there's no telling if it will conflict with an existing name used by the page. Subtle bugs creep up, CSS specificity becomes a huge issue (!important all the things!), style selectors grow out of control, and performance can suffer. The list goes on.

Shadow DOM fixes CSS and DOM. It introduces scoped styles to the web platform. Without tools or naming conventions, you can bundle CSS with markup, hide implementation details, and author self-contained components in vanilla JavaScript.


A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.


An important aspect of web components is encapsulation — being able to keep the markup structure, style, and behavior hidden and separate from other code on the page so that different parts do not clash, and the code can be kept nice and clean. The Shadow DOM API is a key part of this, providing a way to attach a hidden separated DOM to an element. This article covers the basics of using the Shadow DOM.


#### HTML templates
Templates are useful on their own, but they work even better with web components. 
The template and slot elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.






## SOURCES:
* MDN



<a href="/blog"> << BACK TO BLOG</a>