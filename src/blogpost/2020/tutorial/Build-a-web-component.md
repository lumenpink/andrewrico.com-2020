---
title: "Build a web component"
description: "This is the Build a web component page"
keywords: ["javascript", "webComponents "]
date: 2019-12-03
update: 2019-12-03
layout: "/page/blogpost.njk"
tags: [ "article", "tuts" ]
PagePathToBanner: "radial-gradient(ellipse closest-side, #0f0e1680, #100e17), url(/_assets/media/images/abstract-4.jpg)"
preface: "As developers, we all know that reusing code as much as possible is a good idea. This has traditionally not been so easy for custom markup structures — think of the complex HTML (and associated style and script) you've sometimes had to write to render custom UI controls, and how using them multiple times can turn your page into a mess if you are not careful.

Web Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions."
---

<!-- Excerpt Start -->
Web components are a group of web technologies that make it possible to create custom, reusable HTML elements  whose functionality is encapsulated and thus completely separate from other code.

<!-- Excerpt End -->

## # What are Web Components? 
Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

Web components are based on existing 3 web standards, custom elements, shadow DOM and HTML templates. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.

### Custom Elements 
A set of JavaScript APIs that allow you to define custom elements and their behaviour, which can then be used as desired in your user interface.

With Custom Elements, web developers can create new HTML tags, beef-up existing HTML tags, or extend the components other developers have authored. The API is the foundation of web components. It brings a web standards-based way to create reusable components using nothing more than vanilla JS/HTML/CSS. The result is less code, modular code, and more reuse in our apps.

Custom elements provide a way for authors to build their own fully-featured DOM elements. Although authors could always use non-standard elements in their documents, with application-specific behavior added after the fact by scripting or similar, such elements have historically been non-conforming and not very functional. By defining a custom element, authors can inform the parser how to properly construct an element and how elements of that class should react to changes.

Custom elements are part of a larger effort to "rationalise the platform", by explaining existing platform features (like the elements of HTML) in terms of lower-level author-exposed extensibility points (like custom element definition). Although today there are many limitations on the capabilities of custom elements—both functionally and semantically—that prevent them from fully explaining the behaviors of HTML's existing elements, we hope to shrink this gap over time.

### Shadow DOM 

Shadow DOM removes the brittleness of building web apps. The brittleness comes from the global nature of HTML, CSS, and JS. Over the years we've invented an exorbitant number of tools to circumvent the issues. For example, when you use a new HTML id/class, there's no telling if it will conflict with an existing name used by the page. Subtle bugs creep up, CSS specificity becomes a huge issue (!important all the things!), style selectors grow out of control, and performance can suffer. The list goes on.

Shadow DOM fixes CSS and DOM. It introduces scoped styles to the web platform. Without tools or naming conventions, you can bundle CSS with markup, hide implementation details, and author self-contained components in vanilla JavaScript.

A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.

An important aspect of web components is encapsulation — being able to keep the markup structure, style, and behavior hidden and separate from other code on the page so that different parts do not clash, and the code can be kept nice and clean. The Shadow DOM API is a key part of this, providing a way to attach a hidden separated DOM to an element. This article covers the basics of using the Shadow DOM.

### HTML Templates
Templates are useful on their own, but they work even better with web components. 
The template and slot elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.


## # Browser Support for Web Components in 2020 

<table>
  <tr>
    <th>Broser Support</th>
    <th>CROME</th>
    <th>SAFARI</th>
    <th>FIREFOX</th>
    <th>OPERA</th>
    <th>EDGE</th>
  </tr>
  <tr>
    <td>Custom Element API</td>
    <td><span class="stable">✅</span></td>
    <td><span class="stable">✅</span></td>
    <td><span class="stable">✅</span></td>
    <td><span class="stable">✅</span></td>
    <td><span class="stable">✅</span></td>
  </tr>
  <tr>
    <td>Shadow DOM API</td>
    <td><span class="stable">✅</span></td>
    <td><span class="stable">✅</span></td>
    <td><span class="stable">✅</span></td>
    <td><span class="stable">✅</span></td>
    <td><span class="pollyfill">❌</span></td>
  </tr>
  <tr>
    <td>HTML Templates</td>
    <td><span class="stable">✅</span></td>
    <td><span class="stable">✅</span></td>
    <td><span class="stable">✅</span></td>
    <td><span class="stable">✅</span></td>
    <td><span class="pollyfill">❌</span></td>
  </tr>
