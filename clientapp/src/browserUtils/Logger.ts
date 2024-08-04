type consoleType = {
  success: Array<string>,
failure: Array<string>,
info: Array<string>
}
type loggerType = "success" | "failure" | 'info'

class LoggerImpl {
  SUCCESS_TYPE: string;
  FAILURE_TYPE: string;
  INFO_TYPE: string;
  colors: consoleType;
  consoleLogger: Console;
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

  log(type: loggerType,message: string):void{
    const color : Array<string> =  this.colors[type]
    this.consoleLogger.log(`${color[0]}${message}${color[1]}`)
  }

  emit():void{
    // push to client kafka
  }
}