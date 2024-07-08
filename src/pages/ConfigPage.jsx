
import "../assets/css/config.css"
export const ConfigPage = () => {
  return (
    <section className="config-page">
      <div className="entry-chanel">
        <h2>Canal de Ingreso</h2>
        <button>+</button>
        <table>
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>ESTADO</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EMAIL</td>
              <td>ACTIVO</td>
              <td></td>
            </tr>
            <tr>
              <td>CORREO</td>
              <td>ACTIVO</td>
              <td></td>
            </tr>
            <tr>
              <td>TELEFONO</td>
              <td>ACTIVO</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <form action="" autoComplete="off">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" />
          <button>Agregar</button>
        </form>
      </div>

      <div className="lead-origin">
        <h2>Origenes de consulta</h2>
        <button>+</button>
        <table>
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>ESTADO</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PORTAL WEB</td>
              <td>ACTIVO</td>
              <td></td>
            </tr>
            <tr>
              <td>FACEBOOK</td>
              <td>ACTIVO</td>
              <td></td>
            </tr>
            <tr>
              <td>INSTAGRAM</td>
              <td>ACTIVO</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <form action="" autoComplete="off">
          <label htmlFor="nombre">Origen</label>
          <input type="text" name="nombre" />
          <button>Agregar</button>
        </form>
      </div>

      <div className="lead-action">
        <h2>Acciones a realizar</h2>
        <button>+</button>
        <table>
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>ESTADO</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LLAMAR</td>
              <td>ACTIVO</td>
              <td></td>
            </tr>
            <tr>
              <td>ENVIO WHATSAPP</td>
              <td>ACTIVO</td>
              <td></td>
            </tr>
            <tr>
              <td>TELEFONO</td>
              <td>ACTIVO</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <form action="" autoComplete="off">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" />
          <button>Agregar</button>
        </form>
      </div>

    </section>
  );
};
