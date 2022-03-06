const Backend = () => {
    return ( 
        <div>
            <h2 className="text-center my-10">Backend (Admin Panel)</h2>

            <div>
            <h4 id="dashboard">a. Dashboard</h4>
            <p>After logging into the Admin panel with User ID and password you will be taken to the
Dashboard. Here you can see Total Alumni, Total Slides, Total Stories, Total Events, Total
Messages, Total Volunteers, Total Notices, and Total Albums. You can click on any one of
these to view in more detail.</p><br/>
<p>On the top right corner, you can click on the Admin icon and you can directly go to Inbox,
Website Settings, Admin Settings or you can Log Out. On the right side of the page you
have your Navigation panel.</p>

<br />

<h4 id="alumnus">b. Alumnus</h4>
<p>If you click on Alumnus on the Navigation panel, you can choose Add Alumnus or Alumni.
The Add Alumnus page lets the Admin add new Alumnus members by filling in the
necessary details and then clicking on Add. The Alumni page contains the lists of all existing
Alumni members as well as those Alumni who have registered, but are still pending the
Admin’s approval. From this page, the Admin can view all the members’ details and contact
information, as well as their status. The Admin can edit this information and can add new
members by simply changing their status to Active. The Admin can also remove members
from the list of Alumni simply by clicking on the Remove option. There is also a search
option that can be utilized to look up individual Alumni members.</p>

<br />
<h4 id="slider">c. Slider</h4>
<p>Next, we have the Slider. The Admin can view, change, show/hide, or remove any of the
images from the Slides list. The Admin can also add new Slides to the home page simply by
clicking on the Add Slide page and uploading the desired image. The specific dimensions
required for the image have been mentioned.</p>
<br />

<h4 id="aboutus">d. About Us</h4>
<p>From here, you can view and edit the About Us section on the Home page of the main
website. On the left you can add the Title and Description as you want it to appear in the
About Us section. On the right, you can upload any image you want of specific dimensions
and just click Update.</p>
<br />
<h4 id="event">e. Event</h4>
<p>If you click on Event, you will see three more options:
    <br />
    <br />
Add Event - This page will let you create new Events. You only have to fill out a form with
important details like Event title, venue, date, time, hashtag, permalink. You can also upload
an image for the event and include a map giving directions to the location of the event. You
can add a description of the event as well. After completing the form, just press Submit and
the new event will be added to your Events page.</p>
<br />
<br />

<p>Next, if you click on the Events page, you will find a list of all the upcoming events with their
respective dates. Click on any event and you will be directed to the event’s respective page
with event details, time, location, event hashtag, and a map leading to the location. At the
bottom of the page you can also RSVP.
<br />
<br />
Manage Events – Your Manage Events page will show you a list of all the events you have
created, along with the members’ RSVPs and the number of volunteers that have been
assigned to each event. You can click on the number corresponding to the number of
Volunteers beside each event name and view their names and contact details. You can also
press the edit option to add or remove more volunteers. To add volunteers, just type in their
name and to remove volunteers, just click on the cross next to their name. After you have
made changes, press on Update.
<br />
<br />
Events – The Events page contains a list of all the events that have been successfully
added with their date, time and venue, as well as the date on which the event was created.
Click on the + sign next to the name of the event to view or edit details, change the event
image or to remove the event from the list.</p>
<br />
<h4 id="story">f. Story</h4>
<p>From Story, you can either go to Add Story or Stories: 
<br/><br/>
Add Story – Here you can add new stories. Just fill in the form with the required details like
the Title, Permalink, Story Image, Author Name. Then type the story into the Paragraph
boxes and click on Submit.
<br/><br/>
Stories – You will see a full list of all the stories along with their publication date, permalink,
author name and number of times it has been viewed. You can view and change any
information as well as the story image. You can also remove the story from the list by
clicking on Remove.
</p>
<br />

<h4 id="comment">g. Comment</h4>
<p>In the comments page, you will see all the comments made by the Alumni, along with the
name of the Story commented on, date of comment, name of commentator, and the status
of the comment i.e. approved or pending. Click on the + sign on the left to read the full
comment, then click on edit and select Approved or Rejected, then click Update.</p>
<br />
<h4 id="gallery">h. Gallery</h4>
<p>Add Album – Go to Add Album from Gallery to create a new album or to update an existing
album. On the left side of this page, you can create a new album. Just type in the Album title
and a description for the album in the boxes, then click on Add. Next, you will be able to add
photos to this album by clicking on the Add image icon. You can select these photos from
your computer, click on upload, then select Finish. You will be able to see these images on
your right. To remove an image, just click on Remove on the right of the image. Or look for a
specific image in the Search box by typing in the image name.
<br /><br />
Albums – If you come to the Albums page from Gallery, you will see a list of all the existing
albums: the titles, descriptions, number of photos and the date of upload. You can click on
the number of photos to see the images added in the album. You can also click on the +
sign on the left. Then you will see the option of Edit or Remove. Press Edit to modify the
Album Title and Description, then click on Update. Press Remove to delete the entire album.</p>
<br />

<h4 id="volunteers">i. Volunteer</h4>
<p>Add Volunteer – The Admin can add new Volunteers by filling out the form on this page.
You have to provide information like name, username, email, password etc. Then click Add
and an automated email will go to the Volunteer that will contain his/her username and
password. The Admin can type in any password that they wish or click on Generate
Password below the password box to automatically get a new one.
<br /><br />
Volunteers – The list of all Volunteers, along with all their information, can be found on the
Volunteers page. The + sign on the left of each name will lead you to two options: Edit and
Remove. Press on Edit to make changes to the Volunteer’s information. Also, after a
Volunteer has registered, they will appear in this list with their Status showing Pending. To
add the Volunteer, the Admin would have to click on Edit and change the Status to Active,
then click on Update. To remove the Volunteer, just click on the Remove icon.</p>
<br />
<h4 id="noticeboard">j. Notice Board</h4>
<p>Go to Add Notice to create a new notice. Just type in the heading and content in the Title
and Description boxes respectively, and then click on Add. The Notices page contains all
the Notices. Click on the + sign to view the full description and the date on which it was
posted. You can also change the notice by clicking on Edit, or you can delete it by clicking
on Remove. You can also look up specific notices using the search box.</p>
<br />

<h4 id="donation">k. Donation</h4>
<p>In this module admin can see all the donation requests made by different alumni. Admin has
the ability to fact check whether the donation has been actually made or not. Depending on
which Admin can change the donation’s status. Admin can also add different purposes of
donations for the alumni to choose from. The purposes can be in the active or disabled
state.</p>
<br />

<h4 id="contactus">l. Contact Us</h4>
<p>There are two Contact Us forms on this page. The Part 1 form on the left contains all the
contact information like Telephone number, Address, Association, name and Email, as well
as a Description. You can change these details at any time and Update them. The form 2 on
the right pertains more to contact through social media. Here you can add links to
Facebook, Twitter, LinkedIn, and YouTube. You can also add a link to a Google Map. You
can of course also update these details as you wish.</p>
<br />

<h4 id="message">m. Message</h4>
<p>On the Messages page, you will find a list of all the Messages sent to the Admin, sorted by
date. You will also be able to see the name and email id of the sender. On the right, if you
press on Show Message, you will be able to read the whole message. You can also search
for messages by typing in keywords in the Search box.</p>
<br />

<h4 id="settings">n. Settings</h4>
<p>Under Settings, you have four different kinds of Settings:
    <br /><br />
    Website Settings – From this page, you can update the Website Title and Admin Title. You
can change the Copyright name and URL that appears at the bottom of every page. You can
also change the Contact number that can be seen on the top left corner of the website.
Make the necessary changes and click on Update.
<br /><br />
Logo Settings – Go to the Logo settings page and you will see three forms.
<br /><br />
On the left you have your favicon. You will be able to see a preview of your current favicon.
If you want to change it, you simply have to click on Add image, select the image of your
choice, and then Update.
<br /><br />
In the middle, you have the form for your header logo, which appears alongside your
Website Title on the top left of every page. Finally, the form on your farthest right pertains
to the footer logo, which appears on the bottom right of every page. You can similarly
preview or update these images as well.
<br /><br />
Login Background Settings – Next you can change the background image that appears
when the Admin is logging in. Just press Add image, select a picture of your liking and
Update.
<br /><br />
Admin Settings – Finally, we have our Admin Settings. On this page, you have one form that
you can use to change the email id, or create a new password. You must give the existing
password before you can change it. Click on Update to save your changes.
</p>
<br />
            </div>
        </div>
     );
}
 
export default Backend;