<h1>Climate View</h1>

<p>This repository contains code for a full stack application meant to provide an overview of of Earth's climate state as of 2024. The app is following an MVC(Model-View-Controller) architecture.</p>

<p>Users can create an account and leave comments once logged in. The application keeps track of days since the user joined.</p>

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
<p>Express simplifies creation of server-side logic and handles middleware calls. Express routers are looking for a request body params to simplify extraction of User or Comment ID:
<br>
<code>router.param('id', async (req, res, next, id) => {<br>
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
&nbsp;});<br></code></p>

<p>MongoDB is used to ensure persistance of user profiles and user comments. Full CRUD system is set up to allow users read, create, update and delete comments that are attached to their user ID.</p>
<p>Mongoose is used for an efficient data modeling.</p>
<p>User authorization is performed using a cookie parser, JWT and bcrypt.</p>

<hr>
<h3>Frontend</h3>
<p>React.js is used to create modular code with reusable components. Examples: ImageContainer, ImageSliderContainer, Header. Pages, as well as utils, are separated from components for maitenance purposes.</p>
<p>Animations, gifs, videos, and images are used throughout the application in order to provide better user experience.</p>
<p><b>Intro</b> component is using useEffect in order to fire off a timer that will trigger a soft appearrance of text. Onmount of the component, the timer will trigger dynamic style application, clean up function ensures proper memory management by clearing the timer:
<br>
<code>&nbsp;const [loaded, setLoaded] = useState(false);<br>
&nbsp;useEffect(() => {<br>
&nbsp;&nbsp;const timer = setTimeout(() => {<br>
&nbsp;&nbsp;setLoaded(true); // trigger new style<br>
&nbsp;}, 150); <br>
&nbsp;&nbsp;return () => clearTimeout(timer); <br>
&nbsp;}, []);
&nbsp;
<br><br>
className={`intro-text ${loaded ? 'fade-in' : ''}`} </code><br></p>
<p><b>ImageSliderContainer</b> is created with <code>react-compare-image</code> library to streamline the development process. Inside ImageSliderContainer hover effects are achieved thorugh state. Hovered state is initialized as false, state is watching for a mouse action, which triggers changes in state, and consequently produces a hover effect:
<br><code>const [isHovered, setIsHovered] = useState(false);</code>
<br>
<code> 
&nbsp;onMouseEnter={()=>setIsHovered(true)}<br>
&nbsp;onMouseLeave={()=>setIsHovered(false)}</code></p>

<p><b>Atmosphere</b> component is relying on useRef, useEffect and IntersectionObserver to track the component being scrolled into view, which consequently triggers animations within the component, clean up function ensures that we stop observing in order to prevent memory leaks:
<br>
<code>&nbsp;const [isInView, setIsInView] = useState(false);<br>
&nbsp;const imagesParentRef = useRef(null);<br>
&nbsp;useEffect(() => {<br>
&nbsp;&nbsp;const observer = new IntersectionObserver((entries) => {<br>
&nbsp;&nbsp;&nbsp;entries.forEach((entry) => {<br>
&nbsp;&nbsp; (entry.isIntersecting) {<br>
&nbsp;&nbsp;&nbsp;setIsInView(true);<br>
&nbsp;&nbsp;&nbsp;observer.unobserve(entry.target);<br>
&nbsp;&nbsp;}<br>
&nbsp;&nbsp;});<br>
&nbsp;});<br>
&nbsp;if (imagesParentRef.current) {<br>
&nbsp;&nbsp;observer.observe(imagesParentRef.current);<br>
&nbsp;}<br>
&nbsp;&nbsp;return () => { // clean up<br>
&nbsp;&nbsp;if (imagesParentRef.current) {<br>
&nbsp;&nbsp;observer.unobserve(imagesParentRef.current);<br>
&nbsp;&nbsp;}<br>
&nbsp;};<br>
&nbsp;}, []);<br>
<br>
className={`image-parent  ${isInView ? 'animate' : ''}`}</code></p>

<p><b>HistoryPage</b> component is using data fetched from open-meteo.com and displays cities that user picks. Application is interacting with the user via a form. State and Country parameters are made optional in order to let user pick how they want to search their location. Behind the hood, the app will capitalize user input in order to make state and country optional.
<br> Picked city is added to a comparison container, which is also happening thorugh state of currently picked city, as well as both cities. Once cities array stops being empty, Cities component will display city/cities:
<br>
<code>&nbsp;const [city, setCity] = useState({<br>
&nbsp;&nbsp;id: '',<br>
&nbsp;&nbsp;stateRegion: '',<br>
&nbsp;&nbsp;country: '',<br>
&nbsp;&nbsp;name: '',<br>
&nbsp;&nbsp;date: '',<br>
&nbsp;&nbsp;temp: ''<br>
&nbsp;})<br>
<br>
&nbsp;const [cities, setCities] = useState([]);
<br><br>
&nbsp;cities?.length > 0 ? ( <br>
&nbsp;&nbsp;< Cities cities={cities} removeCity={removeCity} />
)</code></p>
![Compare cities](https://github.com/kweeuhree/climate-view/blob/master/frontend/images/screenshots/history.png?raw=true)
