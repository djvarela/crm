export const Home = () => {
  const totalClients = JSON.parse(localStorage.getItem("customers")) || [];

  const totalLeads = JSON.parse(localStorage.getItem("leads")) || [];
  const now = `${new Date().getDate()}/${new Date().getMonth() + 1}`;

  const nowLeads = totalLeads.filter((lead) => {
    const leadDate = new Date(lead.date);
    const leadDayMonth = `${leadDate.getDate()}/${leadDate.getMonth() + 1}`;

    return leadDayMonth === now;
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
