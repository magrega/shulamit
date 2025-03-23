const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.REACT_APP_FTP_USERNAME,
  password: process.env.REACT_APP_FTP_PASSWORD,
  host: process.env.REACT_APP_FTP_HOST,
  port: 22,
  localRoot: __dirname + "\\dist",
  remoteRoot: "/root/websites/shulamit",
  include: ["*"],
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**",
  ],
  deleteRemote: true,
  forcePasv: true,
  sftp: true,
};

console.log(config);

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
