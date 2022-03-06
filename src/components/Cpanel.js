const Localhost = () => {
    return ( 
        <div id="cpanel">
          <h3 className="">2. cPanel </h3>
          <br />
          <br />
          <div>
            <span>a.</span> In your cPanel Home create a database by visiting DATABASES -{">"} MySQL 
Databases. 
          </div>
          <br/>

          <div>
            <span>b.</span> In that page you will first create a database. Then create a user with 
password. And please keep all three (database name, user name, user 
password) information somewhere safe for further use. 
But for a far more detailed instructions please refer to this <a href="https://www.namecheap.com/support/knowledgebase/article.aspx/9363/2180/how-to-create-and-maintain-mysql-databases-in-cpanel/" target="__blank">tutorial</a>; 
          </div>
          <br/>

          <div>
            <span>c.</span> Now add the created user to that database. Give all privileges and we are 
            done here. Go back to the Home page of cPanel.
          </div>
          <br/>

          <div>
            <span>d.</span> This time you need to visit DATABASES -{">"}  phpMyAdmin. It will take you to a 
different page but you will see the newly created database there. Click on it, 
find Import and upload the database.sql provided with the script and click Go 
at the bottom. 
But for a far more detailed instructions please refer to this <a href="https://help.one.com/hc/en-us/articles/115005588189-How-do-I-import-a-database-to-phpMyAdmin-" target="__blank">​tutorial​</a>;
          </div>

          <br/>

          <div>
            <span>e.</span> Now upload all the files (i. e. application, assets, system, uploads and all other 
files) from inside the venus folder into public_html directory which you will 
find by visiting FILES -{">"} File Manager or you can create a folder in that 
public_html directory of your desired name and upload all files from inside 
the venus folder into that newly created folder. 
But for a far more detailed instructions please refer to this <a href="https://www.greengeeks.com/support/article/how-to-upload-a-file-using-the-cpanel-file-manager/" target="__blank">​tutorial​</a>; 
          </div>

          <br/>

          <div>
            <span>f.</span> Please keep in mind that .htaccess file is a very important file. It is inside the                               
            root directory (venus folder). Make sure that you have that file copied and                         
            pasted properly. 
          </div>

          <br/>

          <div>
            <span>g.</span> Then go to application/config/database.php file to change your database                 
configuration on line number 79, 80 and 81. You need to change database                         
username, database password and database name that you had created                   
during creating your database in step b.
          </div>

          <br/>

          <div>
            <span>h.</span> Now please visit <a href="https://localhost/" target="__blank">{"​http://< your domain name ></>"}</a> or ​<a href="https://localhost/" target="__blank">http://{"< your"} domain                 
              name {">"}/</a> ​{"<folder"} name created on step {"e>"} and you should be able to see the                           
            login page of venus script. 
          </div>

          <br/><br/>
        </div>
     );
}
 
export default Localhost;