</table>

## #How to build a Web Component with vanilla Javascript?
This example shows one of the many diferent approach out there when creating web compoentns

The basic approach for implementing a web component generally looks something like this:
1. Create a class or a function in which you specify your web component functionality. If using a class, use the ECMAScript 2015 class syntax (see Classes for more information).
2. Register your new custom element using the CustomElementRegistry.define() method, passing it the element name to be defined, the class or function in which its functionality is specified, and optionally, what element it inherits from.
3. If required, attach a shadow DOM to the custom element using Element.attachShadow() method. Add child elements, event listeners, etc., to the shadow DOM using regular DOM methods.
4. If required, define an HTML template using templat and slot. Again use regular DOM methods to clone the template and attach it to your shadow DOM.
5. Use your custom element wherever you like on your page, just like you would any regular HTML element.

<span class="code-file">index.html</span>
<div class="codepencil">
<p class="code-lang">html</p>
<pre>
<code>

    <lead-title title="I'am a H1 tag and they call me main title"></lead-title>

</code>
</pre>
</div>
<button>copy</button>


<br>

### 1. Cloning the template
Cloning contents from a template element is more performant than using innerHTML because it avoids addtional HTML parse costs.
1.  Create custom tag template
2.  stylesheet template
3.  html template
4.  Conect both templates in a single template

<span class="code-file">seo-title.js</span>
<div class="codepencil">
<p class="code-lang">javascript</p>
<pre>
<code>

    const CustomSEOTitleTemplate = document.createElement("template");
    const CustomSEOTitleCSS = `:host {display: block;}`;
    const CustomSEOTitleHTML = `<slot></slot>`;
    CustomSEOTitleTemplate.innerHTML = `<style>`.concat(CustomSEOTitleCSS, `</style>`).concat(CustomSEOTitleHTML);
    
</code>
</pre>
</div>


### 2. Define and Extends
connectedCallback() fires when the element is inserted into the DOM. It's a good place to set the initial role, tabindex, internal state, and install event listeners.

<span class="code-file">seo-title.js</span>
<div class="codepencil">
<p class="code-lang">javascript</p>
<pre>
<code>

    const CustomSEOTitleTemplate = document.createElement("template");
    const CustomSEOTitleCSS = `:host {display: block;}`;
    const CustomSEOTitleHTML = `<slot></slot>`;
    CustomSEOTitleTemplate.innerHTML = `<style>`.concat(CustomSEOTitleCSS, `</style>`).concat(CustomSEOTitleHTML);
<span class="highligh-code">
customElements.define('seo-title',
    class extends HTMLElement {

        }
    );
</span>  
</code>
</pre>
</div>


### 3. The element's constructor. Alway call super first
connectedCallback() fires when the element is inserted into the DOM. It's a good place to set the initial role, tabindex, internal state, and install event listeners.

<span class="code-file">seo-title.js</span>
<div class="codepencil">
<p class="code-lang">javascript</p>
<pre>
<code>

    const SEOTitleCSS = `:host {display: block;color:red;}`;
    const SEOTitleHTML = `<h1><slot></slot></h1>`;
    const SEOTitleTemplate = document.createElement("template");
    SEOTitleTemplate.innerHTML = `<style>`.concat(SEOTitleCSS, `</style>`).concat(SEOTitleHTML);

    customElements.define('seo-title',
        class extends HTMLElement {
<span class="highligh-code">
        constructor() {
                super();
            }
</span>  
    }
);

