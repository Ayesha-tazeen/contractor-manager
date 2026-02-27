// import { useEffect, useState } from "react";
// import { getDashboard} from "../../services/clientApi"
// import ProjectCard from "../../components/client/ProjectCard";
// import CreateProjectModal from "../../components/client/CreateProjectModal";
// import ExpenditureChart from "../../components/client/ExpenditureChart";

// export default function ClientDashboard(){

//   const [data,setData] = useState(null);
//   const [show,setShow] = useState(false);

//   const load = async()=>{
//     const res = await getDashboard();
//     setData(res.data);
//   };

//   useEffect(()=>{ load(); },[]);

//   if(!data) return <h2>Loading...</h2>;

//   return(
//     <div style={{padding:30}}>

//       <h1>Client Dashboard</h1>

//       <button onClick={()=>setShow(true)}>Create Project</button>

//       <h2>Total Projects: {data.totalProjects}</h2>
//       <h2>Total Expenditure: ₹{data.totalExpenditure}</h2>

//       <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
//         {data.projects.map(p=>(
//           <ProjectCard key={p._id} project={p}/>
//         ))}
//       </div>

//       <ExpenditureChart/>

//       {show && <CreateProjectModal close={()=>{setShow(false); load();}}/>}

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { getDashboard } from "../../services/clientApi";
import ProjectCard from "../../components/client/ProjectCard";
import CreateProjectModal from "../../components/client/CreateProjectModal";
import ExpenditureChart from "../../components/client/ExpenditureChart";
import SideNavbar from "../../components/SideNavbar"

export default function ClientDashboard() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  const load = async () => {
    const res = await getDashboard();
    setData(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  if (!data)
    return (
      <div style={styles.loaderWrap}>
        <h2 style={styles.loader}>Loading Dashboard...</h2>
      </div>
    );

  return (
    <div className="ml-20">
      <SideNavbar/>
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>Client Dashboard</h1>

        <button style={styles.createBtn} onClick={() => setShow(true)}>
          + Create Project
        </button>
      </div>

      {/* STATS CARDS */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Total Projects</h3>
          <p style={styles.statValue}>{data.totalProjects}</p>
        </div>

        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Total Expenditure</h3>
          <p style={styles.statValue}>₹{data.totalExpenditure}</p>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div style={styles.sectionHeader}>Your Projects</div>

      <div style={styles.projectGrid}>
        {data.projects.map((p) => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>

      {/* CHART */}
      <div style={styles.chartBox}>
        <h3 style={styles.chartTitle}>Expenditure Overview</h3>
        <ExpenditureChart />
      </div>

      {/* MODAL */}
      {show && (
        <CreateProjectModal
          close={() => {
            setShow(false);
            load();
          }}
        />
      )}
    </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f9fafb",
    padding: "30px 20px",
    fontFamily: "Segoe UI, sans-serif",
    marginleft : "50px"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 30,
    gap: 15,
  },

  title: {
    margin: 0,
    color: "#1f2937",
    fontSize: 28,
    fontWeight: 700,
  },

  createBtn: {
    background: "#facc15",
    border: "none",
    padding: "12px 20px",
    borderRadius: 10,
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.2s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20,
    marginBottom: 35,
  },

  statCard: {
    background: "#1f2937",
    borderRadius: 16,
    padding: 25,
    color: "white",
    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
    transition: "0.2s",
  },

  statTitle: {
    margin: 0,
    fontSize: 16,
    color: "#facc15",
  },

  statValue: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },

  sectionHeader: {
    fontSize: 20,
    fontWeight: 700,
    color: "#1f2937",
    marginBottom: 15,
  },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 20,
    marginBottom: 40,
  },

  chartBox: {
    background: "white",
    borderRadius: 18,
    padding: 25,
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  },

  chartTitle: {
    marginBottom: 20,
    color: "#1f2937",
    fontSize: 20,
    fontWeight: 700,
  },

  loaderWrap: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#111827",
  },

  loader: {
    color: "#facc15",
    fontSize: 26,
    letterSpacing: 1,
  },
};