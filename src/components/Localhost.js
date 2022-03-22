import Code from "./Extras/Code";

const Localhost = () => {
  return (
    <div id="localhost">

      <h3 className="">1. localhost</h3>
      <br />
      <br />
      <div>
        <p className="">
          <span>a.</span> You will need to install either Apache/Nginx web
          server on your system for Ubuntu. For Windows you can install
          XAMPP/WAMP web server. And for macOS please install MAMP. For to
          install Apache web server on your system (only applicable for ubuntu),
          run the below command: sudo apt-get install apache2 But for a far more
          detailed instructions please refer to this
          <a
            href="https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-18-04-quickstart"
            target="__blank"
          >
            ​ tutorial​
          </a>
          ;
        </p>
      </div>
      <br />
      <div>
        <span>b.</span> In the case of Ubuntu your root directory will be
        “/var/www/html” and in case of XAMPP it will be "C:\xampp\htdocs" and
        for WAMP it’s "C:/wamp/www". For MAMP, the root directory is
        “/Applications/MAMP/htdocs”. Of course all directory paths can change
        depending on the version you install.
      </div>
      <br />

      <div>
        <span>c.</span> Now you have to install PHP and MySQL database only in
        case of Ubuntu. Because for the rest of the Operating systems XAMPP or
        WAMP or MAMP will do all the work for you. In Ubuntu, you can install
        LAMP stack but that is a whole different story. Please keep the root
        name, password saved somewhere for further use.
      </div>
      <br />

      <div>
        <span>d.</span> To install PHP on your system please run the below
        command: sudo apt install php libapache2-mod-php But for a far more
        detailed instructions please refer to this ​
        <a
          href="https://linuxize.com/post/how-to-install-php-on-ubuntu-18-04/"
          target="__blank"
        >
          {" "}
          tutorial
        </a>
        ;
      </div>

      <br />

      <div>
        <span>e.</span> After installing PHP, you need to enable the mod_rewrite
        module. To do that please run this below command: sudo a2enmod rewrite
        && sudo systemctl restart apache2 But for a far more detailed
        instructions please refer to this
        <a
          href="https://hostadvice.com/how-to/how-to-enable-apache-mod_rewrite-on-an-ubuntu-18-04-vps-or-dedicated-server/"
          target="__blank"
        >
          {" "}
          ​tutorial​
        </a>
        ;
      </div>

      <br />

      <div>
        <span>f.</span> Now create a folder of your desired name in the root
        directory i.e. “/var/www/html” or "C:\xampp\htdocs" or "C:/wamp/www" or
        “/Applications/MAMP/htdocs”.
      </div>

      <br />

      <div>
        <span>g.</span> Put all the folders and files (i. e. application,
        assets, system, uploads and all other files) from inside the venus
        folder into the folder created in the last step.
      </div>

      <br />

      <div>
        <span>h.</span> Please keep in mind that .htaccess file is a very
        important file. It is inside the main script file (venus folder). Make
        sure that you have that file copied and pasted properly.
      </div>

      <br />

      <div>
        <span>i.</span> Now you will need to set up a MySQL database. You will
        need to set up a database only for Ubuntu operating systems because on
        Windows or macOS, softwares like XAMPP or WAMP or MAMP will take care of
        that for you. Now to install MySQL database on your Ubuntu system please
        open a terminal and write this below code: sudo apt-get install
        mysql-server mysql-client libmysqlclient-dev But for a far more detailed
        instructions please refer to this
        <a href="https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04">
          ​ tutorial​
        </a>
        ;
      </div>

      <br />

      <div>
        <span>j.</span> To install phpMyAdmin on your system, you will need to
        run below command on your terminal: sudo apt-get install phpmyadmin But
        for a far more detailed instructions please refer to this
        <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-18-04">
          {" "}
          ​tutorial​
        </a>
        ;
      </div>
      <br />

      <div>
        <span>k.</span> In both cases you will be asked to set up MySQL database
        passwords for later use, so please choose something strong and save it
        for later use.
      </div>
      <br />

      <div>
        <span>l.</span> Now in your MySQL database, create a database according
        to your desired name and upload the sql file (database.sql) provided
        with the script for Ubuntu. And to do that you will have to login into
        mysql using your user name and password; Then you will need to run the
        below command: CREATEDATABASE &ltyourdesiredname&gt ; and then press
        enter. After that type exit; ​and that you get you out of the MySQL
        environment;
      </div>
      <br />

      <div>
        <span>m.</span> This time you will have to go the directory where the
        database.sql (provided with the script) file is and open a terminal
        there and run the below command: mysql-u {"<"}
        yourMySQLusername {">"} -p ${"< your"} created database name in the last
        step
        {">"} {"< database.sql;"} But for far more detailed instructions please
        refer to this
        <a
          href="https://www.digitalocean.com/community/tutorials/how-to-import-and-export-databases-in-mysql-or-mariadb"
          target="__blank"
        >
          {" "}
          ​tutorial​
        </a>
        ; This is how you need to import the database.sql file provided with the
        script to your mysql database.
      </div>
      <br />

      <div>
        <span>n.</span> If you have decided to install phpMyAdmin instead
        described in point ‘i’, you will need to visit your phpMyAdmin on the
        browser as suggested in the given tutorial and you will see the newly
        created database there. Click on it, find Import and upload the
        database.sql provided with the script and click Go at the bottom. But
        for a far more detailed instructions please refer to this
        <a
          href="https://help.one.com/hc/en-us/articles/115005588189-How-do-I-import-a-database-to-phpMyAdmin-"
          target="__blank"
        >
          ​ tutorial​
        </a>
        ;
      </div>
      <br />

      <div>
        <span>o.</span> Then go to application/config/database.php file to
        change your database configuration on line number 79, 80 and 81. You
        need to change database username, database password and database name
        that you had created during installation of MySQL or XAMPP or WAMP or
        MAMP.
      </div>
      <br />

      <div>
        <span>p.</span> Finally, change the entire folder permission of uploads
        to 777. To perform this action you will have to open the root directory
        of the application on a terminal. Here root directory suggests to the
        directory of the script where application, assets,...,uploads are on.
        Then you will need to run the below command: sudo chmod -R 777 uploads/
      </div>
      <br />

      <div>
        <span>q.</span> Now please visit ​http://localhost/ ​{"< folder"} name
        created on step d {">"} and you should be able to see the login page of
        venus script.
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Localhost;
