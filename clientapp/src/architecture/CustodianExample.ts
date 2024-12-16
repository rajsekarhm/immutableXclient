import CustodianRepository from "./applications/infrastructure/CustodianRepository";
import CustodianUseCase from "./applications/usecases/CustodianUseCase";
import CustodainHandler from "./controllers/handlers/CustodianHandler";
import CustodianModal from "./domains/modals/CustodianModal";

const custodain : CustodianModal =   {
    securityId: "123",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phoneNumber: 1234567890,
    password: "secret",
    location: "New York",
    governmentID: 4567,
    edition: "Standard",
    isAgent: false,
    AgentId: 0,
    isAuthForBuyAndSell: "yes",
    assetHolding: undefined,
    orgId: "",
    Authenticated: "",
    AuthorizationFor: "",
}

const repo = new CustodianRepository()
const usecase =  new CustodianUseCase(repo)
const control =  new CustodainHandler(usecase)

control.create(custodain)