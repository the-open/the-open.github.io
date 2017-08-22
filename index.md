---
layout: base
---

<div class="card mb-5">
  <h3 id="organising-tools" class="card-header">Organising Tools</h3>
  <div class="card-body">
    <p class="card-text">Organising tools maintained within the OPEN network</p>
    <ul class="list-group list-group-flush">
      {% for tool in site.data.tools %}
      <li class="list-group-item">
        <h4 id="{{ tool.slug }}">{{ tool.name }}</h4>
        <p>{{ tool.description }}</p>

        <a href="/{{ tool.slug }}/" class="btn btn-primary">Take a look</a>
        <a href="{{ tool.docs }}" class="btn btn-info">User guides</a>
        <a href="{{ tool.devs }}" class="btn btn-light">For developers</a>
      </li>
      {% endfor %}
    </ul>
  </div>
</div>


<div class="card mb-5">
  <h3 id="networking-hubs" class="card-header">Networking Hubs</h3>
  <div class="card-body">
    <p class="card-text">
      The digital spaces where the OPEN network communicates
      and collaborates
    </p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        OPEN-Wide.net digital portal and listservs: <a href="https://open-wide.net/">log in</a> or <a href="https://open-wide.net/apply">sign up</a>
      </li>
      <li class="list-group-item">
        Network-wide Slack team: <a href="https://open-wide.slack.com/signup">open-wide.slack.com</a>
      </li>
      <li class="list-group-item">
        The <a href="https://www.facebook.com/groups/openwidegroup/">Facebook group</a>
      </li>
    </ul>
  </div>
</div>

<div class="card mb-5">
  <h3 id="developer-resources" class="card-header">OPEN Developer Resources</h3>
  <div class="card-body">
    <p class="card-text"> </p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <a href="https://open-and-friends.slack.com/">OPEN & Friends Slack team</a>
         is a slack team for techies in and around the OPEN network.
      </li>
      <li class="list-group-item">
        <a href="http://the-open.github.io/open-and-friends/">
         the-open.github.io/open-and-friends</a> is a list of developers and
         OPEN source projects in and around the network.
      </li>
    </ul>
  </div>
</div>


<div class="card mb-5">
  <h3 id="learn-to-code" class="card-header">Learn To Code (From Scratch)</h3>
  <div class="card-body">
    <p class="card-text"><a class="btn btn-primary" href="/learn-to-code/">Get Started</a></p>
  </div>
</div>