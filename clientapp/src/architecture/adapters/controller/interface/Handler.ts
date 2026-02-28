/**
 * IController — contract for all controllers.
 * Controllers are thin command routers that delegate to use cases.
 */
export default interface IController {
  execute(command: string, payload?: any): any;
}