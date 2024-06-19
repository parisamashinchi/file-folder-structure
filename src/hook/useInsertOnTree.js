import { v4 as uuidv4 } from "uuid";

const useChangeTree = () => {
  function insertNode(tree, folderId, newItem, isFolder) {

    if (folderId === tree.id && tree.isFolder) {
      tree.items.unshift({
        id: uuidv4(),
        name: newItem,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }
    const node = tree.items.map((item) => {
      return insertNode(item, folderId, newItem, isFolder);
    });   

    return { ...tree, items: node };
  }

  return { insertNode };
};

export default useChangeTree;
