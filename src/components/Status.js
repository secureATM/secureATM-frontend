const Status = ({ statustxt, color }) => {
    return (
        <div>
            <status
                style={{backgroundColor: color}} className='status'>{statustxt}
            </status>
        </div>
    )
}

export default Status
