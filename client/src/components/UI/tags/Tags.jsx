import { useEffect } from "react";
import "./Tags.css";
import TagBtn from "./TagBtn.jsx";

function Tags({ tags, activeTag, setActiveTag, setFilteredItems, allItems }) {
  useEffect(() => {
    if (activeTag === "Show All") {
      setFilteredItems(allItems);
      return;
    }
    const filtered = allItems.filter((item) => item.tags.includes(activeTag));
    setFilteredItems(filtered);
  }, [activeTag, allItems, setFilteredItems]);

  return (
    <div className="tags__container">
      {tags.map((tag) => (
        <TagBtn
          key={tag}
          tag={tag}
          active={activeTag === tag ? true : false}
          setActiveTag={setActiveTag}
        />
      ))}
    </div>
  );
}

export default Tags;
