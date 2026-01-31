import React, {useState, useEffect, useContext} from "react";
import JournalCard from "./JournalCard";
import axios from "axios";
import Loader from "../Loader";
import { ErrorContext } from "../../contexts/ErrorContext";
import JOURNALS_API from "../../config"



const JournalList = ({shouldFetchJournals}) => {
  // ==================================================================
  // FETCHING DATA FROM DATABASE

  const [blogs,setBlogs]=useState([]);
  const [loading,setLoading]=useState(false);
  const { showError } = useContext(ErrorContext);

  useEffect(()=>{
    if(!shouldFetchJournals) return;

    let isMounted=true;
    const controller = new AbortController();

    const fetchJournals= async()=> {
      try {
        if (isMounted) setLoading(true); 
        const res= await axios.get(JOURNALS_API+ '/',{
          signal: controller.signal
        });
        if (isMounted) setBlogs(res.data)
        }
      catch (err) {
        console.error(err);
        if (!(err.name === "CanceledError" || err.name === "AbortError")) {
          showError("Failed to load journals. Please try again later.");
        }
      }finally{
        if (isMounted) setLoading(false);
      }
    };
    fetchJournals();
    return()=>{
      isMounted=false;
      controller.abort(); }
      },[shouldFetchJournals, showError])

  // ==================================================================

  if(!shouldFetchJournals){ return null; }

  // ==================================================================

  if(!loading && blogs.length ===0){
    return (
          <div>
                 {loading && (
                   <div style={{ textAlign: "center" }}>
                        <Loader size={100} />
                    </div>
                    )}
                  <JournalCard blogs={blogs} />
          </div>
          );}

  if (loading) {
     return <Loader size={100} />;
    }

  return (
    <div>
      <JournalCard blogs={blogs}/>   {/* <p>List of all journal cards here...</p> */}
    </div>
  );
};

export default JournalList;
