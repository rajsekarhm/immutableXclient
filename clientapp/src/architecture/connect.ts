import UserRepository from "./applications/infrastructure/UserRepository";
import UserUseCase from "./applications/usecases/UserUseCase";
import UserHandler from "./controllers/handlers/UserHandler";

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserHandler(userUseCase);

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

userController.create(newUser);
console.log(userController.getById(1));
