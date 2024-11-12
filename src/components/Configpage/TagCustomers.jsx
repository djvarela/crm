import { useState } from "react";
import { Button } from "../Button"
import { FormsConfig } from "./forms/FormsConfig";
import { useLocalStorage } from "../../hooks";
import { FormsEdit } from "./forms/FormsEdit";


export const TagCustomers = () => {
    const { setLocal, editLocal, storeValue, deleteValueLocal } =  useLocalStorage("tagCustomers");

    const [modalAdd, setModalAdd] = useState(false);
    const [editTag, setEditTag] = useState(false);

    const action = {
        editLocal: editLocal,
        setStatus: setEditTag,
        dataEdit: editTag,
    };

    function handleModalAdd() {
        setModalAdd(!modalAdd);
    }

    function onSubmit(e) {
        setLocal(e)
        setModalAdd(!modalAdd);
    }

    function handleEdit(e) {
        const edit = storeValue.filter((tag) => tag.id == e).at();
        
        console.log(edit)
        setEditTag(edit)
    }

    function handleDeleteTag(id) {
        if (window.confirm("¿Estás seguro de borrar un tag?")) {
          deleteValueLocal(id);
        }
      }

    return (
        <div className="tag-customer">
            <h2>Etiquetas</h2>

            <Button onClick={handleModalAdd} label={"+"} />
            <table>
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>X</th>
                    </tr>
                </thead>
                <tbody>
                    {storeValue.map((tag) => (
                        <tr key={tag.id}>
                            <td>{tag.name}</td>

                            <td>
                                <Button
                                    type={"icon"}
                                    onClick={() => handleEdit(tag.id)}
                                >
                                    <img src="/icons/edit.svg" width={20} alt="Edit delete" />
                                </Button>

                                <Button
                                    type={"icon"}
                                    onClick={() => handleDeleteTag(tag.id)}
                                >
                                    <img src="/icons/trash.svg" width={20} alt="Delete icon" />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>







            {modalAdd && (
                <section className="modal-add">
                    <Button onClick={handleModalAdd} type={'secondary'} label={'x'} />

                    <FormsConfig setLocal={onSubmit} title={"Agregar Tag"} />
                </section>

            )}

            {editTag && (
                <div className="modal-edit-action">

                    <Button onClick={() => setEditTag()} type={"secondary"} label={"x"} />

                    <FormsEdit action={action} title={"Editar tag a realizar"} />
                </div>
            )}

        </div>
    )



}
