import { useState } from "react";

function Folder({ structure, handleInsertNode }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: true,
    isFolder: false,
  });

  const openNewInput = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({ visible: true, isFolder: isFolder });
  };

  const handleAddInput = (e) => {
    if (e.keyCode === 13) {
      handleInsertNode(structure.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };
  if (structure?.isFolder) {
    return (
      <div className="container">
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>🗂️ {structure.name}</span>

          <div className="btn">
            <button onClick={(e) => openNewInput(e, true)}>ADD Folder</button>
            <button onClick={(e) => openNewInput(e, false)}>ADD File</button>
          </div>
        </div>
        {expand && showInput.visible && (
          <div className="input-container">
            <span>{showInput.isFolder ? "🗂️" : "📄"}</span>
            <input
              type="text"
              className="input"
              onKeyDown={handleAddInput}
              autoFocus
              onBlur={() => setShowInput({ ...showInput, visible: false })}
            />
          </div>
        )}
        <div>
          {expand &&
            structure.items.map((item) => {
              return (
                <Folder
                  structure={item}
                  key={item.id}
                  handleInsertNode={handleInsertNode}
                />
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <p className="file"> 📄 {structure?.name}</p>
      </div>
    );
  }
}

export default Folder;
