export default function ProjectCard({ project }) {
  return (
    <div style={styles.card}>
      <img
        src={project.image}
        alt="project"
        style={styles.image}
      />

      <h3 style={styles.title}>{project.title}</h3>
      <p style={styles.desc}>{project.description}</p>

      <div style={styles.info}>
        <p>Status: <span style={styles.highlight}>{project.status}</span></p>
        <p>Contractor: {project.contractorName}</p>
        <p>Workers: {project.workers}</p>
        <p>Spent: ₹{project.expenditure}</p>
      </div>

      <div style={styles.progressBar}>
        <div
          style={{
            ...styles.progressFill,
            width: `${project.progress}%`,
          }}
        />
      </div>

      <p style={styles.progressText}>{project.progress}% Completed</p>
    </div>
  );
}

const styles = {
  card: {
    background: "#1f2937",
    color: "white",
    borderRadius: 18,
    padding: 20,
    width: "100%",
    maxWidth: 300,
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: 160,
    objectFit: "cover",
    borderRadius: 12,
    marginBottom: 15,
  },

  title: {
    margin: "5px 0",
  },

  desc: {
    fontSize: 14,
    color: "#d1d5db",
  },

  info: {
    fontSize: 13,
    marginTop: 10,
    lineHeight: 1.6,
  },

  highlight: {
    color: "#facc15",
    fontWeight: 600,
  },

  progressBar: {
    marginTop: 15,
    height: 10,
    background: "#374151",
    borderRadius: 20,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background: "#facc15",
    borderRadius: 20,
    transition: "width 0.4s ease",
  },

  progressText: {
    marginTop: 6,
    fontSize: 12,
    color: "#facc15",
  },
};