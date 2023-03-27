import React from 'react'
// union prop type
type PropsType={
    status:'loading' | 'success' | 'error'
}
const DataFetch = ({status}:PropsType) => {
    if(status==='loading'){
        return <h2>Loading....</h2>

    }else if(status==='success'){
        return <h2>data fetch successfully</h2>
    }
  return (
    <div>
        <h2>something went wrong in data fetching</h2>
      
    </div>
  )
}

export default DataFetch
