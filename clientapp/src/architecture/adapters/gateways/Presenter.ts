import IPresenter from "architecture/applications/interface/output/IPresenter";

class Presenter implements IPresenter {
  render(input: any) {
    // framework based adaptor logic
    return input;
  }
  parse(): any {}
}

export default Presenter;
