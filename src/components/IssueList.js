import React, {useState, useEffect} from 'react'
import ListHeader from './ListHeader'
import SingleIssue from './SingleIssue'


const IssueList = () => {
    const [issues, setIssues] = useState([]);

    useEffect(async () => {
        const res = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await res.json();
        console.log("Response ::: ", data);
        setIssues(data);
        
    }, []);

    return (
        <div className="issueList-container">

            <ListHeader />
            
            {
                issues.map( issue => {
                    return (
                        <SingleIssue key={issue.id} issue={issue} />
                    )
                })
            }
        </div>
    )
}

export default IssueList
