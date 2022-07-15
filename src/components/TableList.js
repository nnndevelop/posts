import React from 'react'
import Tbody from './Tbody'
import { TransitionGroup } from 'react-transition-group'
import {CSSTransition} from 'react-transition-group';

const TableList = ({posts, title, remove}) => {
  if(!posts.length) {
    return (
      <h6 className="text-center">Not found</h6>
    )
  }
  return (
      <>
    <h5 className='text text-center font-bold text-2xl'>{title}</h5>
            <TransitionGroup className='overflow-hidden'>
              
              {posts.map((post, index) => (
                <CSSTransition
                key={post.id}
                timeout={500}
                classNames="item"
                >
                <Tbody number={index +1 } remove={remove} post={post} />
                </CSSTransition>
                ))}

            </TransitionGroup>
                


        </>
  )
}

export default TableList