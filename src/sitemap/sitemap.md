---
title: "Site Map"
description: "This is the Site Map page"
layout: "layouts/layout-simple.njk"
eleventyExcludeFromCollections: true
---
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

Concept and application
It is generally accepted among software developers to reuse code as far as possible. As is known, this was not so easy for custom markup structures. Just think of the complex HTML (as well as CSS and script) conglomerate that was sometimes necessary to create custom UI controls; and how the multiple use of such custom elements on a page can lead to a completely opaque confusion if you are not very careful.

Web components aim to solve these problems. Consisting of three main technologies that can be used together to create different and versatile custom elements with self-contained functionality that can be reused as often as you want without fear of different code interfering or interfering:
 




### Specifications
<mark>Web components</mark> are based on four main specifications:

#### Custom Elements
The Custom Elements specification lays the foundation for designing and using new types of DOM elements.

#### Shadow DOM
The shadow DOM specification defines how to use encapsulated style and markup in web components.

#### ES Modules
The ES Modules specification defines the inclusion and reuse of JS documents in a standards based, modular, performant way.

#### HTML Template
The HTML template element specification defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime.


### How do I use a web component?
The components on this site provide new HTML elements that you can use in your web pages and web applications.

Using a custom element is as simple as importing it, and using the new tags in an HTML document. For example, to use the paper-button element:

<div class="codepencil">
<pre><code>

    <script type="module" src="node_modules/@polymer/paper-button/paper-button.js"></script>

    <paper-button raised class="indigo">raised</paper-button>

</code></pre>
</div>
<button>copy</button>

There are a number of ways to install custom elements. When you find an element you want to use, look at its README for the commands to install it. Most elements today can be installed with NPM. NPM also handles installing the components' dependencies. For more information on NPM, see npmjs.com.
For example, the paper-button overview describes the install process with npm:


## # Title
we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside

###  Title
we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.


## # Title 
###  Subitle 
<strong>strong</strong> <br>
<mark>mark</mark> <br>
<em>em</em> <br>
<i> i tag</i><br>
<b> b tag </b><br>
<a class="link" href="/">in this link</a><br> we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.




