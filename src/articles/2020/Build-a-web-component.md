---
title: "Build a web component"
description: "This is the Build a web component page"
keywords: ["javascript", "webComponents "]
date: 2019-12-03
layout: "/page/article.njk"
tags: [ "article" ]
PagePathToBanner: "radial-gradient(ellipse closest-side, #0f0e1680, #100e17), url(/_assets/media/images/abstract-4.jpg)"

---

<h4 class="preface">
Components are the building blocks of modern web applications. What best practices should you follow when building your own components so they can stand the test of time?.
</h4>

## # What are WebComponents? 

<!-- Excerpt Start -->

<strong>Web components are</strong> a group of web technologies that make it possible to create custom, reusable <strong>HTML elements</strong> whose functionality is encapsulated and thus <strong>completely separate from other code.</strong>

<!-- Excerpt End -->

Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs,letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.


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




