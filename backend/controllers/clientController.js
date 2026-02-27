import Project from "../models/Project.js";

/* =========================
   GET DASHBOARD STATS
========================= */
export const getDashboard = async(req,res)=>{
  const projects = await Project.find({clientId:req.user._id});

  const totalProjects = projects.length;

  const totalExpenditure = projects.reduce(
    (acc,p)=>acc + (p.expenditure || 0),
    0
  );

  const avgProgress = projects.length
    ? Math.round(projects.reduce((a,p)=>a+p.progress,0)/projects.length)
    : 0;

  res.json({
    totalProjects,
    totalExpenditure,
    avgProgress,
    projects
  });
};

/* =========================
   CREATE PROJECT
========================= */
export const createProject = async(req,res)=>{
  const project = await Project.create({
    ...req.body,
    clientId:req.user._id,
    progress:0,
    status:"Not Started",
    expenditure:0
  });

  res.json(project);
};

/* =========================
   MONTHLY EXPENDITURE GRAPH
========================= */
export const monthlyReport = async(req,res)=>{
  const data = await Project.aggregate([
    {$match:{clientId:req.user._id}},
    {
      $group:{
        _id:{
          month:{$month:"$createdAt"},
          year:{$year:"$createdAt"}
        },
        total:{$sum:"$expenditure"}
      }
    },
    {$sort:{"_id.year":1,"_id.month":1}}
  ]);

  const formatted = data.map(d=>({
    month:`${d._id.month}/${d._id.year}`,
    total:d.total
  }));

  res.json(formatted);
};