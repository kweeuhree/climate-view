<h1>Climate View</h1>

<p>This repository contains code for a full stack application meant to provide an overview of of Earth's climate state as of 2024.</p>

<p>Users can create an account and leave comments once logged in. The appliation keeps track of days since the user joined.</p>

<h4>Stack:</h4>
<ul>
    <li><b><em>M</em></b>ongoDB - backend database solution</li>
    <li><b><em>E</em></b>xpress.js - backend framework that handles middleware calls</li>
    <li><b><em>R</em></b>eact.js - frontend library for creating a user interface</li>
    <li><b><em>N</em></b>ode.js - JavaScript runtime environment</li>
</ul>

<hr>

<h3>Backend</h3>
<p>APIs are created following best practices of REST.</p>
<p>Express simplifies creation of server-side logic and handles middleware calls. Express routers are looking for a request body params to simplify extraction of user or Comment ID:
<br><br>
<code>
router.param('id', async (req, res, next, id) => {<br>
&nbsp;&nbsp;try {<br>
&nbsp;&nbsp;const found = await User.findById(id);<br>
&nbsp;&nbsp;&nbsp;if (found) {<br>
&nbsp;&nbsp;//if user exists assign their id to userId<br>
&nbsp;&nbsp;&nbsp;req.userId = id;<br>
&nbsp;&nbsp;&nbsp;next(); // call next function<br>
&nbsp;&nbsp;} else { // if id doesn't exist send 404 status<br>
&nbsp;&nbsp;&nbsp;&nbsp;res.status(404).send('User not found');<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;} catch (error) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;res.status(500);<br>
&nbsp;&nbsp;}<br>
&nbsp;});<br>
</code></p>

<p>MongoDB is used to ensure persistance of user profiles and user comments. Full CRUD system is set up to allow users create, update and delete comments that are attache to the user ID.</p>
<p>Mongoose is used for an efficient data modeling.</p>


