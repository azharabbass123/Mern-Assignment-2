function History(){
    var urlData = JSON.parse(localStorage.getItem('Urls') || '[]');
    return(
        <div className="historyDiv">
        <h2 className="historyHeading">Short Urls:</h2>
        <table className="historyTable">
                <thead className='tablehead'>
                    
                        <tr>
                            <th>Id</th>
                            <th>Short Url</th>
                            <th>Long Url</th>
                            <th>expiryDate</th>
                        </tr>
                            
                </thead>
                <tbody>
                {urlData.map((curUser)=>{
                    const{id, longUrl, shortUrl, expiryDate}=curUser;
                        return(
                        <>
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{shortUrl}</td>
                                <td>{longUrl}</td>
                                <td>{expiryDate}</td>
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