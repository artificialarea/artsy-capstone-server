# Capstone: Artsy (API)
'Artsy' is an application in which sharing art with your friends and followers is easier than ever. Each user has their own profile containing a timeline of everything they have posted, liked, shared and specific collections they’ve created. They also have their own dashboard feed which shows all of the art posted by the people they follow in chronological order. We want the user to interact with posts by commenting, liking, and sharing!

**Designed and Built by: <a href="https://github.com/bateman001" target="_blank">Michaela Bateman</a>, <a href="https://github.com/jerradm85" target="_blank">Jerrad Moon</a>, <a href="https://github.com/jcochran206" target="_blank">Jonathan Cochran</a>, <a href="https://github.com/artificialarea" target="_blank">Sacha Sedriks</a>**



<br />

## 1. Working Prototype
You can access a working prototype of the React app at: **https://artsy1.vercel.app**

API Hosted at: https://serene-brook-48988.herokuapp.com

Corresponding clientside React.js repo at: https://github.com/jcochran206/artsy-capstone-client




<br />

## 2. Technology
* **Front-End:** HTML5, CSS3, JavaScript ES6, React
* **Back-End:** Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres, and Cloudinary API (for image storage)
* **Development Environment:** Vercel, Heroku, DBeaver



<br />

## 3. Functionality & Views
<details><summary><b>CLICK</b> to expand to view screenshots</summary>

<br />
<br />



**Landing Page** `/` Introduction for the unsigned-in user

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/landing_page.png" alt="landing page" width="300"/>

<br />
<br />
<br />



**Login** `/login` Demo account available with **`demo`** and **`Passw0rd`**

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/login.png" alt="login" width="300"/>

<br />
<br />
<br />



**Register** `/login`

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/register.png" alt="register" width="300"/>

<br />
<br />
<br />



**Explore Feed** `/feed/explore` Displays all posts from across the community

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/feed_explore.png" alt="explore feed" width="300"/>

<br />
<br />
<br />



**"Home" Feed** `/feed/home` Displays posts by people that the user explicitly follows

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/feed_home.png" alt="home feed" width="300"/>

<br />
<br />
<br />




**User Comments** Touching the comment icon displays all comments associated with a post and the ability to add comments.

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/feed_home_comments.png" alt="comments" width="300"/>

<br />
<br />
<br />



**Profile: posts (default)** `/profile/:username` User's profile features all their posts, as well as sub-nav to view users they are following and their followers.

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/profile_posts.png" alt="profile posts" width="300"/>

<br />
<br />
<br />



**Profile: followers** `/profile/:username`

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/profile_following.png" alt="profile followers" width="300"/>

<br />
<br />
<br />


**Add Post** `/upload` & **Edit Post** `/edit/:postId`

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/post_add.png" alt="profile followers" width="300"/>

<br />
<br />
<br />

</details>


<br />

## 4. Wireframes & User Flows
<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/suite_of_views.png" alt="suite of views" width="600"/>

<br />

See: **['Greybox' HTML Wireframes](https://jcochran206.github.io/artsy-capstone-client/greybox/)**

See: **[User Flows](https://github.com/jcochran206/artsy-capstone-client/blob/main/docs/user_flows.pdf)**



<br />

## 5. Front-end Structure _ React Components Map

_Components are stateless unless otherwise noted as `useState`._

* __Index.js__ 
    * __App.js__ _`useState`_
        * __Nav.js__
        * __Home.js__ 
            * __LandingPage.js__
        * __SignIn.js__
            * __Login.js__ _`useState`_
            * __Register.js__ _`useState`_
        * __Feed.js__ _`useState`_ 
        * __SoloPost.js__ _`useState`_
        * __UploadPost.js__ _`useState`_
        * __EditPost.js__ _`useState`_
        * __EditPost.js__ _`useState`_
        * __Profile.js__ _`useState`_
            * __ProfileFeed.js__ _`useState`_
               * __Post.js__ _`useState`_
                  * __Comments.js__ _`useState`_
            * __Followers.js__ _`useState`_
        * __Footer.js__


<br />

## 6. Back-end Structure - Business Objects (to do later)
* (Example) Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)


<br />

## 7. API Documentation (to do later)
API Documentation details:


* **`POST`**
  * **`/api/posts`** create new post
  
* **`GET`** 
  * **`/api/posts`** get all posts
  
* **`PUT`**
  * **`/api/posts/:postId`** update post
  
* **`DELETE`**
  * **`/api/posts/:postId`** delete post



<br />

## Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* Personalized avatar image for profile
* Liking a post (only to save it to your profile, not public)
* Re-posting someone else's post
* Pagnination of posts in a feed via an "infinity scroll" mechanic
* Deletion of images stored in the Cloudinary database thru our server
* More compelling non-signed experience, especially on the landing page

<br />

## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local React scripts
* To install the react project ===> `npm install`
* To run react (on port 3000) ===> `npm start`
* To run tests ===> `npm run test`

### Local Node scripts
* To install the node project ===> `npm install`
* To migrate the database ===> `npm run migrate -- 1`
* To run Node server (on port 8000) ===> `npm run dev`
* To run tests ===> `npm run test`