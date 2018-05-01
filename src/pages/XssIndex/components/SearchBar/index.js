import React from 'react'
import PropTypes from 'prop-types'

import './style.less'

const SearchBar = ({ onSearch }) => (
                    <div className="search-wrap">
                        <input 
                            type="text"
                            onKeyDown={onSearch}
                            />    
                        <div className="close">
                            <span className="front"></span>
                            <span className="back"></span>
                        </div> 
                    </div>)

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchBar