import ExpandableProfileCard from "./shadcn/ExpandableProfileCard";

const ProfileCard = ({
    className,
     name,description,mail,address,phone
  }: any) => {
    return (
      <div className={className}>
        <ExpandableProfileCard description={description} name={name} mail={mail} address={address} phone={phone} /> 
      </div>
    );
  };
  
  export default ProfileCard;
  
