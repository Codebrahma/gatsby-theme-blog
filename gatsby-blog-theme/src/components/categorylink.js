import {Link} from 'gatsby'
import styled from '@emotion/styled'
import {css} from 'bricks'

export default styled(Link)(
  css({
    bg: 'tint',
    color: 'black.1',
    fontSize:'0',
    px:'6px',
    py:'2px',
    display:'inline-block',
    borderRadius: '6px',
    border: '1px solid black',
    textDecoration: 'none',
    '&:hover': {
      bg:'black.1',
      color:'tint',
    },
    ':visited':{
      bg:'tint',
      color:'black.1',
      '&:hover': {
        bg:'black.1',
        color:'tint',
      },
    }
})
)
