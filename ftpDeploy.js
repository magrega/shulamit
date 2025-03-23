const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.REACT_APP_FTP_USERNAME,
  // Password optional, prompted if none given
  password: process.env.REACT_APP_FTP_PASSWORD,
  host: process.env.REACT_APP_FTP_HOST,
  port: 22,
  localRoot: __dirname + "\\dist",
  remoteRoot: "/root/websites/shulamit",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**",
  ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: true,
};

console.log(config);

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
