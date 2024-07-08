
export const Home = () => {



 const totalLeads = JSON.parse (localStorage.getItem('leads')) || [];
 const totalClients = JSON.parse (localStorage.getItem('customers')) || [];
console.log(totalClients);
  return (
    <section className="home">

      <div className="home-status">
        <ul>
          <li className="news-leads"><span>0</span> New leads</li>
          <li><span>{totalLeads.length}</span> Total leads</li>
          <li><span>{totalClients.length}</span> Total client</li> 
      

        </ul>
      </div>

    </section>
  )
}


