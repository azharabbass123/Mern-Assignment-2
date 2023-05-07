import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {toast, ToastContainer} from 'react-toastify';
import { Button, FontAwesomeIcon} from "bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function History(){
    var urlData = JSON.parse(localStorage.getItem('Urls') || '[]');
    const [deleteState, setDeleteState] = useState(urlData);
    function onDelete(id) {
        let urlData1 = deleteState;
        urlData1 = urlData1.filter((url1) => url1.id !== id);
        setDeleteState(urlData1);
        localStorage.setItem("Urls", JSON.stringify(urlData1));
        // if (ulrData1.length === 0) {
        //   localStorage.removeItem("Urls");
        // }
        
}
    
    function onCopyClick(){
         alert("Url copied to clipboard successfully.");
    }
    return(
        <div className="historyDiv">
        <h2 className="historyHeading">Short Urls:</h2>
        <table className="historyTable">
                <thead className='tablehead'>
                    
                        <tr>
                            <th>Id</th>
                            <th>Short Url</th>
                            <th></th>
                            <th>Long Url</th>
                            <th>expiryDate</th>
                            {/* <th>Edit</th> */}
                            <th>Delete</th>
                        </tr>
                            
                </thead>
                <tbody>
                {urlData.map((curUser, index)=>{
                    const{longUrl, shortUrl, expiryDate}=curUser;
                        return(
                        <>
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{shortUrl}</td>
                                <td><CopyToClipboard text={shortUrl}>
                                <button onClick={onCopyClick}>copy</button>
                                </CopyToClipboard>
                                </td>
                                <td>{longUrl}</td>
                                <td>{expiryDate}</td>
                                {/* <td><button className='editButton'>
                                    </button> <ToastContainer />
                                    </td> */}
                                <td><button className='deleteButton' style={{background: 'red'}} onClick={() => onDelete(index)}>Delete
                                    </button></td>
                            </tr>
                            </>
                    
                        )}
                    
                        )}
                    </tbody>
            </table>
        </div>
    )
}
export default History;