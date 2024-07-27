<img src="https://thiercelin-loic.fr/inRoom/logo.png" width="125">

<h1>About inRoom</h1>

<p>inRoom is a TypeScript library to manage session traffic in NodeJS. These packages are available in the Node Package Manager (NPM) registry.</p>

<h2>Installations</h2>

<p>In your terminal, type the command below:</p>
<img src="https://thiercelin-loic.fr/inRoom/cmd.png" width='400'>

<h2>Getting started</h2>

<p>This library looks like this:</p>
<h3><i>Sessions</i></h3>
<ul>
<li>
<p><i>function get()</i></p>
<p>Returns an array with session information, this array contains objects with two properties.
The first property is named "user", this value must take a user name of type <i>'string'</i>.
The secondary property is named 'time', this value must take milliseconds represented by the user's connection time. This value is of type <i>'number'</i>.
</li>

<li>
<p><i>function start()</i></p>
<p>Takes a string username as a parameter.
When called, this function pushes the username into a list of sessions with the current time. (available with the <i>function get()</i>)
If this function is not called with the same username within fifteen minutes, those sessions automatically expire.
</p>
  
</li>

<li>
<p><i>function stop()</i></p>
<p>
Take in parameters an username as a <i>'string'</i>, when called, this function stop the session of username given. 
</p>
</li>

</ul>