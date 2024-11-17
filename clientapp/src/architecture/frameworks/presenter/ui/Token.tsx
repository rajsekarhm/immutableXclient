import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { browserStorage } from "../../../../helpers/Storage";
import ProfileCard from "../../components/ProfileCard";
import AssetEntity from "../../../domains/entities/AssetEntity";

function TokenCreation() {
  const { username } : any = useParams();
  const navigate = useNavigate();
  const [token,setToken] = useState({
    walletAddress:null,
    numberOfTokens:null,
    symbol:null,
    name:null
  })
  const handleChange = (event: any) => {
    event.preventDefault();
    const {name,value} =  event.target
    setToken({...token,[name]:value})
  };

  const handleClick = (event: any) => {
    console.log(token)
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(token)
  };

  const form_field_schema3 :any= {inputsFileds:[

    {
      defaultValue: undefined,
      description: "Enter token creation address",
      className: "wallet_class",
      type: "text",
      name: "walletAddress",
      maxlength: 100,
    },
    {
      defaultValue: undefined,
      description: "Enter number of token (in Millions) ",
      className: "price_class",
      type: "string",
      name: "numberOfTokens",
      maxlength: 10,
    },
    {
      defaultValue: undefined,
      description: "Enter Symbol",
      className: "symbol_class",
      type: "text",
      name: "symbol",
      maxlength: 10,
    },
    {
      defaultValue: undefined,
      description: "Enter Token Name",
      className: "tokenname_class",
      type: "text",
      name: "tokenName",
      maxlength: 10,
    }
  ],
  isSelectFieldsNeed:false}


  useEffect(() => {
    // api call make to validate that user is authenticated
    if (true) {
      return;
    }
    navigate("/sign-in/users");
  }, []);

  return (
    <div style={{ background: 'white', height: '150vh', msOverflowY: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
           <div style={{ width: '300px', position: 'absolute', top: 0, right: 0 }}>
          <ProfileCard
            name={"name"}description={"name"}mail={"name"}address={"name"}phone={"name"}
          />
        </div>
      
      <div style={{ position: 'relative', width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>
        <section style={{
          width: '400px',
          padding: '20px',
          background: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          textAlign: 'center',
          marginTop: '50px',
        }}>
          <h2>Tokenization Asset</h2>
          <Form
            schema={form_field_schema3}
            handleChange={handleChange}
            handleClick={handleClick}
            onSubmit={handleSubmit}
          />
          
        </section>
      </div>
    </div>
  );
};

export default TokenCreation;


