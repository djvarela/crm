export const Home = () => {
  const totalLeads = JSON.parse(localStorage.getItem("leads")) || [];
  const totalClients = JSON.parse(localStorage.getItem("customers")) || [];
  const nowLeads = totalLeads.map((lead) => {
    let data = new Date(lead.date);

    if (data.getDate() == new Date().getDate()) {
      return lead;
    }
  });

  return (
    <section className="home">
      <div className="home-status">
        <ul>
          <li className="news-leads">
            <span>{nowLeads.length}</span> New leads
          </li>
          <li>
            <span>{totalLeads.length}</span> Total leads
          </li>
          <li>
            <span>{totalClients.length}</span> Total client
          </li>
        </ul>
      </div>
    </section>
  );
};
