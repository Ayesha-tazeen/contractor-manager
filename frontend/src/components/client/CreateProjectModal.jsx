import { useState } from "react";
import { createProject } from "../../services/clientApi";

export default function CreateProjectModal({ close }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    contractorName: "",
  });

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    await createProject(form);
    close();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.heading}>Create New Project</h2>

        <input name="title" placeholder="Project Title" onChange={change} style={styles.input}/>
        <input name="description" placeholder="Description" onChange={change} style={styles.input}/>
        <input name="image" placeholder="Image URL" onChange={change} style={styles.input}/>
        <input name="contractorName" placeholder="Contractor Name" onChange={change} style={styles.input}/>

        <div style={styles.buttonRow}>
          <button style={styles.createBtn} onClick={submit}>
            Create
          </button>

          <button style={styles.cancelBtn} onClick={close}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(17,24,39,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: 20,
  },

  modal: {
    background: "white",
    width: "100%",
    maxWidth: 420,
    borderRadius: 20,
    padding: 30,
    boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
    animation: "fadeIn 0.3s ease-in-out",
  },

  heading: {
    marginBottom: 20,
    color: "#1f2937",
  },

  input: {
    width: "100%",
    padding: "12px 14px",
    marginBottom: 15,
    borderRadius: 10,
    border: "1px solid #ddd",
    fontSize: 14,
    outline: "none",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },

  createBtn: {
    flex: 1,
    background: "#facc15",
    border: "none",
    padding: "12px",
    borderRadius: 10,
    fontWeight: 600,
    cursor: "pointer",
  },

  cancelBtn: {
    flex: 1,
    background: "#1f2937",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: 10,
    fontWeight: 600,
    cursor: "pointer",
  },
};