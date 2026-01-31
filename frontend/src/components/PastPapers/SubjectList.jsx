import React, { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../../contexts/ErrorContext";
import { SUBJECTS_API } from "../../config";
import SubjectSearch from "./SubjectSearch";
import SubjectCard from "./SubjectCard";
import Loader from "../Loader";
import axios from "axios";
import "./SubjectList.css";


const SubjectList = ({shouldFetchSubject}) => {
  const [subjects, setSubject]=useState([]);
  const [loading, setLoading]=useState(false)
  const { showError } = useContext(ErrorContext);

  useEffect(()=>{
    if(!shouldFetchSubject) return;
    
    const controller = new AbortController();
    let isMounted=true;

    const fetchSubject = async ()=>{
      try{
        if(isMounted) setLoading(true);
        const res=await axios.get(SUBJECTS_API+'/',{
        signal:controller.signal,
      });
      if(isMounted) setSubject(res.data)
    }catch (err){
     if (!(err.name === "CanceledError" || err.name === "AbortError")) {
          showError("Failed to load subjects. Please try again later.");
        }
      }
    finally{
      if(isMounted) setLoading(false)}
    };

    fetchSubject();
    return() => {
      isMounted=false;
      controller.abort();}
  },[shouldFetchSubject,showError])


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
  );
  
if (!shouldFetchSubject) return null;
if (loading) { return <Loader size={100} />;}


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
