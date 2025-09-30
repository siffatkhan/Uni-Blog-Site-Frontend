import React, {useState,useEffect} from "react";
import JournalCard from "./JournalCard";
import axios from "axios";

const JournalList = ({shouldFetchJournals}) => {


  // ==================================================================
  // FETCHING DATA FROM DATABASE

  const [blogs,setBlogs]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    if(!shouldFetchJournals) return;
    const controller = new AbortController();

    const fetchJournals= async()=> {
      try {
        setLoading(true)
        const res= await axios.get("http://127.0.0.1:8000/journals/api/",{
          signal: controller.signal
        });
        setBlogs(res.data)
        // console.log(res.data)
        }
      catch (err) {
          if (err.name === "CanceledError" || err.name === "AbortError") {
            console.log("Request aborted:", err);
          } else {
            console.error("Failed to fetch journals:", err);
          }
      }finally{
        setLoading(false);
      }
    };

    fetchJournals();
    return()=>controller.abort(); 
  },[shouldFetchJournals])

  // ==================================================================

  if(!shouldFetchJournals){
    return null;
  }

  // ==================================================================

  if(!loading && blogs.length ===0){
    return (
          <div>
              {loading && <p className="loader">Loading journals...</p>}
                  <JournalCard blogs={blogs} />
          </div>
          );}

  return (
    <div>
      {/* <p>List of all journal cards here...</p> */}
      <JournalCard blogs={blogs}/>
    </div>
  );
};

export default JournalList;
