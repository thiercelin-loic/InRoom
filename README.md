<img src="https://thiercelin-loic.fr/inRoom/logo.png" width="125">

<h1>About inRoom</h1>

<p>inRoom is a TypeScript library to manage session traffic in NodeJS. These packages are available in the Node Package Manager (NPM) registry.</p>

<h2>Installations</h2>

<p>Make sure to get stable version of NodeJS and NPM, or get the <a src='https://nodejs.org/fr/download/package-manager'>packages</a> of this ones. When you're ready, open your terminal and type the command bellow.</p>
<img src="https://thiercelin-loic.fr/inRoom/cmd.png" width='350'>

<h2>Getting started</h2>

<p>This library must be used in <b>.ts</b> format. Import the module of you want, and use theses <b>properties</b> and/or <b>methods</b>. (see <a src=''https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object>objects in JavaScripts</a>)</p>
<h3>Sessions</h3>
<img 
    src="https://thiercelin-loic.fr/inRoom/importsessions.png" width='250'
>
<hr/>
<h4>Properties :</h4>
<p>Sessions module have an array with users information, this array contains objects with five properties. Theses only accesible by the <i>'get'</i> method (see <b>methods</b> bellow).
</p>
<ul>
<li>
<p>
The first property is named 'user', this value must take a user name of type <i>'string'</i>.
</li>
<li>
<p>
The secondary property is named 'time', this value must take milliseconds represented by the user's connection time. This value is of type <i>'number'</i>.
</p>
</li>

<li>
<p>
The third property is named 'score', this value must take the score of an user. In case of competive relation with others users, like games or/and comparisons. This value is of type <i>'number'</i>.
</p>
</li>

<li>
<p>
The fourth property is named 'location', this value must take the location where's the user, like last requested adress or/and real location. This value is of type <i>'string'</i>.
</li>
</p>

<li>
<p>
Last property is named 'items', this value must take one or several items like shopping cart or/and object represented in your application. This value is of type <i>'string'</i>.
</li>
</p>
</ul>

<h4>Methods :</h4>
<ul>
<li>
<img 
    src="https://thiercelin-loic.fr/inRoom/sessionsget.png" width='120'
>
<p>Return an array with users informations. (see <b>properties</b>, on the top-level)</p>

</li>

<li>
<img 
    src="https://thiercelin-loic.fr/inRoom/sessionsset.png" width='170'
>
<p>Takes a string username as a parameter.
When called, this function pushes the username into a list of sessions with the current time.
If this function is not called with the same username within fifteen minutes, those sessions automatically expire.
</p>
  
</li>

<li>
<img 
    src="https://thiercelin-loic.fr/inRoom/sessionsdrop.png" width='170'
>
<p>
Take in parameters an username as a <i>'string'</i>, when called, this function stop the session of username given. 
</p>
</li>

</ul>