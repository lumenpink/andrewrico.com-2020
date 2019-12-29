---
title: "Site Map"
description: "This is the Site Map page"
layout: "layouts/layout-simple.njk"
eleventyExcludeFromCollections: true
---








# What are web components?


#### Custom elements 
A set of JavaScript APIs that allow you to define custom elements and their behaviour, which can then be used as desired in your user interface.

#### Shadow DOM 
A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.

#### HTML templates
The template and slot elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.








# What are web components?
## webcomponents.org
Web Components are a set of different technologies that allow you to build reusable, encapsulated and interoperable HTML elements, that can be used in web applications. Features, built on the Web Component standards, can be used with (or without) any JavaScript library or framework (i.e. Angular, React and Vue) and will work across all modern browsers.

Web Components are based on four core technologies:
Custom Elements;
HTML Templates;
Shadow DOM;
ES Modules.

## Medium blog
Web components are custom made tags which extend HTML’s capabilities. It allows you to write HTML code like:
.my-tooltip. direction="left"Message .my-tooltip.
Custom elements like these allow you to encapsulate logic and UI into one tag which we can then reuse in the same project as well as other projects with or without any other framework.
Encapsulation helps to scope the element in its own environment, makes it easier to maintain and allows separation of concerns.
Throughout this post, I will use custom elements and web components interchangeably.
The feature of reusability of web components can also be leveraged to make your own UI component library similar to what the team at Ionic framework did with their recent release of Ionic 4. Now Ionic is a collection of styled web components compiled using their Stencil compiler which you can use with any framework or standalone. This hence allows you to create your own brand identity.

## ultimatecourses.com
Web Components are a set of different technologies that allow you to build reusable, encapsulated and interoperable HTML elements, that can be used in web applications. Features, built on the Web Component standards, can be used with (or without) any JavaScript library or framework (i.e. Angular, React and Vue) and will work across all modern browsers.
Web Components are based on four core technologies:

## csstricks.com
Web Components consist of three separate technologies that are used together:

Custom Elements. Quite simply, these are fully-valid HTML elements with custom templates, behaviors and tag names (e.g. one-dialog) made with a set of JavaScript APIs. Custom Elements are defined in the HTML Living Standard specification.
Shadow DOM. Capable of isolating CSS and JavaScript, almost like an iframe. This is defined in the Living Standard DOM specification.
HTML templates. User-defined templates in HTML that aren’t rendered until called upon. The template tag is defined in the HTML Living Standard specification.
These are what make up the Web Components specification.

HTML Modules is likely to be the fourth technology in the stack, but it has yet to be implemented in any of the big four browsers. The Chrome team has announced it an intent to implement them in a future release.

Web Components are generally available in all of the major browsers with the exception of Microsoft Edge and Internet Explorer 11, but polyfills exist to fill in those gaps.

Referring to any of these as Web Components is technically accurate because the term itself is a bit overloaded. As a result, each of the technologies can be used independently or combined with any of the others. In other words, they are not mutually exclusive.

Let’s take a quick look at each of those first three. We’ll dive deeper into them in other articles in this series.

## MDN
Web components are a group of web technologies that make it possible to create custom, reusable HTML elements whose functionality is encapsulated and thus completely separate from other code.

### Concept and application
It is generally accepted among software developers to reuse code as far as possible. As is known, this was not so easy for custom markup structures. Just think of the complex HTML (as well as CSS and script) conglomerate that was sometimes necessary to create custom UI controls; and how the multiple use of such custom elements on a page can lead to a completely opaque confusion if you are not very careful.

Web components aim to solve these problems. Consisting of three main technologies that can be used together to create different and versatile custom elements with self-contained functionality that can be reused as often as you want without fear of different code interfering or interfering:
 
<div aria-label="Codebox Component to display actual code" class="codepencil">
<pre><code>

    <script type="module" src="node_modules/@polymer/paper-button/paper-button.js"></script>

    <paper-button raised class="indigo">raised</paper-button>

</code></pre>
</div>
<button>copy</button>



