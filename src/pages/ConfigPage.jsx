import "../assets/css/config.css";

import { ActionToLead, OriginToLead , ChannelToLead, TagCustomers} from "../components/Configpage";



export const ConfigPage = () => {


  return (
    <section className="config-page">
      
    
        <ChannelToLead />
        <OriginToLead />
        <ActionToLead />
        <TagCustomers />

    </section>
  );
};
