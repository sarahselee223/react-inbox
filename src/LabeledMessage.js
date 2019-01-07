import React from 'react';

function LabeledMessage(props){
    if(props.message.labels.length===0) return (<div></div>)
    if(props.message.labels.includes("dev")) return (<><span className="label label-warning">dev</span></>)
    if(props.message.labels.includes("gschool")) return  (<><span className="label label-warning">gschool</span></>)
    return (
        <>
            <span className="label label-warning">dev</span>
            <span className="label label-warning">gschool</span>
        </>
    )
}

export default LabeledMessage