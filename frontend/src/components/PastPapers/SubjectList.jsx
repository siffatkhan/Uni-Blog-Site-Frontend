import React,{useState, useEffect } from "react";
import SubjectCard from "./SubjectCard";
import "./SubjectList.css"
import SubjectSearch from "./SubjectSearch";
import axios from "axios"
// import subjects from '../../data/subjects';


const SubjectList = ({shouldFetchSubject}) => {

// =================================================================
// Fetching subject from database logic
  const [subjects, setSubject]=useState([]);
  const [loading, setLoading]=useState(false)

  useEffect(()=>{
    if(!shouldFetchSubject) return;
    const controller = new AbortController();

    const fetchSubject = async ()=>{
      try{
        setLoading(true);
        const res=await axios.get('http://127.0.0.1:8000/papers/api/',{
        signal:controller.signal,
      });
      setSubject(res.data)
    }catch (err){
      if(err.name==="CanceledError" || err.name ==="AbortError"){
        console.log("Request Aborted", err)
      }
      else{
        console.log("Failed to fetch subject data", err)
      }}
    finally{
      setLoading(false)}
    };

    fetchSubject();
    return() => controller.abort();
  },[shouldFetchSubject])


// =================================================================
  // Subject search logic code below 
  const [subjectInput,setSubjectInput]=useState("");

  // Search handler
  function handleChange(e){
    const value=e.target.value.toLowerCase();
    setSubjectInput(value)
  }

  // Filter subjects
  const filteredSubjects=subjects.filter((subject)=>
    subject.subject_title.toLowerCase().includes(subjectInput)   //Empty input → includes("") is always true.
  // filter keeps everything.
  );
// =================================================================
  
if (!shouldFetchSubject) return null;
if (loading){ return <p>Loading Subjects...</p>}

  return (
    <div className="parent-container">
      <div >
        <SubjectSearch onChange={handleChange} input={subjectInput}/>
      </div>
      <div className="cards">
        {filteredSubjects.length > 0 ? (filteredSubjects.map((subject, index) => (
          <SubjectCard
            key={subject.id}
            title={subject.subject_title}
            link={`/past-papers/${subject.slug}`}
          />
        )))
        : (
        <p className="NotFound">No subject found by the name: {subjectInput}</p>)
      }
      </div>
    </div>
  );
};
export default SubjectList;