</code>
</pre>
</div>

### 4. Open Shadow DOM
connectedCallback() fires when the element is inserted into the DOM. It's a good place to set the initial role, tabindex, internal state, and install event listeners.

<span class="code-file">seo-title.js</span>
<div class="codepencil">
<p class="code-lang">javascript</p>
<pre>
<code>

    const SEOTitleCSS = `:host {display: block;color:red;}`;
    const SEOTitleHTML = `<h1><slot></slot></h1>`;
    const SEOTitleTemplate = document.createElement("template");
    SEOTitleTemplate.innerHTML = `<style>`.concat(SEOTitleCSS, `</style>`).concat(SEOTitleHTML);

    customElements.define('seo-title',
        class extends HTMLElement {

            constructor() {
                super();
<span class="highligh-code">
            const shadowRoot = this.attachShadow({
                mode: "open"
            });
</span>
        }
    }
);
    
</code>
</pre>
</div>

### 5. Properties and attribues

<span class="code-file">seo-title.js</span>
<div class="codepencil">
<p class="code-lang">javascript</p>
<pre>
<code>

    const SEOTitleCSS = `:host {display: block;color:red;}`;
    const SEOTitleHTML = `<h1><slot></slot></h1>`;
    const SEOTitleTemplate = document.createElement("template");
    SEOTitleTemplate.innerHTML = `<style>`.concat(SEOTitleCSS, `</style>`).concat(SEOTitleHTML);

    customElements.define('seo-title',
        class extends HTMLElement {

            constructor() {
                super();

                const shadowRoot = this.attachShadow({
                    mode: "open"
                });
<span class="highligh-code">
            this.textContent = this.getAttribute('text');
    </span>
        }
    }
);
    
</code>
</pre>
</div>
<button>copy</button>

### 6. Return the cloned temnplate

<span class="code-file">seo-title.js</span>
<div class="codepencil">
<p class="code-lang">javascript</p>
<pre>
<code>

    const SEOTitleCSS = `:host {display: block;color:red;}`;
    const SEOTitleHTML = `<h1><slot></slot></h1>`;
    const SEOTitleTemplate = document.createElement("template");
    SEOTitleTemplate.innerHTML = `<style>`.concat(SEOTitleCSS, `</style>`).concat(SEOTitleHTML);

    customElements.define('seo-title',
        class extends HTMLElement {

            constructor() {
                super();

                const shadowRoot = this.attachShadow({
                    mode: "open"
                });

                this.textContent = this.getAttribute('text');
<span class="highligh-code">
            shadowRoot.appendChild(SEOTitleTemplate.content.cloneNode(!0));
            return this;
</span>
        }
    }
);
</code>
</pre>
</div>
<button>copy</button>

<br>



### 7. Displaying Our web Component in the DOM 
<span class="code-file">index.html</span>
<div class="codepencil">
<p class="code-lang">html</p>
<pre>
<code>

    <seo-title text="I'am a H1 tag and they call me main title"></lead-title>
<span class="highligh-code">

    <script src="seo-title.js"></script>
</span>


</code>
</pre>
</div>
<button>copy</button>

###  LIVE DEMO 


<p class="codepen" data-height="500" data-theme-id="default" data-default-tab="js,result" data-user="andrewrico" data-slug-hash="abzLLmq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Web Component API with Vanilla JS">
  <span>See the Pen <a href="https://codepen.io/andrewrico/pen/abzLLmq">
  Web Component API with Vanilla JS</a> by andrew rico  (<a href="https://codepen.io/andrewrico">@andrewrico</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

##  SOURCES:


<div class="article-sources">

[webcomponents.org](https://www.webcomponents.org/introduction)

[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

[developers.google.com](https://developers.google.com/web/fundamentals/web-components)
</div>








