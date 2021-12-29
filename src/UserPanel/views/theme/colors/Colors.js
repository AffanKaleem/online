import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

const ThemeView = () => {
  const [color, setColor] = useState('rgb(25, 30, 5)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])
  return (
    <table className="table w-100" ref={ref}>
      hello
    </table>
  )
}
const Colors = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h3>Theme colorsss</h3>
        </CCardHeader>
        <CCardBody>
          <h6>Brand Primary Color</h6>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
