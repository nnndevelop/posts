import React from 'react'
import MySelect from './UI/select/MySelect'


const FilteredAndSearch = ({filter, setFilter }) => {
  return (
    <div className='d-flex flex-row-reverse my-2 justify-content-between'>
    <MySelect 
    value={filter.sort}
    onChange={selected => setFilter({...filter, sort:selected})}
    defaultValue={'Sorted by'}
    options ={[
       {value: 'title', name:' Title'},
      {value: 'body', name: 'Body'},

    ]}

    />
    <input 
    placeholder='Search...'
    className='form-control'
    value={filter.query}
    onChange={e => setFilter({...filter, query: e.target.value})}
    />
  </div>
  )
}

export default FilteredAndSearch