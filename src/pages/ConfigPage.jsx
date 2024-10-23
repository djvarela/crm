import { useState } from "react";
import "../assets/css/config.css";

export const ConfigPage = () => {
  let actionLocal = JSON.parse(localStorage.getItem("optionAction")) || [];

  const [optionAction, setOptionAction] = useState(actionLocal);
  const [editAction, setEditAction] = useState();

  function onSubmitAction(e) {
    e.preventDefault();

    let info = {
      id: crypto.randomUUID(),
      name: e.target[0].value,
    };
    setOptionAction([...optionAction, info]);
    actionLocal.push(info)  

    localStorage.setItem("optionAction", JSON.stringify(actionLocal));
    e.target[0].value = "";
  }

  function onSubmitEditAction(e) {
    e.preventDefault();
    let id = e.target[0].dataset.id;

    const newLocalAction = actionLocal.map((action) => {
      if (action.id == id) {
        return {
          ...action,
          name: e.target[0].value,
        };
      } else {
        return action;
      }
    });

    localStorage.setItem("optionAction", JSON.stringify(newLocalAction));
    setOptionAction(newLocalAction);
    setEditAction();
  }

  function handleEditAction(e) {
    let id = e;

    const edit = optionAction.filter((option) => option.id == id).at();

    setEditAction(edit);
  }

  function handleDeleteAction(e) {
    const deleteAction = actionLocal.filter((action) => action.id !== e);

    if (window.confirm("¿Estás seguro de borrar esta opcion?")) {
      localStorage.setItem("optionAction", JSON.stringify(deleteAction));
      setOptionAction(deleteAction);
    }
  }

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

              <th>X</th>
            </tr>
          </thead>
          <tbody>
            {optionAction.map((action) => (
              <tr key={action.id}>
                <td>{action.name}</td>
                <td>
                  <button onClick={() => handleEditAction(action.id)}>
                    Editar
                  </button>
                  <button onClick={() => handleDeleteAction(action.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <form onSubmit={onSubmitAction} autoComplete="off">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" />
          <button>Agregar</button>
        </form>

        {editAction && (
          <div className="modal-edit-action">
            <button onClick={() => setEditAction()}>x</button>

            <form onSubmit={onSubmitEditAction} autoComplete="off">
              <h2>Editar accion a realizar</h2>
              <span>
                <label htmlFor="nombre">Nombre: </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  data-id={editAction.id}
                  defaultValue={editAction.name}
                />
                <button type="submit">Guardar</button>
              </span>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
