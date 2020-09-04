// eslint-disable
import React, { useState, useEffect } from 'react'

const styles = {
    wrapper: {
        'width': '768px',
        'margin': '0 auto',
        'paddingTop': '70px',
    },

    image: {
        'width': '100%',
        'height': 'auto'
    }
}

const RotatableImage = () => {
    const [state, setState] = useState({
        dragging: false,
        imageIndex: 0,
        dragStartIndex: 0
    })

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    const updateImageIndex = currentPosition => {

    }

    const handleMouseMove = (event) => {
        if (state.dragging) {
            updateImageIndex(event.screenX)
        }
    }

    const handleMouseUp = () => {
        setState(prevState => ({ ...prevState, dragging: false }))
    }

    const handleMouseDown = (event) => {
        event.persist()
        setState(prevState => ({
            ...prevState,
            dragging: true,
            dragStart: event.screenX,
            dragStartIndex: prevState.imageIndex
        }))
    }

    const image = require(`./assets/images/panorama-${state.imageIndex + 1}.jpg`)

    return (
        <div style={styles.wrapper} onMouseDown={handleMouseDown}>
            <img style={styles.image} src={image} alt='panorama' />
        </div>
    )
}

export default RotatableImage
// eslint-enable