export const ListUser = ({ users }) => {
  return (
    <section>
      <table>
        <thead>
            <tr>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>TEL</th>
              <th>EMAIL</th>
            </tr>

        </thead>
        <tbody>

        {
          users.map(user =>(
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.telefono}</td>
              <td>{user.email}</td>
            </tr>
            ))
            
          }
          </tbody>
      </table>
    </section>
  );
};
