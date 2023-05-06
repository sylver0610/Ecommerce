import React, { Component } from 'react'
import iconSearch from '../../assets/icons/search.png'
import { Input } from 'antd'
export default class SearchInput extends Component {
  render() {
    // const {onPlick,children} = this.props
    return (
      <div className='search-input-wrap relative flex items-center rounded-lg border border-solid border-tikiGray'>
        <img src={iconSearch} alt='search-icon' className='mx-0 my-0 ml-5 h-5 w-5' />
        <input
          type='text'
          placeholder='Search something'
          className='flex-1 rounded-lg border-0 px-2 py-0 text-sm leading-extra outline-none  focus:!border-e-0 focus:!border-white focus:!shadow-white focus:!outline-none'
        />
        <button
          type='button'
          className='relative flex h-9 w-24 cursor-pointer items-center justify-center  border-0 bg-transparent p-1 text-base font-normal leading-extra text-blue-500 before:absolute before:inset-1 before:left-0 before:top-1 before:block  before:border-l before:border-solid '
        >
          Tìm kiếm
        </button>
      </div>
    )
  }
}
