import React from "react"


export type Pages = 'Main' | 'Register' | 'Logging'

function getPageComponent(currentPage: Pages): React.Component {
  if (currentPage == 'Main') {
    return
  }
}
