import UserRepository from "./applications/infrastructure/UserRepository";
import UserUseCase from "./applications/usecases/UserUseCase";
import UserHandler from "./controllers/handlers/UserHandler";

const newUser = {
  securityId: "123",
  firstname: "John",
  lastname: "Doe",
  email: "john@example.com",
  phoneNumber: 1234567890,
  password: "secret",
  location: "New York",
  governmentId: 4567,
  edition: "Standard",
  isAgent: false,
  AgentId: 0,
  isAuthForBuyAndSell: "yes",
  assetHolding: undefined,
};


const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserHandler(userUseCase);
console.log('visited')
userController.create(newUser);
console.log(userController.getById(""))
const user = ""

export default user