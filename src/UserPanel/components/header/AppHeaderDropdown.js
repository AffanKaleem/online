import React from 'react'
import { CButton, CDropdown } from '@coreui/react'
import { cilAccountLogout } from '@coreui/icons'

import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CButton>
        <CIcon icon={cilAccountLogout} customClassName="nav-icon" />
        Logout
      </CButton>
    </CDropdown>
  )
}

export default AppHeaderDropdown
