<img src="http://thiercelin-loic.fr/inroom/assets/logo" width="125" />
<h1>About inRoom</h1>

<p>inRoom is a TypeScript library to manage session trafficin NodeJS. These packages are available in the Node
    Package
    Manager (NPM) registry.</p>
<h2>Installations</h2>
<p>Make sure to get stable version of NodeJS and NPM, or getthe <a
        src="https://nodejs.org/fr/download/package-manager">packages</a> of this ones. When you're ready, open your
    terminal and type the command bellow.</p>
<img src="http://thiercelin-loic.fr/inroom/assets/init"width="1000" />
<h2>Getting started</h2>
<p>This library must be used in <b>.ts</b> format. Importthe module of you want, and use theses <b>properties</b>
    and/or <b>methods</b>. (see <a
        src="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object">objects in
        JavaScripts</a>)</p>
<h3>Sessions</h3>
<img src="http://thiercelin-loic.fr/inroom/assets/sessions"width="400" />
<hr />
<h4>Properties :</h4>
<p>Sessions module have an array with users information,this array contains objects with five properties. Theses
    only
    accesible or assigned by the <i>'get'</i> and <i>'set'</i> method (see <b>methods</b> bellow).
</p>
<ul>
    <li>
        <p><b>Name</b> <i>string</i> : Takes a name of type <i>string</i>. This name must represented how the user
            should be called.</p>
    </li>
    <li><b>Location</b> <i>string</i> : This value of type <i>string</i>, represent the location of users. For
        exemple
        web adress '/root/shop', or reel and fake location like 'London, United Kingdom' or 'Pokemon Center'. It's
        helpful, if you want to keep the feeds of your users locations, for statistical plan or to find somebody in
        your
        app.
    </li>
    <li><b>Items</b> <i>string[]</i> : Take only in parameters, the type of <i>an array of string</i>. That must
        represented what users have. For exemple, if your users needs a cart in your web shop. Or, if your app work
        with
        tokens system.
    </li>
    <li>
        <p>
            <b>Time</b> <i>number</i> : Must take milliseconds represented by the user's connection time.
        </p>
    </li>
    <li>
        <p>
            <b>Score</b>, <b>Rated</b> and <b>Rank</b> <i>number</i> : In case of competive relation with others
            users,
            like games or/and comparisons. Scores can be of any lenght of you want, rated values evaluate scores by
            hundred, and influence his position in the rank. Rank position is represented by numbers, to be as
            simple
            and adapted as possible to the architecture of your project.
        </p>
    </li>
</ul>
<h4>Methods :</h4>
<ul>
    <li>
        <img src="http://thiercelin-loic.fr/inroom/assets/get" width="150" />
        <p>Return an array with users informations. (see <b>properties</b>, on the top-level)</p>
    </li>
    <li>
        <img src="http://thiercelin-loic.fr/inroom/assets/set" width="500" />
        <p>When called, this function pushes the username into a list of sessions with the current time. If this
            function is not called with the same username within fifteen minutes, those sessions automatically
            expire.
        </p>
    </li>
    <li>
        <img src="http://thiercelin-loic.fr/inroom/assets/drop" width="225" />
        <p>
            Take in parameters an username as a <i>'string'</i>. When called, this function drop the session of
            username
            given.
        </p>
    </li>
</ul>
