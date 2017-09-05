---
title: Learning HTML
layout: article
order: 1
---

* Will be replaced with the ToC
{:toc}

### Your Dev Environment

    <!doctype html>
    <html>
      this is an html document, with very little content
    </html>

Save this file on your computer somewhere. Then open it in a browser. Do you see a little bit of content in your web browser?

Great, then step one of _any_ web development project is complete: set up your development environment.

Next: Let's talk about what's actually going on.

### HTML Anatomy

The web pages you see are almost all built on the same foundation as in the example above. There's an HTML document, and at the beginning, we have this `<!doctype html>` to signal that what comes next is an HTML document – a web page!

    <!doctype html>
    <html>
      <head>
        <title>My Sample HTML Document</title>
      </head>
      <body>
        <p>First, this html document has a head with a title.</p>
        <p>Second, its body consists of:</p>
        <ul>
          <li>two paragraph elements</li>
          <li>one "ul" unordered list</li>
          <li>consisting of 5 elements</li>
          <li>followed by a link</li>
          <li>and an image</li>
        </ul>
        <p><a href="https://google.com">It's a link to google</a></p>
        <img src="https://placehold.it/600x200" alt="An intentionaly blank image">

      </body>
    </html>

_NB: This HTML document might look a lot like how your email content looks if you
get under the hood a bit, but remember that emails have their own rules which are
not covered in this lesson! You've been warned._

When you get into styling and layout, you're going to want to make best friends
with another element, `<div>...</div>`. Div is important because it's
essentially a blank canvass for divvying up sections of the page.

### Writing the Layout

We're going to create a left-hand side and a right-hand-side for our page, with
the main text chunk on the left and the image/image on the right. We're going to
wrap the main text section in a `div` for the left side, and wrap the image/link
in one for the right. So our HTML tree will look like this:

    - head
      - title
    - body
      - div
        - p
        - p
        - ul
          - li
          - li
          - li
          - li
          - li
      - div
        - p
          - a
        - img

And the Markup looks like this

    <!doctype html>
    <html>
      <head>
        <title>My Sample HTML Document</title>
      </head>
      <body>
        <div style="min-width: 50%; float: left">
          <p>First, this html document has a head with a title.</p>
          <p>Second, its body consists of:</p>
          <ul>
            <li>two paragraph elements</li>
            <li>one "ul" unordered list</li>
            <li>consisting of 5 elements</li>
            <li>followed by a link</li>
            <li>and an image</li>
          </ul>
        </div>
        <div style="min-width: 50%; float: left">
          <p><a href="https://google.com">It's a link to google</a></p>
          <img src="https://placehold.it/300x200" alt="An intentionaly blank image">
        </div>
      </body>
    </html>

create a left and right hand side. Here we have a `<div style="width: 50%; float: left">`
which is the magical spell for making things sit side by side.
