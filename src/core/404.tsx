import Splash from './Splash'
import { Helmet } from 'react-helmet'

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Page Not Found - MasterBOHMID</title>
        <meta
          name="description"
          content="Sorry, the page you are looking for is not available."
        />
        <meta http-equiv="status" content="404" />
      </Helmet>
      <div className="h-screen absolute z-20">
        <Splash label="NOT FOUND." description="404" fixed />
      </div>
    </div>
  )
}
