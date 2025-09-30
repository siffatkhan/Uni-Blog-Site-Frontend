import React from "react";

const ResourceSection = ({ title, items, renderList, emptyMessage }) => {
  return (
    <div className="section">
      <h3 className="section-title">{title}</h3>
      <ol className="resource-list">
        <div className="resource-items">
          {items && items.length > 0
            ? renderList(items)
            : emptyMessage(title)}
        </div>
      </ol>
    </div>
  );
};

export default ResourceSection;
