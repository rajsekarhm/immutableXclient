class LoggerImpl {
  constructor() {
    this.SUCCESS_TYPE = "success";
    this.FAILURE_TYPE = "failure";
    this.INFO_TYPE = "info";
    this.colors = {
      success: ["\x1b[36m", "\x1b[0m"],
      failure: ["\x1b[31m", "\x1b[0m"],
      info: ["\x1b[33m", "\x1b[0m"],
    };
    this.consoleLogger = console;
  }

  log(type,message){
    const color =  this.colors[type]
    this.consoleLogger.log(`${color[0]}${message}${color[1]}`)
  }

  emit(){
    // push to client kafka
  }
}