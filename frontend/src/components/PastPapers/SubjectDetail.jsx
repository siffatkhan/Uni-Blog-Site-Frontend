import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResourceSection from "./ResourceSection";
import axios from "axios";
import "./SubjectDetail.css";

const SubjectDetail = () => {
  const { slug } = useParams();
  const [subjectResources, setSubjectResources] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const driveIcon =
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png";

  // ============================================================================
  // FETCHING SUBJECT RELATED DATA FROM DATABASE
  useEffect(() => {
    const controller = new AbortController();

    const fetchSubjectData = async () => {
      try {

        setLoading(true);

        const res = await axios.get(
          `http://127.0.0.1:8000/papers/api/${slug}/`,
          { signal: controller.signal }
        );
        setSubjectResources(res.data);
      } catch (err) {
        if (err.name === "CanceledError" || err.name === "AbortError") {
          console.log("Request Aborted", err);
        } else {
          console.log("Failed to fetch resources", err);
          setError("Failed to fetch subject data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSubjectData();
    return () => controller.abort();
  }, [slug]);

  // Empty message handler
  const emptyMessage = (sectionName) => (
    <p className="empty-message">
		No {sectionName.toLowerCase()} available</p>
  );


//   // =================================================
  // Render list of resources
  const renderList = (items) =>
    items.map((item) => (
      <li className="resource-item" key={item.id || item.resource_link}>
        <span className="resource-icon">
          <i className="fa-solid fa-link" aria-hidden="true"></i>
        </span>


		{/* The description part contains the avatar and link */}
        <div className="resource-description">
          <span className="resource-avatar">
            <img src={driveIcon} alt="Google Drive" />
          </span>


		  {/* Clickable resource name */}
          <a
            className="resource-link"
            target="_blank"
            rel="noreferrer"
            href={`https://drive.google.com/file/d/${item.resource_link}/view`}
          >
            {item.resource_name}
          </a>
        </div>
      </li>
    ));
	// =================================================

  // Loading & Error States
  if (loading) return <p className="status loading">Loading subject data</p>;
  if (error) return <p className="status error">{error}</p>;
  if (!subjectResources) return null;

  const { subject_title, resources } = subjectResources;

  return (
    <div className="subject-detail">
      <h2 className="subject-title">{subject_title}</h2>

      <ResourceSection
        title="Past Papers"
        items={resources?.past_paper || []}
        renderList={renderList}
        emptyMessage={() => emptyMessage("Past Papers")}
      />

      <ResourceSection
        title="Notes"
        items={resources?.notes || []}
        renderList={renderList}
        emptyMessage={() => emptyMessage("Notes")}
      />

      <ResourceSection
        title="Assignments"
        items={resources?.assignment || []}
        renderList={renderList}
        emptyMessage={() => emptyMessage("Assignments")}
      />

      <ResourceSection
        title="Quizzes"
        items={resources?.quiz || []}
        renderList={renderList}
        emptyMessage={() => emptyMessage("Quizzes")}
      />

      <ResourceSection
        title="Books"
        items={resources?.book || []}
        renderList={renderList}
        emptyMessage={() => emptyMessage("Books")}
      />

      <ResourceSection
        title="Others"
        items={resources?.other || []}
        renderList={renderList}
        emptyMessage={() => emptyMessage("Others")}
      />

      
      <div className="help-section">
        <h3>
          <i className="fa-solid fa-hand-holding-heart"></i>
          Help Us To Help Others
        </h3>
        <p>
          If you or any of your friends have material related to this subject
          that is not here, please email us the document along with its details
          to <strong>imspectrum1@gmail.com</strong>. We’ll publish it here.
          Thank You!
        </p>
      </div>
    </div>
  );
};

export default SubjectDetail;
