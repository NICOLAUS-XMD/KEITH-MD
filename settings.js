/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61V226rSBb9lVa92qfNHcpSpAEcY3wDYjB2RqNRGQpTNjdDYUyO/N6f0G/9i/0JI+xEiXTOyWSkQUIq1WXttfdeteo7yHJS4RluwfA7KEpyRhR3Q9oWGAyBVkcRLkEfhIgiMAS+8TJTR760JBzvj61LPTYSgsVpnfrSthf56jKeTzKbax+DB3Dtg6LeJST4BDDj55eTkmLZ8fIA2gZmlSJ+FqQ1nJ1HOjpkvV37qLUc4p0HcO0QESlJtn8sYpziEiUz3NqIlF+jz1nuZDDxWgsSdgAR3xjRelBX60W+CiTTrlNZcquTiuPxF+kv3YX4EswZtI5kYj4N+LkgmLpRJ2KoRqW+Hjl5blHhAN3tnX5F9hkOzRBnlND2y3Xfahcz70G70ZBZbGcIWigyTesE5dhwpNkSk8A4SMtxynhfI77ynuyNNG301c6lvh30YNOepUcZjZzzeofnHtYHBYRm65sfidvlm1aO/0vd/VH7bM35y5Mt9YKVnrTW1KMFPzB7bSSfvehQtCT1fEueHL9G3x0zlae4mwoZz3giPG57KJ0gmKoFAwdp7BO4WFuHHO40750+onX5GcvBy8vpqQlT5aTO9pnW2GNrZJqya72MN3POTpj50j2uEVpWcYLYTAvcSW8l+C4tgyP1DJXjFn6Yzc6T+bQnn2ZESZvRYf9wy+iIWzMEQ/baByXek4qWiJI86+Yg7AMUnlc4KDG9VReMlk2zOm7riywfVp6qiDFduMujVK4it3EWFROTkz7oRWXuPIA+KMo8wFWFwwmpaF62C1xVaI8rMPznrVFdziVOc4qnJOyugShKIsdDRWKFf1S/NzGiFSqK3zNMQR9EZZ4uMBjSssZ9cDsgQeFRYSRlpGiKJnKPEqvogg4FSRprGpSULsP0HtQlKa4oSgswZGWRYyVGFLlr///DgxN5XtY0htdUWWb1MadIsggVTVNUlRU47XMeEnf9Vx9k+ELvMu6Kz7N9EJGyol5WF0mOwjeNvy2iIMjrjK7aLNC7AS7B8MM0ppRk+6rLrM5QGcTkjPUuDzCMUFLhax+E+EwC3OEBw4INhJPFU6Wn/y7TIPT48WLfdTDOs/uWSAp2Ms8L33YwFL4JYcR8gwoDv0WCAkOGCUOGZ0BXjruDdGd+KWgVwjGO803FVEm1iHPKSUhYhJcDf3eJuxJxicO3Ku9QcKwLNz/i7BPcGVWIfXqKzsdlUTfQjBKYWovWWmf5B9y7wsHw+7tr63nY4emiuuJmsg66bnVxflDDkGV/FERy28YyIifyjAJ5nudksdvZLfRBhjowsCRBnqC6+m2EMoKT37i///rzj7e/Y/faui5uiCkiSdVRmp6osBAmjza6nJWFYaiLvarvVfDe6jcHuV9RqFXjGq/PA2UjKokyXcqOz5YNx0WbtSaKh1yomcLC58uaefgJCBiCMrNTeUZmW3vuwBG+FLK4CYL583J+TmHkS1Y8X0m2k7JbRQzS3c4hecVVCfHUXVQZmyQ/iKvCzKOQdVssGTWzR8eR89BFu0vuYzAW+/pGEfO2B9Msc4zN4KVJZ2LDSVXktcdmyum8bDtlb0r9MHg26EgbS/JqFnunjahlboyS3sahdb7xrYk+O/HG5USau7fdvDV5fdPIq+3cBRoRfHsiXnvzX1v8fleYa/8Dxuuj8ws9apGz03ZZshsMxr1oGukuZsYUKUuasayD8Vay5nTmZqWyDsG1M4EiQTTKyxQMAcrCMr8JqMzr7jKbWZR/EkxX9+atzNc+SFBF1XeD+InnsPJ9l13mxQRVcVcEm93GUaf9Vi2KFUX0zW+A2n2mbIDrfwD1dQoCmQkAAA==';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || 'Nicolaus Daniel 2😈😈';

const packname = process.env.PACKNAME || 'keith';

const dev = process.env.OWNER_NUMBER || '255652398614';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'true';

const botname = process.env.BOTNAME || 'KEITH-MD';

const mode = process.env.MODE || 'public';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vb4B338E50Uk2hA7r21U';

const timezone = process.env.TIMEZONE || 'Africa/Nairobi';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
