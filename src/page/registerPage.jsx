import React, { useEffect } from "react";
import { useState } from "react";
import './Drawer.css'
const RagisterPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <button className="toggle-button" onClick={toggleDrawer}>
        <div className="menu-icon">&#9776;</div>
      </button>
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-content">
          {/* Content for the sidebar */}
        </div>
      </div>
      <div className={`main-content ${isOpen ? "shift" : ""}`}>
        {/* Main content */}
      </div>
    </div>
  );
};
//   const [testInput, setTestInput] = useState("");
//   const [itemList, setItemList] = useState([]);
//   const handleChange = (e) => {
//     setTestInput(e.target.value);
//   };

//   useEffect(() => {
//     setItemList([...itemList, testInput]);
//     console.log(itemList);
//   },[]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (testInput) {
//       setItemList([...itemList, testInput]);
//       setTestInput("");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={testInput}
//           onChange={handleChange}
//           placeholder="enter a value"
//         />
//         <button type="submit">submit</button>
//       </form>
//       <div>
//         <ul>
//           {itemList.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

export default RagisterPage;
