import { useState } from "react";
import "./styles.css";
import structure from './Data/structure';
import Folder from './component/Folder';
import useChangeTree from './hook/useInsertOnTree';

export default function App() {
  const [structureData, setStructureData] = useState(structure);
  const {insertNode} = useChangeTree()

  const handleInsertNode = ( folderId, item , isFolder) => {
    const newTree = insertNode(structureData, folderId, item , isFolder)
    setStructureData(newTree)
  }
  
  return(
    <Folder structure={structureData} handleInsertNode={handleInsertNode} />
  )

}
