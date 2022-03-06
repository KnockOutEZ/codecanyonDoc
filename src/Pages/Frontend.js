const Frontend = () => {
    return ( 
        <div>
            <h2 className="text-center my-10">Frontend (Alumni Website)</h2>

            <div>
            <h4 id="ho1me">a. Home</h4>
            <p>Welcome to the Venus Home page. The Home page will direct you to all the important
sections of the website. On the top left is the institution’s contact number, while on the top
right is your login option. Volunteers can also sign up on this page by submitting the
required information. There is an About Us section on the Home page. Additionally, you can
see the most popular Stories and upcoming Events on this page. You can also see the most
recent pictures added to the Gallery as well as the thumbnails of some of our Alumni
members’ profiles which you can view after you have created an Alumnus account.</p>

<br />

<h4 id="lo1gin">b. Login</h4>
<p>If you’ve clicked on Login, from the home page, you will be directed to the Login or Register
page. If you have not yet registered as an Alumnus, here you can create an account by
submitting the necessary information and checking the box that declares you understand
all terms and conditions. After you’ve created an account, your profile will be reviewed and
accepted by the admin, upon which you will receive a password through email.</p>
<br />
<p>On the left of the page, you can log in either as a Volunteer or as an Alumnus with your
provided email address and the password that you have received through email.</p>

<br />
<h4 id="al1umni">c. Alumni</h4>
<p>Once you have logged in with your email and password as an Alumnus, you will be directed
to your profile, where you can view and edit details by clicking on Edit Profile. You can also
add links to your Facebook, Twitter or LinkedIn page so more people can connect with you.
Now that you are logged in, if you click on the Alumni option on the top of the page, you will
see a new page with the list of all existing Alumni profiles. You can click on any of the
profiles to view details and to connect with the members. It is to be noted that only a
registered Alumnus can view the profiles of other Alumni members.</p>
<br />

<h4 id="ch1atroom">d. Chat Room</h4>
<p>Chat room is sort of like a hangout place for all the alumni. Only alumni have access to this
chat room. After a successful login an alumnus can chat with batchmates or fellow alumni.
There is no module in the admin panel for this. It only exists on the alumni website. After the
login alumnus chooses to visit this page, he/she will see a dropdown selection of different
batches or All. After selecting and submitting alumni will see all alumni in that particular
batch and all alumni depending on the selection. Then they will be able to chat among
themselves one on one</p>
<br />
<h4 id="do1nation">e. Donation</h4>
<p>This is a new feature that has been introduced. On the alumni website after a successful
login an alumnus can make a donation to the alumni association fund on some predefined
causes. It’s more like a donation request. The request will be visible in the admin panel and
depending on the status of the donation made, Admin have the power to make the donation
valid or not.</p>
<br />
<h4 id="ev1ents">f. Events</h4>
<p>Next, if you click on the Events page, you will find a list of all the upcoming events with their
respective dates. Click on any event and you will be directed to the event’s respective page
with event details, time, location, event hashtag, and a map leading to the location. At the
bottom of the page you can also RSVP.</p>
<br />
<h4 id="st1ories">g. Stories</h4>
<p>After you click on the Stories page, you will find Stories written by Alumni members, with
the most recently published appearing at the top. On the left side of your Events page is
your Archive, which is a list of all published stories, organized chronologically. You can click
on any story to read the full article. At the bottom of each story, there is a comment section.
You can leave a comment that will be published upon gaining approval of the admin.</p>
<br />

<h4 id="ga1llery">h. Gallery</h4>
<p>You can go to the Gallery page to view photographs of events that have been organized
into separate albums. You can click on any image to enlarge it.</p>
<br />
<h4 id="vo1lunteers">i. Volunteers</h4>
<p>Volunteers, after signing up on the Homepage, will receive a password via email after being
approved by the Admin. Once they have logged in as a Volunteer, they will be directed to
their account, where they can view and edit their personal information. They can change
their password after providing their current password. They can also view the Events that
they have been assigned to by the admin.
<br /><br />
A volunteer can view all the pages except Alumni profiles. A volunteer also cannot
comment on stories or RSVP to any event.</p>
<br />

<h4 id="no1ticeboard">j. Notice Board</h4>
<p>The notice board is accessible to everybody to inform them of important updates</p>
<br />
<h4 id="co1ntactus">k. Contact Us</h4>
<p>Go to the Contact Us page to find all contact details. On the left, you will see the address of
the institution, while on the right there is a map to help you find the location of the
institution. At the bottom of the page, you will see that you have the option of leaving a
message for the admin. Just type in your name, email address and intended message in the
appropriate boxes and press Send a Message.</p>
<br />
            </div>
        </div>
     );
}
 
export default Frontend;