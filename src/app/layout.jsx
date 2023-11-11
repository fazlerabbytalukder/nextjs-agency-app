import SideNavbar from '@/components/SideNavbar';
import './globals.css'
import SideFooter from '@/components/SideFooter';
import NextTopLoader from 'nextjs-toploader';

export async function generateMetadata(){
  //SEO data fetch
  return{
      title:"Home"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader color="#2669669" height={3} speed={200} />
      <SideNavbar/>
      {children}
      <SideFooter/>
      </body>
    </html>
  )
}
