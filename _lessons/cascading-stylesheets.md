---
title: Cascading Stylesheets
order: 2
layout: article
summary: Styling and layout with CSS
ref:
  css_selectors: https://www.w3schools.com/cssref/css_selectors.asp
  pseudoselectors:
  colors:
steps:
  start: /learn-to-code/examples/1-basic-html.html
  end: /learn-to-code/examples/2-css.html

---

* Will be replaced with the ToC
{:toc}

## Cascading Stylesheets

In the previous lesson, you created a web page with a right and left-hand side.
Now, things are about to get excited. We're going to take our layouts and styles
_out_ of the HTML and put them into "cascading stylesheets" or CSS.

We do this by adding `class="my-stylish-class"` to the html, and using CSS to say, "for everything styles". So here, take your html from the last lesson and add this to the head:

```html
<style>
  .left-side {
    width: 50%;
    margin-left: 5%;
    margin-right: 5%;
    float: left;
  }
  .right-side {
    width: 40%;
    float: left;
  }
</style>
```

And then take the divs and change them to say `<div class="left-side">`
and `<div class="right-side">`. You'll notice the classes from the HTML match
with the rules in the `style` block. This text `.left-side` is called a _Selector_, finding all the elements on the page with the corresponding class. [You can read more about CSS selectors here]({{ page.css_selectors }}). (Looking for better intro article)

Now let's do the same thing with your `blockquote` element using the
selector `blockquote` and the current style rules.
(Pausing here... questions? Get in touch!)

### Setting nicer styles

Let's set some sensible defaults by adding rules for the `body` element. This is
going to affect every element on the page, so it's useful for things like fonts,
typography, and so on.

```css
body {
  font-family: sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin: auto;
}
```

_NB: If the `margin: auto;` is a bit confusing to you, you're not alone.
It's used to set the margins equal on both left and right, which has the effect
of centering it within its container element
(which in this case is the whole browser window)._

### Pretty buttons

Everyone loves a nice button, right? Let's add some styles to our call-to-action
link to make it look nice and inviting:

```css
.button {
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 24px;
  width: 300px;
  background-color: orange;
  text-decoration: none;
  color: white;
}
```

(You can also just do what I do, and google "pretty buttons css styles".)

Important to note: this "button" is actually just a link
with the class "button". There is such thing as a `<button>` element and it has
some special properties that will become important later, when we get to forms.
Using an `<a>` with a special class like "button" or "btn" is a common practice.

### The :hover state

Fun trick:

To improve conversions and make the intent of our call-to-action more clear,
we're going to apply some interactive styling to the button.

```css
.button:hover {
  background-color: red;
}
```

Now when people hover over your button, they'll see a different background color. This `:hover` state is called a "pseudoselector". [read more]({{ ref.pseudoselector }})

### Implement your brand

Here's some more CSS you can add to the end of the `style` block. Feel free to play with
these styles. Check out other "native css colors", or "browser fonts", and other
variations to make the style your own (or try to approximate your organisation's branding).

If you want to emulate a color exactly, find it on the web and use "inspect element"
to grab the exact color value. The `color` property accepts keywords like "red" and "teal"
but it also accepts hex values (e.g. `color: #444444`) or RGB values like `color: rgb(200, 200, 200)`.

Bonus! For opacity/transparency, try `rgba(200, 200, 200, 0.5)`. Try moving the numbers up and down
to orient yourself for how these work. [read more]({{ ref.colors }})

### Add a header and footer

Now that we have this dedicated space, this CSS block (the `style` element and its contents), to organise layout and branding for the entire page, we can start to add some more structure and content for the user, without making
the actual HTML markup complex and ugly.

Go ahead and add a `header` and a `footer`, inside the `body`. (`head` and `body` both have a special status. Other elements that represent the contents of the page – like paragraphs, images, and `div`s – go inside the body.) The `header` and `footer` elements are basically
just fancy `div`s, meaning they have no inherent style attributes or special properties;
they're just empty containers you can use to attach CSS rules and indicate page structure
to screen readers and search engines. << read more about semantic markup helping accessibility >>

So add this as a header `<header>My neato organisation</header>` above the left-side div, and add this footer below the right-side div `<footer> Copyright &copy; Unlicensed.</footer>`.

And here is the CSS to make them look goooood.

```css
header, footer {
  color: white;
  padding: 20px;
  clear: both;
}
header {
  background-color: darkcyan;
}
footer {
  background-color: gray;
}
```

We'll also style the `blockquote`

```css
blockquote {
  border-left: 5px solid whitesmoke;
  padding-left: 10px;
  margin-left: 0;
  font-style: italic;
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
}
```

There! I'd say this page looks pretty good. You should have something that looks like this: [{{ page.example }}]({{ page.example }})
