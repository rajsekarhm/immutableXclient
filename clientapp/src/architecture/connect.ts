import UserRepository from "./applications/infrastructure/UserRepository"
import UserUseCase from "./applications/usecases/UserUseCase"
import UserController from "./controllers/UserController"

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

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


  userController.create(newUser)
  console.log(userController.getById(1))