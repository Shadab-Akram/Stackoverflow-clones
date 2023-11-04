import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList =[{
        id: 1,
        tagName: 'javascript',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations"
    },{
        id: 2,
        tagName: 'python',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations" 
    },{
        id: 3,
        tagName: 'c#',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations" 
    },{
        id: 4,
        tagName: 'java',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations" 
    },{
        id: 5,
        tagName: 'php',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations" 
    },{
        id: 6,
        tagName: 'html',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations" 
    },{
        id: 7,
        tagName: 'android',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations" 
    },{
        id: 8,
        tagName: 'css',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations" 
    },{
        id: 9,
        tagName: 'React js',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations" 
    },{
        id: 10,
        tagName: 'node.js',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations" 
    }]

  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categories your question with other, similar question.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag) => (
                        <TagsList tag={tag} key={tagsList.id} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags