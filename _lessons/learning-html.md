---
title: Make a web page for your campaign
layout: article
order: 1
summary: Make a basic web page with content in left and right columns
steps:
  start: /learn-to-code/examples/0-bgt-html.html
  end: /learn-to-code/examples/1-basic-html.html
---

* Will be replaced with the ToC
{:toc}

### Your campaign site

We're going to build on the skills you learned in the BlackGirlTech training,
and use them to make a page like the most basic sort of page we deal with
in activism / campaigning tech. So let's start with a basic html file that
has some contents, and a left-hand and right-hand side.

[Check it out here.](/learn-to-code/examples/1-basic-html.html) Here's a tip for
you, on that page, right click the page and select "view source". It'll show you
the html you're working with. You can just copy and paste the html from that
example to get started.

### Layout

You may have noticed in this page we've done something just a bit beyond what
was covered in the BGT tutorial: we have a left and right column! We did this
by adding a `style` attribute to the different sections (`div`s) that tells
the div to only take up half the screen, and to sit side by side nicely with
other elements, like this: `<div style="width: 50%; float: left"> ... </div>`.

If we change it to `style="width: 25%; float: left"` we can make 4 columns that
play nicely together.

It's a good idea to give yourself some spacing in between the left and right-hand
columns, so now let's add `margin-left: 5%; margin-right: 5;` to the style of
the first `div`... see what happens...

You get a little margin for the left-hand-side, but the right hand side gets
pushed down below. If you want your elements to line up together, the
`width` + `margin` need to add up to 100% (or less), so let's change the width
of the second `div` to 40%.

Looking good? You should now have `<div style="width: 50%; margin-left: 5%; margin-right: 5%; float: left">` and `<div style="width: 40%; float: left">`.

### Beginning to style

You may also have noticed a pretty little border on the `blockquote` element.
That's because we added `style="border-left: 5px solid whitesmoke; padding-left: 10px"`.
The `style` attribute is quite powerful. We can do a lot with it. [You can read more about HTML styles here.](https://www.w3schools.com/html/html_styles.asp) (looking for a better article.)

In the next section, we'll learn about stylesheets, where you can really get serious
about layout, typography, and even simple user interactions.
